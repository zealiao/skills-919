import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../catalog/', import.meta.url));
const required = [
  '# ', '**分类**：', '**简要用途**：', '**核心功能**：', '**适用场景**：',
  '**来源平台**：', '**来源链接**：https://', '**原作者 / 原始仓库**：',
  '**原始链接**：https://', '**热度 / 评价快照**：', '**采集日期**：',
  '**安装方式**：', '**许可证**：', '**人工核验**：', '**风险 / 依赖备注**：',
  '## 收录说明'
];

const groups = await readdir(root, { withFileTypes: true });
const files = [];
for (const group of groups.filter((entry) => entry.isDirectory())) {
  for (const entry of await readdir(join(root, group.name), { withFileTypes: true })) {
    if (entry.isFile() && entry.name.endsWith('.md')) files.push(join(root, group.name, entry.name));
  }
}

const failures = [];
for (const file of files) {
  const body = await readFile(file, 'utf8');
  const missing = required.filter((field) => !body.includes(field));
  if (missing.length) failures.push(`${file.replace(root, 'catalog/')}: ${missing.join(', ')}`);
  if (body.includes('许可证**：未核验') && !body.includes('不复制原始文件')) {
    failures.push(`${file.replace(root, 'catalog/')}: 未核验许可证的条目必须声明不复制原始文件`);
  }
  const sourceUrl = body.match(/^[-*] \*\*来源链接\*\*：(https:\/\/\S+)$/m)?.[1];
  if (!sourceUrl || !isSpecificSkillPage(sourceUrl)) {
    failures.push(`${file.replace(root, 'catalog/')}: 来源链接必须直达具体 Skill 详情页，不能是首页、分类或搜索页`);
  }
}

if (files.length !== 100) failures.push(`应有 100 个 Skill 条目，实际为 ${files.length} 个`);
if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log(`Catalog check passed: ${files.length} entries in ${groups.filter((entry) => entry.isDirectory()).length} categories.`);

function isSpecificSkillPage(url) {
  try {
    const parsed = new URL(url);
    const path = parsed.pathname.replace(/\/$/, '');
    if (!path || path === '/') return false;
    if (/^\/(?:search|skills|topics|categories|about|docs)$/i.test(path)) return false;
    return true;
  } catch {
    return false;
  }
}

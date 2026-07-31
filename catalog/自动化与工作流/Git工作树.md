# Git 工作树（using-git-worktrees）

- **分类**：自动化与工作流
- **简要用途**：用 Git worktree 在同一仓库并行处理独立分支，减少切换干扰。
- **核心功能**：
  - 建立、使用和清理相互隔离的工作目录。
  - 帮助把功能、修复和审查任务并行化。
- **适用场景**：同时处理多项开发任务、修复紧急问题、分支审查和多 Agent 协作。
- **来源平台**：Skills.sh
- **来源链接**：https://www.skills.sh/obra/superpowers/using-git-worktrees
- **原作者 / 原始仓库**：Obra / obra/superpowers
- **原始链接**：https://github.com/obra/superpowers
- **热度 / 评价快照**：Skills.sh 全站榜在 2026-07-31 显示约 150.5K 次安装。
- **采集日期**：2026-07-31
- **安装方式**：`npx skills add https://github.com/obra/superpowers --skill using-git-worktrees`
- **许可证**：许可证待在原仓库逐项确认；本仓库不复制原始文件。
- **人工核验**：已核验榜单条目和来源仓库；未对用户仓库执行清理或切换。
- **风险 / 依赖备注**：误删 worktree 或混淆分支会造成工作丢失；清理前须确认未提交改动和工作树路径。

## 收录说明

它适合有版本控制经验的团队；简单任务不必为了并行而增加工作树复杂度。

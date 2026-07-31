# 子 Agent 驱动开发（subagent-driven-development）

- **分类**：自动化与工作流
- **简要用途**：把大型开发工作拆给受控的子 Agent 执行，并保留集成与验证职责。
- **核心功能**：
  - 将任务按边界拆分，定义输入、输出和验收方式。
  - 组织子任务结果汇总、冲突处理和最终验证。
- **适用场景**：多模块开发、并行调研、文档与代码协同处理和复杂重构。
- **来源平台**：Skills.sh
- **来源链接**：https://www.skills.sh/obra/superpowers/subagent-driven-development
- **原作者 / 原始仓库**：Obra / obra/superpowers
- **原始链接**：https://github.com/obra/superpowers
- **热度 / 评价快照**：Skills.sh 全站榜在 2026-07-31 显示约 162.4K 次安装；来源包合计约 781.9K。
- **采集日期**：2026-07-31
- **安装方式**：`npx skills add https://github.com/obra/superpowers --skill subagent-driven-development`
- **许可证**：许可证待在原仓库逐项确认；本仓库不复制原始文件。
- **人工核验**：已核验具体条目和仓库入口；未启动会修改外部系统的子 Agent。
- **风险 / 依赖备注**：并行 Agent 会放大权限和错误传播风险；任务必须最小授权，并统一审查合并结果。

## 收录说明

子 Agent 更适合边界清晰的并行任务；高耦合、不可逆或敏感操作不应盲目分发。

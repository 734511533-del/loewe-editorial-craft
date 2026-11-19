# LOEWE Editorial Craft

生成罗意威灵感的编辑拼贴风 HTML 演示稿。适用于不同主题、页数、自讲或自读用途，保留暖纸、深紫与红蓝强调的视觉风格。不是 LOEWE 官方工具。

## 使用

将此文件夹复制到支持 SKILL.md 的 agent 技能目录，保持文件结构。然后提出任务，例如：

> 用罗意威那套，把这份产品材料做成给新客户自读的 8 页方案。保留数据来源，输出离线 HTML。

> 用编辑拼贴风做一份中文培训演示，页数按内容决定，面向现场讲述。

> 修改现有 HTML 演示，加入本月数据，并保留上月数据做对比。

默认生成单文件 HTML，可本地打开，支持键盘、上下页按钮、目录跳页、补充详情、窄屏阅读和打印样式。目录和详情按内容需要使用。原生可编辑 PPTX 需要另用演示文稿工具制作并验证。

## 文件

- `SKILL.md`：任务判断、生成流程及完成要求。
- `references/DESIGN.md`：风格与构图选择。
- `references/text-discipline.md`：文字、数据与证据规则。
- `references/validation.md`：DOM 约定、自动与人工验收。
- `references/origin-story.md`：原有视觉拆解记录，来源未补全。
- `assets/sample-deck.html`：六页离线演示和可复制的运行底座，含明确标注的模拟数据。
- `scripts/check-deck.cjs`：Playwright 运行检查与逐页截图。

无需安装 Node.js 即可打开样张。自动检查需要 Node.js、Playwright 和 Chromium，具体命令见验收文档。自动检查不替代内容核对和视觉检查。没有附带原品牌图片、标识或字体文件。

## 许可说明

原仓库 README 标注 MIT，但尚未包含 LICENSE 文件。本次保留这一历史情况，未代替作者补写权利归属。品牌名称及第三方素材不因该标注获得授权。

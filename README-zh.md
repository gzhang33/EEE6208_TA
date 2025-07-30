# 克隆仓库

git clone https://github.com/GG918/EEE6208_equations.git
cd EEE6208_equations

# 复制HTML文件并重命名
cp /path/to/EEE6208_Equations_Simple.html index.html

# 创建README文件
cat > README.md << 'EOF'
# EEE6208 Equations Study Guide

这是一个EEE6208课程的核心公式学习指南，提供了清晰的公式展示和说明。

## 功能特点

- 📚 **完整内容覆盖**: 涵盖MOSFET基础、数字电路、放大器分析、频率响应和噪声分析等5个核心主题
- 🧮 **数学公式渲染**: 使用KaTeX库实现高质量的LaTeX数学公式渲染
- 🔍 **智能搜索**: 支持对公式和概念进行快速搜索
- 🎨 **现代界面**: 采用响应式设计，支持明暗主题切换
- 📱 **移动适配**: 完美适配各种屏幕尺寸
- 🧪 **实用工具**: 包含动态功耗计算器等实用功能

## 在线访问

[GitHub Pages](https://gg918.github.io/EEE6208_equations/)

## 使用方法

1. 在浏览器中打开 `index.html` 文件
2. 使用左侧导航栏切换不同章节
3. 使用搜索功能快速定位内容
4. 点击右下角按钮切换明暗主题

## 技术实现

- 纯HTML/CSS/JavaScript
- Tailwind CSS样式框架
- KaTeX数学公式渲染
- 响应式设计

---

*EEE6208课程学习资料*
EOF

# 添加到Git
git add .
git commit -m "Add EEE6208 equations study guide"
git push origin main
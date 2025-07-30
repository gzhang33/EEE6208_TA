# 克隆仓库
git clone https://github.com/GG918/EEE6208_equations.git
cd EEE6208_equations

# 复制HTML文件并重命名
cp /path/to/EEE6208_Equations_Simple.html index.html

# 创建README文件
cat > README.md << 'EOF'
# EEE6208 Equations Study Guide

[中文说明 (Chinese Version)](README-zh.md)

This is a core formula study guide for the EEE6208 course, providing clear formula displays and explanations.

## Features

- 📚 **Comprehensive Coverage**: Covers 5 core topics including MOSFET basics, digital circuits, amplifier analysis, frequency response, and noise analysis
- 🧮 **Math Formula Rendering**: Uses KaTeX for high-quality LaTeX math formula rendering
- 🔍 **Intelligent Search**: Supports fast search for formulas and concepts
- 🎨 **Modern Interface**: Responsive design with light/dark theme toggle
- 📱 **Mobile Friendly**: Perfectly adapts to all screen sizes
- 🧪 **Practical Tools**: Includes dynamic power calculator and other practical features

## Online Access

[GitHub Pages](https://gg918.github.io/EEE6208_equations/)

## Usage

1. Open the `index.html` file in your browser
2. Use the left navigation bar to switch chapters
3. Use the search function to quickly locate content
4. Click the button in the lower right corner to toggle light/dark theme

## Technical Implementation

- Pure HTML/CSS/JavaScript
- Tailwind CSS framework
- KaTeX math formula rendering
- Responsive design

---

*EEE6208 Course Study Materials*
EOF

# 添加到Git
git add .
git commit -m "Add EEE6208 equations study guide"
git push origin main

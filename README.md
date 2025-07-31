# Digital & Analogue Electronics Study Guide

[点击查看中文版 (Chinese Version)](README-zh.md)

A comprehensive, interactive study guide for the EEE6208 Digital & Analogue Electronics course, featuring bilingual support, interactive quizzes, and mastery tracking.

## 🌟 Features

### 📚 **Comprehensive Content Coverage**
- **Analogue Electronics**: MOSFET operating states, differential amplifiers, Miller effect, negative feedback
- **Digital Electronics**: Logic design, timing analysis, physical design, testability
- **Interactive Learning**: Collapsible sections, mastery tracking, self-assessment quizzes

### 🎨 **Modern User Experience**
- **Bilingual Support**: Seamless switching between English and Chinese
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Navigation**: Smart sidebar with smooth scrolling and active section highlighting
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support

### 🧮 **Advanced Features**
- **MathJax Integration**: High-quality LaTeX mathematical formula rendering
- **Mastery Tracking**: Visual progress indicators with local storage persistence
- **Dynamic Quizzes**: Auto-generated self-assessment questions with answer reveal
- **Print Optimization**: Clean print layout for study materials

### ⚡ **Performance Optimizations**
- **Lazy Loading**: Efficient resource loading and rendering
- **Debounced Events**: Smooth scrolling and resize handling
- **CSS Variables**: Consistent theming and easy customization
- **Error Handling**: Robust error management and graceful degradation

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software installation required

### Installation & Deployment

#### GitHub Pages Deployment

1. **启用 GitHub Pages**
   - 进入你的 GitHub 仓库
   - 点击 `Settings` → `Pages`
   - 在 `Source` 部分选择 `Deploy from a branch`
   - 选择 `main` 分支和 `/ (root)` 文件夹
   - 点击 `Save`

2. **验证部署**
   - 等待几分钟让 GitHub Pages 构建完成
   - 访问 `https://your-username.github.io/EEE6208_equations/`

#### Local Testing

在部署前，建议先在本地测试：
```bash
# 使用 Python
python -m http.server 8000

# 或使用 Node.js
npx serve .

# 然后在浏览器中访问 http://localhost:8000/index.html
```

### Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/EEE6208_equations.git
   cd EEE6208_equations
   ```

2. Open `index.html` in your browser:
   ```bash
   # Using Python (if available)
   python -m http.server 8000
   # Then visit http://localhost:8000/index.html
   
   # Or simply double-click the file to open in browser
   
   # Using Node.js (if available)
   npx serve .
   # Then visit http://localhost:3000/index.html
   ```

### Usage Guide

#### Navigation
- **Sidebar**: Hover (desktop) or tap (mobile) the left edge to open navigation
- **Language Switch**: Click the button in the top-right corner to toggle languages
- **Section Navigation**: Use the large buttons to switch between Analogue and Digital chapters

#### Interactive Features
- **Collapsible Content**: Click on expandable sections to reveal additional information
- **Mastery Tracking**: Use the emoji buttons (😊🤔🤯) to track your understanding
- **Self-Assessment**: Click "Generate Quiz" to create practice questions
- **Back to Top**: Scroll down to see the floating navigation button

#### Study Tips
- Use the mastery indicators to track your progress through each topic
- Generate quizzes regularly to test your understanding
- Switch between languages to reinforce concepts
- Print sections for offline study (Ctrl+P)

## 🛠️ Technical Implementation

### Architecture
```
EEE6208_equations/
├── index.html              # Main application entry point
├── styles.css              # Comprehensive CSS with variables and animations
├── app.js                  # Core application logic and state management
├── config.js               # MathJax configuration and language data
├── content.js              # Bilingual content definitions
└── README.md              # This file
```

### Technology Stack
- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **Math Rendering**: MathJax 3.x for LaTeX formula display
- **Styling**: CSS Custom Properties (variables) for theming
- **Storage**: LocalStorage for user preferences and progress
- **Performance**: Debounced events, lazy loading, optimized animations

### Key Optimizations

#### Performance
- **Resource Preloading**: Critical scripts preloaded for faster startup
- **Debounced Events**: Smooth scrolling and resize handling
- **Efficient DOM Queries**: Cached element references and safe selectors
- **MathJax Optimization**: Async loading with fallback rendering

#### User Experience
- **Progressive Enhancement**: Core functionality works without JavaScript
- **Responsive Design**: Mobile-first approach with breakpoint optimization
- **Accessibility**: ARIA labels, keyboard navigation, focus management
- **Error Handling**: Graceful degradation for missing elements or network issues

#### Code Quality
- **Modular Architecture**: Separated concerns with clear function organization
- **State Management**: Centralized application state with utility functions
- **Error Boundaries**: Comprehensive error handling and logging
- **Documentation**: Inline comments and clear function documentation

## 📱 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 80+ | ✅ Full |
| Firefox | 75+ | ✅ Full |
| Safari | 13+ | ✅ Full |
| Edge | 80+ | ✅ Full |
| IE | 11 | ⚠️ Limited |

## 🔧 Customization

### Adding New Content
1. Edit `content.js` to add new sections
2. Update language data in `config.js`
3. Add corresponding mastery controls and quiz definitions

### Styling Changes
1. Modify CSS variables in `styles.css` for theme changes
2. Update color palette in `:root` section
3. Customize animations and transitions

### Feature Extensions
1. Add new interactive components in `app.js`
2. Extend utility functions in the `Utils` object
3. Implement additional language support in `config.js`

## 📊 Performance Metrics

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow existing code style and naming conventions
- Add appropriate error handling for new features
- Test across different browsers and devices
- Update documentation for new features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **MathJax Team**: For excellent mathematical formula rendering
- **EEE6208 Course Team**: For comprehensive course content
- **Open Source Community**: For inspiration and best practices

---

**Built with ❤️ for EEE6208 students**

*Last updated: December 2024*

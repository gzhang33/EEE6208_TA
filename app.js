/**
 * Digital & Analogue Electronics Study Guide
 * Main Application JavaScript
 * 
 * Features:
 * - Bilingual support (English/Chinese)
 * - Interactive navigation
 * - Quiz generation
 * - Mastery tracking
 * - Responsive design
 */

// ===== Global State Management =====
const AppState = {
    currentLanguage: 'en',
    isInitialized: false,
    mathJaxLoaded: false
};

// ===== Utility Functions =====
const Utils = {
    /**
     * Debounce function to limit execution frequency
     */
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    /**
     * Safe DOM element selection
     */
    getElement(selector) {
        const element = document.querySelector(selector);
        if (!element) {
            console.warn(`Element not found: ${selector}`);
        }
        return element;
    },

    /**
     * Add event listener with error handling
     */
    addEventListener(element, event, handler) {
        if (element && typeof handler === 'function') {
            try {
                element.addEventListener(event, handler);
                return true;
            } catch (error) {
                console.error('Error adding event listener:', error);
                return false;
            }
        } else {
            console.warn('Invalid element or handler for addEventListener');
            return false;
        }
    },

    /**
     * Show loading state
     */
    showLoading(element) {
        if (element) {
            element.classList.add('loading');
        }
    },

    /**
     * Hide loading state
     */
    hideLoading(element) {
        if (element) {
            element.classList.remove('loading');
        }
    }
};

// ===== Core Application Functions =====

/**
 * Initialize collapsible content sections
 */
function initializeCollapsibles() {
    const collapsibles = document.querySelectorAll('.collapsible');
    
    collapsibles.forEach(item => {
        Utils.addEventListener(item, 'click', function() {
            const content = this.nextElementSibling;
            const icon = this.querySelector('.collapsible-icon');
            
            if (!content || !icon) return;
            
            const isExpanded = content.style.display === "block";
            
            if (isExpanded) {
                content.style.display = "none";
                icon.textContent = "[+]";
                icon.style.transform = "rotate(0deg)";
            } else {
                content.style.display = "block";
                icon.textContent = "[-]";
                icon.style.transform = "rotate(90deg)";
            }
        });
    });
}

/**
 * Initialize mastery tracking controls
 */
function initializeMasteryControls() {
    const controls = document.querySelectorAll('.mastery-controls');
    
    controls.forEach(control => {
        const id = control.dataset.id;
        const icons = control.querySelectorAll('.mastery-icon');
        
        if (!id || icons.length === 0) return;
        
        // Load saved state
        const savedState = localStorage.getItem(`mastery-${id}`);
        if (savedState) {
            const savedIcon = control.querySelector(`[data-level='${savedState}']`);
            if (savedIcon) {
                savedIcon.classList.add('selected');
            }
        }
        
        // Add click handlers
        icons.forEach(icon => {
            Utils.addEventListener(icon, 'click', function(e) {
                e.stopPropagation();
                const level = this.dataset.level;
                
                // Clear all selections
                icons.forEach(i => i.classList.remove('selected'));
                
                // Toggle selection
                if (localStorage.getItem(`mastery-${id}`) === level) {
                    localStorage.removeItem(`mastery-${id}`);
                } else {
                    this.classList.add('selected');
                    localStorage.setItem(`mastery-${id}`, level);
                }
            });
        });
    });
}

/**
 * Initialize quiz functionality
 */
function initializeQuizButtons() {
    const quizButtons = document.querySelectorAll('.quiz-button');
    
    quizButtons.forEach(button => {
        // Initialize button state and text
        button.dataset.state = 'generate';
        button.textContent = getCurrentLanguageData().generateQuiz;
        
        // Remove existing event listeners to prevent duplicates
        button.removeEventListener('click', handleQuizButtonClick);
        
        // Add new event listener
        const success = Utils.addEventListener(button, 'click', handleQuizButtonClick);
        
        // Also add a direct onclick handler as backup
        if (!success) {
            button.onclick = function() {
                const section = this.closest('.quiz-section');
                const quizContainer = section.querySelector('.quiz-container');
                
                if (!section || !quizContainer) {
                    console.warn('Quiz section or container not found');
                    return;
                }
                
                console.log('Direct onclick handler triggered for quiz button');
                
                if (this.dataset.state === 'generate') {
                    generateQuizContent(section, this);
                    this.textContent = getCurrentLanguageData().closeQuiz;
                    this.dataset.state = 'close';
                } else {
                    quizContainer.style.display = 'none';
                    quizContainer.innerHTML = '';
                    this.textContent = getCurrentLanguageData().generateQuiz;
                    this.dataset.state = 'generate';
                }
            };
            console.log('Direct onclick handler added for quiz button');
        }
    });
}

/**
 * Handle quiz button click
 */
function handleQuizButtonClick() {
    const section = this.closest('.quiz-section');
    const quizContainer = section.querySelector('.quiz-container');
    
    if (!section || !quizContainer) {
        console.warn('Quiz section or container not found');
        return;
    }
    
    console.log('Quiz button clicked, current state:', this.dataset.state);
    
    if (this.dataset.state === 'generate') {
        generateQuizContent(section, this);
        this.textContent = getCurrentLanguageData().closeQuiz;
        this.dataset.state = 'close';
    } else {
        quizContainer.style.display = 'none';
        quizContainer.innerHTML = '';
        this.textContent = getCurrentLanguageData().generateQuiz;
        this.dataset.state = 'generate';
    }
}

/**
 * Generate quiz content for a section
 */
function generateQuizContent(section, button) {
    const quizContainer = section.querySelector('.quiz-container');
    const terms = section.querySelectorAll('.quiz-definition');
    
    if (!quizContainer) return;
    
    if (terms.length === 0) {
        const lang = getCurrentLanguageData();
        quizContainer.innerHTML = `
            <button class="quiz-refresh-btn" title="${lang.refreshQuiz}">↻</button>
            <h4>${lang.chapterSelfTest}</h4>
            <p>${lang.noQuizAvailable}</p>
        `;
        quizContainer.style.display = 'block';
        return;
    }

    const shuffledTerms = Array.from(terms).sort(() => 0.5 - Math.random());
    const selectedTerms = shuffledTerms.slice(0, Math.min(shuffledTerms.length, 5));
    const lang = getCurrentLanguageData();

    let quizHtml = `
        <button class="quiz-refresh-btn" title="${lang.refreshQuiz}">↻</button>
        <h4>${lang.chapterSelfTest}</h4>
    `;
    
    selectedTerms.forEach((term, index) => {
        const question = term.dataset.term || '请解释...';
        const answer = term.innerHTML;
        quizHtml += `
            <div class="quiz-item">
                <p>${index + 1}. ${question}
                    <button class="show-answer-btn">${lang.showAnswer}</button>
                </p>
                <div class="quiz-answer">${answer}</div>
            </div>
        `;
    });
    
    quizContainer.innerHTML = quizHtml;
    quizContainer.style.display = 'block';

    // Set up show answer button events
    quizContainer.querySelectorAll('.show-answer-btn').forEach(btn => {
        Utils.addEventListener(btn, 'click', function() {
            const answerDiv = this.parentElement.nextElementSibling;
            if (answerDiv) {
                answerDiv.style.display = 'block';
                this.style.display = 'none';
            }
        });
    });

    // Set up refresh button event
    const refreshBtn = quizContainer.querySelector('.quiz-refresh-btn');
    if (refreshBtn) {
        Utils.addEventListener(refreshBtn, 'click', function() {
            generateQuizContent(section, button);
        });
    }
}

/**
 * Get current language data
 */
function getCurrentLanguageData() {
    return languageData[AppState.currentLanguage] || languageData.en;
}

/**
 * Switch between languages
 */
function switchLanguage() {
    AppState.currentLanguage = AppState.currentLanguage === 'en' ? 'zh' : 'en';
    updateLanguage();
}

/**
 * Update language display and content
 */
function updateLanguage() {
    const lang = getCurrentLanguageData();
    
    // Update page metadata
    document.title = AppState.currentLanguage === 'en' ? 
        'Digital & Analogue Electronics Study Guide' : 
        '数字与模拟电子学学习指南';
    document.documentElement.lang = AppState.currentLanguage === 'en' ? 'en' : 'zh-CN';
    
    // Update UI elements
    const languageBtn = Utils.getElement('#language-switch-btn .language-text');
    const sidebarHeader = Utils.getElement('#sidebar-header h2');
    const mainTitle = Utils.getElement('#main-title');
    
    if (languageBtn) languageBtn.textContent = lang.languageBtn;
    if (sidebarHeader) sidebarHeader.textContent = lang.sidebarHeader;
    if (mainTitle) mainTitle.innerHTML = lang.mainTitle;
    
    // Update content
    updateContent();
    
    // Regenerate navigation
    generateTableOfContents();
    
    // Re-render math formulas
    renderMathFormulas();
}

/**
 * Update page content based on current language
 */
function updateContent() {
    const lang = getCurrentLanguageData();
    const contentContainer = Utils.getElement('#content-container');
    
    if (!contentContainer) {
        console.warn('Content container not found');
        return;
    }
    
    console.log('Updating content for language:', AppState.currentLanguage);
    
    // Select content based on current language
    const contentToShow = AppState.currentLanguage === 'en' ? notesContent : notesContentZh;
    contentContainer.innerHTML = contentToShow;
    
    // Update navigation buttons
    const goToDigitalBtn = Utils.getElement('#go-to-digital-btn');
    const goToAnalogueBtn = Utils.getElement('#go-to-analogue-btn');
    
    if (goToDigitalBtn) goToDigitalBtn.textContent = lang.goToDigital;
    if (goToAnalogueBtn) goToAnalogueBtn.textContent = lang.goToAnalogue;
    
    console.log('Content updated, re-initializing features...');
    
    // Re-initialize interactive features
    initializeCollapsibles();
    initializeMasteryControls();
    initializeQuizButtons();
    initializeSectionNavigation(); // 重新初始化章节导航按钮
    
    // Regenerate table of contents after content update
    setTimeout(() => {
        console.log('Regenerating table of contents...');
        generateTableOfContents();
        
        // Double-check that navigation links are properly set up
        setTimeout(() => {
            const navLinks = document.querySelectorAll('#table-of-contents a[data-section]');
            console.log('Final navigation links count:', navLinks.length);
            
            // Test if event listeners are working
            navLinks.forEach(link => {
                const sectionId = link.getAttribute('data-section');
                console.log('Navigation link ready:', sectionId);
            });
        }, 100);
    }, 100);
}

/**
 * Generate table of contents
 */
function generateTableOfContents() {
    const tocContainer = Utils.getElement('#table-of-contents');
    const mainContent = Utils.getElement('#main-content-area');
    
    if (!tocContainer || !mainContent) {
        console.warn('TOC container or main content not found');
        return;
    }
    
    console.log('Generating table of contents...');
    console.log('Current language:', AppState.currentLanguage);
    
    const topLevelSections = mainContent.querySelectorAll('section[id$="-electronics"]');
    console.log('Top level sections found:', topLevelSections.length);
    
    let tocHtml = '<ul>';

    topLevelSections.forEach(section => {
        const h2 = section.querySelector('h2');
        if (!h2) return;

        const h2Id = section.id;
        const h2Title = h2.textContent;
        console.log('Processing section:', h2Id, 'with title:', h2Title);
        
        tocHtml += `<li><a href="#${h2Id}" data-section="${h2Id}">${h2Title}</a>`;

        const subSections = section.querySelectorAll('section');
        if (subSections.length > 0) {
            tocHtml += '<ul class="sub-menu">';
            subSections.forEach(subSection => {
                const h3 = subSection.querySelector('h3');
                if (h3) {
                    const h3Id = subSection.id;
                    // Fix: Get text content properly, excluding mastery-controls
                    const masteryControls = h3.querySelector('.mastery-controls');
                    let h3Title;
                    if (masteryControls) {
                        // Clone the h3 and remove mastery-controls to get clean text
                        const h3Clone = h3.cloneNode(true);
                        const masteryControlsClone = h3Clone.querySelector('.mastery-controls');
                        if (masteryControlsClone) {
                            masteryControlsClone.remove();
                        }
                        h3Title = h3Clone.textContent.trim();
                    } else {
                        h3Title = h3.textContent.trim();
                    }
                    console.log('Processing subsection:', h3Id, 'with title:', h3Title);
                    tocHtml += `<li><a href="#${h3Id}" data-section="${h3Id}">${h3Title}</a></li>`;
                }
            });
            tocHtml += '</ul>';
        }
        tocHtml += '</li>';
    });

    tocHtml += '</ul>';
    tocContainer.innerHTML = tocHtml;
    
    // Add click event listeners to navigation links
    const navLinks = tocContainer.querySelectorAll('a[data-section]');
    console.log('Navigation links found:', navLinks.length);
    
    navLinks.forEach(link => {
        const sectionId = link.getAttribute('data-section');
        console.log('Setting up navigation for:', sectionId);
        
        // Remove existing listeners to prevent duplicates
        link.removeEventListener('click', handleNavClick);
        
        // Add new event listener
        const success = Utils.addEventListener(link, 'click', handleNavClick);
        console.log('Event listener for', sectionId, ':', success ? 'added' : 'failed');
        
        // Also add a direct onclick handler as backup
        if (!success) {
            link.onclick = function(e) {
                e.preventDefault();
                const sectionId = this.getAttribute('data-section');
                console.log('Direct onclick handler triggered for:', sectionId);
                navigateToSection(sectionId);
            };
            console.log('Direct onclick handler added for:', sectionId);
        }
    });
}

/**
 * Handle navigation link click
 */
function handleNavClick(e) {
    e.preventDefault();
    const sectionId = this.getAttribute('data-section');
    console.log('Navigation clicked:', sectionId);
    console.log('Current language:', AppState.currentLanguage);
    navigateToSection(sectionId);
}

/**
 * Navigate to specific section
 */
function navigateToSection(sectionId) {
    console.log('Navigating to section:', sectionId);
    
    // Determine which chapter the section belongs to
    if (sectionId === 'analogue-electronics' || 
        sectionId.includes('mosfet') || 
        sectionId.includes('differential') || 
        sectionId.includes('miller') || 
        sectionId.includes('negative-feedback')) {
        console.log('Switching to analogue chapter');
        const analogueContainer = Utils.getElement('#analogue-container');
        if (analogueContainer && !analogueContainer.classList.contains('active')) {
            showAnalogue();
        }
    } else if (sectionId === 'digital-electronics' || 
               sectionId.includes('logic') || 
               sectionId.includes('physical') || 
               sectionId.includes('testability')) {
        console.log('Switching to digital chapter');
        const digitalContainer = Utils.getElement('#digital-container');
        if (digitalContainer && !digitalContainer.classList.contains('active')) {
            showDigital();
        }
    }
    
    // Scroll to section after a short delay to allow chapter switch
    setTimeout(() => {
        const targetElement = Utils.getElement(`#${sectionId}`);
        if (targetElement) {
            console.log('Found target element, scrolling to:', sectionId);
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            updateActiveNavigation(sectionId);
        } else {
            console.warn('Target section not found:', sectionId);
            // Try to find the element in the current active container
            const activeContainer = document.querySelector('.section-container.active');
            if (activeContainer) {
                const elementInContainer = activeContainer.querySelector(`#${sectionId}`);
                if (elementInContainer) {
                    console.log('Found element in active container, scrolling to:', sectionId);
                    elementInContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    updateActiveNavigation(sectionId);
                } else {
                    console.error('Element not found in active container either:', sectionId);
                }
            }
        }
    }, 200);
}

/**
 * Show digital electronics chapter
 */
function showDigital() {
    console.log('showDigital function called');
    const analogueContainer = Utils.getElement('#analogue-container');
    const digitalContainer = Utils.getElement('#digital-container');
    
    console.log('Found analogueContainer:', !!analogueContainer);
    console.log('Found digitalContainer:', !!digitalContainer);
    
    if (analogueContainer && digitalContainer) {
        analogueContainer.classList.remove('active');
        digitalContainer.classList.add('active');
        window.scrollTo(0, 0);
        updateActiveNavigation('digital-electronics');
        console.log('Successfully switched to digital chapter');
    } else {
        console.error('Failed to find containers for chapter switch');
    }
}

/**
 * Show analogue electronics chapter
 */
function showAnalogue() {
    console.log('showAnalogue function called');
    const analogueContainer = Utils.getElement('#analogue-container');
    const digitalContainer = Utils.getElement('#digital-container');
    
    console.log('Found analogueContainer:', !!analogueContainer);
    console.log('Found digitalContainer:', !!digitalContainer);
    
    if (analogueContainer && digitalContainer) {
        digitalContainer.classList.remove('active');
        analogueContainer.classList.add('active');
        window.scrollTo(0, 0);
        updateActiveNavigation('analogue-electronics');
        console.log('Successfully switched to analogue chapter');
    } else {
        console.error('Failed to find containers for chapter switch');
    }
}

/**
 * Update active navigation highlighting
 */
function updateActiveNavigation(sectionId) {
    const navLinks = document.querySelectorAll('#table-of-contents a');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
        }
    });
}

/**
 * Initialize back to top button
 */
function initializeBackToTopButton() {
    const backToTopBtn = Utils.getElement('#back-to-top-btn');
    
    if (!backToTopBtn) return;
    
    Utils.addEventListener(backToTopBtn, 'click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Show/hide button based on scroll position
    const scrollHandler = Utils.debounce(() => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    }, 100);
    
    window.addEventListener('scroll', scrollHandler);
}

/**
 * Initialize active navigation highlighting
 */
function initializeActiveNavHighlighting() {
    const sections = document.querySelectorAll('main section[id]');
    const navLinks = document.querySelectorAll('#table-of-contents a');

    if (sections.length === 0 || navLinks.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { rootMargin: "-50% 0px -50% 0px" });

    sections.forEach(section => {
        observer.observe(section);
    });
}

/**
 * Initialize section navigation
 */
function initializeSectionNavigation() {
    console.log('Initializing section navigation...');
    
    const goToDigitalBtn = Utils.getElement('#go-to-digital-btn');
    const goToAnalogueBtn = Utils.getElement('#go-to-analogue-btn');
    
    console.log('Found goToDigitalBtn:', !!goToDigitalBtn);
    console.log('Found goToAnalogueBtn:', !!goToAnalogueBtn);
    
    if (goToDigitalBtn) {
        // 移除现有的事件监听器以防止重复
        goToDigitalBtn.removeEventListener('click', showDigital);
        const success = Utils.addEventListener(goToDigitalBtn, 'click', showDigital);
        console.log('Digital button event listener added:', success);
    }
    
    if (goToAnalogueBtn) {
        // 移除现有的事件监听器以防止重复
        goToAnalogueBtn.removeEventListener('click', showAnalogue);
        const success = Utils.addEventListener(goToAnalogueBtn, 'click', showAnalogue);
        console.log('Analogue button event listener added:', success);
    }
    
    console.log('Section navigation initialization completed');
}

/**
 * Initialize sidebar functionality
 */
function initializeSidebar() {
    const sidebar = Utils.getElement('#sidebar');
    const triggerStrip = Utils.getElement('#sidebar-trigger-strip');
    const mainContent = Utils.getElement('#main-content-area');

    if (!sidebar || !triggerStrip || !mainContent) return;

    // Mobile: click to open
    Utils.addEventListener(triggerStrip, 'click', () => {
        if (window.innerWidth <= 768) {
            sidebar.classList.add('open');
        }
    });

    // Desktop: hover to show
    Utils.addEventListener(triggerStrip, 'mouseenter', () => {
        if (window.innerWidth > 768) {
            sidebar.classList.add('open');
        }
    });

    // Desktop: hide when mouse leaves
    Utils.addEventListener(sidebar, 'mouseleave', () => {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('open');
        }
    });

    // Mobile: hide when clicking main content
    Utils.addEventListener(mainContent, 'click', () => {
        if (window.innerWidth <= 768 && sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
        }
    });

    // Add navigation link event listeners
    function setupSidebarNavigation() {
        const navLinks = sidebar.querySelectorAll('a[data-section]');
        navLinks.forEach(link => {
            // Remove existing listeners to prevent duplicates
            link.removeEventListener('click', handleNavClick);
            
            // Add new event listener
            const success = Utils.addEventListener(link, 'click', handleNavClick);
            
            // Also add a direct onclick handler as backup
            if (!success) {
                link.onclick = function(e) {
                    e.preventDefault();
                    const sectionId = this.getAttribute('data-section');
                    
                    // Mobile: hide sidebar after navigation
                    if (window.innerWidth <= 768) {
                        sidebar.classList.remove('open');
                    }
                    
                    navigateToSection(sectionId);
                };
            }
        });
    }

    function handleNavClick(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('data-section');
        
        // Mobile: hide sidebar after navigation
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('open');
        }
        
        navigateToSection(sectionId);
    }

    // Setup navigation when sidebar is initialized
    setupSidebarNavigation();
    
    // Re-setup navigation when content is updated
    const observer = new MutationObserver(() => {
        setupSidebarNavigation();
    });
    
    observer.observe(sidebar, { childList: true, subtree: true });
}

/**
 * Render MathJax formulas
 */
function renderMathFormulas() {
    if (!window.MathJax) return;
    
    try {
        if (window.MathJax.typesetClear) {
            window.MathJax.typesetClear();
        }
        
        setTimeout(() => {
            if (window.MathJax.typesetPromise) {
                window.MathJax.typesetPromise().then(() => {
                    console.log('MathJax rendering completed');
                }).catch((err) => {
                    console.error('MathJax rendering error:', err);
                    // Fallback to direct typeset
                    if (window.MathJax.typeset) {
                        window.MathJax.typeset();
                    }
                });
            } else if (window.MathJax.typeset) {
                window.MathJax.typeset();
            }
        }, 300);
    } catch (error) {
        console.error('MathJax processing error:', error);
    }
}

/**
 * Initialize MathJax
 */
function initializeMathJax() {
    if (window.MathJax) {
        try {
            if (window.MathJax.startup && window.MathJax.startup.promise) {
                window.MathJax.startup.promise.then(() => {
                    if (window.MathJax.typeset) {
                        window.MathJax.typeset();
                        console.log('MathJax initial rendering completed');
                        AppState.mathJaxLoaded = true;
                    }
                }).catch((err) => {
                    console.error('MathJax initialization error:', err);
                });
            } else {
                setTimeout(() => {
                    if (window.MathJax.typeset) {
                        window.MathJax.typeset();
                        console.log('MathJax delayed rendering completed');
                        AppState.mathJaxLoaded = true;
                    }
                }, 1500);
            }
        } catch (error) {
            console.error('MathJax initialization processing error:', error);
        }
    }
}

// ===== Application Initialization =====

/**
 * Initialize the application
 */
function initializeApp() {
    if (AppState.isInitialized) return;
    
    console.log('Initializing Digital & Analogue Electronics Study Guide...');
    
    // Initialize language switch
    const languageBtn = Utils.getElement('#language-switch-btn');
    if (languageBtn) {
        Utils.addEventListener(languageBtn, 'click', switchLanguage);
    }
    
    // Initialize all features
    updateContent();
    generateTableOfContents();
    initializeCollapsibles();
    initializeMasteryControls();
    initializeQuizButtons();
    initializeBackToTopButton();
    initializeActiveNavHighlighting();
    initializeSidebar();
    initializeSectionNavigation();
    
    // Initialize MathJax
    initializeMathJax();
    
    AppState.isInitialized = true;
    console.log('Application initialized successfully');
}

// ===== Event Listeners =====

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initializeApp);

// Handle window resize for responsive behavior
window.addEventListener('resize', Utils.debounce(() => {
    // Re-initialize sidebar behavior on resize
    const sidebar = Utils.getElement('#sidebar');
    if (sidebar && window.innerWidth > 768) {
        sidebar.classList.remove('open');
    }
}, 250));

// Export functions for global access
window.navigateToSection = navigateToSection;
window.showDigital = showDigital;
window.showAnalogue = showAnalogue; 
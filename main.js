// PathwayCompass - Main JavaScript
// Comprehensive interactive functionality with psychological design principles

class BYUPathwayApp {
    constructor() {
        this.searchData = this.initializeSearchData();
        this.init();
    }

    init() {
        this.setupTypingAnimation();
        this.setupScrollAnimations();
        this.setupTestimonialSlider();
        this.setupStatsCounter();
        this.setupSmoothScrolling();
        this.setupMobileMenuToggle();
        this.setupNavbarScroll();
        this.initializeFadeInObserver();
        this.setupAccessibilityFeatures();
        this.setupProgressTracking();
        this.setupOfflineSupport();
        this.setupJobsPage();
    }

    // Initialize comprehensive search data
    initializeSearchData() {
        return {
            'registration': {
                title: 'Registration Help',
                description: 'Step-by-step registration guidance and troubleshooting',
                keywords: ['register', 'application', 'enrollment', 'admission', 'sign up', 'join'],
                url: 'registration.html'
            },
            'setup': {
                title: 'Setup Guide',
                description: 'Configure Canvas, Microsoft 365, and portal systems',
                keywords: ['setup', 'configure', 'canvas', 'microsoft', 'portal', 'system', 'install'],
                url: 'post-registration.html'
            },
            'jobs': {
                title: 'Career Resources',
                description: 'Job opportunities, resume building, and career development',
                keywords: ['job', 'career', 'employment', 'resume', 'interview', 'work', 'hiring'],
                url: 'jobs.html'
            },
            'tutorials': {
                title: 'Video Tutorials',
                description: 'Comprehensive how-to video library with search and filters',
                keywords: ['tutorial', 'video', 'how-to', 'guide', 'learn', 'watch', 'help'],
                url: 'how-to.html'
            },
            'canvas': {
                title: 'Canvas Help',
                description: 'Learn how to navigate and use Canvas effectively',
                keywords: ['canvas', 'lms', 'course', 'assignment', 'grade', 'submit'],
                url: 'post-registration.html#canvas'
            },
            'microsoft': {
                title: 'Microsoft 365 Setup',
                description: 'Install and use Word, Excel, PowerPoint, Teams',
                keywords: ['microsoft', 'office', 'word', 'excel', 'powerpoint', 'teams', '365'],
                url: 'post-registration.html#microsoft365'
            },
            'mentor': {
                title: 'Mentor Support',
                description: 'Connect with peer mentors and get guidance',
                keywords: ['mentor', 'support', 'help', 'guide', 'peer', 'advice'],
                url: 'jobs.html#mentors'
            },
            'portal': {
                title: 'Portal Navigation',
                description: 'Learn how to use the BYU Pathway portal',
                keywords: ['portal', 'dashboard', 'student', 'login', 'account', 'profile'],
                url: 'post-registration.html#portal'
            },
            'gathering': {
                title: 'Weekly Gatherings',
                description: 'How to join and participate in weekly gatherings',
                keywords: ['gathering', 'weekly', 'meeting', 'class', 'group', 'virtual'],
                url: 'post-registration.html#gathering'
            },
            'tuition': {
                title: 'Tuition & Financial Aid',
                description: 'Understanding tuition costs and available discounts',
                keywords: ['tuition', 'cost', 'payment', 'discount', 'financial', 'aid', 'money'],
                url: 'registration.html#tuition'
            },
            'endorsement': {
                title: 'Ecclesiastical Endorsement',
                description: 'Complete your ecclesiastical endorsement process',
                keywords: ['endorsement', 'bishop', 'interview', 'church', 'leader', 'recommendation'],
                url: 'registration.html#endorsement'
            },
            'pathwayconnect': {
                title: 'PathwayConnect Program',
                description: 'First three semesters of foundational courses',
                keywords: ['pathwayconnect', 'foundation', 'beginner', 'start', 'first', 'semester'],
                url: 'registration.html#pathwayconnect'
            },
            'certificate': {
                title: 'Certificate Programs',
                description: 'Professional certificates to boost your career',
                keywords: ['certificate', 'program', 'professional', 'skill', 'credential', 'training'],
                url: 'jobs.html#certificates'
            },
            'degree': {
                title: 'Online Degrees',
                description: 'Complete your bachelor\'s degree online',
                keywords: ['degree', 'bachelor', 'major', 'program', 'study', 'graduate'],
                url: 'registration.html#degrees'
            },
            'english': {
                title: 'English Proficiency',
                description: 'Improve your English skills for academic success',
                keywords: ['english', 'language', 'proficiency', 'skill', 'improve', 'learn'],
                url: 'how-to.html#english'
            },
            'technology': {
                title: 'Technology Help',
                description: 'Get help with computer and technology issues',
                keywords: ['technology', 'computer', 'help', 'support', 'tech', 'problem'],
                url: 'post-registration.html#technology'
            },
            'time management': {
                title: 'Time Management',
                description: 'Learn effective study and time management skills',
                keywords: ['time', 'management', 'study', 'schedule', 'organize', 'productivity'],
                url: 'how-to.html#time-management'
            },
            'networking': {
                title: 'Professional Networking',
                description: 'Build your professional network and connections',
                keywords: ['networking', 'linkedin', 'professional', 'connect', 'career', 'job'],
                url: 'jobs.html#networking'
            },
            'welfare': {
                title: 'Welfare and Self Reliance',
                description: 'Explore welfare and self reliance resources',
                keywords: ['welfare', 'self reliance', 'financial', 'stability', 'personal development', 'self-sufficiency', 'budgeting'],
                url: 'jobs.html#strategic-partners'
            }
        };
    }

    // Setup typing animation for hero section
    setupTypingAnimation() {
        if (document.getElementById('typed-text') && typeof Typed !== 'undefined') {
            const typed = new Typed('#typed-text', {
                strings: [
                    'Help for BYU Pathway Students',
                    'Step-by-Step Tutorials',
                    'Registration Made Simple',
                    'Career Resources',
                    'Your Success Journey Starts Here'
                ],
                typeSpeed: 60,
                backSpeed: 40,
                backDelay: 2000,
                startDelay: 500,
                loop: true,
                showCursor: true,
                cursorChar: '|',
                autoInsertCss: true,
                contentType: 'html'
            });
        }
    }

    // Setup scroll-triggered animations
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all fade-in elements
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });
    }

    // Initialize fade-in observer for scroll animations
    initializeFadeInObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });
    }

    /* Global search functionality commented out
    setupSearchFunctionality() {
        const searchInput = document.getElementById('globalSearch');
        if (!searchInput) return;

        let searchTimeout;

        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            const query = e.target.value.toLowerCase().trim();

            if (query.length < 2) {
                this.hideSearchResults();
                return;
            }

            searchTimeout = setTimeout(() => {
                this.performSearch(query);
            }, 300);
        });

        // Hide results when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('#globalSearch') && !e.target.closest('#searchResults')) {
                this.hideSearchResults();
            }
        });

        // Handle Enter key
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const query = e.target.value.toLowerCase().trim();
                if (query.length >= 2) {
                    this.performSearch(query);
                }
            }
        });
    }

    performSearch(query) {
        const results = [];
        const queryWords = query.toLowerCase().split(' ');

        // Search through all data
        Object.entries(this.searchData).forEach(([key, item]) => {
            const searchText = `${item.title} ${item.description} ${item.keywords.join(' ')}`.toLowerCase();
            let relevance = 0;

            // Calculate relevance score
            queryWords.forEach(word => {
                if (item.title.toLowerCase().includes(word)) relevance += 10;
                if (item.keywords.some(keyword => keyword.includes(word))) relevance += 5;
                if (item.description.toLowerCase().includes(word)) relevance += 3;
            });

            if (relevance > 0) {
                results.push({ ...item, relevance, key });
            }
        });

        // Sort by relevance
        results.sort((a, b) => b.relevance - a.relevance);

        this.displaySearchResults(results.slice(0, 6), query);
    }

    displaySearchResults(results, query) {
        let resultsHTML = '';

        if (results.length === 0) {
            resultsHTML = `
                <div class="p-4 text-center text-gray-500">
                    <i class="fas fa-search mr-2"></i>
                    No results found for "${query}"
                </div>
            `;
        } else {
            results.forEach(result => {
                const highlightedTitle = this.highlightText(result.title, query);
                const highlightedDescription = this.highlightText(result.description, query);

                resultsHTML += `
                    <div class="search-result-item p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0" 
                         onclick="window.location.href='${result.url}'">
                        <div class="flex items-start">
                            <div class="flex-shrink-0 mr-3 mt-1">
                                <i class="fas fa-search text-gray-400"></i>
                            </div>
                            <div class="flex-1">
                                <h4 class="font-semibold text-gray-900 mb-1">${highlightedTitle}</h4>
                                <p class="text-sm text-gray-600">${highlightedDescription}</p>
                                <span class="text-xs text-blue-600 mt-1 inline-block">${result.url}</span>
                            </div>
                        </div>
                    </div>
                `;
            });
        }

        // Create or update results container
        let resultsContainer = document.getElementById('searchResults');
        if (!resultsContainer) {
            resultsContainer = document.createElement('div');
            resultsContainer.id = 'searchResults';
            resultsContainer.className = 'absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-1 z-50 max-h-96 overflow-y-auto';
            document.getElementById('globalSearch').parentNode.appendChild(resultsContainer);
        }

        resultsContainer.innerHTML = resultsHTML;
        resultsContainer.style.display = 'block';
    }

    hideSearchResults() {
        const resultsContainer = document.getElementById('searchResults');
        if (resultsContainer) {
            resultsContainer.style.display = 'none';
        }
    }

    highlightText(text, query) {
        const regex = new RegExp(`(${query.split(' ').join('|')})`, 'gi');
        return text.replace(regex, '<mark class="bg-yellow-200">$1</mark>');
    }
    */

    // Setup testimonial slider
    setupTestimonialSlider() {
        if (document.getElementById('testimonial-slider') && typeof Splide !== 'undefined') {
            const splide = new Splide('#testimonial-slider', {
                type: 'loop',
                perPage: 1,
                perMove: 1,
                gap: '1rem',
                autoplay: true,
                interval: 5000,
                pauseOnHover: true,
                pauseOnFocus: true,
                autoHeight: true,
                arrows: false,
                pagination: true,
                keyboard: 'global',
                drag: true,
                speed: 600,
                focus: 'center',
                rewind: false,
                breakpoints: {
                    1024: { perPage: 1 },
                    768: { perPage: 1 }
                },
                classes: {
                    pagination: 'splide__pagination custom-pagination',
                    page: 'splide__pagination__page'
                }
            });

            splide.on('mounted move updated', () => {
                // Ensure pagination buttons have accessible labels
                const pagination = document.querySelectorAll('#testimonial-slider .splide__pagination button');
                pagination.forEach((btn, idx) => {
                    btn.setAttribute('aria-label', `Go to testimonial ${idx + 1}`);
                    btn.setAttribute('title', `Testimonial ${idx + 1}`);
                });
            });

            // Improve focus management for keyboard users
            splide.on('move', (newIndex) => {
                const slides = document.querySelectorAll('#testimonial-slider .splide__slide');
                slides.forEach((s, i) => {
                    const active = i === splide.index;
                    s.setAttribute('aria-hidden', active ? 'false' : 'true');
                    // Manage focusability
                    const focusable = s.querySelectorAll('a, button, input, [tabindex]');
                    focusable.forEach(el => {
                        if (active) el.removeAttribute('tabindex');
                        else el.setAttribute('tabindex', '-1');
                    });
                });
            });

            // Make pagination buttons bigger on touch devices for easier tapping
            function increaseTouchTargets() {
                const buttons = document.querySelectorAll('#testimonial-slider .splide__pagination button');
                buttons.forEach(btn => {
                    btn.style.width = '14px';
                    btn.style.height = '14px';
                });
            }

            if ('ontouchstart' in window) increaseTouchTargets();

            splide.mount();

            // Small-screen: hide pagination and show compact counter (1/3)
            splide.on('mounted', () => {
                const root = document.getElementById('testimonial-slider');
                if (!root) return;

                let counter = root.querySelector('.testimonial-counter');

                function createCounter() {
                    if (!counter) {
                        counter = document.createElement('div');
                        counter.className = 'testimonial-counter';
                        counter.setAttribute('aria-hidden', 'false');
                        root.appendChild(counter);
                    }
                    counter.textContent = `${splide.index + 1}/${splide.length}`;
                }

                function removeCounter() {
                    if (counter && counter.parentNode) {
                        counter.parentNode.removeChild(counter);
                        counter = null;
                    }
                }

                function updatePaginationVisibility() {
                    const pagination = root.querySelector('.splide__pagination');
                    if (window.innerWidth <= 640) {
                        if (pagination) pagination.style.display = 'none';
                        createCounter();
                    } else {
                        if (pagination) pagination.style.display = '';
                        removeCounter();
                    }
                }

                updatePaginationVisibility();

                window.addEventListener('resize', () => {
                    updatePaginationVisibility();
                });

                // keep counter in sync
                splide.on('move updated', () => {
                    if (counter) counter.textContent = `${splide.index + 1}/${splide.length}`;
                });
            });
        }
    }

    // Setup animated statistics counter
    setupStatsCounter() {
        const counters = document.querySelectorAll('.stats-counter');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.getAttribute('data-target'));
                    this.animateCounter(counter, target);
                    observer.unobserve(counter);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => {
            observer.observe(counter);
        });
    }

    // Animate counter to target number
    animateCounter(element, target) {
        let current = 0;
        const increment = target / 100;
        const duration = 2000; // 2 seconds
        const stepTime = duration / 100;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
                element.textContent = Math.floor(current).toLocaleString();
            } else {
                element.textContent = Math.floor(current);
            }
        }, stepTime);
    }

    // Setup smooth scrolling for navigation
    setupSmoothScrolling() {
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }



    // Setup mobile menu toggle (hamburger)
    setupMobileMenuToggle() {
        const oldBtn = document.getElementById('mobileMenuBtn');
        const oldMenu = document.getElementById('mobileNavMenu');
        const newBtn = document.getElementById('navToggle');
        const newMenu = document.getElementById('navPanel');
        const btn = newBtn || oldBtn;
        const panel = newMenu || oldMenu;
        // Optional backdrop (used on some pages like post-registration)
        const backdrop = document.getElementById('mobileNavBackdrop');

        if (!btn || !panel) {
            console.warn('No mobile navigation elements found.');
            return;
        }

        // Set initial ARIA attributes
        btn.setAttribute('aria-expanded', 'false');
        panel.setAttribute('aria-hidden', 'true');

        // Guard to avoid immediate outside-click close right after open
        let lastToggleTs = 0;

        // Helper: open/close states
        const openMenu = () => {
            lastToggleTs = Date.now();
            btn.classList.add('active');
            panel.classList.add('open');
            // Hard-enable visibility in case of lingering CSS conflicts
            panel.style.display = 'block';
            panel.style.pointerEvents = 'auto';
            panel.style.opacity = '1';
            panel.style.transform = 'translateY(0)';
            if (backdrop) backdrop.classList.remove('hidden');
            btn.setAttribute('aria-expanded', 'true');
            panel.setAttribute('aria-hidden', 'false');
        };

        const closeMenu = () => {
            lastToggleTs = Date.now();
            btn.classList.remove('active');
            panel.classList.remove('open');
            // Hard-disable interactions
            panel.style.display = 'none';
            panel.style.pointerEvents = 'none';
            panel.style.opacity = '0';
            panel.style.transform = 'translateY(-6px)';
            if (backdrop) backdrop.classList.add('hidden');
            btn.setAttribute('aria-expanded', 'false');
            panel.setAttribute('aria-hidden', 'true');
        };

        const isMenuOpen = () => btn.classList.contains('active') || panel.classList.contains('open');

        // Toggle mobile menu when hamburger button is clicked
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (isMenuOpen()) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', (event) => {
            const isClickInsideMenu = panel.contains(event.target);
            const isClickOnMenuButton = btn.contains(event.target);

            // Ignore outside clicks occurring immediately after toggle to prevent flash-close
            if (Date.now() - lastToggleTs < 350) return;

            if (!isClickInsideMenu && !isClickOnMenuButton && isMenuOpen()) {
                closeMenu();
            }
        });

        // Close menu when clicking a link inside it
        panel.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (isMenuOpen()) closeMenu();
            });
        });

        // Close via backdrop click if present
        if (backdrop) {
            backdrop.addEventListener('click', () => {
                if (isMenuOpen()) closeMenu();
            });
        }

        // Close menu on resize up to desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768 && isMenuOpen()) {
                closeMenu();
            }
        });
    }

    // Setup navbar appearance on scroll
    setupNavbarScroll() {
        const nav = document.querySelector('nav');
        if (nav) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 10) {
                    nav.classList.add('nav-scrolled');
                } else {
                    nav.classList.remove('nav-scrolled');
                }
            });
        }
    }

    // Setup accessibility features
    setupAccessibilityFeatures() {
        // Add skip navigation link for screen readers
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-gray-900';
        document.body.insertBefore(skipLink, document.body.firstChild);

        // Ensure focus management for modals
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-nav');
            }
        });

        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-nav');
        });
    }

    // Setup progress tracking for learning paths
    setupProgressTracking() {
        // Initialize progress data if not present
        if (!localStorage.getItem('byu-pathway-progress')) {
            localStorage.setItem('byu-pathway-progress', JSON.stringify({}));
        }

        // Listen for tutorial completion events
        document.addEventListener('tutorial-completed', (e) => {
            const progress = JSON.parse(localStorage.getItem('byu-pathway-progress'));
            progress[e.detail.tutorialId] = {
                completed: true,
                timestamp: new Date().toISOString()
            };
            localStorage.setItem('byu-pathway-progress', JSON.stringify(progress));
        });
    }

    // Setup offline support
    setupOfflineSupport() {
        // Check if service worker is supported
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                    .then(registration => {
                        console.log('SW registered: ', registration);
                    })
                    .catch(registrationError => {
                        console.log('SW registration failed: ', registrationError);
                    });
            });
        }

        // Listen for online/offline events
        window.addEventListener('online', () => {
            this.showNotification('Connection restored!', 'success');
        });

        window.addEventListener('offline', () => {
            this.showNotification('Working offline. Some features may be limited.', 'warning');
        });
    }

    // Show notification
    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 text-white max-w-sm ${type === 'success' ? 'bg-green-500' :
            type === 'warning' ? 'bg-yellow-500' :
                type === 'error' ? 'bg-red-500' : 'bg-blue-500'
            }`;
        notification.textContent = message;

        document.body.appendChild(notification);

        // Remove after 5 seconds
        setTimeout(() => {
            notification.remove();
        }, 5000);
    }

    // Utility function for smooth scrolling to sections
    scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    // Setup jobs page functionality
    setupJobsPage() {
        if (!document.getElementById('job-board')) return;

        // Initialize filters
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));

                // Add active class to clicked button
                e.target.classList.add('active');

                // Filter jobs
                const filter = e.target.getAttribute('data-filter');
                this.filterJobs(filter);
            });
        });

        // Search in jobs page
        const jobSearch = document.getElementById('jobSearch');
        if (jobSearch) {
            jobSearch.addEventListener('input', (e) => {
                const query = e.target.value.toLowerCase();
                // Basic text filtering could be improved here
            });
        }

        // Initialize countdown timers
        this.initializeCountdownTimers();
    }

    // Filter jobs helper
    filterJobs(filter) {
        const jobCards = document.querySelectorAll('.job-card');

        jobCards.forEach(card => {
            const categories = card.getAttribute('data-category');

            if (filter === 'all' || categories.includes(filter)) {
                card.style.display = 'block';
                // Add animation
                if (typeof anime !== 'undefined') {
                    anime({
                        targets: card,
                        opacity: [0, 1],
                        translateY: [20, 0],
                        duration: 300,
                        easing: 'easeOutQuart'
                    });
                }
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Initialize countdown timers
    initializeCountdownTimers() {
        const timers = document.querySelectorAll('.countdown-timer');
        timers.forEach(timer => {
            if (timer.textContent.includes('3 days')) {
                timer.style.animation = 'pulse 2s infinite';
            }
        });
    }
}

// Global utility functions
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Jobs page global functions (kept global for HTML onclick compatibility)
function applyToJob(jobId) {
    const jobTitles = {
        'junior-web-dev': 'Junior Web Developer at TechCorp Solutions',
        'marketing-assistant': 'Marketing Assistant at Growth Dynamics',
        'customer-success': 'Customer Success Specialist at ServiceFirst Inc',
        'data-analyst': 'Data Analyst at DataDriven Solutions',
        'content-writer': 'Content Writer at Creative Content Co',
        'ui-ux-designer': 'UI/UX Designer at DesignForward Studio'
    };

    alert(`Opening application for: ${jobTitles[jobId]}. In a real implementation, this would take you to the application page.`);
}

function loadMoreJobs() {
    alert('Loading more jobs... In a real implementation, this would fetch additional job listings.');
}

function showCertificationInfo() {
    alert('Certification programs would be listed here, including Google Career Certificates, Microsoft certifications, and industry-specific credentials.');
}

function startInterviewPrep() {
    alert('Interview preparation module would launch here, with practice questions and mock interview features.');
}

function openSalaryTool() {
    alert('Salary research tool would open here, showing market rates by role, location, and experience level.');
}

function exploreFreelance() {
    alert('Freelance platform would be accessible here, connecting students with project-based work opportunities.');
}

// Initialize app even if DOMContentLoaded already fired
(function initApp() {
    const bootstrap = () => {
        window.byuApp = new BYUPathwayApp();

        // Add loading animation
        document.body.style.opacity = '0';
        if (typeof anime !== 'undefined') {
            anime({
                targets: document.body,
                opacity: 1,
                duration: 800,
                easing: 'easeOutQuart'
            });
        } else {
            document.body.style.opacity = '1';
        }
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bootstrap);
    } else {
        bootstrap();
    }
})();

// Handle page visibility changes for performance
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause animations when page is not visible
        if (typeof anime !== 'undefined' && Array.isArray(anime.running)) {
            anime.running.forEach(animation => animation.pause());
        }
    } else {
        // Resume animations when page becomes visible
        if (typeof anime !== 'undefined' && Array.isArray(anime.running)) {
            anime.running.forEach(animation => animation.play());
        }
    }
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BYUPathwayApp;
}
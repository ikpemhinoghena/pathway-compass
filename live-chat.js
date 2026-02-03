/**
 * PathwayCompass Live Chat Module
 * Creative animated chat launcher for Tawk.to integration
 * 
 * ========== TAWK.TO SETUP ==========
 * 1. Go to https://tawk.to and create a free account
 * 2. Get your Property ID and Widget ID from Dashboard > Administration > Chat Widget
 * 3. Replace TAWK_PROPERTY_ID and TAWK_WIDGET_ID below with your IDs
 * ====================================
 */

// ==========================================
// CONFIGURE YOUR TAWK.TO IDs HERE:
// ==========================================
const TAWK_PROPERTY_ID = 'YOUR_PROPERTY_ID';  // Replace with your Property ID
const TAWK_WIDGET_ID = 'YOUR_WIDGET_ID';      // Replace with your Widget ID
// ==========================================

class PathwayLiveChat {
    constructor() {
        this.isWidgetOpen = false;
        this.isTawkLoaded = false;
        this.isLauncherVisible = false;
        this.init();
    }

    init() {
        this.injectStyles();
        this.createChatLauncher();
        this.createChatIntro();
        this.setupTriggers();
    }

    injectStyles() {
        const styles = document.createElement('style');
        styles.textContent = `
            /* Floating Chat Launcher - Premium Pill Design */
            .pw-chat-launcher {
                position: fixed;
                bottom: 2rem;
                right: 2rem;
                z-index: 9999;
                display: flex;
                align-items: center;
                gap: 0.75rem;
                padding: 1rem 1.5rem;
                background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
                color: white;
                font-family: 'Inter', sans-serif;
                font-weight: 600;
                font-size: 0.95rem;
                border: none;
                border-radius: 50px;
                cursor: pointer;
                box-shadow: 0 10px 30px rgba(249, 115, 22, 0.4), 0 4px 12px rgba(0, 0, 0, 0.1);
                transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
                /* Hidden by default */
                opacity: 0;
                visibility: hidden;
                transform: translateY(100px) scale(0.5);
            }

            .pw-chat-launcher.visible {
                opacity: 1;
                visibility: visible;
                transform: translateY(0) scale(1);
            }

            .pw-chat-launcher:hover {
                transform: translateY(-3px) scale(1.02);
                box-shadow: 0 14px 40px rgba(249, 115, 22, 0.5), 0 6px 16px rgba(0, 0, 0, 0.15);
            }

            .pw-chat-launcher:active {
                transform: scale(0.98);
            }

            .pw-chat-launcher .chat-icon {
                font-size: 1.1rem;
            }

            .pw-chat-launcher .pulse-ring {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 100%;
                height: 100%;
                border-radius: 50px;
                background: rgba(249, 115, 22, 0.3);
                animation: pulse-ring 2s infinite;
                pointer-events: none;
            }

            @keyframes pulse-ring {
                0% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
                100% { transform: translate(-50%, -50%) scale(1.4); opacity: 0; }
            }

            /* Intro Overlay */
            .pw-chat-intro-overlay {
                position: fixed;
                inset: 0;
                background: rgba(30, 58, 138, 0.95);
                backdrop-filter: blur(8px);
                z-index: 10000;
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0;
                visibility: hidden;
                transition: opacity 0.4s ease, visibility 0.4s ease;
            }

            .pw-chat-intro-overlay.active {
                opacity: 1;
                visibility: visible;
            }

            .pw-chat-intro-content {
                text-align: center;
                color: white;
                max-width: 500px;
                padding: 2rem;
            }

            .pw-chat-intro-icon {
                width: 120px;
                height: 120px;
                margin: 0 auto 2rem;
                border-radius: 50%;
                background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 20px 60px rgba(249, 115, 22, 0.5);
                animation: intro-icon-entrance 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                transform: scale(0) rotate(-45deg);
            }

            @keyframes intro-icon-entrance {
                0% { transform: scale(0) rotate(-45deg); }
                100% { transform: scale(1) rotate(0deg); }
            }

            .pw-chat-intro-icon i {
                font-size: 3rem;
                color: white;
                animation: icon-bounce 0.6s 0.4s ease-out forwards;
                opacity: 0;
            }

            @keyframes icon-bounce {
                0% { opacity: 0; transform: scale(0.5); }
                50% { transform: scale(1.2); }
                100% { opacity: 1; transform: scale(1); }
            }

            .pw-chat-intro-title {
                font-family: 'Crimson Pro', serif;
                font-size: 2.5rem;
                font-weight: 600;
                margin-bottom: 1rem;
                opacity: 0;
                animation: text-fade-up 0.6s 0.5s ease-out forwards;
            }

            .pw-chat-intro-text {
                font-size: 1.1rem;
                opacity: 0;
                animation: text-fade-up 0.6s 0.7s ease-out forwards;
                margin-bottom: 2rem;
                color: rgba(255, 255, 255, 0.9);
            }

            @keyframes text-fade-up {
                0% { opacity: 0; transform: translateY(20px); }
                100% { opacity: 1; transform: translateY(0); }
            }

            .pw-chat-intro-loader {
                display: flex;
                justify-content: center;
                gap: 0.5rem;
                opacity: 0;
                animation: text-fade-up 0.6s 0.9s ease-out forwards;
            }

            .pw-chat-intro-loader span {
                width: 12px;
                height: 12px;
                background: white;
                border-radius: 50%;
                animation: loader-bounce 1.2s infinite ease-in-out;
            }

            .pw-chat-intro-loader span:nth-child(1) { animation-delay: 0s; }
            .pw-chat-intro-loader span:nth-child(2) { animation-delay: 0.2s; }
            .pw-chat-intro-loader span:nth-child(3) { animation-delay: 0.4s; }

            @keyframes loader-bounce {
                0%, 80%, 100% { transform: scale(0.6); opacity: 0.5; }
                40% { transform: scale(1); opacity: 1; }
            }

            .pw-chat-close-btn {
                position: absolute;
                top: 1.5rem;
                right: 1.5rem;
                width: 48px;
                height: 48px;
                border: none;
                background: rgba(255, 255, 255, 0.1);
                border-radius: 50%;
                color: white;
                font-size: 1.5rem;
                cursor: pointer;
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .pw-chat-close-btn:hover {
                background: rgba(255, 255, 255, 0.2);
                transform: rotate(90deg);
            }

            /* Hide Tawk widget bubble (we control when it appears) */
            .tawk-min-container,
            #tawkchat-minified-wrapper {
                display: none !important;
            }

            /* ========== SIDE PANEL CHAT MODE STYLES ========== */
            .pw-chat-side-overlay {
                position: fixed;
                inset: 0;
                background: rgba(30, 58, 138, 0.4);
                backdrop-filter: blur(4px);
                z-index: 10000;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                opacity: 0;
                visibility: hidden;
                transition: opacity 0.3s ease, visibility 0.3s ease;
            }

            .pw-chat-side-overlay.active {
                opacity: 1;
                visibility: visible;
            }

            .pw-chat-side-panel {
                position: relative;
                width: 100%;
                max-width: 420px;
                height: 100vh;
                background: white;
                box-shadow: -2px 0 20px rgba(0, 0, 0, 0.15);
                display: flex;
                flex-direction: column;
                animation: slide-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                transform: translateX(100%);
            }

            @keyframes slide-in {
                0% { transform: translateX(100%); opacity: 0; }
                100% { transform: translateX(0); opacity: 1; }
            }

            .pw-chat-side-content {
                padding: 2.5rem 2rem;
                overflow-y: auto;
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
            }

            .pw-chat-side-icon {
                width: 80px;
                height: 80px;
                margin: 0 auto 1.5rem;
                border-radius: 50%;
                background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 10px 30px rgba(249, 115, 22, 0.3);
                animation: intro-icon-entrance 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                transform: scale(0) rotate(-45deg);
            }

            @keyframes intro-icon-entrance {
                0% { transform: scale(0) rotate(-45deg); }
                100% { transform: scale(1) rotate(0deg); }
            }

            .pw-chat-side-icon i {
                font-size: 2rem;
                color: white;
            }

            .pw-chat-side-title {
                font-family: 'Crimson Pro', serif;
                font-size: 1.8rem;
                font-weight: 600;
                margin-bottom: 0.5rem;
                color: #1e3a8a;
                opacity: 0;
                animation: text-fade-up 0.5s 0.2s ease-out forwards;
            }

            .pw-chat-side-message {
                font-size: 0.95rem;
                color: #64748b;
                margin-bottom: 2rem;
                opacity: 0;
                animation: text-fade-up 0.5s 0.4s ease-out forwards;
            }

            @keyframes text-fade-up {
                0% { opacity: 0; transform: translateY(15px); }
                100% { opacity: 1; transform: translateY(0); }
            }

            .pw-chat-wa-section {
                width: 100%;
                background: linear-gradient(135deg, #ecfdf5 0%, #f0fdf4 100%);
                border: 2px solid #bbf7d0;
                border-radius: 12px;
                padding: 1.5rem;
                margin-top: 1rem;
                animation: text-fade-up 0.5s 0.6s ease-out forwards;
                opacity: 0;
            }

            .pw-chat-wa-subtitle {
                font-size: 0.9rem;
                font-weight: 600;
                color: #1e3a8a;
                margin-bottom: 0.5rem;
            }

            .pw-chat-response-time {
                font-size: 0.85rem;
                color: #15803d;
                font-weight: 700;
                margin-bottom: 1rem;
                animation: pulse-text 2s ease-in-out infinite;
            }

            @keyframes pulse-text {
                0%, 100% { opacity: 0.7; }
                50% { opacity: 1; }
            }

            .pw-chat-wa-number {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;
                font-weight: 600;
                color: #16a34a;
                margin-bottom: 1rem;
                font-size: 1rem;
            }

            .pw-chat-wa-number i {
                font-size: 1.2rem;
            }

            .pw-chat-wa-btn {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;
                width: 100%;
                padding: 0.75rem;
                background: linear-gradient(135deg, #16a34a 0%, #15803d 100%);
                color: white;
                border: none;
                border-radius: 8px;
                font-weight: 600;
                font-size: 0.95rem;
                cursor: pointer;
                text-decoration: none;
                transition: all 0.3s ease;
                box-shadow: 0 4px 12px rgba(22, 163, 74, 0.3);
            }

            .pw-chat-wa-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 16px rgba(22, 163, 74, 0.4);
                background: linear-gradient(135deg, #15803d 0%, #166534 100%);
            }

            .pw-chat-wa-btn:active {
                transform: translateY(0);
            }

            .pw-chat-wa-btn i {
                font-size: 1.1rem;
            }

            /* Close button styling for side panel */
            .pw-chat-side-panel .pw-chat-close-btn {
                top: 1rem;
                right: 1rem;
                background: rgba(59, 130, 246, 0.1);
                color: #1e3a8a;
            }

            .pw-chat-side-panel .pw-chat-close-btn:hover {
                background: rgba(59, 130, 246, 0.2);
            }

            /* Mobile responsiveness */
            @media (max-width: 768px) {
                .pw-chat-side-panel {
                    max-width: 100%;
                }

                .pw-chat-side-title {
                    font-size: 1.5rem;
                }

                .pw-chat-side-content {
                    padding: 1.5rem 1rem;
                }
            }

            @media (max-width: 480px) {
                .pw-chat-launcher {
                    padding: 0.65rem 1rem;
                    font-size: 0.8rem;
                    bottom: 0.75rem;
                    right: 0.75rem;
                }

                .pw-chat-launcher span {
                    display: none;
                }

                .pw-chat-launcher .chat-icon {
                    font-size: 1.25rem;
                }

                .pw-chat-intro-content {
                    padding: 1rem;
                }

                .pw-chat-intro-title {
                    font-size: 1.5rem;
                }

                .pw-chat-side-panel {
                    max-width: 100%;
                    width: 100%;
                }

                .pw-chat-side-title {
                    font-size: 1.25rem;
                }

                .pw-chat-side-content {
                    padding: 1rem 0.75rem;
                    padding-top: 3.5rem;
                }

                .pw-chat-wa-section {
                    padding: 0.75rem;
                }
            }
            /* ========== END SIDE PANEL STYLES ========== */
        `;
        document.head.appendChild(styles);
    }

    createChatLauncher() {
        const button = document.createElement('button');
        button.className = 'pw-chat-launcher';
        button.id = 'pw-chat-launcher';
        button.innerHTML = `
            <span class="pulse-ring"></span>
            <i class="fas fa-headset chat-icon"></i>
            <span>Chat with Support</span>
        `;
        button.addEventListener('click', () => this.startChatSequence());
        document.body.appendChild(button);
    }

    createChatIntro() {
        // ============ FULL-SCREEN CHAT MODE (COMMENTED OUT - MIGHT USE LATER) ============
        // const overlay = document.createElement('div');
        // overlay.className = 'pw-chat-intro-overlay';
        // overlay.id = 'pw-chat-intro';
        // overlay.innerHTML = `
        //     <button class="pw-chat-close-btn" aria-label="Close">
        //         <i class="fas fa-times"></i>
        //     </button>
        //     <div class="pw-chat-intro-content">
        //         <div class="pw-chat-intro-icon">
        //             <i class="fas fa-comments"></i>
        //         </div>
        //         <h2 class="pw-chat-intro-title">Connecting You Now</h2>
        //         <p class="pw-chat-intro-text">A friendly support agent is ready to help with your registration questions.</p>
        //         <div class="pw-chat-intro-loader">
        //             <span></span>
        //             <span></span>
        //             <span></span>
        //         </div>
        //     </div>
        // `;
        //
        // overlay.querySelector('.pw-chat-close-btn').addEventListener('click', () => this.closeIntro());
        // document.body.appendChild(overlay);
        // ================================================================================

        // ============ SIDE PANEL CHAT MODE (CURRENT IMPLEMENTATION) ============
        const sidePanelOverlay = document.createElement('div');
        sidePanelOverlay.className = 'pw-chat-side-overlay';
        sidePanelOverlay.id = 'pw-chat-intro';
        sidePanelOverlay.innerHTML = `
            <div class="pw-chat-side-panel">
                <button class="pw-chat-close-btn" aria-label="Close">
                    <i class="fas fa-times"></i>
                </button>
                <div class="pw-chat-side-content">
                    <div class="pw-chat-side-icon">
                        <i class="fas fa-comments"></i>
                    </div>
                    <h2 class="pw-chat-side-title">Live Chat Coming Soon</h2>
                    <p class="pw-chat-side-message">Live web chat hasn't been implemented yet.</p>
                    
                    <div class="pw-chat-wa-section">
                        <p class="pw-chat-wa-subtitle">Contact us on WhatsApp for immediate assistance</p>
                        <p class="pw-chat-response-time">⚡ We respond immediately</p>
                        <a href="https://wa.me/2347075041664" target="_blank" class="pw-chat-wa-btn">
                            <i class="fab fa-whatsapp"></i>
                            Contact on WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        `;

        sidePanelOverlay.querySelector('.pw-chat-close-btn').addEventListener('click', () => this.closeIntro());
        sidePanelOverlay.addEventListener('click', (e) => {
            // Close if clicking on the overlay background, not the panel
            if (e.target === sidePanelOverlay) {
                this.closeIntro();
            }
        });
        document.body.appendChild(sidePanelOverlay);
    }

    setupTriggers() {
        // 1. Show launcher ONLY when #contact-support section is visible
        const contactSection = document.getElementById('contact-support');
        if (contactSection) {
            const sectionObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    this.isSectionVisible = entry.isIntersecting;
                    if (entry.isIntersecting) {
                        // Only show if footer is not visible
                        if (!this.isFooterVisible) {
                            this.showLauncher();
                        }
                    } else {
                        // Hide when scrolling away (only if chat intro is not active)
                        const overlay = document.getElementById('pw-chat-intro');
                        if (!overlay || !overlay.classList.contains('active')) {
                            this.hideLauncherCompletely();
                        }
                    }
                });
            }, { threshold: 0.2 });
            sectionObserver.observe(contactSection);
        }

        // 2. Hide launcher when footer is visible, show when leaving footer if section is visible
        this.isFooterVisible = false;
        this.isSectionVisible = false;
        const footer = document.querySelector('footer');
        if (footer) {
            const footerObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    this.isFooterVisible = entry.isIntersecting;
                    if (entry.isIntersecting) {
                        // Hide button when footer is visible
                        const overlay = document.getElementById('pw-chat-intro');
                        if (!overlay || !overlay.classList.contains('active')) {
                            this.hideLauncherCompletely();
                        }
                    } else {
                        // Footer is no longer visible - check if section is visible
                        if (this.isSectionVisible) {
                            this.showLauncher();
                        }
                    }
                });
            }, { threshold: 0.1 });
            footerObserver.observe(footer);
        }

        // 3. Trigger on click of the existing "Start Chat" button
        const startChatButtons = document.querySelectorAll('[onclick="openChat()"]');
        startChatButtons.forEach(btn => {
            btn.removeAttribute('onclick');
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.showLauncher();
                this.startChatSequence();
            });
        });
    }

    showLauncher() {
        const launcher = document.getElementById('pw-chat-launcher');
        if (launcher) {
            this.isLauncherVisible = true;
            launcher.classList.add('visible');
        }
    }

    hideLauncherCompletely() {
        const launcher = document.getElementById('pw-chat-launcher');
        if (launcher) {
            this.isLauncherVisible = false;
            launcher.classList.remove('visible');
        }
    }

    hideLauncher() {
        const launcher = document.getElementById('pw-chat-launcher');
        if (launcher) {
            launcher.style.opacity = '0';
            launcher.style.transform = 'scale(0.5)';
            launcher.style.pointerEvents = 'none';
        }
    }

    restoreLauncher() {
        const launcher = document.getElementById('pw-chat-launcher');
        if (launcher) {
            launcher.style.opacity = '';
            launcher.style.transform = '';
            launcher.style.pointerEvents = '';
        }
    }

    startChatSequence() {
        // Hide the launcher button
        this.hideLauncher();

        // Show the side panel
        const overlay = document.getElementById('pw-chat-intro');
        if (overlay) {
            overlay.classList.add('active');
        }

        // COMMENTED OUT: Original full-screen Tawk widget loading
        // setTimeout(() => {
        //     this.loadTawkWidget();
        // }, 2500);
    }

    // COMMENTED OUT: Full-screen Tawk widget loading (keeping for future use)
    // loadTawkWidget() {
    //     if (this.isTawkLoaded) {
    //         // If already loaded, just maximize the widget
    //         if (window.Tawk_API) {
    //             window.Tawk_API.maximize();
    //         }
    //         this.closeIntro();
    //         return;
    //     }
    //
    //     // Tawk.to integration placeholder
    //     // Replace YOUR_PROPERTY_ID and YOUR_WIDGET_ID with actual values
    //     var Tawk_API = window.Tawk_API || {};
    //     var Tawk_LoadStart = new Date();
    //
    //     (function () {
    //         var s1 = document.createElement("script");
    //         var s0 = document.getElementsByTagName("script")[0];
    //         s1.async = true;
    //         s1.src = `https://embed.tawk.to/${TAWK_PROPERTY_ID}/${TAWK_WIDGET_ID}`;
    //         s1.charset = 'UTF-8';
    //         s1.setAttribute('crossorigin', '*');
    //         s0.parentNode.insertBefore(s1, s0);
    //     })();
    //
    //     this.isTawkLoaded = true;
    //
    //     // Setup Tawk event listeners
    //     window.Tawk_API = window.Tawk_API || {};
    //     window.Tawk_API.onLoad = () => {
    //         // Maximize the chat when loaded
    //         window.Tawk_API.maximize();
    //         this.closeIntro();
    //     };
    //
    //     // Fallback: close intro after 4 seconds if Tawk doesn't load
    //     setTimeout(() => {
    //         this.closeIntro();
    //     }, 4000);
    // }

    closeIntro() {
        const overlay = document.getElementById('pw-chat-intro');
        if (overlay) {
            overlay.classList.remove('active');
        }

        // Restore launcher
        this.restoreLauncher();
    }
}

// Initialize only on registration page
document.addEventListener('DOMContentLoaded', () => {
    new PathwayLiveChat();
});

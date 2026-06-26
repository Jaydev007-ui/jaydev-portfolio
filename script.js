document.addEventListener('DOMContentLoaded', () => {
    // ==========================================================================
    // PAGE LOADER FADEOUT
    // ==========================================================================
    const loader = document.getElementById('loader');
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            if (loader) {
                loader.style.opacity = '0';
                loader.style.visibility = 'hidden';
            }
        }, 300); // Small delay to guarantee visual smoothness
    });

    // Fallback if load event doesn't fire immediately
    setTimeout(() => {
        if (loader && loader.style.opacity !== '0') {
            loader.style.opacity = '0';
            loader.style.visibility = 'hidden';
        }
    }, 2000);

    // ==========================================================================
    // SCROLL-RESPONSIVE NAVBAR
    // ==========================================================================
    const navbar = document.getElementById('navbar');
    
    const handleNavbarScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleNavbarScroll);
    handleNavbarScroll(); // Initial run in case page is refreshed while scrolled

    // ==========================================================================
    // RESPONSIVE MOBILE MENU
    // ==========================================================================
    const menuBtn = document.getElementById('menuBtn');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('open');
            navMenu.classList.toggle('open');
        });

        // Close menu when a navigation link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuBtn.classList.remove('open');
                navMenu.classList.remove('open');
            });
        });
    }

    // ==========================================================================
    // SYSTEM AND CUSTOM THEME SCHEME TOGGLING
    // ==========================================================================
    const themeToggleBtn = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;

    // Check for cached theme or system preferences
    const getPreferredTheme = () => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            return storedTheme;
        }
        return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    };

    // Apply theme
    const applyTheme = (theme) => {
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    };

    // Initial setup
    const currentTheme = getPreferredTheme();
    applyTheme(currentTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const activeTheme = htmlElement.getAttribute('data-theme');
            const targetTheme = activeTheme === 'dark' ? 'light' : 'dark';
            applyTheme(targetTheme);
        });
    }

    // ==========================================================================
    // INTERSECTION OBSERVER FOR SCROLL REVEALS
    // ==========================================================================
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target); // Stop observing once revealed
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // ==========================================================================
    // INTERSECTION OBSERVER FOR ACTIVE NAV LINKS
    // ==========================================================================
    const sections = document.querySelectorAll('section, header');
    
    const activeSectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    }, {
        threshold: 0.5,
        rootMargin: '-50px 0px -50px 0px'
    });

    sections.forEach(sec => activeSectionObserver.observe(sec));

    // ==========================================================================
    // STATS COUNTING ANIMATION
    // ==========================================================================
    const statNumbers = document.querySelectorAll('.stat-number');
    let hasAnimatedStats = false;

    const animateStats = () => {
        statNumbers.forEach(stat => {
            const target = parseFloat(stat.getAttribute('data-target'));
            const suffix = stat.getAttribute('data-suffix') || '+';
            const duration = 1500; // Total animation time (ms)
            const increment = target / (duration / 16); // ~60fps
            let current = 0;

            const updateCount = () => {
                current += increment;
                if (current < target) {
                    if (target % 1 !== 0) {
                        stat.textContent = current.toFixed(1) + suffix;
                    } else if (target >= 1000) {
                        stat.textContent = Math.floor(current).toLocaleString() + suffix;
                    } else {
                        stat.textContent = Math.floor(current) + suffix;
                    }
                    requestAnimationFrame(updateCount);
                } else {
                    if (target % 1 !== 0) {
                        stat.textContent = target.toFixed(1) + suffix;
                    } else if (target >= 1000) {
                        stat.textContent = target.toLocaleString() + suffix;
                    } else {
                        stat.textContent = target + suffix;
                    }
                }
            };

            updateCount();
        });
    };

    const metricsSection = document.getElementById('metrics');
    if (metricsSection) {
        const statsObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasAnimatedStats) {
                    animateStats();
                    hasAnimatedStats = true;
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2
        });

        statsObserver.observe(metricsSection);
    }
});

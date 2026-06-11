// ===== LOADING SCREEN =====
document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    const loadingBarFill = document.getElementById('loadingBarFill');
    
    if (loadingScreen && loadingBarFill) {
        // Animate loading bar
        setTimeout(() => {
            loadingBarFill.style.width = '100%';
        }, 100);

        // Hide screen
        setTimeout(() => {
            loadingScreen.classList.add('fade-out');
        }, 2200);
    }
});

// ===== THEME TOGGLE =====
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

const currentTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', currentTheme);

function updateThemeIcon(theme) {
    if (!themeToggle) return;
    const sunIcon = themeToggle.querySelector('.fa-sun');
    const moonIcon = themeToggle.querySelector('.fa-moon');
    if (sunIcon && moonIcon) {
        if (theme === 'dark') {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        } else {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        }
    }
}
updateThemeIcon(currentTheme);

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const theme = html.getAttribute('data-theme');
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
        
        themeToggle.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            themeToggle.style.transform = '';
        }, 400);
    });
}

// Listen for external theme changes (from Command Palette)
window.addEventListener('storage', () => {
    const theme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', theme);
    updateThemeIcon(theme);
});

// ===== MOBILE MENU TOGGLE =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
}, { passive: true });

// ===== TYPING ANIMATION =====
const typingText = document.querySelector('.typing-text');
const typingTexts = [
    'AI Engineer',
    'Computer Vision Specialist',
    'Deep Learning Engineer',
    'MLOps Practitioner'
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function type() {
    if (!typingText) return;
    const currentText = typingTexts[textIndex];
    
    if (isDeleting) {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        typingSpeed = 2500;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typingTexts.length;
        typingSpeed = 500;
    }
    
    setTimeout(type, typingSpeed);
}

if (typingText) {
    setTimeout(type, 1000);
}

// ===== SMOOTH SCROLLING =====
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== INTERSECTION OBSERVER FOR FADE-IN =====
const observerOptions = {
    threshold: 0.05,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            
            // Skill bar loading animation
            if (entry.target.classList.contains('skill-category')) {
                const skillBars = entry.target.querySelectorAll('.skill-progress');
                skillBars.forEach(bar => {
                    const progress = bar.getAttribute('data-progress');
                    setTimeout(() => {
                        bar.style.width = progress + '%';
                    }, 100);
                });
            }
        }
    });
}, observerOptions);

const animatedElements = document.querySelectorAll(
    '.about-card, .skill-category, .timeline-item, .project-card, .cert-card, .blog-card, .contact-card'
);
animatedElements.forEach(el => observer.observe(el));

// ===== EXPERIENCES TIMELINE PROGRESS LINE =====
const timelineContainer = document.querySelector('.timeline-container');
const timelineTrackFill = document.getElementById('timelineTrackFill');

window.addEventListener('scroll', () => {
    if (timelineContainer && timelineTrackFill) {
        const rect = timelineContainer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate progress ratio of timeline in screen
        const startOffset = windowHeight / 2;
        const totalHeight = rect.height;
        const currentTop = rect.top;
        
        let progress = 0;
        if (currentTop < startOffset) {
            progress = (startOffset - currentTop) / totalHeight;
        }
        
        const pct = Math.max(0, Math.min(100, progress * 100));
        timelineTrackFill.style.height = `${pct}%`;
    }
}, { passive: true });

// ===== VISITOR COUNTER =====
const visitorCountEl = document.getElementById('visitorCount');
if (visitorCountEl) {
    let counts = parseInt(localStorage.getItem('visitor_counts') || '1248');
    counts += 1;
    localStorage.setItem('visitor_counts', counts.toString());
    
    // Format with thousands separator
    visitorCountEl.textContent = counts.toLocaleString('vi-VN');
}

// ===== GITHUB CONTRIBUTIONS GRID SIMULATOR =====
const githubGrid = document.getElementById('githubGrid');
const githubTooltip = document.getElementById('githubTooltip');

if (githubGrid) {
    // Generate dates & activities
    const totalDays = 196; // 28 weeks
    const levelsWeight = [0, 0, 0, 1, 1, 1, 2, 2, 3, 4];
    
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - (totalDays - 1));
    
    let totalCommits = 0;
    
    for (let i = 0; i < totalDays; i++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + i);
        
        const level = levelsWeight[Math.floor(Math.random() * levelsWeight.length)];
        let commits = 0;
        if (level === 1) commits = Math.floor(Math.random() * 2) + 1;
        else if (level === 2) commits = Math.floor(Math.random() * 3) + 3;
        else if (level === 3) commits = Math.floor(Math.random() * 4) + 6;
        else if (level === 4) commits = Math.floor(Math.random() * 5) + 10;
        
        totalCommits += commits;
        
        const cell = document.createElement('div');
        cell.className = `grid-cell level-${level}`;
        
        const dateStr = currentDate.toLocaleDateString('vi-VN', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        // Tooltip hover actions
        cell.addEventListener('mouseenter', () => {
            if (githubTooltip) {
                githubTooltip.className = 'github-tooltip active';
                githubTooltip.innerHTML = `<strong>${commits} commits</strong> ngày ${dateStr}`;
            }
        });
        
        cell.addEventListener('mouseleave', () => {
            if (githubTooltip) {
                githubTooltip.className = 'github-tooltip-placeholder';
                githubTooltip.textContent = 'Rê chuột lên ô vuông để xem chi tiết số lượng commit';
            }
        });
        
        githubGrid.appendChild(cell);
    }
    
    const githubTotalCommits = document.getElementById('githubTotalCommits');
    if (githubTotalCommits) {
        githubTotalCommits.textContent = totalCommits.toLocaleString('vi-VN');
    }
}

// ===== PROJECT FILTER & SEARCH =====
const projectSearch = document.getElementById('projectSearch');
const projectFilters = document.getElementById('projectFilters');
const projectCards = document.querySelectorAll('#projectsGrid .project-card');
const projectsNoResults = document.getElementById('projectsNoResults');

let activeTagFilter = 'All';
let searchKeyword = '';

function filterProjects() {
    let visibleCount = 0;
    
    projectCards.forEach(card => {
        const tags = card.getAttribute('data-tags') || '';
        const title = card.querySelector('.project-card-title').textContent.toLowerCase();
        const desc = card.querySelector('.project-description').textContent.toLowerCase();
        
        const matchesTag = activeTagFilter === 'All' || tags.split(',').includes(activeTagFilter);
        const matchesSearch = title.includes(searchKeyword) || desc.includes(searchKeyword);
        
        if (matchesTag && matchesSearch) {
            card.style.display = '';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });
    
    if (projectsNoResults) {
        projectsNoResults.style.display = visibleCount === 0 ? 'block' : 'none';
    }
}

if (projectSearch) {
    projectSearch.addEventListener('input', (e) => {
        searchKeyword = e.target.value.toLowerCase();
        filterProjects();
    });
}

if (projectFilters) {
    const filterButtons = projectFilters.querySelectorAll('.filter-tag-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            activeTagFilter = btn.getAttribute('data-filter') || 'All';
            filterProjects();
        });
    });
}

// ===== COMMAND PALETTE =====
const cmdPalette = document.getElementById('cmdPalette');
const cmdPaletteTrigger = document.getElementById('cmdPaletteTrigger');
const cmdInput = document.getElementById('cmdInput');
const cmdResults = document.getElementById('cmdResults');

const commands = [
    { id: 'home', label: 'Di chuyển tới Trang chủ', icon: 'fa-navigation', action: () => scrollToSection('home') },
    { id: 'about', label: 'Di chuyển tới Giới thiệu', icon: 'fa-navigation', action: () => scrollToSection('about') },
    { id: 'skills', label: 'Di chuyển tới Kỹ năng', icon: 'fa-navigation', action: () => scrollToSection('skills') },
    { id: 'experience', label: 'Di chuyển tới Kinh nghiệm', icon: 'fa-navigation', action: () => scrollToSection('experience') },
    { id: 'projects', label: 'Di chuyển tới Dự án', icon: 'fa-navigation', action: () => scrollToSection('projects') },
    { id: 'contact', label: 'Di chuyển tới Liên hệ', icon: 'fa-navigation', action: () => scrollToSection('contact') },
    { id: 'download-cv', label: 'Tải xuống CV của tôi (PDF)', icon: 'fa-download', action: () => downloadCV() },
    { id: 'toggle-theme', label: 'Chuyển đổi giao diện Sáng / Tối', icon: 'fa-sun', action: () => togglePaletteTheme() }
];

let selectedCmdIndex = 0;
let filteredCommands = [];

function scrollToSection(id) {
    const target = document.getElementById(id);
    if (target) {
        const offset = 80;
        window.scrollTo({
            top: target.offsetTop - offset,
            behavior: 'smooth'
        });
        closePalette();
    }
}

function downloadCV() {
    const link = document.createElement('a');
    link.href = 'cv_HongPhuc.pdf';
    link.download = 'cv_HongPhuc.pdf';
    link.click();
    closePalette();
}

function togglePaletteTheme() {
    const theme = html.getAttribute('data-theme');
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
    closePalette();
}

function renderCommands() {
    if (!cmdResults) return;
    cmdResults.innerHTML = '';
    
    filteredCommands = commands.filter(cmd => 
        cmd.label.toLowerCase().includes(cmdInput.value.toLowerCase())
    );
    
    if (filteredCommands.length === 0) {
        cmdResults.innerHTML = '<div class="cmd-no-results">Không tìm thấy lệnh nào phù hợp...</div>';
        return;
    }
    
    filteredCommands.forEach((cmd, idx) => {
        const item = document.createElement('div');
        item.className = `cmd-palette-item ${idx === selectedCmdIndex ? 'selected' : ''}`;
        
        item.innerHTML = `
            <div class="cmd-item-left">
                <i class="fas ${cmd.icon === 'fa-navigation' ? 'fa-location-arrow' : cmd.icon === 'fa-download' ? 'fa-download' : 'fa-adjust'} cmd-item-icon"></i>
                <span class="cmd-item-label">${cmd.label}</span>
            </div>
            ${idx === selectedCmdIndex ? '<span class="cmd-enter-badge"><i class="fas fa-level-down-alt"></i> Enter</span>' : ''}
        `;
        
        item.addEventListener('click', () => {
            cmd.action();
        });
        
        item.addEventListener('mouseenter', () => {
            selectedCmdIndex = idx;
            renderCommands();
        });
        
        cmdResults.appendChild(item);
    });
}

function openPalette() {
    if (!cmdPalette) return;
    cmdPalette.style.display = 'flex';
    cmdInput.value = '';
    selectedCmdIndex = 0;
    renderCommands();
    setTimeout(() => cmdInput.focus(), 50);
    document.body.style.overflow = 'hidden';
}

function closePalette() {
    if (!cmdPalette) return;
    cmdPalette.style.display = 'none';
    document.body.style.overflow = '';
}

if (cmdPaletteTrigger) {
    cmdPaletteTrigger.addEventListener('click', openPalette);
}

if (cmdPalette) {
    cmdPalette.addEventListener('click', closePalette);
    const modal = cmdPalette.querySelector('.cmd-palette-modal');
    if (modal) {
        modal.addEventListener('click', (e) => e.stopPropagation());
    }
}

if (cmdInput) {
    cmdInput.addEventListener('input', () => {
        selectedCmdIndex = 0;
        renderCommands();
    });
    
    cmdInput.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            selectedCmdIndex = (selectedCmdIndex + 1) % filteredCommands.length;
            renderCommands();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            selectedCmdIndex = (selectedCmdIndex - 1 + filteredCommands.length) % filteredCommands.length;
            renderCommands();
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (filteredCommands[selectedCmdIndex]) {
                filteredCommands[selectedCmdIndex].action();
            }
        }
    });
}

// Global keyboard listeners
window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (cmdPalette && cmdPalette.style.display === 'flex') {
            closePalette();
        } else {
            openPalette();
        }
    }
    if (e.key === '/') {
        const active = document.activeElement;
        if (active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA')) {
            return;
        }
        e.preventDefault();
        openPalette();
    }
    if (e.key === 'Escape') {
        closePalette();
    }
});

// ===== BACK TO TOP =====
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (backToTop) {
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    }
}, { passive: true });

if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== CONSOLE MESSAGE =====
console.log('%c👨‍💻 Nguyễn Trọng Hồng Phúc', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%c🚀 AI Engineer Portfolio Redesigned (2026 Edition)', 'color: #06b6d4; font-size: 16px;');

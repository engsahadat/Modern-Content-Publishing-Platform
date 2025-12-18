// Main JavaScript for ContentHub

// Global Variables
let currentFilter = 'all';
let articlesPerPage = 6;
let currentPage = 1;
let searchQuery = '';

// DOM Elements
const articlesGrid = document.getElementById('articlesGrid');
const featuredGrid = document.getElementById('featuredGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const searchBtn = document.getElementById('searchBtn');
const searchOverlay = document.getElementById('searchOverlay');
const searchInput = document.getElementById('searchInput');
const searchClose = document.getElementById('searchClose');
const themeToggle = document.getElementById('themeToggle');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');
const scrollTopBtn = document.getElementById('scrollTopBtn');
const newsletterForm = document.getElementById('newsletterForm');
const contactForm = document.getElementById('contactForm');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    loadArticles();
    loadFeaturedArticles();
    setupEventListeners();
});

// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        updateThemeIcon(true);
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcon(isDark);
}

function updateThemeIcon(isDark) {
    const icon = themeToggle?.querySelector('i');
    if (icon) {
        icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// Load Articles
function loadArticles() {
    if (!articlesGrid) return;
    
    let filteredArticles = filterArticles();
    const startIndex = 0;
    const endIndex = currentPage * articlesPerPage;
    const articlesToShow = filteredArticles.slice(startIndex, endIndex);
    
    articlesGrid.innerHTML = '';
    
    if (articlesToShow.length === 0) {
        articlesGrid.innerHTML = '<div class="loading"><p>No articles found</p></div>';
        if (loadMoreBtn) loadMoreBtn.style.display = 'none';
        return;
    }
    
    articlesToShow.forEach((article, index) => {
        const articleCard = createArticleCard(article);
        articleCard.style.animationDelay = `${index * 0.1}s`;
        articlesGrid.appendChild(articleCard);
    });
    
    // Show/hide load more button
    if (loadMoreBtn) {
        loadMoreBtn.style.display = filteredArticles.length > endIndex ? 'block' : 'none';
    }
}

// Filter Articles
function filterArticles() {
    let filtered = articlesData;
    
    // Apply category filter
    if (currentFilter !== 'all') {
        filtered = filtered.filter(article => article.category === currentFilter);
    }
    
    // Apply search filter
    if (searchQuery) {
        filtered = filtered.filter(article => 
            article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.category.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }
    
    return filtered;
}

// Create Article Card
function createArticleCard(article) {
    const card = document.createElement('div');
    card.className = 'article-card';
    card.onclick = () => navigateToArticle(article.id);
    
    const categoryColors = {
        technology: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        lifestyle: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        business: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        health: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        travel: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    };
    
    const imageHTML = article.image 
        ? `<div class="article-image" style="background-image: url('${article.image}'); background-size: cover; background-position: center;"></div>`
        : `<div class="article-image" style="background: ${categoryColors[article.category] || categoryColors.technology}"><i class="fas fa-${getCategoryIcon(article.category)}"></i></div>`;
    
    card.innerHTML = `
        ${imageHTML}
        <div class="article-content">
            <div class="article-meta">
                <span class="article-category">${article.category}</span>
                <span class="article-date">${formatDate(article.date)}</span>
            </div>
            <h3>${article.title}</h3>
            <p class="article-excerpt">${article.excerpt}</p>
            <div class="article-footer">
                <div class="article-author">
                    <div class="author-image">
                        <i class="fas fa-user"></i>
                    </div>
                    <span class="author-name">${article.author}</span>
                </div>
                <span class="reading-time">
                    <i class="fas fa-clock"></i> ${article.readTime}
                </span>
            </div>
        </div>
    `;
    
    return card;
}

// Get Category Icon
function getCategoryIcon(category) {
    const icons = {
        technology: 'laptop-code',
        lifestyle: 'heart',
        business: 'briefcase',
        health: 'heartbeat',
        travel: 'plane'
    };
    return icons[category] || 'file-alt';
}

// Format Date
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Navigate to Article
function navigateToArticle(articleId) {
    window.location.href = `pages/article.html?id=${articleId}`;
}

// Load Featured Articles
function loadFeaturedArticles() {
    if (!featuredGrid) return;
    
    const featured = articlesData.filter(article => article.featured).slice(0, 3);
    
    featured.forEach(article => {
        const card = createArticleCard(article);
        featuredGrid.appendChild(card);
    });
}

// Load More Articles
function loadMore() {
    currentPage++;
    loadArticles();
}

// Filter Handler
function handleFilter(category) {
    currentFilter = category;
    currentPage = 1;
    
    // Update active button
    filterBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    loadArticles();
}

// Search Handler
function handleSearch() {
    searchQuery = searchInput.value.trim();
    currentPage = 1;
    loadArticles();
}

// Setup Event Listeners
function setupEventListeners() {
    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const filter = e.target.getAttribute('data-filter');
            handleFilter(filter);
        });
    });
    
    // Category links in dropdown and footer
    document.querySelectorAll('[data-category]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = e.target.getAttribute('data-category');
            
            // If on home page, filter directly
            if (window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/')) {
                currentFilter = category;
                currentPage = 1;
                
                // Update filter buttons
                filterBtns.forEach(btn => {
                    btn.classList.toggle('active', btn.getAttribute('data-filter') === category);
                });
                
                loadArticles();
                
                // Scroll to articles section
                document.getElementById('articles')?.scrollIntoView({ behavior: 'smooth' });
            } else {
                // Navigate to home page with category
                window.location.href = `../index.html#${category}`;
            }
        });
    });
    
    // Load more button
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMore);
    }
    
    // Search functionality
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            searchOverlay.classList.add('active');
            setTimeout(() => searchInput.focus(), 300);
        });
    }
    
    if (searchClose) {
        searchClose.addEventListener('click', () => {
            searchOverlay.classList.remove('active');
            searchInput.value = '';
        });
    }
    
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
        
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
    }
    
    // Theme toggle
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Mobile menu
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.className = navMenu.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
        });
        
        // Close menu when clicking on a link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.className = 'fas fa-bars';
            });
        });
    }
    
    // Scroll to top button
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });
        
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // Newsletter form
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]').value;
            alert(`Thank you for subscribing! We'll send updates to ${email}`);
            newsletterForm.reset();
        });
    }
    
    // Contact form
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            console.log('Form submitted:', data);
            alert(`Thank you for your message, ${data.name}! We'll get back to you soon.`);
            contactForm.reset();
        });
    }
    
    // Check for category in URL hash
    const hash = window.location.hash.substring(1);
    if (hash) {
        currentFilter = hash;
        filterBtns.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-filter') === hash);
        });
        loadArticles();
        setTimeout(() => {
            document.getElementById('articles')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }
}

// Close search overlay when clicking outside
if (searchOverlay) {
    searchOverlay.addEventListener('click', (e) => {
        if (e.target === searchOverlay) {
            searchOverlay.classList.remove('active');
        }
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu && mobileMenuBtn) {
        if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            navMenu.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) icon.className = 'fas fa-bars';
        }
    }
});

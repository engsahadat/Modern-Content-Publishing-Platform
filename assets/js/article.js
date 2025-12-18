// Article Page JavaScript

// Get article ID from URL
const urlParams = new URLSearchParams(window.location.search);
const articleId = parseInt(urlParams.get('id'));

// Load article content
document.addEventListener('DOMContentLoaded', () => {
    loadArticle();
    loadRelatedArticles();
});

// Load single article
function loadArticle() {
    const article = articlesData.find(a => a.id === articleId);
    
    if (!article) {
        document.getElementById('articleTitle').textContent = 'Article not found';
        document.getElementById('articleBody').innerHTML = '<p>The article you are looking for does not exist.</p>';
        return;
    }
    
    // Update page title
    document.title = `${article.title} - ContentHub`;
    
    // Update article content
    document.getElementById('articleCategory').textContent = article.category;
    document.getElementById('articleDate').textContent = formatDate(article.date);
    document.getElementById('articleTitle').textContent = article.title;
    document.getElementById('articleAuthor').textContent = article.author;
    document.getElementById('readingTime').textContent = article.readTime;
    
    // Set article image with category color
    const categoryColors = {
        technology: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        lifestyle: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        business: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        health: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        travel: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    };
    
    const articleImage = document.getElementById('articleImage');
    if (article.image) {
        articleImage.innerHTML = `<img src="${article.image}" alt="${article.title}" style="width: 100%; height: 100%; object-fit: cover; border-radius: var(--radius-lg);">`;
    } else {
        articleImage.style.background = categoryColors[article.category] || categoryColors.technology;
        articleImage.innerHTML = `<i class="fas fa-${getCategoryIcon(article.category)}"></i>`;
    }
    
    // Set article body
    document.getElementById('articleBody').innerHTML = article.content;
    
    // Load tags
    const tagsContainer = document.getElementById('articleTags');
    if (tagsContainer && article.tags) {
        article.tags.forEach(tag => {
            const tagElement = document.createElement('span');
            tagElement.className = 'tag';
            tagElement.textContent = `#${tag}`;
            tagsContainer.appendChild(tagElement);
        });
    }
    
    // Setup share buttons
    setupShareButtons(article);
}

// Get Category Icon (same as main.js)
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

// Format Date (same as main.js)
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Load related articles
function loadRelatedArticles() {
    const article = articlesData.find(a => a.id === articleId);
    if (!article) return;
    
    const relatedArticles = articlesData
        .filter(a => a.category === article.category && a.id !== articleId)
        .slice(0, 3);
    
    const relatedGrid = document.getElementById('relatedArticles');
    if (!relatedGrid) return;
    
    if (relatedArticles.length === 0) {
        relatedGrid.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">No related articles found.</p>';
        return;
    }
    
    relatedArticles.forEach(relatedArticle => {
        const card = createArticleCard(relatedArticle);
        relatedGrid.appendChild(card);
    });
}

// Create Article Card (same as main.js)
function createArticleCard(article) {
    const card = document.createElement('div');
    card.className = 'article-card';
    card.onclick = () => {
        window.location.href = `article.html?id=${article.id}`;
    };
    
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

// Setup share buttons
function setupShareButtons(article) {
    const shareButtons = document.querySelectorAll('.share-btn');
    const currentUrl = window.location.href;
    const title = article.title;
    
    shareButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const icon = btn.querySelector('i');
            
            if (icon.classList.contains('fa-facebook-f')) {
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`, '_blank');
            } else if (icon.classList.contains('fa-twitter')) {
                window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(title)}`, '_blank');
            } else if (icon.classList.contains('fa-linkedin-in')) {
                window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`, '_blank');
            } else if (icon.classList.contains('fa-link')) {
                // Copy link to clipboard
                navigator.clipboard.writeText(currentUrl).then(() => {
                    alert('Link copied to clipboard!');
                });
            }
        });
    });
}

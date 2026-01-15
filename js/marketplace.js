// ============================================
// NOVA-RP - Marketplace (LeBonCoin)
// ============================================

let currentCategory = 'all';
let currentSearchQuery = '';
let selectedAd = null;
let favoriteAds = Storage.get('nova-rp-favorites', []);

let cachedAds = [];

// Initialize Marketplace
async function initMarketplace() {
  await refreshAds(); // Initial fetch
  renderCategoryList();
  renderAds();
  initMarketplaceEvents();
}

// Refresh Ads Cache
async function refreshAds() {
  cachedAds = await DataService.getAds();
}

// Render Category List (Sidebar)
function renderCategoryList() {
  const container = document.getElementById('category-list');
  if (!container) return;

  // Use Cached Ads
  const ads = cachedAds;

  container.innerHTML = marketplaceCategories.map(cat => {
    const count = cat.id === 'all'
      ? ads.length
      : ads.filter(a => a.category === cat.id).length;

    return `
      <button class="category-item ${currentCategory === cat.id ? 'active' : ''}" 
              onclick="selectCategory('${cat.id}')">
        <span><i class="${cat.icon}"></i> ${cat.name}</span>
        ${count > 0 ? `<span class="count">${count}</span>` : ''}
      </button>
    `;
  }).join('');
}

function selectCategory(catId) {
  currentCategory = catId;
  renderCategoryList();
  renderAds();
}

// Render Ads Grid
function renderAds() {
  const container = document.getElementById('ads-grid');
  if (!container) return;

  let ads = [...cachedAds]; // Copy to avoid mutating cache by sort

  // Safety Check
  if (!ads || !Array.isArray(ads) || ads.length === 0) {
    // If no ads in cache (and not loading), maybe show empty
    // But DataService.getAds handles fallback, so cachedAds should be array
    if (ads.length === 0) {
      // Optional: could force refresh here if desperate, but let's trust DataService
    }
  }

  // Filter by category
  if (currentCategory !== 'all') {
    ads = ads.filter(a => a.category === currentCategory);
  }

  // Filter by search
  if (currentSearchQuery) {
    const query = currentSearchQuery.toLowerCase();
    ads = ads.filter(a =>
      (a.title && a.title.toLowerCase().includes(query)) ||
      (a.description && a.description.toLowerCase().includes(query)) ||
      (a.seller && a.seller.toLowerCase().includes(query))
    );
  }

  // Filter by Price Range
  const minPrice = document.getElementById('price-min')?.value;
  const maxPrice = document.getElementById('price-max')?.value;
  if (minPrice) ads = ads.filter(a => a.price >= parseInt(minPrice));
  if (maxPrice) ads = ads.filter(a => a.price <= parseInt(maxPrice));

  // Sort
  const sortValue = document.getElementById('marketplace-sort')?.value || 'date-desc';
  ads.sort((a, b) => {
    switch (sortValue) {
      case 'price-asc': return a.price - b.price;
      case 'price-desc': return b.price - a.price;
      case 'date-asc': return new Date(a.date) - new Date(b.date);
      case 'date-desc': default: return new Date(b.date) - new Date(a.date);
    }
  });

  if (ads.length === 0) {
    const catName = getCategoryName(currentCategory);
    container.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <i class="fas fa-search"></i>
        <h3>Aucune annonce dans ${catName}</h3>
        <p>Soyez le premier à poster une annonce dans cette catégorie !</p>
        <button class="btn btn-primary" onclick="openCreateAdModal()">
          <i class="fas fa-plus"></i> Déposer une annonce
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = ads.map(ad => {
    const isFav = favoriteAds.includes(ad.id);
    return `
    <div class="ad-card" onclick="openAdDetail('${ad.id}')">
      <div class="ad-card-image">
        ${ad.image
        ? `<img src="${ad.image}" alt="${ad.title}">`
        : `<div class="placeholder"><i class="${getCategoryIcon(ad.category)}"></i></div>`
      }
        <span class="ad-category-badge ${ad.category}">
          <i class="${getCategoryIcon(ad.category)}"></i>
          ${getCategoryName(ad.category)}
        </span>
        <button class="fav-btn ${isFav ? 'active' : ''}" onclick="toggleFavorite(event, '${ad.id}')">
          <i class="${isFav ? 'fas' : 'far'} fa-heart"></i>
        </button>
      </div>
      <div class="ad-card-body">
        <h4 class="ad-card-title">${ad.title}</h4>
        <p class="ad-card-description">${ad.description}</p>
        <div class="ad-card-footer">
          <span class="ad-price ${ad.negotiable ? 'negotiable' : ''}">${formatPrice(ad.price)}</span>
          <div class="ad-meta">
            <span><i class="fas fa-user"></i> ${ad.seller}</span>
            <span><i class="fas fa-comment"></i> ${ad.comments.length}</span>
          </div>
        </div>
      </div>
    </div>
  `}).join('');
}

// Get Category Icon
function getCategoryIcon(category) {
  const cat = marketplaceCategories.find(c => c.id === category);
  return cat ? cat.icon : 'fas fa-box';
}

// Get Category Name
function getCategoryName(category) {
  const cat = marketplaceCategories.find(c => c.id === category);
  return cat ? cat.name : category;
}

// Initialize Marketplace Events
function initMarketplaceEvents() {
  // Search input
  const searchInput = document.getElementById('marketplace-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value;
      renderAds();
    });
  }

  // Category Select Toggle
  const categorySelect = document.getElementById('ad-category');
  if (categorySelect) {
    categorySelect.addEventListener('change', (e) => {
      const vehicleFields = document.getElementById('vehicle-fields');
      if (vehicleFields) {
        vehicleFields.style.display = e.target.value === 'vehicules' ? 'block' : 'none';

        // Toggle required attributes for vehicle fields to prevent validation errors when hidden
        const inputs = vehicleFields.querySelectorAll('input');
        inputs.forEach(input => {
          if (e.target.value === 'vehicules') {
            // Optional: make them required if you want, usually better to leave optional or enforce via JS
          }
        });
      }
    });
  }
}

// Open Ad Detail Modal
async function openAdDetail(adId) {
  // Try to find in cache first
  selectedAd = cachedAds.find(a => a.id === adId);

  if (!selectedAd) {
    // If not in cache, maybe refresh?
    await refreshAds();
    selectedAd = cachedAds.find(a => a.id === adId);
  }

  if (!selectedAd) return;

  const modal = document.getElementById('ad-detail-modal');
  const content = modal.querySelector('.modal-body');

  content.innerHTML = `
    <div class="ad-detail">
      <div class="ad-detail-image">
        ${selectedAd.image
      ? `<img src="${selectedAd.image}" alt="${selectedAd.title}">`
      : `<div class="placeholder"><i class="${getCategoryIcon(selectedAd.category)}"></i></div>`
    }
      </div>
      
      <div class="ad-detail-info">
        <div class="ad-detail-header">
          <h3>${selectedAd.title}</h3>
          <span class="ad-detail-price">${formatPrice(selectedAd.price)}${selectedAd.negotiable ? ' <small>(Négociable)</small>' : ''}</span>
        </div>
        
        <div class="ad-detail-meta">
          <div class="ad-detail-meta-item">
            <i class="${getCategoryIcon(selectedAd.category)}"></i>
            <span>${getCategoryName(selectedAd.category)}</span>
          </div>
          <div class="ad-detail-meta-item">
            <i class="fas fa-calendar"></i>
            <span>${formatDate(selectedAd.date)}</span>
          </div>
          ${selectedAd.brand && selectedAd.model ? `
          <div class="ad-detail-meta-item">
            <i class="fas fa-car"></i>
            <span>${selectedAd.brand} ${selectedAd.model}</span>
          </div>` : ''}
          ${selectedAd.mileage ? `
          <div class="ad-detail-meta-item">
            <i class="fas fa-tachometer-alt"></i>
            <span>${selectedAd.mileage} km</span>
          </div>` : ''}
          <div class="ad-detail-meta-item">
            <i class="fas fa-eye"></i>
            <span>${Math.floor(Math.random() * 100) + 10} vues</span>
          </div>
        </div>
        
        <div class="ad-detail-description">
          <h4>Description</h4>
          <p>${selectedAd.description}</p>
        </div>
        
        <div class="contact-seller">
          <div class="seller-avatar">${selectedAd.seller.charAt(0).toUpperCase()}</div>
          <div class="seller-info">
            <h4>${selectedAd.seller}</h4>
            <p>Vendeur depuis 2024</p>
          </div>
        </div>
      </div>
      
      <div class="comments-section">
        <h4><i class="fas fa-comments"></i> Commentaires <span class="badge">${selectedAd.comments.length}</span></h4>
        
        <div class="comments-list" id="comments-list">
          ${selectedAd.comments.length === 0
      ? '<p class="text-muted">Aucun commentaire pour le moment. Soyez le premier !</p>'
      : selectedAd.comments.map(comment => `
                <div class="comment">
                  <div class="comment-avatar">${comment.author.charAt(0).toUpperCase()}</div>
                  <div class="comment-content">
                    <div class="comment-header">
                      <span class="comment-author">${comment.author}</span>
                      <span class="comment-date">${formatDate(comment.date)}</span>
                    </div>
                    <p class="comment-text">${comment.text}</p>
                  </div>
                </div>
              `).join('')
    }
        </div>
        
        <form class="comment-form" onsubmit="submitComment(event, '${selectedAd.id}')">
          <input type="text" class="form-control" placeholder="Ajouter un commentaire..." id="comment-input" required>
          <button type="submit" class="btn btn-primary btn-sm">
            <i class="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </div>
  `;

  openModal('ad-detail-modal');
}

// Submit Comment
async function submitComment(e, adId) {
  e.preventDefault();

  const input = document.getElementById('comment-input');
  const text = input.value.trim();

  if (!text) return;

  const user = getCurrentUser();
  await DataService.addComment(adId, user.name, text);
  await refreshAds(); // Refresh to get the new comment


  // Refresh the modal
  openAdDetail(adId);
  showToast('Commentaire ajouté !', 'success');
}

// Open Create Ad Modal
function openCreateAdModal() {
  const modal = document.getElementById('create-ad-modal');
  const form = modal.querySelector('#create-ad-form');

  if (form) {
    form.reset();
    const preview = form.querySelector('.image-upload .preview');
    if (preview) preview.remove();
  }

  openModal('create-ad-modal');
}

// Handle Image Upload Preview
function handleImagePreview(input) {
  const container = input.closest('.image-upload');
  let preview = container.querySelector('.preview');

  if (input.files && input.files[0]) {
    const reader = new FileReader();

    reader.onload = (e) => {
      if (!preview) {
        preview = document.createElement('img');
        preview.className = 'preview';
        container.appendChild(preview);
      }
      preview.src = e.target.result;

      // Hide the upload icon and text
      container.querySelector('i').style.display = 'none';
      container.querySelector('p').style.display = 'none';
    };

    reader.readAsDataURL(input.files[0]);
  }
}

// Submit Create Ad Form
async function submitCreateAd(e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  const user = getCurrentUser();

  // Get image if uploaded
  let imageData = null;
  const imageInput = form.querySelector('input[type="file"]');
  const preview = form.querySelector('.image-upload .preview');
  if (preview) {
    imageData = preview.src;
  }

  const newAd = {
    title: formData.get('title'),
    description: formData.get('description'),
    price: parseInt(formData.get('price')) || 0,
    negotiable: formData.get('negotiable') === 'on',
    category: formData.get('category'),
    seller: user.name,
    image: imageData,
    brand: formData.get('brand'),
    model: formData.get('model'),
    mileage: formData.get('mileage')
  };

  const btn = form.querySelector('button[type="submit"]');
  const originalText = btn.innerHTML;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Publication...';
  btn.disabled = true;

  try {
    await DataService.addAd(newAd);
    await refreshAds(); // Refresh cache

    closeModal('create-ad-modal');
    renderCategoryList();
    renderAds();
    showToast('Annonce créée avec succès !', 'success');
  } catch (err) {
    console.error(err);
    showToast('Erreur lors de la publication', 'error');
  } finally {
    btn.innerHTML = originalText;
    btn.disabled = false;
  }
}

// Update Sort
function updateSort(val) {
  renderAds();
}

// Toggle Favorite
function toggleFavorite(e, adId) {
  e.stopPropagation(); // Prevent opening modal

  const index = favoriteAds.indexOf(adId);
  if (index === -1) {
    favoriteAds.push(adId);
    showToast('Annonce ajoutée aux favoris', 'success');
  } else {
    favoriteAds.splice(index, 1);
    showToast('Annonce retirée des favoris', 'info');
  }

  Storage.set('nova-rp-favorites', favoriteAds);
  renderAds();
}

// Set Username Modal
function openUsernameModal() {
  openModal('username-modal');
}

function submitUsername(e) {
  e.preventDefault();
  const input = document.getElementById('username-input');
  const name = input.value.trim();

  if (name) {
    setCurrentUser(name);
    closeModal('username-modal');
    showToast(`Bienvenue ${name} !`, 'success');

    // Update display if exists
    const userDisplay = document.getElementById('current-user');
    if (userDisplay) {
      userDisplay.textContent = name;
    }
  }
}

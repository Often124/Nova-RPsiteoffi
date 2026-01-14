// ============================================
// NOVA-RP - Main Application
// ============================================

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initMobileMenu();
    initScrollEffects();
    renderCurrentSection();
});

// Current section state
let currentSection = 'home';

// Navigation
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.getAttribute('data-section');
            navigateTo(section);

            // Close mobile menu
            document.querySelector('.nav-links').classList.remove('active');
        });
    });

    // Handle hash on load
    const hash = window.location.hash.slice(1);
    if (hash) {
        navigateTo(hash);
    }
}

// Navigate to section
function navigateTo(section) {
    currentSection = section;

    // Update URL
    window.history.pushState(null, '', `#${section}`);

    // Update nav active state
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.toggle('active', link.getAttribute('data-section') === section);
    });

    // Hide all sections
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));

    // Show target section
    const targetSection = document.getElementById(section);
    if (targetSection) {
        targetSection.classList.add('active');
        renderCurrentSection();

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Mobile Menu
function initMobileMenu() {
    const toggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (toggle) {
        toggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}

// Scroll Effects
function initScrollEffects() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Render Current Section Content
function renderCurrentSection() {
    switch (currentSection) {
        case 'home':
            // Home is static, no dynamic rendering needed
            break;
        case 'reglement':
            renderRules();
            break;
        case 'mairie':
            renderMairie();
            break;
        case 'leboncoin':
            initMarketplace();
            break;
    }
}



// Render Rules Section
function renderRules() {
    const container = document.getElementById('rules-container');
    if (!container || container.dataset.rendered) return;

    container.innerHTML = rulesData.map(category => `
    <div class="rule-category">
      <h3><i class="${category.icon}"></i> ${category.category}</h3>
      ${category.rules.map((rule, index) => `
        <div class="rule-item">
          <span class="rule-number">${index + 1}</span>
          <div class="rule-content">
            <h4>${rule.title}</h4>
            <p>${rule.description}</p>
          </div>
        </div>
      `).join('')}
    </div>
  `).join('');

    container.dataset.rendered = 'true';
}



// Toast Notifications
function showToast(message, type = 'info') {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const icons = {
        success: 'fas fa-check-circle',
        error: 'fas fa-times-circle',
        warning: 'fas fa-exclamation-triangle',
        info: 'fas fa-info-circle'
    };

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
    <i class="${icons[type]}"></i>
    <span>${message}</span>
  `;

    container.appendChild(toast);

    // Remove after 4 seconds
    setTimeout(() => {
        toast.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

// Modal System
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Close modal on overlay click
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
        e.target.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.active').forEach(modal => {
            modal.classList.remove('active');
        });
        document.body.style.overflow = '';
    }
});

// Handle browser back/forward
window.addEventListener('popstate', () => {
    const hash = window.location.hash.slice(1) || 'home';
    navigateTo(hash);
});

// Mairie & Entreprises Logic
function renderMairie() {
    const servicesContainer = document.getElementById('mairie-services-grid');
    const entreprisesContainer = document.getElementById('mairie-entreprises-grid');

    if (servicesContainer && !servicesContainer.dataset.rendered) {
        servicesContainer.innerHTML = `
        <div class="card" style="grid-column: 1 / -1;">
            <h3><i class="fas fa-info-circle"></i> Taxes et Impôts</h3>
            <div class="grid grid-3" style="margin-top: 1rem;">
                ${mairieData.taxes.map(tax => `
                    <div class="text-center">
                        <h4 style="color: var(--primary); font-size: 1.5rem;">${tax.value}</h4>
                        <p>${tax.title}</p>
                    </div>
                `).join('')}
            </div>
        </div>
        ${mairieData.services.map(service => `
            <div class="card">
                <div style="display: flex; justify-content: space-between; align-items: start;">
                    <h4>${service.title}</h4>
                    <span class="badge" style="background: var(--surface);">${formatPrice(service.price)}</span>
                </div>
                <p>${service.description}</p>
                <button class="btn btn-primary btn-sm mt-2" onclick="showToast('Rendez-vous à la mairie en jeu !')">Prendre RDV</button>
            </div>
        `).join('')}
    `;
        servicesContainer.dataset.rendered = 'true';
    }

    if (entreprisesContainer && !entreprisesContainer.dataset.rendered) {
        entreprisesContainer.innerHTML = entreprisesData.map(ent => `
        <div class="card">
            ${ent.image ? `<img src="${ent.image}" style="width:100%; height:150px; object-fit:cover; border-radius:var(--radius-md) var(--radius-md) 0 0; margin:-1.5rem -1.5rem 1rem -1.5rem;">` : ''}
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <span class="tag feature">${ent.type}</span>
                ${getStatusBadge(ent.status)}
            </div>
            <h4>${ent.name}</h4>
            <p>${ent.description}</p>
            ${ent.status === 'Disponible'
                ? `<div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--glass-border);">
                     <div style="font-weight: 700; color: var(--primary); font-size: 1.25rem;">${formatPrice(ent.price)}</div>
                     <button class="btn btn-primary btn-sm mt-2" style="width: 100%;" onclick="showToast('Contactez la mairie sur Discord !')">Acheter</button>
                   </div>`
                : `<div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--glass-border);">
                     <div style="color: var(--text-muted);"><i class="fas fa-user"></i> PDG: ${ent.owner}</div>
                   </div>`
            }
        </div>
    `).join('');
        entreprisesContainer.dataset.rendered = 'true';
    }
}

function switchMairieTab(tabName) {
    // Update Tabs UI
    document.querySelectorAll('.tabs .tab').forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');

    // Show/Hide Content
    document.getElementById('mairie-content-services').style.display = tabName === 'services' ? 'block' : 'none';
    document.getElementById('mairie-content-entreprises').style.display = tabName === 'entreprises' ? 'block' : 'none';
}

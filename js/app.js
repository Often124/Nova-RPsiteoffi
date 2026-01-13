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
        case 'staff':
            renderStaff();
            break;
        case 'changelog':
            renderChangelog();
            break;
        case 'candidatures':
            initApplicationForm();
            break;
        case 'leboncoin':
            initMarketplace();
            break;
        case 'liens':
            // Static content
            break;
    }
}

// Render Staff Section
function renderStaff() {
    const container = document.getElementById('staff-grid');
    if (!container || container.dataset.rendered) return;

    container.innerHTML = staffData.map(member => `
    <div class="card staff-card">
      <div class="avatar">${member.avatar}</div>
      <h4>${member.name}</h4>
      <span class="role ${member.roleClass}">${member.role}</span>
      <p class="bio">${member.bio}</p>
    </div>
  `).join('');

    container.dataset.rendered = 'true';
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

// Render Changelog Section
function renderChangelog() {
    const container = document.getElementById('changelog-container');
    if (!container || container.dataset.rendered) return;

    container.innerHTML = changelogData.map(item => `
    <div class="changelog-item">
      <span class="changelog-date">${formatDate(item.date)}</span>
      <h4>${item.title}</h4>
      <p>${item.description}</p>
      <div class="changelog-tags">
        ${item.tags.map(tag => `<span class="tag ${tag}">${getTagLabel(tag)}</span>`).join('')}
      </div>
    </div>
  `).join('');

    container.dataset.rendered = 'true';
}

// Get tag label
function getTagLabel(tag) {
    const labels = {
        new: 'Nouveau',
        fix: 'Correction',
        update: 'Mise à jour',
        feature: 'Fonctionnalité'
    };
    return labels[tag] || tag;
}

// Application Form
function initApplicationForm() {
    const form = document.getElementById('application-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Simulate form submission
        showToast('Candidature envoyée avec succès ! Nous reviendrons vers vous.', 'success');
        form.reset();
    });
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

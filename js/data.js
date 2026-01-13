// ============================================
// NOVA-RP - Data & Content
// ============================================

// Staff Data
const staffData = [
    {
        name: "NovaAdmin",
        role: "Fondateur",
        roleClass: "admin",
        avatar: "👑",
        bio: "Créateur et administrateur principal de Nova-RP. Passionné de RP depuis 2018."
    },
    {
        name: "DarkPhoenix",
        role: "Co-Fondateur",
        roleClass: "admin",
        avatar: "🔥",
        bio: "Co-fondateur et responsable du développement des scripts et systèmes."
    },
    {
        name: "SkyWatcher",
        role: "Admin",
        roleClass: "admin",
        avatar: "🌟",
        bio: "Administrateur en charge des événements RP et de la modération."
    },
    {
        name: "BlueWolf",
        role: "Modérateur",
        roleClass: "modo",
        avatar: "🐺",
        bio: "Modérateur principal, toujours là pour aider les nouveaux joueurs."
    },
    {
        name: "CrimsonBlade",
        role: "Modérateur",
        roleClass: "modo",
        avatar: "⚔️",
        bio: "Modérateur spécialisé dans la résolution des conflits RP."
    },
    {
        name: "NightOwl",
        role: "Modérateur",
        roleClass: "modo",
        avatar: "🦉",
        bio: "Modérateur nocturne, veille sur le serveur pendant les heures creuses."
    }
];

// Rules Data
const rulesData = [
    {
        category: "Règles Générales",
        icon: "fas fa-gavel",
        rules: [
            {
                title: "Respect obligatoire",
                description: "Le respect entre joueurs est primordial. Aucune insulte, discrimination ou harcèlement ne sera toléré."
            },
            {
                title: "Pas de meta-gaming",
                description: "L'utilisation d'informations obtenues hors RP (Discord, stream, etc.) est strictement interdite."
            },
            {
                title: "Pas de power-gaming",
                description: "Forcer des actions sur d'autres joueurs sans leur laisser le choix est interdit. Laissez les autres jouer."
            },
            {
                title: "Micro obligatoire",
                description: "Un microphone fonctionnel est requis pour jouer sur le serveur. Le RP vocal est essentiel."
            },
            {
                title: "Pas de cheat/hack",
                description: "L'utilisation de logiciels tiers, mods non autorisés ou exploits est bannie définitivement."
            }
        ]
    },
    {
        category: "Règles RP",
        icon: "fas fa-theater-masks",
        rules: [
            {
                title: "Fear RP",
                description: "Vous devez agir de manière réaliste face au danger. Sous la menace d'une arme, coopérez."
            },
            {
                title: "New Life Rule",
                description: "Après une mort RP, vous oubliez les circonstances de votre décès. Pas de vengeance immédiate."
            },
            {
                title: "Pas de Random Kill",
                description: "Tuer un joueur sans raison RP valable est interdit. Chaque action doit avoir un contexte."
            },
            {
                title: "Pas de Combat Logging",
                description: "Se déconnecter pendant une action RP pour l'éviter est interdit et sanctionné."
            },
            {
                title: "Drive RP réaliste",
                description: "Conduisez de manière réaliste. Pas de cascade impossible ou de conduite irresponsable sans raison."
            }
        ]
    },
    {
        category: "Règles de Communication",
        icon: "fas fa-comments",
        rules: [
            {
                title: "RP en toutes circonstances",
                description: "Restez en RP à tout moment sur le serveur. Utilisez /ooc uniquement si nécessaire."
            },
            {
                title: "Pas de HRP non sollicité",
                description: "Ne brisez pas le RP des autres avec des conversations hors personnage."
            },
            {
                title: "Discord = Support",
                description: "Le Discord est réservé aux discussions communautaires et au support, pas au RP."
            }
        ]
    }
];

// Changelog Data
const changelogData = [
    {
        date: "2026-01-13",
        title: "Mise à jour économique majeure",
        description: "Refonte complète du système économique avec de nouveaux métiers et un marché boursier RP.",
        tags: ["feature", "update"]
    },
    {
        date: "2026-01-10",
        title: "Nouveau système de véhicules",
        description: "Ajout de 50 nouveaux véhicules avec personnalisation avancée et système de tuning.",
        tags: ["new", "feature"]
    },
    {
        date: "2026-01-08",
        title: "Correction bugs critiques",
        description: "Résolution des problèmes de synchronisation et des crashes serveur récurrents.",
        tags: ["fix"]
    },
    {
        date: "2026-01-05",
        title: "Système immobilier V2",
        description: "Nouveau système de location et d'achat immobilier avec contrats RP et décoration intérieure.",
        tags: ["feature", "update"]
    },
    {
        date: "2026-01-01",
        title: "Bonne année Nova-RP !",
        description: "Événement spécial nouvel an avec feux d'artifice, cadeaux exclusifs et double XP.",
        tags: ["new"]
    }
];

// Marketplace Categories
const marketplaceCategories = [
    { id: "all", name: "Toutes", icon: "fas fa-th-large" },
    { id: "vehicules", name: "Véhicules", icon: "fas fa-car" },
    { id: "immobilier", name: "Immobilier", icon: "fas fa-home" },
    { id: "emplois", name: "Emplois", icon: "fas fa-briefcase" },
    { id: "services", name: "Services", icon: "fas fa-tools" },
    { id: "divers", name: "Divers", icon: "fas fa-box-open" }
];

// Sample Ads Data (will be merged with localStorage)
const sampleAds = [
    {
        id: "ad-1",
        title: "Vapid Dominator GTX - État neuf",
        description: "Véhicule sportif haut de gamme, faible kilométrage, full options. Tuning complet avec suspension sport et échappement performance. Parfait pour les courses ou le prestige.\n\nCaractéristiques :\n- Moteur V8 surpuissant\n- Peinture métallisée noire\n- Intérieur cuir\n- GPS intégré",
        price: 185000,
        negotiable: true,
        category: "vehicules",
        seller: "SpeedDemon",
        date: "2026-01-13",
        image: null,
        comments: [
            { author: "CarLover", text: "Elle est toujours dispo ?", date: "2026-01-13" },
            { author: "SpeedDemon", text: "Oui, toujours en vente !", date: "2026-01-13" }
        ]
    },
    {
        id: "ad-2",
        title: "Appartement Vinewood Hills - Vue panoramique",
        description: "Superbe appartement de standing avec vue imprenable sur Los Santos. 3 chambres, 2 salles de bain, terrasse avec piscine privée. Quartier calme et sécurisé.\n\nIdéal pour roleplay de luxe ou base d'opérations.",
        price: 750000,
        negotiable: false,
        category: "immobilier",
        seller: "RealEstateKing",
        date: "2026-01-12",
        image: null,
        comments: []
    },
    {
        id: "ad-3",
        title: "Recherche mécanicien qualifié",
        description: "Le garage LS Customs recherche un mécanicien expérimenté pour rejoindre notre équipe.\n\nExigences :\n- Expérience RP en mécanique\n- Disponibilité régulière\n- Bonne communication\n\nSalaire attractif + commissions sur les réparations.",
        price: 0,
        negotiable: false,
        category: "emplois",
        seller: "LSCustomsBoss",
        date: "2026-01-11",
        image: null,
        comments: [
            { author: "GearHead", text: "Intéressé ! Comment postuler ?", date: "2026-01-12" }
        ]
    },
    {
        id: "ad-4",
        title: "Service de taxi privé 24/7",
        description: "Besoin d'un transport fiable et discret ? Notre service de taxi premium est disponible 24h/24.\n\n- Véhicules luxueux\n- Chauffeurs professionnels\n- Confidentialité garantie\n- Tarifs compétitifs\n\nContactez-nous pour réservation !",
        price: 500,
        negotiable: true,
        category: "services",
        seller: "LuxuryRides",
        date: "2026-01-10",
        image: null,
        comments: []
    },
    {
        id: "ad-5",
        title: "Collection de montres de luxe",
        description: "Vends ma collection personnelle de montres RP.\n\n- Rolex Submariner\n- Omega Seamaster\n- Tag Heuer Monaco\n\nPrix pour l'ensemble ou à l'unité sur demande.",
        price: 45000,
        negotiable: true,
        category: "divers",
        seller: "LuxuryCollector",
        date: "2026-01-09",
        image: null,
        comments: []
    },
    {
        id: "ad-6",
        title: "Pfister Comet SR - Édition limitée",
        description: "Rare Pfister Comet SR édition spéciale. Moins de 100 exemplaires sur le serveur !\n\nCouleur exclusive bleu nuit avec intérieur alcantara. Jamais crashée, entretien régulier chez le concessionnaire officiel.",
        price: 320000,
        negotiable: false,
        category: "vehicules",
        seller: "EliteDriver",
        date: "2026-01-08",
        image: null,
        comments: []
    }
];

// LocalStorage Helpers
const Storage = {
    get: (key, defaultValue = null) => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch {
            return defaultValue;
        }
    },

    set: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch {
            return false;
        }
    },

    remove: (key) => {
        localStorage.removeItem(key);
    }
};

// Initialize ads in localStorage if not present
function initializeAds() {
    const existingAds = Storage.get('nova-rp-ads');
    if (!existingAds || existingAds.length === 0) {
        Storage.set('nova-rp-ads', sampleAds);
    }
}

// Get all ads
function getAds() {
    return Storage.get('nova-rp-ads', sampleAds);
}

// Add new ad
function addAd(ad) {
    const ads = getAds();
    ad.id = 'ad-' + Date.now();
    ad.date = new Date().toISOString().split('T')[0];
    ad.comments = [];
    ads.unshift(ad);
    Storage.set('nova-rp-ads', ads);
    return ad;
}

// Update ad
function updateAd(adId, updates) {
    const ads = getAds();
    const index = ads.findIndex(a => a.id === adId);
    if (index !== -1) {
        ads[index] = { ...ads[index], ...updates };
        Storage.set('nova-rp-ads', ads);
        return ads[index];
    }
    return null;
}

// Delete ad
function deleteAd(adId) {
    const ads = getAds();
    const filtered = ads.filter(a => a.id !== adId);
    Storage.set('nova-rp-ads', filtered);
    return filtered;
}

// Add comment to ad
function addComment(adId, author, text) {
    const ads = getAds();
    const ad = ads.find(a => a.id === adId);
    if (ad) {
        ad.comments.push({
            author,
            text,
            date: new Date().toISOString().split('T')[0]
        });
        Storage.set('nova-rp-ads', ads);
        return ad;
    }
    return null;
}

// Current user (simulated)
function getCurrentUser() {
    return Storage.get('nova-rp-user', { name: 'Visiteur' + Math.floor(Math.random() * 1000) });
}

function setCurrentUser(name) {
    Storage.set('nova-rp-user', { name });
}

// Format price
function formatPrice(price) {
    if (price === 0) return 'Gratuit';
    return new Intl.NumberFormat('fr-FR').format(price) + ' $';
}

// Format date
function formatDate(dateStr) {
    const date = new Date(dateStr);
    const now = new Date();
    const diff = Math.floor((now - date) / (1000 * 60 * 60 * 24));

    if (diff === 0) return "Aujourd'hui";
    if (diff === 1) return "Hier";
    if (diff < 7) return `Il y a ${diff} jours`;

    return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
}

// Initialize on load
document.addEventListener('DOMContentLoaded', initializeAds);

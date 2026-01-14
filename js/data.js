
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

// Rules Data from "📜 Règlement Roleplay – Nova-RP.pdf"
const rulesData = [
    {
        category: "1️⃣ Principes du Roleplay",
        icon: "fas fa-theater-masks",
        rules: [
            {
                title: "🎭 Roleplay (RP)",
                description: "Vous devez agir comme le ferait votre personnage dans la vraie vie. Vos actions doivent être logiques, réalistes et cohérentes avec la situation. La valeur de votre vie est primordiale."
            },
            {
                title: "🚫 Hors Roleplay (HRP)",
                description: "Toute action irréaliste ou incohérente est interdite. Les discussions HRP sont interdites en jeu (chat vocal et écrit), sauf autorisation staff."
            },
            {
                title: "🧠 Powergaming",
                description: "Interdit de réaliser des actions impossibles ou irréalistes (ex : courir après un accident grave, sortir une arme instantanément)."
            },
            {
                title: "👀 Metagaming",
                description: "Utiliser des informations obtenues hors jeu (Discord, stream, amis) est strictement interdit."
            }
        ]
    },
    {
        category: "2️⃣ Règles de Vie et de Mort",
        icon: "fas fa-heartbeat",
        rules: [
            {
                title: "❤️ FearRP",
                description: "Vous devez craindre pour la vie de votre personnage. Braqué, menacé ou en infériorité claire, vous devez coopérer."
            },
            {
                title: "💀 Mort RP",
                description: "Une Mort RP est une mort définitive du personnage. Elle ne peut être décidée que par le staff."
            },
            {
                title: "🔁 NLR (New Life Rule)",
                description: "Après une mort, vous oubliez totalement la scène. Interdiction de retourner sur le lieu ou de se venger."
            }
        ]
    },
    {
        category: "3️⃣ Interactions et Conflits",
        icon: "fas fa-fist-raised",
        rules: [
            {
                title: "🔫 Gunfight",
                description: "Les fusillades doivent être justifiées par un contexte RP. Tir à vue interdit."
            },
            {
                title: "🤜 Freepunch / Freekill",
                description: "Frapper ou tuer sans raison RP valable est interdit."
            },
            {
                title: "🗣️ Insultes et menaces",
                description: "Les insultes doivent rester RP. Aucune discrimination n’est tolérée."
            }
        ]
    },
    {
        category: "4️⃣ Criminalité",
        icon: "fas fa-mask",
        rules: [
            {
                title: "🕵️ Activités Illégales",
                description: "Toute activité illégale doit être progressive et crédible. Le braquage abusif ou en chaîne est interdit. Le maximum d’imprimantes à billets est de 5/personne, interdiction de profiter “d'un pote qui ne se connecte jamais.” Il n’est pas autorisé de demander à d’autres personnes d’imprimer pour eux ni même de gagner des pourcentages grâce à l’imprimante des autres. Il est interdit de corrompre : Samu, Police, Pompier, Mairie, Fourrière, Station."
            },
            {
                title: "🏦 Braquages",
                description: "Nombre de policiers requis : 4 en service actif. Négociation obligatoire."
            }
        ]
    },
    {
        category: "5️⃣ Forces de l’Ordre et Services Publics",
        icon: "fas fa-user-shield",
        rules: [
            {
                title: "🚓 Police / Gendarmerie / Fourrière",
                description: "Devoir de montrer l’exemple et de cohérence. Usage de la force uniquement en dernier recours (nous sommes en France). Il est interdit de “PIT” un véhicule, la physique ne permet pas une bonne expérience. La fourrière se réserve le droit de garder votre véhicule maximum 1 semaine, une fois ce délai dépassé votre véhicule est revendu."
            },
            {
                title: "🚑 EMS",
                description: "Priorité aux blessés. Être neutre dans les conflits."
            }
        ]
    },
    {
        category: "6️⃣ Règles de Communication",
        icon: "fas fa-volume-up",
        rules: [
            {
                title: "📢 Audio et Micros",
                description: "Pas de musique forte ou de sons parasites. Interdit de souffler dans son microphone. Les soundboard RP sont autorisés."
            }
        ]
    },
    {
        category: "7️⃣ Stream & Enregistrements",
        icon: "fas fa-video",
        rules: [
            {
                title: "📹 Règles de diffusion",
                description: "Streamhack interdit. Toute diffusion doit respecter le RP et les règles. Un enregistrement vous montrant en HRP sera sanctionné."
            }
        ]
    },
    {
        category: "8️⃣ Sanctions",
        icon: "fas fa-gavel",
        rules: [
            {
                title: "⚖️ Conséquences",
                description: "Le non-respect du règlement peut entraîner : Avertissement, Ban temporaire, Ban définitif. La modération se réserve le droit d’adapter la sanction."
            }
        ]
    },
    {
        category: "9️⃣ Staff",
        icon: "fas fa-crown",
        rules: [
            {
                title: "👑 Rôle du Staff",
                description: "Le staff est neutre et décisionnaire. Toute contestation se fait calmement en ticket."
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

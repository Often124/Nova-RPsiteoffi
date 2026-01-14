# 🛠️ Configuration et Prérequis Nova-RP

Ce projet nécessite quelques outils pour fonctionner correctement en local et être déployé.

## 📋 Prérequis installés

- **Node.js** : ✅ Installé (v24.13.0)
  - *Utile pour :* Tester le site localement, gérer les dépendances futures.
- **Python** : ✅ Installé (v3.14.2)
  - *Utile pour :* Scripts d'automatisation (ex: extraction PDF).

## ❌ Manquant (Installation en cours...)

- **Git** : ❌ Non détecté
  - *Indispensable pour :* Sauvegarder l'historique, envoyer les modifications sur GitHub.

## 🚀 Installation de Git

Si l'installation automatique échoue, vous pouvez installer Git manuellement :
1. Télécharger : [https://git-scm.com/download/win](https://git-scm.com/download/win)
2. Installer en laissant les options par défaut.
3. Redémarrer votre terminal (ou VS Code) pour que la commande `git` soit reconnue.

## 💻 Commandes Utiles

### Lancer le site (méthode simple)
Ouvrez simplement le fichier `index.html` dans votre navigateur.

### Lancer le site (méthode pro avec Node.js)
Si vous voulez un serveur local (hot-reload) :
```bash
npx serve .
```

### Mettre à jour GitHub
Une fois Git installé :
```bash
git add .
git commit -m "Description des changements"
git push
```

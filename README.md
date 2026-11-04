# AWA1 — squelette de projet individuel [NOUVEAU]

## Prérequis

Node.js LTS, npm, éditeur de code et navigateur.

## Démarrage

Dans le dossier `projet-individuel` :

1. Installer les dépendances : `npm install`
2. Terminal 1 : `npm run server` (API à `http://localhost:3001/api/items`)
3. Terminal 2 : `npm run dev` (ouvrir l’URL Vite affichée)

Le projet utilise Vue 3 et le plugin Vite `@vitejs/plugin-vue`, déclaré dans `package.json` et activé dans `vite.config.js`.

**Si une ancienne version a déjà été installée :** après avoir remplacé les fichiers, exécuter `npm install` de nouveau, puis redémarrer Vite. Pas besoin de supprimer `node_modules` sauf si l'installation reste incohérente.

## But

L’API fournit un jeu de données simple, affiché par le frontend Vue. C’est une base de départ, pas le projet fini. Personnaliser le thème, enrichir les données et ajouter les animations au fil des semaines. Les exemples autonomes sont dans `../demos/`.

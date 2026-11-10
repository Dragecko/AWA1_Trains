# AWA1 — CFF Collection

Une collection de trains suisses (Giruno, ICN, FV-Dosto). On parcourt les trains, puis on ouvre la fiche de l'un d'eux.

> Concept de présentation indépendant · Non affilié aux CFF. Visuels repris de la maquette « CFF Collection ».

## Prérequis

Node.js LTS, npm, éditeur de code et navigateur.

## Démarrage

1. Installer les dépendances : `npm install`
2. Terminal 1 : `npm run server` (API à `http://localhost:3001/api/items`)
3. Terminal 2 : `npm run dev` (ouvrir l'URL Vite affichée)

## API

| Route | Réponse |
|---|---|
| `GET /api/items` | Liste des 3 trains (id, code, nom, description, image) |

## Organisation

```
server/index.js     API Express (données des trains)
public/images/      Images des trains
src/App.vue         Liste des trains, fiche d'un train, rideau
src/style.css       Styles et animations CSS
```

---

## S2 — Interactions CSS

### Interaction 1 — Survol d'une carte (transition)

- **Besoin :** montrer qu'une carte est cliquable, sans déplacer le reste de la page.
- **Déclencheur :** `:hover` (souris) et `:focus-visible` (clavier, touche Tab).
- **Effet :** le fond de la carte fonce légèrement et le train avance et grandit (`transform: translateX(-10px) scale(1.03)`).
- **Pourquoi une transition :** il y a deux états (normal / survolé). La transition adoucit le passage à l'aller et au retour, car elle est placée sur l'état de départ.
- **Pourquoi `transform` :** il ne recalcule pas la mise en page, donc rien d'autre ne bouge.

### Interaction 2 — Rideau rouge entre la liste et la fiche (@keyframes)

- **Besoin :** signaler clairement le changement de vue quand on ouvre un train ou qu'on revient à la collection.
- **Déclencheur :** clic ou touche Entrée sur une carte, ou sur « ← La collection ». Vue ajoute la classe `.run` et le CSS joue l'animation.
- **Effet :** le rideau monte, recouvre l'écran (la vue change à ce moment), puis repart par le haut.
- **Pourquoi des keyframes :** l'animation a 3 étapes (0 %, 50 %, 100 %). Une transition ne va que d'un état à un autre.
- **Robustesse :** les clics répétés pendant l'animation sont ignorés.

### Accessibilité

- Les cartes sont atteignables au clavier (`tabindex="0"`) et s'ouvrent avec Entrée.
- `prefers-reduced-motion` : plus aucun mouvement. Le train ne glisse plus, il n'y a plus de rideau et la vue change immédiatement. Les états finaux restent visibles.

### Test clavier

| Étape | Résultat attendu | OK |
|---|---|---|
| `Tab` jusqu'à la première carte | Le fond fonce, le train avance | ☐ |
| `Tab` / `Maj + Tab` | Le focus passe d'une carte à l'autre, dans l'ordre | ☐ |
| `Entrée` sur une carte | Le rideau rouge passe, la fiche du train s'affiche | ☐ |
| `Tab` puis `Entrée` sur « ← La collection » | Le rideau passe, retour à la liste | ☐ |

### Test « réduire les animations »

Windows : Paramètres → Accessibilité → Effets visuels → désactiver « Effets d'animation », puis recharger la page.

| Étape | Résultat attendu | OK |
|---|---|---|
| Survol d'une carte | Le fond change, le train est directement à sa position finale | ☐ |
| Clic sur une carte | Pas de rideau, la fiche s'affiche tout de suite | ☐ |

---

## Journal des changements

- **S2**
  - Style de la maquette (police Arial, couleurs CFF).
  - Données des 3 trains dans l'API et images dans `public/images/`.
  - Interaction 1 : survol et focus des cartes (transition sur le fond et le train).
  - Vue détail d'un train.
  - Interaction 2 : rideau rouge `@keyframes` entre la liste et la fiche.
  - Prise en charge de `prefers-reduced-motion`.

## Sources et usages d'IA

- Maquette « CFF Collection » (code et images) générée avec ChatGPT.
- Exercices du cours : 01-css-transform, 02-css-keyframes.
- Claude (Anthropic) : aide à la mise en place du jalon S2, étape par étape (concrettement a lu le PPTX et ma donner une liste des taches) il a aussi aider pour le .md.
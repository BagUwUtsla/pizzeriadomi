# Pizzeria d'Omi — site web

Site vitrine statique (HTML/CSS/JS, sans build) pour la Pizzeria d'Omi, 2 rue Jeanne d'Arc, Lille.
Basé sur le design « Tricolore v2 » (desktop + mobile).

## Fichiers

- `index.html` — la page (carte, horaires, accès)
- `styles.css` — styles ; la version mobile est dans le bloc `@media (max-width: 720px)`
- `script.js` — statut ouvert/fermé, jour en cours dans les horaires, filtres de la carte
- `images/` — photos des pizzas

## Modifier

- **Prix / pizzas** : dans `index.html`, section `#carte`. Chaque pizza est un `<li>` avec
  `data-base="t"` (tomate) ou `"c"` (crème), et `data-veg` si végétarienne.
- **Horaires** : dans `script.js` (`HOURS`) *et* dans `index.html` (liste `data-hours` + bloc JSON-LD pour Google, en haut).

## Aperçu local

```bash
python3 -m http.server 8000
```

Puis ouvrir http://localhost:8000

## Déploiement GitHub Pages

1. Créer un dépôt sur GitHub et pousser ce dossier sur la branche `main`.
2. Dans le dépôt : **Settings → Pages → Build and deployment → Source : Deploy from a branch**,
   branche `main`, dossier `/ (root)`.
3. Le site sera en ligne sur `https://<utilisateur>.github.io/<dépôt>/` en une minute ou deux.

Pour un nom de domaine (ex. `pizzeriadomi.fr`), l'ajouter dans **Settings → Pages → Custom domain**.

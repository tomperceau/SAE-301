# 📚 Guide Rapide Tailwind CSS - Contrôle

## 🎯 Structure HTML Sémantique

### Éléments principaux à utiliser
```html
<main>          <!-- Contenu principal -->
<article>       <!-- Articles/cartes/conteneurs principaux -->
<section>       <!-- Sections de contenu -->
<header>        <!-- En-têtes -->
<footer>        <!-- Pieds de page -->
<aside>         <!-- Contenu secondaire -->
<figure>        <!-- Images avec légendes -->
<nav>           <!-- Navigation/contrôles -->
```

### 🧭 Quand utiliser quo
- `<main>` : une seule fois, pour tout le contenu central 
- `<header>` / `<footer>` : en haut/bas de la page ou d’un article
- `<article>`: contenu indépendant ou réutilisable (carte, post, fiche)
- `<section>` : regroupe un ensemble logique de contenu (souvent titré)
- `<aside>`: infos ou actions secondaires (panneau latéral, résumé, panier)
- `<nav>`: navigation ou contrôles (tri, filtres, pagination)
- `<figure>` : image avec contexte visuel (option : `<figcaption>`)

### ❌ Éviter les `<div>` - Utiliser des éléments sémantiques
- `<div>` → `<article>`, `<section>`, `<aside>`
- `<div class="container">` → `<main>`, `<article>`

---

## 🎨 Classes Tailwind Essentielles

### Layout & Grid
```css
/* Conteneurs */
max-w-6xl mx-auto px-4 py-8    /* Container centré avec padding */
grid grid-cols-1 lg:grid-cols-3 gap-8    /* Grid responsive */

/* Flexbox */
flex items-start justify-between    /* Flex avec alignement */
flex-1 ml-6                       /* Flex grow avec marge */
space-x-4 space-y-4               /* Espacement entre éléments */
```

### Sizing & Spacing
```css
/* Tailles */
w-24 h-24        /* Largeur/hauteur fixe */
w-4 h-4          /* Icônes petites */
w-5 h-5          /* Icônes moyennes */

/* Marges & Padding */
mt-2 mb-4 ml-6 mr-1.5    /* Marges directionnelles */
px-3 py-1                /* Padding horizontal/vertical */
p-6                      /* Padding uniforme */
```

### Typography
```css
/* Tailles de texte */
text-2xl text-3xl text-4xl    /* Titres */
text-sm text-lg               /* Texte petit/grand */

/* Poids */
font-medium font-bold font-sans

```

### Colors & Backgrounds
```css
/* Backgrounds */
bg-white bg-gray-50 bg-gray-100
bg-bg                    /* Couleur personnalisée */
hover:bg-bg-hover        /* Hover personnalisé */

/* Borders */
border border-gray-200 border-gray-300
border-t                 /* Bordure top uniquement */
rounded-md rounded-lg    /* Coins arrondis */
```

---

## � Rappel des Abréviations Tailwind

### Dimensions & Espacements
```css
/* WIDTH (largeur) */
w-4, w-5, w-24, w-full, w-1/2

/* HEIGHT (hauteur) */
h-4, h-5, h-24, h-full, h-fit

/* MARGIN (marge externe) */
m-4        /* margin: 1rem (tous côtés) */
mt-2       /* margin-top: 0.5rem */
mb-4       /* margin-bottom: 1rem */
ml-6       /* margin-left: 1.5rem */
mr-1.5     /* margin-right: 0.375rem */
mx-auto    /* margin: 0 auto (centrage horizontal) */
my-4       /* margin-top + margin-bottom */

/* PADDING (marge interne) */
p-4        /* padding: 1rem (tous côtés) */
pt-6       /* padding-top: 1.5rem */
pb-8       /* padding-bottom: 2rem */
pl-3       /* padding-left: 0.75rem */
pr-2       /* padding-right: 0.5rem */
px-4       /* padding-left + padding-right */
py-2       /* padding-top + padding-bottom */
```

### Échelle des valeurs Tailwind
```css
0    = 0px
0.5  = 0.125rem (2px)
1    = 0.25rem (4px)
1.5  = 0.375rem (6px)
2    = 0.5rem (8px)
3    = 0.75rem (12px)
4    = 1rem (16px)
5    = 1.25rem (20px)
6    = 1.5rem (24px)
8    = 2rem (32px)
```

---

## 🔧 Flexbox - Quand et Comment Utiliser

### Situations pour utiliser Flexbox
1. **Aligner des éléments côte à côte** (boutons, icône + texte)
2. **Centrer du contenu** verticalement ou horizontalement
3. **Répartir l'espace** entre éléments
4. **Créer des layouts** flexibles

### Classes Flexbox Essentielles
```css
/* ACTIVATION */
flex                /* display: flex */
inline-flex         /* display: inline-flex */

/* DIRECTION */
flex-row           /* Par défaut - horizontal */
flex-col           /* Vertical */
flex-col-reverse   /* Vertical inversé */

/* ALIGNEMENT HORIZONTAL (justify-content) */
justify-start      /* À gauche */
justify-center     /* Centré */
justify-between    /* Espacement égal entre éléments */
justify-end        /* À droite */

/* ALIGNEMENT VERTICAL (align-items) */
items-start        /* En haut */
items-center       /* Centré verticalement */
items-end          /* En bas */

/* FLEX GROW/SHRINK */
flex-1            /* flex: 1 1 0% - prend tout l'espace disponible */
flex-shrink-0     /* Ne se réduit pas */
flex-grow         /* Grandit pour remplir l'espace */
```

### Exemples Concrets d'Usage

#### 1. Icône + Texte alignés
```html
<p class="flex items-center">
  <svg class="w-4 h-4 mr-2"><!-- icône --></svg>
  In stock
</p>
```

#### 2. Boutons côte à côte avec espacement
```html
<nav class="flex items-start space-x-4">
  <select>...</select>
  <button>...</button>
</nav>
```

#### 3. Layout produit (image + contenu)
```html
<section class="flex items-start">
  <figure class="flex-shrink-0"><!-- Image fixe --></figure>
  <aside class="flex-1 ml-6"><!-- Contenu flexible --></aside>
</section>
```

#### 4. Prix et contrôles justifiés
```html
<section class="flex justify-between">
  <article><!-- Infos produit --></article>
  <nav><!-- Contrôles --></nav>
</section>
```

#### 5. Ligne de résumé (label + prix)
```html
<article class="flex justify-between">
  <span>Subtotal</span>
  <span>$99.00</span>
</article>
```

### 🎯 Règles d'Usage Flexbox
- **Toujours** combiner `flex` avec `items-center` ou `items-start`
- **Utiliser** `space-x-4` pour espacement uniforme entre éléments
- **Appliquer** `flex-1` à l'élément qui doit grandir
- **Mettre** `flex-shrink-0` sur images/icônes pour éviter la déformation

---

## �🛠️ Composants Fréquents

### Bouton Principal
```html
<button class="w-full bg-bg text-white py-3 px-4 rounded-md font-medium hover:bg-bg-hover transition-colors">
  Checkout
</button>
```

### Select/Dropdown
```html
<select class="border border-gray-300 rounded-md px-3 py-1 text-sm">
  <option>1</option>
  <option>2</option>
</select>
```

### Image Produit
```html
<figure class="flex-shrink-0">
  <img class="w-24 h-24 object-cover rounded-md" src="/image.jpg" alt="Description" />
</figure>
```

### État avec Icône
```html
<p class="text-light-grey text-sm mt-2 flex items-center">
  <svg class="w-4 h-4 mr-1.5 text-green"><!-- SVG --></svg>
  In stock
</p>
```

## 📱 Responsive Design

### Breakpoints Tailwind
```css
sm:    /* ≥640px - Mobile landscape */
md:    /* ≥768px - Tablet */
lg:    /* ≥1024px - Desktop */
xl:    /* ≥1280px - Large desktop */
```

### Exemples d'utilisation
```css
grid-cols-1 lg:grid-cols-3    /* 1 col mobile, 3 cols desktop */
text-3xl sm:text-4xl          /* Plus grand sur mobile */
flex-col sm:flex-row          /* Column sur mobile, row sur desktop */
```

---



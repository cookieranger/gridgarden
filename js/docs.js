var docs = {
  'grid-area': {
    'en': '<p>Specifies a grid item\'s position and size within the grid.</p><p><code>&lt;grid-row-start&gt; / &lt;grid-column-start&gt; / &lt;grid-row-end&gt; / &lt;grid-column-end&gt;</code></p>',
    'fr': '<p>Définit la position et la taille d\'un élément dans la grille.</p><p><code>&lt;grid-row-start&gt; / &lt;grid-column-start&gt; / &lt;grid-row-end&gt; / &lt;grid-column-end&gt;</code></p>',
    'ru': '<p>Определяет позицию и размер grid элемента внутри grid сетки.</p><p><code>&lt;grid-row-start&gt; / &lt;grid-column-start&gt; / &lt;grid-row-end&gt; / &lt;grid-column-end&gt;</code></p>'
  },
  'grid-column': {
    'en': '<p>Specifies a grid item\'s position within the grid columns.</p><p><code>&lt;grid-column-start&gt; / &lt;grid-column-end&gt;</code></p>',
    'fr': '<p>Définit la position d\'un élément de la grille sur les colonnes de la grille.</p><p><code>&lt;grid-column-start&gt; / &lt;grid-column-end&gt;</code></p>',
    'ru': '<p>Определяет позицию grid элемента внутри grid столбцов.</p><p><code>&lt;grid-column-start&gt; / &lt;grid-column-end&gt;</code></p>'
  },
  'grid-column-end': {
    'en': '<p>Specifies a grid item\'s end position within the grid columns.</p><p><code>&lt;integer&gt;</code> <code>span &lt;integer&gt;</code></p>',
    'fr': '<p>Définit la position de fin d\'un élément de la grille sur les colonnes de la grille.</p><p><code>&lt;integer&gt;</code> <code>span &lt;integer&gt;</code></p>',
    'ru': '<p>Определяет конечную позицию grid элемента внутри grid столбцов.</p><p><code>&lt;integer&gt;</code> <code>span &lt;integer&gt;</code></p>'
  },
  'grid-column-start': {
    'en': '<p>Specifies a grid item\'s start position within the grid columns.</p><p><code>&lt;integer&gt;</code> <code>span &lt;integer&gt;</code></p>',
    'fr': '<p>Définit la position du début d\'un élément de la grille sur les colonnes de la grille.</p><p><code>&lt;integer&gt;</code> <code>span &lt;integer&gt;</code></p>',
    'ru': '<p>Определяет начальную позицию grid элемента внутри grid столбцов.</p><p><code>&lt;integer&gt;</code> <code>span &lt;integer&gt;</code></p>'
  },
  'grid-row': {
    'en': '<p>Specifies a grid item\'s position within the grid rows.</p><p><code>&lt;grid-row-start&gt; / &lt;grid-row-end&gt;</code></p>',
    'fr': '<p>Définit la position d\'un élément de la grille sur les lignes de la grille.</p><p><code>&lt;grid-row-start&gt; / &lt;grid-row-end&gt;</code></p>',
    'ru': '<p>Определяет позицию grid элемента внутри grid строк.</p><p><code>&lt;grid-row-start&gt; / &lt;grid-row-end&gt;</code></p>'
  },
  'grid-row-end': {
    'en': '<p>Specifies a grid item\'s end position within the grid rows.</p><p><code>&lt;integer&gt;</code> <code>span &lt;integer&gt;</code></p>',
    'fr': '<p>Définit la position de fin d\'un élément de la grille sur les lignes de la grille.</p><p><code>&lt;integer&gt;</code> <code>span &lt;integer&gt;</code></p>',
    'ru': '<p>Определяет конечную позицию grid элемента внутри grid строк.</p><p><code>&lt;integer&gt;</code> <code>span &lt;integer&gt;</code></p>'
  },
  'grid-row-start': {
    'en': '<p>Specifies a grid item\'s start position within the grid rows.</p><p><code>&lt;integer&gt;</code> <code>span &lt;integer&gt;</code></p>',
    'fr': '<p>Définit la position du début d\'un élément de la grille sur les lignes de la grille.</p><p><code>&lt;integer&gt;</code> <code>span &lt;integer&gt;</code></p>',
    'ru': '<p>Определяет начальную позицию grid элемента внутри grid строк.</p><p><code>&lt;integer&gt;</code> <code>span &lt;integer&gt;</code></p>'
  },
  'grid-template': {
    'en': '<p>Specifies the sizing and names of the grid\'s rows and columns.</p><p><code>&lt;grid-template-rows&gt; / &lt;grid-template-columns&gt;</code></p>',
    'fr': '<p>Définit le dimensionnement et les noms des lignes et des colonnes de la grille.</p><p><code>&lt;grid-template-rows&gt; / &lt;grid-template-columns&gt;</code></p>',
    'ru': '<p>Определяет размер и названия для grid строк и столбцов.</p><p><code>&lt;grid-template-rows&gt; / &lt;grid-template-columns&gt;</code></p>'
  },
  'grid-template-areas': {
    'en': '<p>Specifies named grid areas.</p><p><code>&lt;grid-name&gt;</code></p>',
    'fr': '<p>Définit les régions de grille nommées</p><p><code>&lt;grid-name&gt;</code></p>',
    'ru': '<p>Определяет названные grid зоны.</p><p><code>&lt;grid-name&gt;</code></p>'
  },
  'grid-template-columns': {
    'en': '<p>Specifies the sizing and names of the grid\'s columns.</p><p><code>&lt;length&gt;</code> <code>&lt;percentage&gt;</code> <code>&lt;flex&gt;</code> <code>max-content</code> <code>min-content</code> <code>minmax(min, max)</code></p>',
    'fr': '<p>Définit le dimensionnement et les noms des colonnes de la grille.</p><p><code>&lt;length&gt;</code> <code>&lt;percentage&gt;</code> <code>&lt;flex&gt;</code> <code>max-content</code> <code>min-content</code> <code>minmax(min, max)</code></p>',
    'ru': '<p>Определяет размер и названия для grid столбцов.</p><p><code>&lt;length&gt;</code> <code>&lt;percentage&gt;</code> <code>&lt;flex&gt;</code> <code>max-content</code> <code>min-content</code> <code>minmax(min, max)</code></p>'
  },
  'grid-template-rows': {
    'en': '<p>Specifies the sizing and names of the grid\'s rows.</p><p><code>&lt;length&gt;</code> <code>&lt;percentage&gt;</code> <code>&lt;flex&gt;</code> <code>max-content</code> <code>min-content</code> <code>minmax(min, max)</code></p>',
    'fr': '<p>Définit le dimensionnement et les noms des lignes de la grille.</p><p><code>&lt;length&gt;</code> <code>&lt;percentage&gt;</code> <code>&lt;flex&gt;</code> <code>max-content</code> <code>min-content</code> <code>minmax(min, max)</code></p>',
    'ru': '<p>Определяет размер и названия для grid строк.</p><p><code>&lt;length&gt;</code> <code>&lt;percentage&gt;</code> <code>&lt;flex&gt;</code> <code>max-content</code> <code>min-content</code> <code>minmax(min, max)</code></p>'
  },
  'order': {
    'en': '<p>Specifies the order of the grid item.</p><p><code>&lt;integer&gt;</code></p>',
    'fr': '<p>Définit l\'ordre de l\'élément dans la grille.</p><p><code>&lt;integer&gt;</code></p>',
    'ru': '<p>Определяет порядок grid элемента.</p><p><code>&lt;integer&gt;</code></p>'
  },
};

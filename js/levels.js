var levels = [
  {
    name: 'grid-column-start 1',
    instructions: {
      'en': '<p>Welcome to Grid Garden, where you write CSS code to grow your carrot garden! Water only the areas that have carrots by using the <code>grid-column-start</code> property.</p><p>For example, <code>grid-column-start: 3;</code> will water the area starting at the 3rd vertical grid line, which is another way of saying the 3rd vertical border from the left in the grid.</p>',
      'pl': '<p>Witaj w grze Grid Garden, w której pisząc kod CSS rozwijasz swój ogród z marchewkami! Podlewaj tylko pola z marchewkami używając właściwości <code>grid-column-start</code>.</p><p>Na przykład, <code>grid-column-start: 3;</code> nawodni obszar zaczynający się od trzeciej pionowej linii, co jest innym sposobem na powiedzenie trzecia od lewej pionowa granica.</p>',
    },
    board: 'c',
    selector: '> :nth-child(1)',
    style: {'grid-column-start': '3'},
    before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n",
    after: "}"
  },
  {
    name: 'grid-column-start 2',
    instructions: {
      'en': '<p>Uh oh, looks like weeds are growing in the corner of your garden. Use <code>grid-column-start</code> to poison them. Note that the weeds start at the 5th vertical grid line.',
      'pl': '<p>O nie, wygląda na to, że chwasty urosły w rogu twojego ogrodu. Użyj <code>grid-column-start</code> by je otruć. Zauważ, że chwasty zaczynają się od piątej pionowej linii.',
    },
    board: 'w',
    selector: '> :nth-child(1)',
    style: {'grid-column-start': '5'},
    before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#poison {\n",
    after: "}"
  },
  {
    name: 'grid-column-end 1',
    instructions: {
      'en': '<p>When <code>grid-column-start</code> is used alone, the grid item by default will span exactly one column. However, you can extend the item across multiple columns by adding the <code>grid-column-end</code> property.</p><p>Using <code>grid-column-end</code>, water all of your carrots while avoiding the dirt. We don\'t want to waste any water! Note that the carrots start at the 1st vertical grid line and end at the 4th.</p>',
      'pl': '<p>Kiedy właściwość <code>grid-column-start</code> jest użyta pojedynczo, przedmiot domyślnie zajmie dokładnie jedną kolumnę. Jednakże, możesz rozszerzyć przedmiot na wiele kolumn dodając właściwość <code>grid-column-end</code>.</p><p>Używając <code>grid-column-end</code>, podlej tylko pola z marchewkami. Nie chcemy zmarnować ani kropli wody! Zauważ, że marchewki zaczynają się od pierwszej pionowej linii i kończą na czwartej.</p>',
    },
    board: 'c',
    classes: {'#garden > *, #plants > *': 'grid-column-start-1'},
    selector: '> :nth-child(1)',
    style: {'grid-column-end': '4'},
    before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n  grid-column-start: 1;\n",
    after: "}"
  },
  {
    name: 'grid-column-end 2',
    instructions: {
      'en': '<p>When pairing <code>grid-column-start</code> and <code>grid-column-end</code>, you might assume that the end value has to be greater than the start value. But this turns out not the case!</p><p>Try setting <code>grid-column-end</code> to a value less than 5 to water your carrots.</p>',
      'pl': '<p>Kiedy używasz razem <code>grid-column-start</code> i <code>grid-column-end</code>, możesz zakładać że końcowa wartość musi być większa od początkowej. Ale okazuje się, że to nieprawda!</p><p>Spróbuj ustawić <code>grid-column-end</code> na wartość mniejszą niż 5 aby podlać swoje marchewki.</p>',
    },
    board: 'c',
    classes: {'#garden > *, #plants > *': 'grid-column-start-5'},
    selector: '> :nth-child(1)',
    style: {'grid-column-end': '2'},
    before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n  grid-column-start: 5;\n",
    after: "}"
  },
  {
    name: 'grid-column-end 3',
    instructions: {
      'en': '<p>If you want to count grid lines from the right instead of the left, you can give <code>grid-column-start</code> and <code>grid-column-end</code> negative values. For example, you can set it to -1 to specify the first grid line from the right.</p><p>Try setting <code>grid-column-end</code> to a negative value.</p>',
      'pl': '<p>Jeżeli chcesz liczyć linie od prawej zamiast od lewej, możesz ustawić wartości <code>grid-column-start</code> i <code>grid-column-end</code> na negatywne. Na przykład, możesz ustawić wartość na -1 aby wybrać pierwszą linię od prawej.</p><p>Spróbuj ustawić <code>grid-column-end</code> na negatywną wartość.</p>',
    },
    board: 'c',
    classes: {'#garden > *, #plants > *': 'grid-column-start-1'},
    selector: '> :nth-child(1)',
    style: {'grid-column-end': '-2'},
    before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n  grid-column-start: 1;\n",
    after: "}"
  },
  {
    name: 'grid-column-start 3',
    instructions: {
      'en': '<p>Now try setting <code>grid-column-start</code> to a negative value.</p>',
      'pl': '<p>Teraz spróbuj ustawić <code>grid-column-start</code> na negatywną wartość.</p>',
    },
    board: 'w',
    selector: '> :nth-child(1)',
    style: {'grid-column-start': '-3'},
    before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#poison {\n",
    after: "}"
  },
  {
    name: 'grid-column-end 4',
    instructions: {
      'en': '<p>Instead of defining a grid item based on the start and end positions of the grid lines, you can define it based on your desired column width using the <code>span</code> keyword. Keep in mind that <code>span</code> only works with positive values.</p><p>For example, water these carrots with the rule <code>grid-column-end: span 2;</code>.</p>',
      'pl': '<p>Zamiast definiować przedmiot na podstawie początkowej i końcowej linii, możesz go zdefiniować na podstawie pożądanej szerokości z użyciem słowa kluczowego <code>span</code>. Miej na uwadze, że <code>span</code> działa tylko z pozytywnymi wartościami.</p><p>Na przykład, podlej te marchewki poleceniem <code>grid-column-end: span 2;</code>.</p>',
    },
    board: 'c',
    classes: {'#garden > *, #plants > *': 'grid-column-start-2'},
    selector: '> :nth-child(1)',
    style: {'grid-column-end': 'span 2'},
    before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n  grid-column-start: 2;\n",
    after: "}"
  },
  {
    name: 'grid-column-end 5',
    instructions: {
      'en': '<p>Try using <code>grid-column-end</code> with the <code>span</code> keyword again to water your carrots.</p>',
      'pl': '<p>Spróbuj użyć ponownie <code>grid-column-end</code> z słowem kluczowym <code>span</code>, aby podlać swoje marchewki.</p>',
    },
    board: 'c',
    classes: {'#garden > *, #plants > *': 'grid-column-start-1'},
    selector: '> :nth-child(1)',
    style: {'grid-column-end': 'span 5'},
    before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n  grid-column-start: 1;\n",
    after: "}"
  },
  {
    name: 'grid-column-start 4',
    instructions: {
      'en': '<p>You can also use the <code>span</code> keyword with <code>grid-column-start</code> to set your item\'s width relative to the end position.</p>',
      'pl': '<p>Możesz także użyć słowa kluczowego <code>span</code> z <code>grid-column-start</code> aby ustawić szerokość twojego przedmiotu względem końcowej pozycji.</p>',
    },
    board: 'c',
    classes: {'#garden > *, #plants > *': 'grid-column-end-6'},
    selector: '> :nth-child(1)',
    style: {'grid-column-start': 'span 3'},
    before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n",
    after: "  grid-column-end: 6;\n}"
  },
  {
    name: 'grid-column 1',
    instructions: {
      'en': '<p>Typing both <code>grid-column-start</code> and <code>grid-column-end</code> every time can get tiring. Fortunately, <code>grid-column</code> is a shorthand property that can accept both values at once, separated by a slash.</p><p>For example, <code>grid-column: 2 / 4;</code> will set the grid item to start on the 2nd vertical grid line and end on the 4th grid line.</p>',
      'pl': '<p>Wpisywanie obu <code>grid-column-start</code> i <code>grid-column-end</code> za każdym razem, może być męczące. Na szczęście, <code>grid-column</code> jest skróconą właściwością, która akceptuje obie wartości naraz, rozdzielone przez ukośnik.</p><p>Na przykład, <code>grid-column: 2 / 4;</code> ustawi początek przedmiotu na 2 linię pionową, a koniec na 4 linię.</p>',
    },
    board: 'c',
    selector: '> :nth-child(1)',
    style: {'grid-column': '4 / 6'},
    before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n",
    after: "}"
  },
  {
    name: 'grid-column 2',
    instructions: {
      'en': '<p>Try using <code>grid-column</code> to water these carrots. The <code>span</code> keyword also works with this shorthand property so give it a try!</p>',
      'pl': '<p>Spróbuj użyć <code>grid-column</code> aby podlać te marchewki. Słowo kluczowe <code>span</code> działa także ze skróconą formą tej właściwości, więc wypróbuj to!</p>',
    },
    board: 'c',
    selector: '> :nth-child(1)',
    style: {'grid-column': '2 / 5'},
    before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n",
    after: "}"
  },
  {
    name: 'grid-row-start 1',
    instructions: {
      'en': '<p>One of the things that sets CSS grids apart from flexbox is that you can easily position items in two dimensions: columns and rows. <code>grid-row-start</code> works much like <code>grid-column-start</code> except along the vertical axis.</p><p>Use <code>grid-row-start</code> to water these carrots.</p>',
    },
    board: 'c',
    selector: '> :nth-child(1)',
    style: {'grid-row-start': '3'},
    before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n",
    after: "}"
  },
  {
    name: 'grid-row-start 2',
    instructions: {
      'en': '<p>Now give the shorthand property <code>grid-row</code> a try.</p>',
      'pl': '<p>Teraz spróbuj użyć skróconej właściwości <code>grid-row</code>.</p>',
    },
    board: 'c',
    selector: '> :nth-child(1)',
    style: {'grid-row': '3 / 6'},
    before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n",
    after: "}"
  },
  {
    name: 'grid-column-row 1',
    instructions: {
      'en': '<p>Use <code>grid-column</code> and <code>grid-row</code> at the same time to set position in both dimensions.</p>',
      'pl': '<p>Użyj <code>grid-column</code> i <code>grid-row</code> razem, aby ustawić pozycję w dwóch wymiarach.</p>',
    },
    board: 'w',
    selector: '> :nth-child(1)',
    style: {'grid-column': '2', 'grid-row': '5'},
    before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#poison {\n",
    after: "}"
  },
  {
    name: 'grid-column-row 2',
    instructions: {
      'en': '<p>You can also use <code>grid-column</code> and <code>grid-row</code> together to span larger areas within the grid. Give it a try!</p>',
      'pl': '<p>Możesz także użyć <code>grid-column</code> i <code>grid-row</code> razem, aby pokryć większą powierzchnię within the grid. Spróbuj!</p>',
    },
    board: 'c',
    selector: '> :nth-child(1)',
    style: {'grid-column': '2 / 6', 'grid-row': '1 / 6'},
    before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n",
    after: "}"
  },
  {
    name: 'grid-area 1',
    instructions: {
      'en': '<p>If typing out both <code>grid-column</code> and <code>grid-row</code> is too much for you, there\'s yet another shorthand for that. <code>grid-area</code> accepts four values separated by slashes: <code>grid-row-start</code>, <code>grid-column-start</code>, <code>grid-row-end</code>, followed by <code>grid-column-end</code>.</p><p>One example of this would be <code>grid-area: 1 / 1 / 3 / 6;</code>.</p>',
    },
    board: 'c',
    selector: '> :nth-child(1)',
    style: {'grid-area': '1 / 2 / 4 / 6'},
    before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n",
    after: "}"
  },
  {
    name: 'grid-area 2',
    instructions: {
      'en': '<p>How about multiple items? You can overlap them without any trouble. Use <code>grid-area</code> to define a second area that covers all of the unwatered carrots.</p>',
      'pl': '<p>A co z wieloma przedmiotami? Możesz je nakładać bez problemu. Użyj <code>grid-area</code> aby zdefiniować drugą powierzchnię, która pokryje nie podlane marchewki.</p>',
    },
    board: 'cc',
    classes: {'#garden > :nth-child(2), #plants > :nth-child(2)': 'grid-column-4'},
    selector: '> :nth-child(1)',
    style: {'grid-area': '2 / 3 / 5 / 6'},
    before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water-1 {\n  grid-area: 1 / 4 / 6 / 5;\n}\n\n#water-2 {\n",
    after: "}"
  },
  {
    name: 'order 1',
    instructions: {
      'en': '<p>If grid items aren\'t explicity placed with <code>grid-area</code>, <code>grid-column</code>, <code>grid-row</code>, etc., they are automatically placed row by row according to their order in the source code. We can override this using the <code>order</code> property.</p><p>By default, all grid items have an <code>order</code> of 0, but this can be set to any positive or negative value.</p><p>Right now, the carrots in the second column are being poisoned and the weeds in the last column are being watered. Change the <code>order</code> value of the poison to fix this right away!</p>',
    },
    board: 'cwccc',
    selector: '> :nth-child(2)',
    style: {'order': '2'},
    before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n.water {\n  order: 0;\n}\n\n#poison {\n",
    after: "}"
  },
  {
    name: 'grid-template-columns 1',
    instructions: {
      'en': '<p>Up to this point, you\'ve had your garden set up as a grid with five columns, each 20% of the full width, and five rows, each 20% of the full height.</p><p>This was done with the rules <code>grid-template-columns: 20% 20% 20% 20% 20%;</code> and <code>grid-template-rows: 20% 20% 20% 20% 20%;</code> Each rule has five values which create five columns, each set to 20% of the overall width of the garden.</p><p>But you can set the grid up however you like. Give <code>grid-template-columns</code> a new value to water your carrots. You\'ll want to set the width of the 1st column to be 50%.',
    },
    board: 'c',
    style: {'grid-template-columns': '50% 50%'},
    before: "#garden {\n  display: grid;\n",
    after: "  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n  grid-column: 1;\n  grid-row: 1;\n}"
  },
  {
    name: 'grid-template-columns 2',
    instructions: {
      'en': '<p>Specifying a bunch of columns with identical widths can get tedious. Luckily there\'s a <code>repeat</code> function to help with that.</p><p>For example, we previously defined five 20% columns with the rule <code>grid-template-columns: 20% 20% 20% 20% 20%;</code>. This can be simplified as <code>grid-template-columns: repeat(5, 20%);</code></p><p>Using <code>grid-template-columns</code> with the <code>repeat</code> function, create eight columns each with 12.5% width. This way you won\'t overwater your garden.</p>',
    },
    board: 'c',
    classes: {'#plants': 'grid-template-columns-repeat-8-12'},
    style: {'grid-template-columns': 'repeat(8, 12.5%)'},
    before: "#garden {\n  display: grid;\n",
    after: "  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n  grid-column: 1;\n  grid-row: 1;\n}"
  },
  {
    name: 'grid-template-columns 3',
    instructions: {
      'en': '<p><code>grid-template-columns</code> doesn\'t just accept values in percentages, but also length units like pixels and ems. You can even mix different units together.</p><p>Another unit that grid introduces is the fractional unit <code>fr</code>, which stretches to take up one equal share of the leftover space.</p><p>Here the carrots form a 50 pixel column on the left, and the weeds a 50 pixel column on the right. Use <code>fr</code> to make three columns that take up the leftover space in between.</p>',
    },
    board: 'cw',
    classes: {'#plants': 'grid-template-columns-50px-1fr-1fr-1fr-50px', '#plants > :nth-child(1), #garden > :nth-child(1)': 'grid-area-1-1-6-2', '#plants > :nth-child(2), #garden > :nth-child(2)': 'grid-area-1-5-6-6'},
    style: {'grid-template-columns': '50px 1fr 1fr 1fr 50px;'},
    before: "#garden {\n  display: grid;\n",
    after: "  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n  grid-area: 1 / 1 / 6 / 2;\n}\n\n#poison {\n  grid-area: 1 / 5 / 6 / 6;\n}"
  },
  {
    name: 'grid-template-rows 1',
    instructions: {
      'en': '<p><code>grid-template-rows</code> works much the same as <code>grid-template-columns</code>.</p><p>Use <code>grid-template-rows</code> to water all but the top 50 pixels of your garden. Note that the water is set to fill only your 5th row, so you\'ll need to create 5 rows in total.',
      'pl': '<p><code>grid-template-rows</code> działa w podobny sposób jak <code>grid-template-columns</code>.</p><p>Użyj <code>grid-template-rows</code> aby nawodnić 50 pixeli od góry twojego ogrodu. Zauważ, że woda jest ustawiona tak aby wypełnić tylko 5 rząd, dlatego będziesz musiał stworzyć łącznie 5 rzędów.',
    },
    board: 'c',
    classes: {'#plants': 'grid-template-rows-50px-0-0-0-1fr', '#plants > :nth-child(1), #garden > :nth-child(1)': 'grid-area-5-1-6-6'},
    style: {'grid-template-rows': '1fr 100px;'},
    before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n",
    after: "}\n\n#water {\n  grid-column: 1 / 6;\n  grid-row: 5 / 6;\n}"
  },
  {
    name: 'grid-template 1',
    instructions: {
      'en': '<p><code>grid-template</code> is a shorthand property that combines <code>grid-template-rows</code> and <code>grid-template-columns</code>.</p><p>Try using <code>grid-template</code> to water an area that includes the top 60% and left 200 pixels of your garden.</p>',
      'pl': '<p><code>grid-template</code> jest skróconą właściwością, która łączy <code>grid-template-rows</code> i <code>grid-template-columns</code>.</p><p>Spróbuj użyć <code>grid-template</code> aby nawodnić powierzchnię która zawiera 60% od góry i 200 pixeli od lewej twojego ogrodu.</p>',
    },
    board: 'c',
    style: {'grid-template': '60% 1fr / 200px 1fr'},
    before: "#garden {\n  display: grid;\n",
    after: "}\n\n#water {\n  grid-column: 1;\n  grid-row: 1;\n}"
  },
  {
    name: 'grid-template 2',
    instructions: {
      'en': '<p>Your garden is looking great. Here you\'ve left a 50 pixel path at the bottom of your garden and filled the rest with carrots.</p><p>Unfortunately, the left 20% of your carrots have been overrun with weeds. Use CSS grid one last time to treat your garden.</p>',
      'pl': '<p>Twój ogród wygląda świetnie. Tutaj pozostawiłeś 50 pixelową ścieżkę na spodzie swojego ogrodu, a reszcie posadziłeś marchewki.</p><p>Niestety, 20% od lewej twoich marchewek zostało zarośnięte przez chwasty. Użyj CSS grid ostatni raz aby uzdrowić swój ogród.</p>',
    },
    board: 'wc',
    classes: {'#plants': 'grid-template-2'},
    style: {'grid-template': '1fr 50px / 20% 1fr'},
    before: "#garden {\n  display: grid;\n",
    after: "}"
  }
];

var levelWin = {
  name: 'win',
  instructions: {
    'en': '<p>You win! By the power of CSS grid, you were able to grow enough carrots for Froggy to bake his world famous 20-carrot cake. What, were you expecting a different hoppy friend?</p><p>If you enjoyed Grid Garden, be sure to check out <a href="http://flexboxfroggy.com/">Flexbox Froggy</a> to learn about another powerful new feature of CSS layout. You can also keep up-to-date with my other projects on <a href="http://thomaspark.co">my blog</a> or <a href="https://twitter.com/thomashpark">Twitter</a>.</p><p>Want to support Grid Garden? Try out the topnotch web design and coding courses offered by <a href="http://treehouse.7eer.net/c/371033/228915/3944?subId1=gridgarden">Treehouse</a>. And spread the word to your friends and family about Grid Garden!</p>',
    'pl': '<p>Wygrałeś! Dzięki możliwościom CSS grid, byłeś w stanie wychodować wystarczającą ilość marchewek dla Pana Żabki, aby on mógł upiec swoje światowej sławy ciasto marchewkowe. Co, spodziewałeś się innego skocznego przyjaciela?</p><p>Jeżeli spodobał Ci się Grid Garden, zobacz też <a href="http://flexboxfroggy.com/">Flexbox Froggy</a> aby nauczyć się o innej nowej i potężnej właściwości struktury CSS. Możesz także śledzić inne moje projekty poprzez <a href="http://thomaspark.co">mój blog</a> lub <a href="https://twitter.com/thomashpark">Twitter</a>.</p><p>Chcesz wesprzeć Grid Garden? Wypróbuj znakomite kursy z web designu i programowania na <a href="http://treehouse.7eer.net/c/371033/228915/3944?subId1=gridgarden">Treehouse</a>. Podziel się także informacją o tym z przyjaciółmi i rodziną!</p>',
  },
  board: '',
  classes: {'#garden, #plants, #overlay': 'win'},
  style: {},
  before: "#pond {\n  display: flex;\n",
  after: "}"
};

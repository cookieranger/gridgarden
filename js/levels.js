var levels = [
  {
    name: 'grid-column-start 1',
    instructions: {
      'en': '<p>Welcome to Grid Garden, where you write CSS code to grow your carrot garden! Water only the areas that have carrots by using the <code>grid-column-start</code> property.</p><p>For example, <code>grid-column-start: 3;</code> will water the area starting at the 3rd vertical grid line, which is another way of saying the 3rd vertical border from the left in the grid.</p>',
      'fr': '<p>Bienvenue dans Grid Garden, où vous écrivez du code CSS pour cultiver votre jardin de carotte ! Arrosez seulement les régions qui ont des carottes en utilisant la propriété <code>grid-column-start</code>.</p><p>Par exemple, <code>grid-column-start: 3;</code> arrosera la région commençant à la 3ème ligne verticale de la grille, une autre manière de le dire, c\'est la 3ème bordure verticale en partant de la gauche dans la grille.</p>',
      'de': '<p>Willkommen bei Grid Garden, wo du CSS Code schreibst, um deinen Karotten Garten zu kultivieren! Wässere nur die Abschnitte, welche Karotten enthalten, indem Du die <code>grid-column-start</code> Eigenschaft nutzt.</p><p>Zum Beispiel <code>grid-column-start: 3;</code> wässert den Abschnitt auf der dritten vertikalen Rasterlinie, mit anderen Worten: die 3. vertikale Spalte von links im Raster.</p>',
      'pt-br': '<p>Bem-vindo ao Grid Garden, onde você escreve código CSS para as cenouras da sua horta crescerem. Irrigue apenas as áreas com cenouras usando a propriedade <code>grid-column-start</code>.</p><p>Por exemplo, <code>grid-column-start: 3;</code> irrigará a área começando na 3ª linha vertical, o que é uma forma de dizer que é a 3ª borda da grade começando da esquerda.</p>',
      'ru': '<p>Добро пожаловать в Grid Garden, место где вы пишете CSS код для того чтобы вырастить ваш морковный сад. Поливайте только те зоны на которых есть морковь используя свойство <code>grid-column-start</code>.</p><p>Например, <code>grid-column-start: 3;</code> покроет водой зону, начинающуюся на 3-ей вертикальной grid линии, что является альтернативным способом сказать - 3-я вертикальная граница начиная слева на grid сетке.</p>',
      'pl': '<p>Witaj w grze Grid Garden, w której pisząc kod CSS rozwijasz swój ogród z marchewkami! Podlewaj tylko pola z marchewkami używając właściwości <code>grid-column-start</code>.</p><p>Na przykład, <code>grid-column-start: 3;</code> nawodni obszar zaczynający się od trzeciej pionowej linii, co jest innym sposobem na powiedzenie trzecia od lewej pionowa granica.</p>',
      'es': '<p>¡Bienvenido a Grid Garden, donde escribirás tu código CSS para cultivar tu jardín de zanahorias! Riega solo las áreas que tienen zanahorias usando la propiedad <code>grid-column-start</code>.</p><p>Por ejemplo, <code>grid-column-start: 3;</code> regará el área comenzando por la tercera línea vertical, que es otra manera de decir el 3er borde vertical contando desde la izquierda de la cuadrícula.</p>',
      'sv': '<p>Välkommen till Grid Garden där du kan skriva CSS kod för att odla din trädgård med morötter! Vattna bara dom områden som har morötter genom att använda egenskapen <code>grid-column-start</code>.</p><p>T.e.x. <code>grid-column-start: 3;</code> kommer vattna området som startar på tredje vertikala gridlinjen, vilket är samma sak som att säga den tredje vertikala gridlinjen från vänster.</p>',
      'fa': '<p>به باغ گرید خوش آمدید, اینجا کد CSS می نویسید تا هویج های خود را پرورش دهید! تنها کافی است آب را با استفاده از <code>grid-column-start</code> به بخش هایی که هویج دارند برسانید.</p><p>برای مثال, <code>;grid-column-start: 3</code> ناحیه ای را که از سومین خط عمودی گرید شروع می شود آبیاری می کند , به عبارت دیگر سومین مرز عمودی از چپ در گرید.</p>'
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
      'en': '<p>Uh oh, looks like weeds are growing in the corner of your garden. Use <code>grid-column-start</code> to poison them. Note that the weeds start at the 5th vertical grid line.</p>',
      'fr': '<p>Houlà, il semblerait que les mauvaises herbes poussent dans le coin de votre jardin. Utilisez <code>grid-column-start</code> pour les empoisonner. Remarquez que les mauvaises herbes commencent à la 5ème ligne verticale de la grille.</p>',
      'de': '<p>Oje, sieht aus als würde in der Ecke des Gartens Unkraut wachsen. Benutze <code>grid-column-start</code> um es zu vergiften. Beachte, dass das Unkraut in der fünften vertikalen Rasterline beginnt.</p>',
      'pt-br': '<p>Opa, parece que há ervas daninhas crescendo no canto da sua horta. Use <code>grid-column-start</code> para envenená-las. Note que as ervas daninhas começam na 5ª linha vertical da grade.</p>',
      'ru': '<p>Оу, кажется будто сорняки растут прямо в углу вашего сада. Используйте <code>grid-column-start</code> чтобы отравить их. Помните что сорняки начинаются на 5-ой вертикальной grid линии.</p>',
      'pl': '<p>O nie, wygląda na to, że chwasty urosły w rogu twojego ogrodu. Użyj <code>grid-column-start</code> by je otruć. Zauważ, że chwasty zaczynają się od piątej pionowej linii.</p>',
      'es': '<p>Oh oh, parece que hay malas hierbas creciendo en la esquina de tu jardín. Usa <code>grid-column-start</code> para envenenarlas. Fíjate en que las malas hierbas comienzan en el quinto borde vertical de la cuadrícula.</p>',
      'sv': '<p>Åh nej, det ser ut som att det växer ogräs i trädgården. Använd <code>grid-column-start</code> för att förgifta dom. Notera att ogräset börjar på femte vertikala gridlinjen.</p>',
      'fa': '<p>ای وای, انگار در گوشه ی باغت علف های هرز رشد کرده اند. از <code>grid-column-start</code> برای سمپاشی آن استفاده کن. دقت کن که علف های هرز از پنجمین خط عمودی گرید شروع می شوند.</p>'
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
      'fr': '<p>Lorsque <code>grid-column-start</code> est utilisé individuellement, l\'élément de la grille s\'étendera par défaut sur une colonne exactement. Pourtant, vous pouvez étendre l\'élément sur plusieurs colonnes en ajoutant la propriété <code>grid-column-end</code>.</p><p>En utilisant <code>grid-column-end</code>, arrosez toutes vos carottes tout en évitant la boue. Nous ne voulons pas gaspiller d\'eau ! Remarquez que les carottes commencent à la 1ère ligne verticale de la grille et terminent à la 4ème.</p>',
      'de': '<p>Wenn <code>grid-column-start</code> alleine benutzt wird, umfasst das Rasterelement standardmäßig genau eine Spalte. Du kannst den Umfang des Elements jedoch auf mehrere Spalten erweitern durch die <code>grid-column-end</code> Eigenschaft.</p><p>Benutze <code>grid-column-end</code> um alle Karotten zu wässern. Vermeide dabei die Erdabschnitte, wir wollen kein Wasser verschwenden! Beachte, dass die Karotten auf der ersten vertikalen Rasterlinie beginnen und auf der vierten aufhören.</p>',
      'pt-br': '<p>Quando <code>grid-column-start</code> é usado sozinho, o item da grade por padrão irá ocupar exatamente uma coluna. Entretanto, você pode extender o item através de múltiplas colunas adicionando a propriedade <code>grid-column-end</code>.</p><p>Usando <code>grid-column-end</code>, todas suas cenouras são irrigadas enquanto se evita uma inundação. Não queremos desperdiçar água! Note que as cenouras começam na 1ª linha vertical da grade e terminam na 4ª.</p>',
      'ru': '<p>Когда вы используете только <code>grid-column-start</code>, grid элемент по умолчанию "захватит" только один столбец. Однако, вы можете увеличить элемент между несколькими столбцами если добавите свойство <code>grid-column-end</code>.</p><p>Используя <code>grid-column-end</code>, полейте всю вашу морковь при этом избегая пустые участки. Мы не хотим использовать воду напрасно! Помните, что морковь начинается на 1-ой вертикальной grid линии и заканчивается на 4-ой',
      'pl': '<p>Kiedy właściwość <code>grid-column-start</code> jest użyta pojedynczo, element domyślnie zajmie dokładnie jedną kolumnę. Jednakże, możesz rozszerzyć element na wiele kolumn dodając właściwość <code>grid-column-end</code>.</p><p>Używając <code>grid-column-end</code>, podlej tylko pola z marchewkami. Nie chcemy zmarnować ani kropli wody! Zauważ, że marchewki zaczynają się od pierwszej pionowej linii i kończą na czwartej.</p>',
      'es': '<p>Cuando <code>grid-column-start</code> se usa solo, la expansión por defecto del elemento en la cuadrícula será de exactamente una columna. No obstante, puedes extender el elemento varias columnas añadiendo la propiedad <code>grid-column-end</code>.</p><p>Usando <code>grid-column-end</code>, riega todas las zanahorias evitando que se forme barro. ¡No queremos malgastar agua! Fíjate en que las zanahorias comienzan en el 1er borde vertical y terminan en el 4º.</p>',
      'sv': '<p>När <code>grid-column-start</code> används så kommer elementet sträcka sig exakt en kolumn. Du kan ändra det genom att sätta egenskapen <code>grid-column-end</code>.</p><p>Använd <code>grid-column-end</code> för att vattna dina morötter, men undvik att vattna där det inte finns. Vi vill inte slösa på vatten! Notera att morötterna startar på första vertikala gridlinjen och slutar på fjärde.</p>',
      'fa': '<p>وقتی <code>grid-column-start</code> به تنهایی استفاده شود, آیتم گرید به صورت پیش فرض دقیقا یک ستون را پوشش می دهد. هرچند, شما می توانید با اضافه کردن <code>grid-column-end</code> آیتم را در امتداد چندین ستون گسترش دهید.</p><p>با استفاده از <code>grid-column-end</code>, هویج هایتان را آبیاری کنید. ما نمی خواهیم آب را هدر بدهیم پس روی خاک آب ندهید!  توجه کنید که هویج ها از اولین خط عمودی گرید شروع می شوند و در چهارمین خط عمودی به پایان می رسند.</p>'
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
      'fr': '<p>En associant <code>grid-column-start</code> et <code>grid-column-end</code>, vous pouvez penser que la valeur de fin doit être supérieure à la valeur de début. Mais ce n\'est pas le cas !</p><p>Essayez de définir <code>grid-column-end</code> avec une valeur inférieure à 5 pour arroser vos carottes.</p>',
      'de': '<p>Beim gemeinsamen Einsatz von <code>grid-column-start</code> und <code>grid-column-end</code> könnte man annehmen, dass der Endwert grösser als der Startwert sein muss. Es zeigt sich aber, dass dies nicht der Fall ist!</p><p>Versuche <code>grid-column-end</code> auf einen Wert kleiner als 5 einzustellen um deine Karotten zu wässern.</p>',
      'pt-br': '<p>Quando se junta <code>grid-column-start</code> e <code>grid-column-end</code>, você deve assumir que o valor final tem que ser maior que o valor inicial. Mas esse não é o caso!</p><p>Tente definir <code>grid-column-end</code> para um valor menor que 5 para irrigar suas cenouras.</p>',
      'ru': '<p>Когда вы соединяли <code>grid-column-start</code> и <code>grid-column-end</code>, вы могли подумать что конечное значение должно быть больше чем начальное значение. Оказывается, это не так!</p><p>Попробуйте присвоить <code>grid-column-end</code> значение меньше чем 5 чтобы полить вашу морковь.',
      'pl': '<p>Kiedy używasz razem <code>grid-column-start</code> i <code>grid-column-end</code>, możesz zakładać że końcowa wartość musi być większa od początkowej. Ale okazuje się, że to nieprawda!</p><p>Spróbuj ustawić <code>grid-column-end</code> na wartość mniejszą niż 5 aby podlać swoje marchewki.</p>',
      'es': '<p>Al emparejar <code>grid-column-start</code> y <code>grid-column-end</code>, podrías asumir que el valor final tiene que ser mayor que el valor inicial. ¡Pero no es el caso!</p><p>Intenta establecer <code>grid-column-end</code> a un valor inferior a 5 para regar tus zanahorias.</p>',
      'sv': '<p>När man parar ihop <code>grid-column-start</code> med <code>grid-column-end</code> kan man anta att at slutvärdet måste vara högre än startvärdet. Så är dock inte fallet!</p><p>Testa sätt <code>grid-column-end</code> till ett värde lägre än 5 för att vattna dina morötter.</p>',
      'fa': '<p>وقتی <code>grid-column-start</code> و <code>grid-column-end</code> در کنار هم استفاده می شوند, ممکن است فرض کنید که مقدار پایانی حتما باید بزرگتر از مقدار شروع باشد. اما اینگونه نیست!</p><p>این دفعه به <code>grid-column-end</code> یک مقدار کمتر از 5 بدهید تا هویج ها را آبیاری کنید.</p>'
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
      'fr': '<p>Si vous souhaitez compter les lignes de la grille à partir de la droite plutôt que de la gauche, vous pouvez donner des valeurs négatives à <code>grid-column-start</code> et à <code>grid-column-end</code>. Par exemple, vous pouvez le définir à -1 pour spécifier la première ligne de la grille en partant de la droite.</p><p>Essayez de définir <code>grid-column-end</code> avec une valeur négative.</p>',
      'de': '<p>Falls du die Rasterlinien von rechts statt von links zählen willst, kannst du für <code>grid-column-start</code> und <code>grid-column-end</code> negative Werte einstellen. Du kannst sie zum Beispiel auf -1 setzen um die erste Rasterlinie von rechts anzusprechen.</p><p>Versuche <code>grid-column-end</code> auf einen negativen Wert zu setzen.</p>',
      'pt-br': '<p>Se você deseja contas as linhas da grade a partir da direita ao invés da esquerda, você pode dar a <code>grid-column-start</code> e <code>grid-column-end</code> valores negativos. Por exemplo, você pode definir -1 para especificar a primeira linha da grade a partir da direita.</p><p>Tente definir um valor negativo para <code>grid-column-end</code>.</p>',
      'ru': '<p>Если вы хотите посчитать grid строки справа налево вместо слева направо, вы можете дать <code>grid-column-start</code> и <code>grid-column-end</code> отрицательные значения. Например, вы можете присвоить значение равное -1 чтобы указать 1-ую grid строку начиная справа.</p><p>Попробуйте присвоить <code>grid-column-end</code> отрицательное значение.</p>',
      'pl': '<p>Jeżeli chcesz liczyć linie od prawej zamiast od lewej, możesz ustawić wartości <code>grid-column-start</code> i <code>grid-column-end</code> na negatywne. Na przykład, możesz ustawić wartość na -1 aby wybrać pierwszą linię od prawej.</p><p>Spróbuj ustawić <code>grid-column-end</code> na negatywną wartość.</p>',
      'es': '<p>Si prefieres contar las líneas de la cuadrícula comenzando por la derecha, puedes dar a <code>grid-column-start</code> y <code>grid-column-end</code> valores negativos. Por ejemplo, puedes establecerlos a -1 para indicar la primera línea comenzando por la derecha.</p><p>Intenta establecer <code>grid-column-end</code> a un valor negativo.</p>',
      'sv': '<p>Ifall du vill räkna gridlinjer från höger istället för vänster kan du använda negativa värden för <code>grid-column-start</code> och <code>grid-column-end</code>.</p><p>Försök sätta <code>grid-column-end</code> till ett negativt värde.',
      'fa': '<p>اگر می خواهید خطوط گرید را به جای چپ از راست بشمارید, می توانید به  <code>grid-column-start</code> و <code>grid-column-end</code> مقدار منفی بدهید. برای مثال, برای مشخص کردن اولین خط گرید از راست می توانید به آن 1- بدهید.</p><p>این بار به <code>grid-column-end</code> یک مقدار منفی بدهید.</p>'
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
      'fr': '<p>Maintenant essayez de définir <code>grid-column-start</code> avec une valeur négative.</p>',
      'de': '<p>Versuche nun, <code>grid-column-start</code> auf einen negativen Wert zu setzen.</p>',
      'pt-br': '<p>Agora tente definir <code>grid-column-start</code> com um valor negativo.</p>',
      'ru': '<p>Теперь попробуйте присвоить <code>grid-column-start</code> отрицательное значение.</p>',
      'pl': '<p>Teraz spróbuj ustawić <code>grid-column-start</code> na negatywną wartość.</p>',
      'es': '<p>Ahora intenta establecer <code>grid-column-start</code> a un valor negativo.</p>',
      'sv': '<p>Testa nu att sätta <code>grid-column-start</code> till ett negativt värde.</p>',
      'fa': '<p>حالا به <code>grid-column-start</code> مقدار منفی بدهید.</p>'
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
      'fr': '<p>Au lieu de définir un élément de la grille basé sur les positions de début et de fin des lignes de la grille, vous pouvez le définir en fonction de la largeur de colonne désirée à l\'aide du mot clé <code>span</code>. Gardez à l\'esprit que <code>span</code> fonctionne uniquement avec des valeurs positives.</p><p>Par exemple, arrosez ces carottes avec la règle <code>grid-column-end: span 2;</code>.</p>',
      'de': '<p>Anstatt ein Rasterelement basierend auf Start- und Endposition der Rasterlinien zu definieren, kannst du es anhand der gewünschten Spaltenbreite mit dem Schlüsselwort <code>span</code> definieren. Denk daran, dass <code>span</code> nur mit positiven Werten funktioniert.</p><p>Wässere zum Beispiel diese Karotten mit der Regel <code>grid-column-end: span 2;</code>.</p>',
      'pt-br': '<p>Ao invés de definir uma grade baseada no início e final das posições das linhas na grade, você pode defini-las baseado na largura da coluna desejada usando a palavra-chave <code>span</code>. Mantenha em mente que <code>span</code> apenas funciona com valores positivos.</p><p>Por exemplo, irrigue essas cenouras com a regra <code>grid-column-end: span 2;</code>.</p>',
      'ru': '<p>Вместо определения grid элемента базируясь на начальной и конечной позициях grid строк, вы можете определять их с помощью необходимой вам широты строк, используя <code>span</code>. Помните, что <code>span</code> работает только с положительными значениями.</p><p>Для примера, полейте эту морковь используя свойсво <code>grid-column-end: span 2;</code>.</p>',
      'pl': '<p>Zamiast definiować element na podstawie początkowej i końcowej linii, możesz go zdefiniować na podstawie pożądanej szerokości z użyciem słowa kluczowego <code>span</code>. Miej na uwadze, że <code>span</code> działa tylko z pozytywnymi wartościami.</p><p>Na przykład, podlej te marchewki poleceniem <code>grid-column-end: span 2;</code>.</p>',
      'es': '<p>En lugar de definir un elemento en la cuadrícula basado en la posicion inicial y final, puedes definirlo basado en la longitud de columnas deseada usando la palabra clave <code>span</code>. Ten presente que <code>span</code> solo funciona con valores positivos.</p><p>Por ejemplo, riega las zanahorias usando <code>grid-column-end: span 2;</code>.</p>',
      'sv': '<p>Istället för att definiera ett grid element baserat på start- och slutvärden kan man definiera det baserat på önskad kolumnbredd genom att sätta <code>span</code>. Kom ihåg att <code>span</code> dock bara fungerar med positiva värden.</p><p>Till exempel, vattna dom här morötterna med <code>grid-column-end: span 2;</code>.</p>',
      'fa': '<p>شما می توانید به جای تعریف گرید بر اساس موقعیت شروع و پایان خطوط گرید, با استفاده از کلمه کلیدی <code>span</code> آن را بر اساس عرض ستون تعریف کنید. توجه کنید که <code>span</code> فقط با مقادیر مثبت کار می کند.</p><p>برای مثال, این هویج ها را با دستور <code>;grid-column-end: span 2</code> آبیاری کنید.</p>'
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
      'fr': '<p>Essayer l\'utilisation de <code>grid-column-end</code> avec encore le mot clé <code>span</code> pour arroser vos carottes.</p>',
      'de': '<p>Versuche, <code>grid-column-end</code> wieder mit dem Schlüsselwort <code>span</code> einzusetzen, um deine Karotten zu wässern.</p>',
      'pt-br': '<p>Tente usar <code>grid-column-end</code> com a palavra-chave <code>span</code> novamente para irrigar suas cenouras.</p>',
      'ru': '<p>Попробуй опять использовать <code>grid-column-end</code> вместе с <code>span</code> для того, чтобы полить вашу морковь.</p>',
      'pl': '<p>Spróbuj użyć ponownie <code>grid-column-end</code> z słowem kluczowym <code>span</code>, aby podlać swoje marchewki.</p>',
      'es': '<p>Intenta usar <code>grid-column-end</code> con la palabra clave <code>span</code> de nuevo para regar tus zanahorias.</p>',
      'sv': '<p>Testa använda <code>grid-column-end</code> med <code>span</code> igen för att vattna dina morötter.</p>',
      'fa': '<p> دوباره از <code>grid-column-end</code> به همراه کلمه کلیدی <code>span</code> برای آبیاری هویج ها استفاده کنید.</p>'
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
      'fr': '<p>Vous pouvez également utiliser le mot clé <code>span</code> avec <code>grid-column-start</code> pour définir la largeur de votre élément par rapport à la position de fin.</p>',
      'de': '<p>Du kannst das Schlüsselwort <code>span</code> auch mit <code>grid-column-start</code> verwenden um die Breite deines Rasterelements relativ zur Endposition anzugeben.</p>',
      'pt-br': '<p>Você ainda pode usar a palavra-chave <code>span</code> com <code>grid-column-start</code> para definir a largura do seu item relativo à posição final.</p>',
      'ru': '<p>Вы также можете использовать <code>span</code> вместе с <code>grid-column-start</code> для того, чтобы присвоить значение широты вашего grid элемента относительно конечной позиции.',
      'pl': '<p>Możesz także użyć słowa kluczowego <code>span</code> z <code>grid-column-start</code> aby ustawić szerokość twojego elementu względem końcowej pozycji.</p>',
      'es': '<p>También puedes usar la palabra clave <code>span</code> con <code>grid-column-start</code> para establecer la anchura del elemento en relación a la posición final.</p>',
      'sv': '<p>Du kan också använda <code>span</code> med <code>grid-column-start</code> för att sätta elementets längd relativt till slutvärdet.</p>',
      'fa': '<p>همچنین می توانید از کلمه کلیدی <code>span</code> به همراه <code>grid-column-start</code> برای تنظیم عرض آیتم خود متناسب با موقعیت پایانی استفاده نمایید.</p>'
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
      'fr': '<p>Taper <code>grid-column-start</code> et <code>grid-column-end</code> à chaque fois peut devenir fatiguant. Heureusement, <code>grid-column</code> est une propriété raccourcie qui peut accepter les deux valeurs à la fois, séparées par un slash.</p><p>Par exemple, <code>grid-column: 2 / 4;</code> définira l\'élément de la grille à partir de la 2ème ligne verticale de la grille et se terminera à la 4ème ligne de la grille.</p>',
      'de': '<p>Jedes Mal <code>grid-column-start</code> und <code>grid-column-end</code> einzutippen kann ermüdend werden. Zum Glück gibt es die Kurzschrift-Eigenschaft <code>grid-column</code>, welche beide Werte auf einmal akzeptiert, getrennt durch einen Schrägstrich.</p><p>Zum Beispiel <code>grid-column: 2 / 4;</code> setzt den Beginn eines Rasterelments auf die zweite vertikale Rasterlinie und das Ende auf die vierte Rasterlinie.</p>',
      'pt-br': '<p>Digitando ambos <code>grid-column-start</code> e <code>grid-column-end</code> toda vez, pode cansar. Felizmente, <code>grid-column</code> é uma propriedade curta que pode aceitar ambos os valores de uma só vez, separados por uma barra.</p><p>Por exemplo, <code>grid-column: 2 / 4;</code> irá definir o que o item na grade se inicie na 2ª linha vertical e termine na 4ª linha vertical da grade.</p>',
      'ru': '<p>Печатать вместе <code>grid-column-start</code> и <code>grid-column-end</code> каждый раз немного утомляет. К счастью, <code>grid-column</code> является коротким свойством которое принимает оба значения сразу через слеш  "/"  .</p><p>Например, <code>grid-column: 2 / 4;</code> скажет grid элементу начаться на 2-ой вертикальной grid линии и закончиться на 4-ой вертикальной grid линии.</p>',
      'pl': '<p>Wpisywanie obu <code>grid-column-start</code> i <code>grid-column-end</code> za każdym razem, może być męczące. Na szczęście, <code>grid-column</code> jest skróconą właściwością, która akceptuje obie wartości naraz, rozdzielone przez ukośnik.</p><p>Na przykład, <code>grid-column: 2 / 4;</code> ustawi początek elementu na 2 linię pionową, a koniec na 4 linię.</p>',
      'es': '<p>Escribir ambos <code>grid-column-start</code> y <code>grid-column-end</code> cada vez puede resultar cansado. Afortunadamente, <code>grid-column</code> es una propiedad abreviada que acepta ambos valores a la vez, separados por una barra oblicua.</p><p>Por ejemplo, <code>grid-colum: 2 / 4;</code> establecerá el comienzo del elemento de la cuadrícula en la 2ª línea vertical de esta, y su final en la 4ª línea vertical.</p>',
      'sv': '<p>Att skriva <code>grid-column-start</code> och <code>grid-column-end</code> varje gång kan bli lite tröttsamt. Därför finns <code>grid-column</code>, en förenklad variant där du kan definiera båda två på en gång separerade med ett slashtecken.</p><p>Till exempel, <code>grid-column: 2 / 4;</code> sätter grid elementet att starta på andra vertikala gridlinjen och sluta på fjärde.</p>',
      'fa': '<p>هر بار تایپ کردن هردوی <code>grid-column-start</code> و <code>grid-column-end</code> خسته کننده است. خوشبختانه, <code>grid-column</code> یک روش کوتاه شده است که می تواند هر دو مقدار را یکجا و به شکل جدا شده با یک اسلش بگیرد.</p><p>برای مثال, <code>;grid-column: 2 / 4</code> آیتم گرید را از خط عمودی دوم گرید شروع و در خط عمودی چهارم گرید تمام می کند.</p>'
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
      'fr': '<p>Essayer l\'utilisation de <code>grid-column</code> pour arroser ces carottes. Le mot clé <code>span</code> fonctionne également avec cette propriété raccourcie, essayez-le !</p>',
      'de': '<p>Versuche <code>grid-column</code> zu benutzen, um diese Karotten zu wässern. Das Schlüsselwort <code>span</code> funktioniert ebenfalls mit dieser Kurzschrift-Eigenschaft also versuch es!</p>',
      'pt-br': '<p>Tente usar <code>grid-column</code> para irrigar essas cenouras. A palavra-chave <code>span</code> também funciona com essa propriedade mais curta, então dê-a uma chance!</p>',
      'ru': '<p>Попробуйте использовать <code>grid-column</code> чтобы полить эту морковь. <code>span</code> также работает с этим коротким свойством, так что пробуйте!',
      'pl': '<p>Spróbuj użyć <code>grid-column</code> aby podlać te marchewki. Słowo kluczowe <code>span</code> działa także ze skróconą formą tej właściwości, więc wypróbuj to!</p>',
      'es': '<p>Intenta usar <code>grid-column</code> para regar las zanahorias. La palabra clave <code>span</code> también funciona con esta propiedad abreviada así que ¡dale una oportunidad!</p>',
      'sv': '<p>Testa att använda <code>grid-column</code> för att vattna dom här morötterna. <code>span</code> fungerar också med den här förenklade varianten så testa även det!</p>',
      'fa': '<p>با استفاده از <code>grid-column</code> هویج ها را آبیاری کنید. کلمه کلیدی <code>span</code> با این شیوه کوتاه شده نیز کار می کند, امتحان کن!</p>'
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
      'fr': '<p>L\'une des choses qui distingue les grilles CSS de Flexbox, c\'est que vous pouvez facilement positionner des éléments sur deux dimensions : colonnes et lignes. <code>grid-row-start</code> fonctionne de façon similaire à <code>grid-column-start</code> mais sur l\'axe vertical.</p><p>Utilisez <code>grid-row-start</code> pour arroser ces carottes.</p>',
      'de': '<p>Eines der Dinge welches CSS Grids von Flexbox unterscheidet, ist dass du Elemente auf einfache Weise in zwei Dimensionen positionieren kannst: Spalten und Reihen. <code>grid-row-start</code> funktioniert ähnlich wie <code>grid-column-start</code>, jedoch auf der vertikalen Achse.</p><p>Benutze <code>grid-row-start</code> um diese Karotten zu wässern.</p>',
      'pt-br': '<p>Uma das coisas que separa grades CSS do Flexbox é que você pode facilmente posicionar itens em duas dimensões: colunas e linhas. <code>grid-row-start</code> funciona da mesma forma que <code>grid-column-start</code> só que pelo eixo vertical.</p><p>Use <code>grid-row-start</code> para irrigar essas cenouras.</p>',
      'ru': "<p>Одна из вещей которая различает CSS grid'ы от flexbox'а это то что вы можете легко позиционировать элементы в двух направлениях: столбцах и строках. <code>grid-row-start</code> работает почти как <code>grid-column-start</code>, но только на вертикальной оси.</p><p>Используйте <code>grid-row-start</code> чтобы полить эту морковь.</p>",
      'pl': '<p>Jedną z rzeczy, która rozróżnia CSS grid od flexboxa jest to, że możesz w łatwy sposób ustawiać elementy w dwóch wymiarach: kolumnach i wierszach. <code>grid-row-start</code> działa podobnie jak <code>grid-column-start</code> z wyjątkiem osi pionowej.</p><p>Użyj <code>grid-row-start</code> aby podlać marchewki.</p>',
      'es': '<p>Una de las cosas que diferencia las cuadrículas de CSS de flexbox es que puedes posicionar los elementos fácilmente en 2 dimensiones: columnas y filas. <code>grid-row-start</code> funciona de manera semejante a <code>grid-column-start</code> pero a lo largo del eje vertical.</p><p>Usa <code>grid-row-start</code> para regar las zanahorias.</p>',
      'sv': '<p>En sak som gör CSS Grid annorlunda från Flexbox är att man kan positionera element i två dimensioner; kolumner och rader. <code>grid-row-start</code> fungerar som <code>grid-column-start</code> men sätter värden på den vertikala axeln.</p><p>Använd <code>grid-row-start</code> för att vattna dom här morötterna.</p>',
      'fa': '<p>یکی از مواردی که گرید را در سی اس اس از فلکس باکس متمایز می کند این است که می توان به راحتی آیتم ها را در دو بعد جابجا کرد: ستونی و سطری. <code>grid-row-start</code> بسیار شبیه به <code>grid-column-start</code> عمل می کند اما در محور عمودی.</p><p>از <code>grid-row-start</code> برای آبیاری هویج ها استفاده کنید.</p>'
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
      'fr': '<p>Maintenant, essayer en prenant la propriété raccourcie <code>grid-row</code>.</p>',
      'de': '<p>Versuche nun die Kurzschrift-Eigenschaft <code>grid-row</code>.</p>',
      'pt-br': '<p>Agora dê uma chance à propriedade curta <code>grid-row</code>.</p>',
      'ru': '<p>А теперь попробуйте использовать короткое свойство <code>grid-row</code>.</p>',
      'pl': '<p>Teraz spróbuj użyć skróconej właściwości <code>grid-row</code>.</p>',
      'es': '<p>Ahora dale una oportunidad a la propiedad abreviada <code>grid-row</code>.</p>',
      'sv': '<p>Testa nu med den förenklade varianten <code>grid-row</code>.</p>',
      'fa': '<p>حالا از روش کوتاه شده <code>grid-row</code> استفاده کنید.</p>'
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
      'fr': '<p>Utilisez <code>grid-column</code> et <code>grid-row</code> en même temps pour définir la position dans les deux dimensions.</p>',
      'de': '<p>Benutze <code>grid-column</code> und <code>grid-row</code> gleichzeitig um die Position in beiden Dimensionen festzulegen.</p>',
      'pt-br': '<p>Use <code>grid-column</code> e <code>grid-row</code> ao mesmo tempo para definir ambas as dimensões.</p>',
      'ru': '<p>Используйте <code>grid-column</code> и <code>grid-row</code> одновременно, для того чтобы позиционировать элемент в двух направлениях.',
      'pl': '<p>Użyj <code>grid-column</code> i <code>grid-row</code> razem, aby ustawić pozycję w dwóch wymiarach.</p>',
      'es': '<p>Usa <code>grid-colum</code> y <code>grid-row</code> a la vez para establecer una posición en ambas dimensiones.</p>',
      'sv': '<p>Använd <code>grid-colum</code> och <code>grid-row</code> samtidigt för att sätta positionen längs båda axlarna.</p>',
      'fa': '<p>از هردوی <code>grid-column</code> و <code>grid-row</code> با هم برای جابجایی در هر دو بعد استفاده کنید.</p>'
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
      'fr': '<p>Vous pouvez aussi utiliser <code>grid-column</code> et <code>grid-row</code> ensemble pour étendre des zones plus vastes dans de la grille. Essayez !</p>',
      'de': '<p>Du kannst auch <code>grid-column</code> und <code>grid-row</code> zusammen einsetzen um grössere Bereich im Raster zu erfassen. Versuche es!</p>',
      'pt-br': '<p>Você também pode usar <code>grid-column</code> e <code>grid-row</code> juntas para abranger áreas maiores dentro da grade. Dê uma chance!</p>',
      'ru': '<p>Вы также можете использовать <code>grid-column</code> и <code>grid-row</code> вместе для того чтобы охватить более большие зоны внутри grid сетки. Пробуйте!</p>',
      'pl': '<p>Możesz także użyć <code>grid-column</code> i <code>grid-row</code> razem, aby pokryć większą powierzchnię wewnątrz siatki grid. Spróbuj!</p>',
      'es': '<p>También puedes usar <code>grid-column</code> y <code>grid-row</code> juntos para abarcar áreas más extensas en la cuadrícula. ¡Inténtalo!</p>',
      'sv': '<p>Du kan också sätta <code>grid-column</code> och <code>grid-row</code> tillsammans för att täcka större ytor inuti rutnätet. Testa!</p>',
      'fa': '<p>همچنین می توانید از<code>grid-column</code> و <code>grid-row</code> باهم برای پوشش نواحی بزرگتر با گرید استفاده کنید. امتحان کن!</p>'
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
      'fr': '<p>Si taper à la fois <code>grid-column</code> et <code>grid-row</code> est trop long pour vous, il y a encore un raccourci pour cela. <code>grid-area</code> accepte quatre valeurs séparées par des slashes : <code>grid-row-start</code>, <code>grid-column-start</code>, <code>grid-row-end</code>, suivi par <code>grid-column-end</code>.</p><p>Un exemple de cela serait<code>grid-area: 1 / 1 / 3 / 6;</code>.</p>',
      'de': '<p>Falls <code>grid-column</code> und <code>grid-row</code> einzutippen zu viel für dich ist, gibt es eine weitere Kurzschrift-Eigenschaft dafür. <code>grid-area</code> akzeptiert vier Werte, durch einen Schrägstrich getrennt: <code>grid-row-start</code>, <code>grid-column-start</code>, <code>grid-row-end</code>, gefolgt von <code>grid-column-end</code>.</p><p>Ein Beispiel dafür wäre <code>grid-area: 1 / 1 / 3 / 6;</code>.</p>',
      'pt-br': '<p>Se digitar ambos <code>grid-column</code> e <code>grid-row</code> é muito para você, há ainda outra propriedade curta para isso. <code>grid-area</code> aceita quatro valores separados por barras: <code>grid-row-start</code>, <code>grid-column-start</code>, <code>grid-row-end</code>, seguido por <code>grid-column-end</code>.</p><p>Um exemplo disso poderia ser <code>grid-area: 1 / 1 / 3 / 6;</code>.</p>',
      'ru': '<p>Если для вас напечатать <code>grid-column</code> и <code>grid-row</code> это слишком, есть другое короткое свойство для этого. <code>grid-area</code> принимает 4 значения, разделенные слешем " / ": <code>grid-row-start</code>, <code>grid-column-start</code>, <code>grid-row-end</code> и <code>grid-column-end</code>.</p><p>Примером для этого будет <code>grid-area: 1 / 1 / 3 / 6;</code>.</p>',
      'pl': '<p>Jeżeli pisanie obu <code>grid-column</code> i <code>grid-row</code> to dla ciebie za dużo, istnieje skrócona wersja tych właściwości. <code>grid-area</code> akceptuje cztery wartości rozdzielone przez ukośnik: <code>grid-row-start</code>, <code>grid-column-start</code>, <code>grid-row-end</code> oraz <code>grid-column-end</code>.</p><p>Jednym z przykładów jest <code>grid-area: 1 / 1 / 3 / 6;</code>.</p>',
      'es': '<p>Si escribir <code>grid-column</code> y <code>grid-row</code> se te hace demasiado pesado, aquí tienes otra propiedad abreviada. <code>grid-area</code> admite cuatro valores separados por barras oblicuas: <code>grid-row-start</code>, <code>grid-column-start</code>, <code>grid-row-end</code>, seguido de <code>grid-column-end</code>.</p><p>Un ejemplo de esto podría ser <code>grid-area: 1 / 1 / 3 / 6;</code>.</p>',
      'sv': '<p>Ifall du tycker att skriva både <code>grid-column</code> och <code>grid-row</code> är för mycket så kan du använda en ännu enklare variant! <code>grid-area</code> tar emot fyra värden separerade med slashtecken: <code>grid-row-start</code>, <code>grid-column-start</code>, <code>grid-row-end</code> och <code>grid-column-end</code>.</p><p>Ett exempel skulle kunna vara <code>grid-area: 1 / 1 / 3 / 6;</code>.</p>',
      'fa': '<p>اگر تایپ همزمان <code>grid-column</code> و <code>grid-row</code> برایتان خیلی سخت است, روش کوتاه شده دیگری برای این مورد هم وجود دارد. <code>grid-area</code> چهار مقدار جداشده با اسلش را می پذیرد: <code>grid-row-start</code>, <code>grid-column-start</code>, <code>grid-row-end</code>, و در نهایت <code>grid-column-end</code>.</p><p>یک مثال این شیوه به این شکل است: <code>;grid-area: 1 / 1 / 3 / 6</code>.</p>'
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
      'fr': '<p>Que diriez-vous de plusieurs éléments ? Vous pouvez les chevaucher sans problème. Utilisez <code>grid-area</code> pour définir une deuxième région qui couvre toutes les carottes non arrosées.</p>',
      'de': '<p>Wie wäre es mit mehreren Elementen? Diese können sich problemlos überlagern. Verwende <code>grid-area</code> um einen zweiten Bereich zu definieren, welcher alle ungewässerten Karotten überlagert.</p>',
      'pt-br': '<p>Que tal múltiplos itens? Você pode sobrepor-los sem problemas. Use <code>grid-area</code> para definir uma área secundária que cobre todas as cenouras não irrigadas.</p>',
      'ru': '<p>Как насчет множества элементов? Вы можете накладывать их друг на друга без каких либо проблем. Используйте <code>grid-area</code> чтобы определить вторую зону, которая займет всю не политую морковь.</p>',
      'pl': '<p>A co z wieloma elementami? Możesz je nakładać bez problemu. Użyj <code>grid-area</code> aby zdefiniować drugą powierzchnię, która pokryje nie podlane marchewki.</p>',
      'es': '<p>¿Y qué me dices de múltiples elementos? Puedes superponerlos sin problema. Usa <code>grid-area</code> para definir una segunda área que cubra todas las zanahorias que están sin regar.</p>',
      'sv': '<p>Vad gör vi med multipla element? Dom kan överlappa utan problem. Använd <code>grid-area</code> för att definiera ett andra område som täcker all dina morötter.</p>',
      'fa': '<p>در مورد چندین آیتم جطور؟ می توانید بدون دردسر آنها را روی هم بیاندازید. از <code>grid-area</code> برای تعریف ناحیه دومی که هویج های آبیاری نشده را پوشش دهد استفاده کنید.</p>'
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
      'en': '<p>If grid items aren\'t explicity placed with <code>grid-area</code>, <code>grid-column</code>, <code>grid-row</code>, etc., they are automatically placed according to their order in the source code. We can override this using the <code>order</code> property, which is one of the advantages of grid over table-based layout.</p><p>By default, all grid items have an <code>order</code> of 0, but this can be set to any positive or negative value, similar to <code>z-index</code>.</p><p>Right now, the carrots in the second column are being poisoned and the weeds in the last column are being watered. Change the <code>order</code> value of the poison to fix this right away!</p>',
      'fr': '<p>Si les éléments de la grille ne sont pas explicitement positionnés avec <code>grid-area</code>, <code>grid-column</code>, <code>grid-row</code>, etc., ils sont automatiquement positionnés selon leur ordre dans le code source. Nous pouvons remplacer ceci en utilisant la propriété <code>order</code>, c\'est l\'un des avantages de la grille par rapport à la mise en page basée sur une table.</p><p>Par défaut, tous les éléments de la grille ont <code>order</code> à 0, mais cela peut être défini sur n\'importe quelle valeur positive ou négative, c\'est similaire à <code>z-index</code>.</p><p>À l\'heure actuelle, les carottes dans la deuxième colonne sont empoisonnées et les mauvaises herbes dans la dernière colonne sont arrosées. Changez la valeur de <code>order</code> du poison pour résoudre ce problème immédiatement !</p>',
      'de': '<p>Wenn Rasterelemente nicht explizit mit <code>grid-area</code>, <code>grid-column</code>, <code>grid-row</code>, etc. platziert werden, werden sie automatisch platziert gemäß ihrer Reihenfolge im Quellcode. Wir können das mit der <code>order</code> Eigenschaft überschreiben, was einer der Vorteile von Grids gegenüber tabellenbasierten Layouts ist.</p><p>Standardmäßig haben alle Rasterelemente einen <code>order</code> Wert von 0, dieser kann aber auf jeden positiven oder negativen Wert gesetzt werden, ähnlich wie <code>z-index</code>.</p><p>Im Moment werden die Karotten in der zweiten Spalte vergiftet und das Unkraut in der letzten Spalte wird gewässert. Ändere den <code>order</code> Wert von Gift ("poison"), um dies gleich in Ordnung zu bringen!</p>',
      'pt-br': '<p>Se um item da grade não é explicitamente colocada com <code>grid-area</code>, <code>grid-column</code>, <code>grid-row</code>, etc., eles são colocados automaticamente de acordo com a ordem no código fonte. A gente pode mudar isso usando a propriedade <code>order</code>, que é uma das vantagens das grades ao invés de leiautes baseados em tabelas.</p><p>Por padrão, todos os itens da grade tem um <code>order</code> de 0, mas isso pode ser definido para qualquer valor positivo ou negativo, similar a <code>z-index</code>.</p><p>Nesse momento, as cenouras da segunda coluna estão sendo envenenadas e as ervas daninhas da última coluna estão sendo irrigadas. Altere o valor <code>order</code> do veneno para deixar isso na ordem certa!</p>',
      'ru': "<p>Если grid элементы не имеют конкретного расположения с <code>grid-area</code>, <code>grid-column</code>, <code>grid-row</code> и т.д., они автоматически помещаются следуя порядку написанному в коде. Мы можем перезаписать это с помощью свойства <code>order</code>, которое является одним из преимуществ grid'а перед табличной разметкой.</p><p>По умолчанию, все grid элементы имеют <code>order</code> равный 0, но этому свойству можно присвоить любое положительное или отрицательное значение, примерно как <code>z-index</code>.</p><p>На данный момент, морковь во 2-м столбце отравлена и сорняки в последнем столбце поливаются. Измените значение свойства <code>order</code> яда чтобы исправить это прямо сейчас!</p>",
      'pl': '<p>Jeżeli elementy nie są jednoznacznie umiejscowione w grid przez <code>grid-area</code>, <code>grid-column</code>, <code>grid-row</code>, itd., są one automatycznie umiejscowione według kolejności jaka znajduje się w kodzie źródłowym. Możemy to nadpisać z użyciem właściwości <code>order</code>, co jest jedną z zalet układu grid nad układem table.</p><p>Domyślnie, wszystkie elementy grid mają wartość <code>order</code> ustawioną na 0, ale może to zostać ustawione na dowolną liczbę dodatnią lub ujemną, similar to <code>z-index</code>.</p><p>Teraz, marchewki w drugiej kolumnie są traktowane trucizną, a chwasty w ostatniej kolumnie są podlewane. Zmień wartość <code>order</code> trucizny, aby naprawić to jak najszybciej!</p>',
      'es': '<p>Si los elementos de la cuadrícula no se sitúan explícitamente con <code>grid-area</code>, <code>grid-column</code>, <code>grid-row</code>, etc., se sitúan automáticamente de acuerdo al orden en el código fuente. Puedes sobrescribir esto usando la propiedad <code>order</code>, que es una de las ventajas de la cuadrícula frente al diseño basado en tablas.</p><p>Por defecto, el valor de <code>order</code> de todos los elementos es igual a 0, pero puede ser establecido a cualquier valor positivo o negativo, de manera similar a <code>z-index</code>.</p><p>Ahora mismo, las zanahorias en la segunda columna están siendo envenenadas y las malas hierbas en la última columna, regadas. !Cambia el valor de <code>order</code> del veneno para solucionar esto!</p>',
      'sv': '<p>Ifall grid element inte är specifikt satta med <code>grid-area</code>, <code>grid-column</code>, <code>grid-row</code> etc., så är dom automatiskt placerade enligt hur dom kommer i källkoden. Vi kan skriva över detta genom att använda egenskapen <code>order</code>, vilket är en av CSS Grid’s stora fördelar.</p><p>Som standard har alla grid element ett <code>order</code> värde av 0, men det kan sättas till positiva eller negativa värden likt <code>z-index</code>.</p><p>Just nu blir morötterna i andra kolumnen förgiftade medan ogräset i sista kolumnen blir vattnade! Ändra <code>order</code> av giftet för att fixa det här.</p>',
      'fa': '<p>اگر آیتم های گرید با استفاده از  <code>grid-area</code>, <code>grid-column</code>, <code>grid-row</code> و... جابجا نشده باشند , به صورت خودکار با توجه به ترتیبشان در سورس کد قرار داده می شوند. می توان این چیدمان را با استفاده از  <code>order</code> که یکی از برتری های گرید نسبت به جدول بندی می  باشد, تغییر داد.</p><p>به طور پیش فرض,  <code>order</code> برای همه ی آیتم های گرید مقدار 0 می باشد, اما می توان مقادیر مثبت یا منفی به آن نسبت داد, همانند  <code>z-index</code>.</p><p>در حال حاضر, هویج ها در ستون دوم سمپاشی و علف های هرز در ستون آخر آبیاری می شوند. مقدار <code>order</code> را طوری تغییر دهید که این مشکل را برطرف کند!</p>'
    },
    board: 'cwccc',
    selector: '> :nth-child(2)',
    style: {'order': '2'},
    before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n.water {\n  order: 0;\n}\n\n#poison {\n",
    after: "}"
  },
  {
    name: 'order 2',
    instructions: {
      'en': '<p>Now the water and poison are alternating, even though all of the weeds are at the start of your garden. Set the <code>order</code> of the poisons to remedy this.</p>',
      'fr': '<p>Maintenant l’eau et poison se sont alternés, même si toutes les mauvaises herbes sont au début de votre jardin. Définissez <code>order</code> des poisons pour y remédier.</p>',
      'de': '<p>Nun wechseln sich Wasser und Gift ab, obwohl alles Unkraut sich am Anfang des Gartens befindet. Setze den <code>order</code> Wert für Gift um Abhilfe zu schaffen.</p>',
      'pt-br': '<p>Agora a água e o veneno estão alternados, mesmo que todas as ervas daninhas estejam no início da sua horta. Defina a propriedade <code>order</code> do veneno para remediar isso.</p>',
      'ru': '<p>Теперь вода и яд меняются местами, хотя все сорняки находятся в начале сада. Присвойте правильное значение <code>order</code> яда так, чтобы исправить это.</p>',
      'pl': '<p>Teraz woda i trucizna występują na przemian, chociaż wszystkie chwasty są na początku Twojego ogrodu. Ustaw właściwość <code>order</code> trucizny aby temu zaradzić temu.</p>',
      'es': '<p>Ahora el veneno y el agua se alternan, a pesar de que todas las malas hierbas están al comienzo de tu jardín. Cambia el valor de <code>order</code> de los venenos para solucionar esto.</p>',
      'sv': '<p>Nu alternerar gift och vatten även om allt ogräs är på första raden. Sätt <code>order</code> för giftet för att lösa det här.</p>',
      'fa': '<p>حالا آب و سموم با هم جابجا شده اند در حالی که همه ی علف های هرز در ابتدای باغ شما هستند. مقدار <code>order</code> را برای سموم تغییر دهید و چاره ای بیندیشید.</p>'
    },
    board: 'wcwcwcwcwc',
    selector: '> :nth-child(odd)',
    style: {'order': '-1'},
    before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n.water {\n  order: 0;\n}\n\n.poison {\n",
    after: "}"
  },
  {
    name: 'grid-template-columns 1',
    instructions: {
      'en': '<p>Up to this point, you\'ve had your garden set up as a grid with five columns, each 20% of the full width, and five rows, each 20% of the full height.</p><p>This was done with the rules <code>grid-template-columns: 20% 20% 20% 20% 20%;</code> and <code>grid-template-rows: 20% 20% 20% 20% 20%;</code> Each rule has five values which create five columns, each set to 20% of the overall width of the garden.</p><p>But you can set the grid up however you like. Give <code>grid-template-columns</code> a new value to water your carrots. You\'ll want to set the width of the 1st column to be 50%.',
      'fr': '<p>Jusqu\'à présent, vous aviez mis votre jardin dans une grille avec cinq colonnes, chacune ayant une largeur de 20%, et cinq lignes, chacune ayant une hauteur de 20%.</p><p>Cela a été fait avec les règles <code>grid-template-columns: 20% 20% 20% 20% 20%;</code> et <code>grid-template-rows: 20% 20% 20% 20% 20%;</code> Chaque règle comporte cinq valeurs qui créent cinq colonnes, chacune correspond à 20% de la largeur totale du jardin.</p><p>Mais vous pouvez configurer la grille comme vous le souhaitez. Donnez une nouvelle valeur à <code>grid-template-columns</code> pour arroser vos carottes. Vous devez définir la largeur de la 1ère colonne à 50%.',
      'de': '<p>Bis jetzt war dein Garten als Raster von fünf Spalten mit je 20% der Gesamtbreite sowie fünf Reihen mit je 20% der Gesamthöhe angelegt.</p><p>Dies wurde durch die Regeln <code>grid-template-columns: 20% 20% 20% 20% 20%;</code> und <code>grid-template-rows: 20% 20% 20% 20% 20%;</code> bewirkt. Jede dieser Regeln hat fünf Werte, was fünf Spalten erzeugt, jede 20% der Gesamtbreite des Gartens.</p><p>Aber du kannst das Raster so konfigurieren wie du möchtest. Gib <code>grid-template-columns</code> einen neuen Wert um deine Karotten zu wässern. Du solltest die Breite der ersten Spalte auf 50% setzen.',
      'pt-br': '<p>Até esse ponto, você teve sua horta com uma grade definida com cinco colunas, cada uma com 20% da largura total, e cinco linhas, cada uma com 20% da altura total.</p><p>Isso foi feito com as regras <code>grid-template-columns: 20% 20% 20% 20% 20%;</code> e <code>grid-template-rows: 20% 20% 20% 20% 20%;</code> Cada regra tem cinco valores que criam cinco colunas, que tem 20% do total da largura da sua horta.</p><p>Mas você pode definir a grade da forma que quiser. Dê a <code>grid-template-columns</code> um novo valor para irrigar suas cenouras. Você desejará definir a largura da sua 1ª coluna para 50%.',
      'ru': '<p>До этого момента ваш сад имел grid сетку с пятью столбцами по 20% широты, и пятью строками, каждый по 20% высоты.</p><p>Это было сделано благодаря свойствам <code>grid-template-columns: 20% 20% 20% 20% 20%;</code> и <code>grid-template-rows: 20% 20% 20% 20% 20%;</code> Каждое свойство имеет пять значений, которые создают 5 столбцов, где ширина каждого равна 20% от обшей широты сада.</p><p>Но вы можете изменять grid сетку как вам вздумается. Присвойте <code>grid-template-columns</code> новое значение, чтобы полить вашу морковь. Вам необходимо поставить значение широты 1-го столбца равное 50%.',
      'pl': '<p>Do tego pory, twój ogród składał się z siatki z pięcioma kolumnami, każda po 20% pełnej szerokości, i pięciu rzędów, każdy po 20% pełnej wysokości.</p><p>To było zrobione według zasad <code>grid-template-columns: 20% 20% 20% 20% 20%;</code> i <code>grid-template-rows: 20% 20% 20% 20% 20%;</code> Każda zasada ma pięć wartości, które tworzą 5 kolumn - każda z nich tworzy 20% szerokości ogrodu.</p><p>Ale możesz ustawić siatkę w dowolny sposób. Ustaw nową wartość <code>grid-template-columns</code>, aby nawodnić swoje marchewki. Będziesz chciał ustawić szerokość pierwszej kolumny na 50%.',
      'es': '<p>Hasta este momento, has tenido un jardín formado por cinco columnas, cada una ocupando el 20% de la anchura total, y cinco filas, cada una ocupando el 20% de la altura total.</p><p>Esto ha sido establecido con las propiedades <code>grid-template-columns: 20% 20% 20% 20% 20%;</code> y <code>grid-template-rows: 20% 20% 20% 20% 20%;</code>. Cada propiedad tiene cinco valores que crean cinco columnas, cada una establecida al 20% de la anchura total del jardín.</p><p>Pero puedes establecer los valores en la cuadrícula como quieras. Da a <code>grid-template-columns</code> un nuevo valor para regar tus zanahorias. Querrás que la anchura de la primera columna sea del 50%.</p>',
      'sv': '<p>Hittills har du haft din trädgård uppsatt som ett rutnät med fem kolumner där varje kolumn har 20% bredd, och fem rader där varje rad har 20% höjd.</p><p>Det gjordes med <code>grid-template-columns: 20% 20% 20% 20% 20%;</code> and <code>grid-template-rows: 20% 20% 20% 20% 20%;</code> Varje regel har fem värden som skapar fem kolumner.</p><p>Men du kan sätta upp rutnätet precis som du vill. Ge <code>grid-template-columns</code> ett nytt värde för att vattna dina morötter. Du behöver sätta bredden på första kolumnen till 50%.</p>',
      'fa': '<p>تا اینجای کار, باغ شما بصورت یک گرید با 5 ستون که هرکدام 20 درصد پهنای کل و 5 سطر که هرکدام 20 درصد درازای کل بودند, ایجاد شده بود.</p><p>دستورات <code>;grid-template-columns: 20% 20% 20% 20% 20%</code> و <code>;grid-template-rows: 20% 20% 20% 20% 20%</code> این شکل را پدید آورده بودند. هر دستور 5 مقدار دارد که پنج ستونی را که هرکدام 20 درصد پهنای کل باغ هستند را ایجاد می کنند.</p><p> اما می توانید گرید را طوری که دوست دارید تنظیم کنید.مقدار جدیدی به <code>grid-template-columns</code> بدهید که هویج ها را آبیاری کنید. برای این کار باید عرض ستون اول را 50 درصد قرار دهید.'
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
      'fr': '<p>Le fait de spécifier un ensemble de colonnes avec des largeurs identiques peut devenir fastidieux. Heureusement, il y a une fonction <code>repeat</code> pour nous aider.</p><p>Par exemple, nous avons défini précédemment cinq colonnes de 20% avec la règle <code>grid-template-columns: 20% 20% 20% 20% 20%;</code>. Ceci peut être simplifié ainsi <code>grid-template-columns: repeat(5, 20%);</code></p><p>A l\'aide de <code>grid-template-columns</code> avec la fonction <code>repeat</code>, créez huit colonnes avec chacune une largeur de 12,5%. De cette façon, vous ne sur-arrosez pas votre jardin.</p>',
      'de': '<p>Mehrere Spalten mit identischen Breiten anzugeben kann mühsam werden. Zum Glück gibt es eine <code>repeat</code> Funktion, die uns hilft.</p><p>Zum Beispiel haben wir vorher fünf Spalten mit 20% definiert mit der Regel <code>grid-template-columns: 20% 20% 20% 20% 20%;</code>. Dies kann vereinfacht werden zu <code>grid-template-columns: repeat(5, 20%);</code></p><p>Benutze <code>grid-template-columns</code> mit der <code>repeat</code> Funktion um acht Spalten von je 12.5% Breite zu erstellen. So wirst du deinen Garten nicht überwässern.</p>',
      'pt-br': '<p>Especificar um monte de colunas com larguras idênticas pode ficar tedioso.  Felizmente há uma função <code>repeat</code> para nos ajudar com isso.</p><p>Por exemplo, definimos anteriormente cinco colunas de 20% de largura na regra <code>grid-template-columns: 20% 20% 20% 20% 20%;</code>. Isso pode ser simplificado como <code>grid-template-columns: repeat(5, 20%);</code></p><p>Usando <code>grid-template-columns</code> com a função <code>repeat</code>, crie oito colunas com 12.5% de largura cada. Dessa forma você não vai imundar sua horta.</p>',
      'ru': '<p>Определять несколько столбцов с одинаковой широтой может быть немного утомительным. К счастью, есть функция <code>repeat</code> которая призвана помочь с этим.</p><p>Например, раньше мы определили пять столбцов по 20% широты с помощью <code>grid-template-columns: 20% 20% 20% 20% 20%;</code>. Это можно упростить до <code>grid-template-columns: repeat(5, 20%);</code></p><p>Используя <code>grid-template-columns</code> вместе с функцией <code>repeat</code>, создайте 8 столбцов по 12.5% широты каждый. Таким образом, вы не будете использовать больше воды чем нужно.</p>',
      'pl': '<p>Definiowanie wielu kolumn o takiej samej szerokości może być nużące. Na szczęście istnieje funkcja <code>repeat</code>, która może nam w tym pomóc.</p><p>Na przykład, wcześniej zdefiniowaliśmy 5 kolumn o szerokości 20% przy pomocy zasady <code>grid-template-columns: 20% 20% 20% 20% 20%;</code>. To może być uproszczone jako <code>grid-template-columns: repeat(5, 20%);</code></p><p>Używając <code>grid-template-columns</code> z funkcją <code>repeat</code>, stwórz 8 kolumn - każda po 12.5% szerokości. W ten sposób nie przesadzisz z nawodnieniem ogrodu.</p>',
      'es': '<p>Especificar un puñado de columnas con la misma anchura puede ser aburrido. Afortunadamente hay una función <code>repeat</code> que te ayudará con eso.</p><p>Por ejemplo, previamente hemos definido cinco columnas al 20% de anchura mediante <code>grid-template-columns: 20% 20% 20% 20% 20%;</code>. Esto puedes simplificarse como <code>grid-template-columns: repeat(5, 20%);</code></p><p>Usando <code>grid-template-columns</code> con la función <code>repeat</code>, crea ocho columnas, cada una con una anchura del 12.5%. De esta manera no inundarás tu jardín.</p>',
      'sv': '<p>Att specifiera ett gäng kolumner med samma värden kan kännas lite redundant. Det finns en <code>repeat</code> funktion som hjälper med detta.</p><p>Till exempel, tidigare angav vi fem kolumner med 20% bredd med <code>grid-template-columns: 20% 20% 20% 20% 20%;</code>. Vi kan förenkla genom att använda: <code>grid-template-columns: repeat(5, 20%);</code>.</p><p>Använd nu <code>grid-template-columns</code> med <code>repeat</code> funktionen för att sätta kolumnerna till 12.5% bredd. På så sätt vattnar vi inte där vi inte behöver.</p>',
      'fa': '<p>تعریف کردن تعدادی ستون با عرض یکسان خسته کننده است. خوشبختانه کلمه کلیدی <code>repeat</code> این امر را ساده می کند.</p><p>برای مثال, قبلا پنج ستون با عرض 20 درصد را با استفاده از<p> <code>;grid-template-columns: 20% 20% 20% 20% 20%</code> تعریف کرده بودیم. این دستور به شکل <code>grid-template-columns: repeat (5, 20%)</code>قابل ساده سازی است.  </p><p>با استفاده از <code>grid-template-columns</code> با کلمه کلیدی <code>repeat</code>, هشت ستون هریک به عرض 12.5 درصد بسازید. به این روش از آبیاری بیش از حد باغ خود جلوگیری کنید.</p>'
    },
    board: 'c',
    classes: {'#plants': 'grid-template-columns-repeat-8-12'},
    style: {'grid-template-columns': 'repeat(8, 12.5%)'},
    before: "#garden {\n  display: grid;\n",
    after: "  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n  grid-column: 1;\n  grid-row: 1;\n}"
  },
  {
    name: 'grid-template-columns 4',
    instructions: {
      'en': '<p><code>grid-template-columns</code> doesn\'t just accept values in percentages, but also length units like pixels and ems. You can even mix different units together.</p><p>Here, set three columns to <code>100px</code>, <code>3em</code>, and <code>40%</code> respectively.</p>',
      'fr': '<p><code>grid-template-columns</code> n\'accepte pas seulement les valeurs en pourcentage, mais aussi les unités de longueur comme pixels et ems. Vous pouvez même mélanger différentes unités.</p><p>Ici, définissez respectivement trois colonnes à <code>100px</code>, <code>3em</code> et <code>40%</code>.',
      'de': '<p><code>grid-template-columns</code> akzeptiert nicht nur Werte in Prozenten sondern auch Längeneinheiten wie Pixel und em. Du kannst sogar verschiedene Einheiten zusammen mischen.</p><p>Setze hier drei Spalten auf jeweils <code>100px</code>, <code>3em</code>, und <code>40%</code>.</p>',
      'pt-br': '<p><code>grid-template-columns</code> não aceita apenas valores em porcentagens, mas também aceita unidade de medidas como pixels e ems. Você pode inclusive misturar diferentes unidades junto.</p><p>Aqui, defina três colunas de <code>100px</code>, <code>3em</code>, e <code>40%</code> respectivamente.</p>',
      'ru': '<p><code>grid-template-columns</code> не только принимает значения в процентах, но также может принимать значения длины, такие как пиксели или ems. Вы даже можете комбинировать разные единицы измерения.</p><p>Сейчас присвойте трем столбцам значение <code>100px</code>, <code>3em</code> и <code>40%</code> соответственно.</p>',
      'pl': '<p><code>grid-template-columns</code> nie tylko akceptuje wartości podane w procentach, ale również jednostki takie jak pixele i em-y. Możesz nawet mieszać różne jednostki razem.</p><p>Ustaw odpowiednio wartości trzech kolumn na <code>100px</code>, <code>3em</code> i <code>40%</code>.</p>',
      'es': '<p><code>grid-template-columns</code> no acepta solo valores porcentuales, sino también otras unidades como pixels y ems. Incluso puedes mezclar diferentes unidades a la vez.</p><p>Establece tres columnas a <code>100px</code>, <code>3em</code>, y <code>40%</code> respectivamente.</p>',
      'sv': '<p><code>grid-template-columns</code> tar inte bara värden i procent utan kan använda andra värden som till exempel pixlar och em. Du kan också mixa värden tillsammans.</p><p>Sätt tre kolumner till <code>100px</code>, <code>3em</code> och <code>40%</code>.</p>',
      'fa': '<p><code>grid-template-columns</code> تنها مقادیر را به صورت درصد نمی پذیرد, بلکه واحدهای طول مانند پیکسل و em را نیز می توان به آن تخصیص داد. حتی می توانید واحدهای مختلف را با هم ترکیب کنید.</p><p>در این بخش, سه ستون به ترتیب با مقادیر  <code>3em</code> <code>%40</code> <code>100px</code> ایجاد نمایید.</p>'
    },
    board: 'cwc',
    classes: {'#plants': 'grid-template-columns-100px-3em-40p'},
    style: {'grid-template-columns': '100px 3em 40%;'},
    before: "#garden {\n  display: grid;\n",
    after: "  grid-template-rows: 20% 20% 20% 20% 20%;\n}"
  },
  {
    name: 'grid-template-columns 5',
    instructions: {
      'en': '<p>Grid also introduces a new unit, the fractional <code>fr</code>. Each <code>fr</code> unit allocates one share of the available space. For example, if two elements are set to <code>1fr</code> and <code>3fr</code> respectively, the space is divided into 4 equal shares; the first element occupies 1/4 and the second element 3/4 of any leftover space.</p><p>Here, weeds make up the left 1/6 of your first row and carrots the remaining 5/6. Create two columns with these widths using <code>fr</code> units.</p>',
      'fr': '<p>La grille introduit également une nouvelle unité, le fractionnaire <code>fr</code>. Chaque unité  <code>fr</code> alloue une partie de l\'espace disponible. Par exemple, si deux éléments sont définies respectivement avec <code>1fr</code> et <code>3fr</code>,  l\'espace est divisé en 4 parts égales, le premier élément occupe 1/4 et le deuxième élément 3/4 de l\'espace disponible.</p><p>Ici, les mauvaises herbes représentent 1/6 de votre première ligne et les carottes les 5/6 restants. Créez deux colonnes avec ces largeurs en utilisant les unités <code>fr</code>.</p>',
      'de': '<p>Grid führt auch eine neue Einheit ein, den Bruchteil ("fractional") <code>fr</code>. Jede <code>fr</code> Einheit weist einen Anteil des verfügbaren Platzes zu. Wenn zum Beispiel zwei Elemente auf <code>1fr</code> und <code>3fr</code> gesetzt sind, wird der verfügbare Platz in vier gleich grosse Teile aufgeteilt; das erste Element besetzt 1/4 und das zweite Element 3/4 des restlichen Platzes.</p><p>Hier machen Unkraut 1/6 deiner ersten Reihe aus und Karotten die übrigen 5/6. Erstelle zwei Spalten mit diesen Breiten unter Verwendung von <code>fr</code> Einheiten.</p>',
      'pt-br': '<p>CSS Grid também introduz uma nova medida, a fracionário <code>fr</code>. Cada medida <code>fr</code> aloca um pedaço do espaço disponível. Por exemplo, se dois elementos estão definidos para <code>1fr</code> e <code>3fr</code> respectivamente, o espaço é dividido em 4 partes iguais; o primeiro elemento ocupa 1/4 e o segundo elemento 3/4 do espaço restante.</p><p>Aqui, ervas daninhas ocupam 1/6 da sua primeira linha e as cenouras os 5/6 restantes. Crie duas colunas com essas larguras usando a unidade <code>fr</code>.</p>',
      'ru': '<p>Grid также вводит новую единицу измерения, дробный <code>fr</code>. Каждый <code>fr</code> выделяет одну часть свободного простанства. Например, если два элемента имеют свойство равное <code>1fr</code> и <code>3fr</code> соответственно, то тогда пространство будет поделено на 4 одинаковые части. Первый элемент займет 1/4 а второй 3/4 всего оставшегося пространства.</p><p>Сейчас сорняки занимают левую 1/6 часть вашей первой строки, а морковь оставшиеся 5/6. Создайте два столбца с такими же широтами, используя единицы <code>fr</code>.</p>',
      'pl': '<p>Grid także wprowadza nową jednostkę, ułamek <code>fr</code>. Każda jednostka <code>fr</code> przyporządkowuje jedną część wolnej przestrzeni . Na przykład, jeżeli dwa elementy mają wartości odpowiednio <code>1fr</code> i <code>3fr</code>, przestrzeń jest podzielona na 4 równe części; pierwszy element zajmuje 1/4, a drugi element 3/4 pozostałej przestrzeni.</p><p>Tutaj, chwasty tworzą 1/6 twojego pierwszego wiersza, a marchewki pozostałe 5/6. Stwórz dwie kolumny z tymi długościami używając jednostek <code>fr</code>.</p>',
      'es': '<p>CSS Grid también introduce una nueva medida, la fracción <code>fr</code>. Cada unidad <code>fr</code> asigna una porción del espacio disponible. Por ejemplo, si dos elementos están establecidos a <code>1fr</code> y <code>3fr</code> respectivamente el espacio se divide en 4 porciones iguales; el primer elemento ocupa 1/4 del espacio y el segundo elemento los 3/4 restantes.</p><p>Ahora las malas hierbas ocupan 1/6 de tu primera fila y las zanahorias los restantes 5/6. Crea dos columnas con ese ancho empleando <code>fr</code>.</p>',
      'sv': '<p>CSS Grid introducerar en ny enhet <code>fr</code> som är en fraktion av den tillgängliga ytan. Till exempel, ifall två element är satta till <code>1fr</code> och <code>3fr</code> så är ytan uppdelad i 4 lika delar.</p><p>Nu tar ogräset upp 1/6 av din första rad och morötterna resten, 5/6. Skapa två kolumner med dessa bredder genom att använda <code>fr</code>.</p>',
      'fa': '<p>گرید همچنین یک واحد جدید نیز معرفی می کند, fractional یا <code>fr</code>.  واحدهر <code>fr</code> سهمی از فضای موجود را تخصیص می دهد. برای مثال, اگر به دو عنصر مقادیر <code>1fr</code> و <code>3fr</code> داده شود, فضا به چهار قسمت تقسیم می شود؛ اولین عنصر 1/4 و دومین عنصر 3/4 فضا را اشغال می کنند.</p><p>در اینجا علف های هرز 1/6 سطر اول و هویج ها باقی 5/6 فضا را اشغال می کند. با استفاده از واحد <code>fr</code> دو ستون با این عرض ها ایجاد کنید.</p>'
    },
    board: 'wc',
    classes: {'#plants': 'grid-template-columns-1fr-5fr'},
    style: {'grid-template-columns': '1fr 5fr;'},
    before: "#garden {\n  display: grid;\n",
    after: "  grid-template-rows: 20% 20% 20% 20% 20%;\n}"
  },
  {
    name: 'grid-template-columns 3',
    instructions: {
      'en': '<p>When columns are set with pixels, percentages, or ems, any other columns set with <code>fr</code> will divvy up the space that\'s left over.</p><p>Here the carrots form a 50 pixel column on the left, and the weeds a 50 pixel column on the right. With <code>grid-template-columns</code>, create these two columns, and use <code>fr</code> to make three more columns that take up the remaining space in between.</p>',
      'fr': '<p>Lorsque les colonnes sont définies avec des pixels, des pourcentages ou des ems, toutes les autres colonnes définies avec <code>fr</code> se répartiront l\'espace restant.</p><p>Ici, les carottes forment une colonne de 50 pixels sur la gauche et les mauvaises herbes une colonne de 50 pixels sur la droite. Avec <code>grid-template-columns</code>, créez ces deux colonnes et utilisez <code>fr</code> pour créer trois colonnes supplémentaires qui occupent l\'espace restant entre les deux.</p>',
      'de': '<p>Wenn Spalten mit Pixel, Prozentwerten oder ems definiert wurden, wird jede weitere Spalte, die mit <code>fr</code> angegeben wird, den verbleibenden Platz aufteilen.</p><p>Hier bilden die Karotten eine 50 Pixel breite Spalte auf der linken Seite und das Unkraut eine 50 Pixel breite Spalte auf der rechten Seite. Erstelle diese zwei Spalten mit <code>grid-template-columns</code> und benutze <code>fr</code> um drei weitere Spalten zu erstellen, die den verbleibenden Platz dazwischen ausfüllen.</p>',
      'pt-br': '<p>Quando as colunas são especificadas com pixels, porcentagens, ou ems, qualquer outra coluna definida com <code>fr</code> vai dividir o espaço que sobrou.</p><p>Aqui as cenouras formam uma coluna de 50 pixels na esquerda, e as ervas daninhas uma coluna de 50 pixels na direita. Com <code>grid-template-columns</code>, crie essas duas colunas, e use <code>fr</code> para fazer mais três colunas que ocuparão o espaço sobrando no meio.</p>',
      'ru': '<p>Когда одни столбцы определены с помощью пикселей, процентов или ems, а любые другие столбцы с помощью <code>fr</code>, то вторые просто разделят все возможное оставшееся пространство.</p><p>Сейчас морковь занимает 50 пикселей слева, а сорняки 50 пикселей справа. С помощью <code>grid-template-columns</code>, создайте два столбца и используйте <code>fr</code> чтобы сделать еще 3 столбца, которые займут оставшееся простанство между ними.</p>',
      'pl': '<p>Kiedy kolumny mają wymiar podany w pixelach, procentach lub em-ach, każda inna kolumna podana w jednostce <code>fr</code> podzieli pozostałą przestrzeń.</p><p>W tym miejscu marchewki tworzą 50 pixelową kolumnę po lewej stronie, a chwasty 50 pixelową kolumnę po prawej. Przy pomocy <code>grid-template-columns</code>, stwórz te dwie kolumny i użyj <code>fr</code>, by stworzyć trzy kolejne kolumny, które zajmą pozostałą przestrzeń.</p>',
      'es': '<p>Cuando algunas columnas son establecidas en píxeles, porcentajes o ems, cualquier otra columna establecida con <code>fr</code> dividirá el espacio restante.</p><p>Aquí las zanahorias forman una columna de 50 píxeles a la izquierda, y las malas hierbas una columna de 50 píxeles a la derecha. Mediante <code>grid-template-columns</code>, crea esas dos columnas y usa <code>fr</code> para crear tres columnas más en el espacio que queda entre ellas.</p>',
      'sv': '<p>När kolumner är satta med pixlar, procent, eller em så kommer alla andra kolumner som är satta med <code>fr</code> att dela upp kvarvarande yta.</p><p>Morötterna utgör här en 50 pixlars kolumn till vänster och ogräset en 50 pixlars kolumn till höger. Använd <code>grid-template-columns</code> för att skapa dessa kolumner och använd <code>fr</code> för att skapa ytterligare tre kolumner som tar upp resten av ytan.</p>',
      'fa': '<p>وقتی ستون ها با پیکسل ها, درصد و یا emها تنظیم می شوند, ستون های دیگری که با <code>fr</code> تنظیم شده اند فضای باقی مانده را بین خود تقسیم خواهند کرد.</p><p>در این بخش هویج ها یک ستون 50 پیکسلی در چپ, و علف های هرز یک ستون 50 پیکسلی در راست تشکیل می دهند. با استفاده از <code>grid-template-columns</code>, این دو ستون را ایجاد, و با استفاده از <code>fr</code> سه ستون دیگر که فضای بین این دو را تقسیم کنند ایجاد کنید.</p>'
    },
    board: 'cw',
    classes: {'#plants': 'grid-template-columns-50px-1fr-1fr-1fr-50px', '#plants > :nth-child(1), #garden > :nth-child(1)': 'grid-area-1-1-6-2', '#plants > :nth-child(2), #garden > :nth-child(2)': 'grid-area-1-5-6-6'},
    style: {'grid-template-columns': '50px 1fr 1fr 1fr 50px;'},
    before: "#garden {\n  display: grid;\n",
    after: "  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n  grid-area: 1 / 1 / 6 / 2;\n}\n\n#poison {\n  grid-area: 1 / 5 / 6 / 6;\n}"
  },
  {
    name: 'grid-template-columns 6',
    instructions: {
      'en': '<p>Now there is a 75 pixel column of weeds on the left side of your garden. 3/5 of the remaining space is growing carrots, while 2/5 has been overrun with weeds.</p><p>Use <code>grid-template-columns</code> with a combination of <code>px</code> and <code>fr</code> units to make the necessary columns.</p>',
      'fr': '<p>Maintenant, il y a une colonne de 75 pixels de mauvaises herbes sur le côté gauche de votre jardin. Sur 3/5 de l\'espace restant, des carottes poussent, tandis que 2/5 a été envahi par les mauvaises herbes.</p><p>Utilisez <code>grid-template-columns</code> avec une combinaison d’unités <code>px</code> et <code>fr</code> pour créer les colonnes nécessaires.</p>',
      'de': '<p>Nun gibt es eine 75 Pixel breite Spalte mit Unkraut auf der linken Seite deines Gartens. Auf 3/5 des übrigen Platzes wachsen Karotten, während 2/5 von Unkraut überwuchert wurden.</p><p>Benutze <code>grid-template-columns</code> mit einer Kombination von <code>px</code> und <code>fr</code> Einheiten um die benötigten Spalten zu erstellen.</p>',
      'pt-br': '<p>Agora há uma coluna de 75 pixels de ervas daninhas no lado esquerdo da sua horta. 3/5 do espeço remanescente está crescendo cenouras, enquanto 2/5 tem sido envadido por ervas daninhas.</p><p>Use <code>grid-template-columns</code> com uma combinação de unidades <code>px</code> e <code>fr</code> para fazer as colunas necessárias.</p>',
      'ru': '<p>Теперь у нас есть столбец сорняков с шириной 75 пикселей на левой стороне вашего сада. 3/5 оставшегося пространства занимает растущая морковь, когда 2/5 заполонили сорняки.</p><p>Используйте <code>grid-template-columns</code> с комбинацией <code>px</code> и <code>fr</code> чтобы сделать необходимые столбцы.</p>',
      'pl': '<p>Teraz, po lewej stronie jest 75 pixelowa kolumna chwastów. 3/5 pozostałej przestrzeni jest zajęte przez marchewki, podczas gdy 2/5 jest porośnięte przez chwasty.</p><p>Użyj <code>grid-template-columns</code> w połączeniu z jednostkami <code>px</code> i <code>fr</code>, by stworzyć wymagane kolumny.</p>',
      'es': '<p>Ahora hay una columna de malas hierbas de 75 píxeles en el lado izquierdo del jardín. En 3/5 del espacio restante crecen zanahorias, mientras que los 2/5 restantes han sido invadidos por malas hierbas.</p><p>Usa <code>grid-template-columns</code> con una combinación de <code>px</code> y <code>fr</code> para crear las columnas necesarias.</p>',
      'sv': '<p>Nu finns det en 75 pixlars kolumn av ogräs på vänstra delen av trädgården. 3/5 av resterande yta har morötter och 2/5 har återigen ogräs.</p><p>Använd <code>grid-template-columns</code> med en kombination av <code>px</code> och <code>fr</code> enheter för att skapa dom nödvändiga kolumnerna.</p>',
      'fa': '<p>در این بخش یک ستون 75 پیکسلی علف های هرز در سمت چپ باغ وجود دارد. در 3/5 فضای باقی مانده هویج و در 2/5 دیگر آن علف های هرز روییده است.</p><p>از <code>grid-template-columns</code> استفاده کنید و با ترکیبی از واحدهای <code>px</code> و <code>fr</code>  ستون های مورد نیاز را بسازید.</p>'
    },
    board: 'wcw',
    classes: {'#plants': 'grid-template-columns-6', '#garden, #overlay': 'grid-template-rows-100p'},
    style: {'grid-template-columns': '75px 3fr 2fr;'},
    before: "#garden {\n  display: grid;\n",
    after: "  grid-template-rows: 100%;\n}"
  },
  {
    name: 'grid-template-rows 1',
    instructions: {
      'en': '<p><code>grid-template-rows</code> works much the same as <code>grid-template-columns</code>.</p><p>Use <code>grid-template-rows</code> to water all but the top 50 pixels of your garden. Note that the water is set to fill only your 5th row, so you\'ll need to create 5 rows in total.</p>',
      'fr': '<p><code>grid-template-rows</code> fonctionne de la même manière que <code>grid-template-columns</code>.</p><p>Utilisez <code>grid-template-rows</code> pour tout arroser sauf les 50 premiers pixels de votre jardin. Remarquez que l\'eau est définie pour remplir uniquement votre 5ème rangée, donc vous devrez créer 5 lignes au total.</p>',
      'de': '<p><code>grid-template-rows</code> funktioniert analog zu <code>grid-template-columns</code>.</p><p>Benutze <code>grid-template-rows</code> um alles ausser die obersten 50 Pixel deines Gartens zu wässern. Beachte, dass das Wasser so eingestellt ist, dass es nur deine fünfte Reihe ausfüllt, du musst also im Ganzen 5 Reihen erstellen.</p>',
      'pt-br': '<p><code>grid-template-rows</code> funciona da mesma forma que <code>grid-template-columns</code>.</p><p>Use <code>grid-template-rows</code> para irrigar toda sua horta menos os 50 pixels do topo. Note que a água está definida para irrigar apenas sua 5ª linha, então você precisará criar 5 linhas no total.</p>',
      'ru': '<p><code>grid-template-rows</code> работает точно так же, как и <code>grid-template-columns</code>.</p><p>Используйте <code>grid-template-rows</code> чтобы полить все, кроме верхних 50 пикселей вашего сада. Помните, что вода на данный момент заполняет только 5-ую строку, так что вам понадобиться создать в сумме 5 строк.</p>',
      'pl': '<p><code>grid-template-rows</code> działa w podobny sposób jak <code>grid-template-columns</code>.</p><p>Użyj <code>grid-template-rows</code> aby nawodnić 50 pixeli od góry twojego ogrodu. Zauważ, że woda jest ustawiona tak aby wypełnić tylko 5 rząd, dlatego będziesz musiał stworzyć łącznie 5 rzędów.</p>',
      'es': '<p><code>grid-template-rows</code> funciona exactamente igual que <cod>grid-template-columns</code>.</p><p>Usa <code>grid-template-rows</code> para regar todo excepto los 50 píxeles de la parte superior de tu jardín. Fíjate que el agua se ha establecido para que llene solo la 5ª fila, por lo que tendrás que crear 5 filas en total.</p>',
      'sv': '<p><code>grid-template-rows</code> fungerar i stort på samma sätt som <code>grid-template-columns</code>.</p><p>Använd <code>grid-template-rows</code> för att vattna allt förutom de översta 50 pixlarna i trädgården. Notera att vattnet är satt att bara fylla din femte rad, så du behöver skapa total fem rader.</p>',
      'fa': '<p><code>grid-template-rows</code> همانند <code>grid-template-columns</code> کار  می کند.</p><p>از <code>grid-template-rows</code> برای آبیاری همه جا به جز 50 پیکسل بالای باغ استفاده کنید. توجه کنید که آب تنها برای پر کردن سطر پنجم تنظیم شده است, پس شما باید در مجموع 5 سطر ایجاد کنید.</p>'
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
      'en': '<p><code>grid-template</code> is a shorthand property that combines <code>grid-template-rows</code> and <code>grid-template-columns</code>.</p><p>For example, <code>grid-template: 50% 50% / 200px;</code> will create a grid with two rows that are 50% each, and one column that is 200 pixels wide.</p><p>Try using <code>grid-template</code> to water an area that includes the top 60% and left 200 pixels of your garden.</p>',
      'fr': '<p><code>grid-template</code> est la propriété raccourcie qui combine <code>grid-template-rows</code> et <code>grid-template-columns</code>.</p><p>Par exemple, <code>grid-template: 50% 50% / 200px;</code> créera une grille avec 2 lignes de 50% de hauteur chacune et une colonne de 200 pixels de large.</p><p>Essayez à l\'aide de <code>grid-template</code> d\'arroser une région comprenant 60% du haut et 200 pixels à gauche de votre jardin.</p>',
      'de': '<p><code>grid-template</code> ist eine Kurzschrift-Eigenschaft, die <code>grid-template-rows</code> und <code>grid-template-columns</code> kombiniert.</p><p><code>grid-template: 50% 50% / 200px;</code> zum Beispiel erstellt ein Raster mit zwei Reihen, welche je 50% einnehmen und eine Spalte, die 200 Pixel breit ist.</p><p>Versuche <code>grid-template</code> zu benutzen, um einen Bereich zu wässern, der die obersten 60% und 200 Pixel von links deines Gartens einnimmt.</p>',
      'pt-br': '<p><code>grid-template</code> é uma propriedade curta que combina <code>grid-template-rows</code> e <code>grid-template-columns</code>.</p><p>Por exemplo, <code>grid-template: 50% 50% / 200px;</code> irá criar uma grade com duas linhas com 50% cada, e uma coluna que tem 200 pixels de largura.</p><p>Tente usar <code>grid-template</code> para irrigar uma área que inclui 60% do topo e 200px da esquerda da sua horta.</p>',
      'ru': '<p><code>grid-template</code> является короткой вариантом комбинации <code>grid-template-rows</code> и <code>grid-template-columns</code>.</p><p>Например, <code>grid-template: 50% 50% / 200px;</code> создаст grid сетку с 2-мя строками, по 50% каждая, и одним столбцом шириной 200 пикселей.</p><p>Попробуйте использовать <code>grid-template</code> чтобы полить зону, включающую в себя верхние 60% и левые 200 пикселей вашего сада.</p>',
      'pl': '<p><code>grid-template</code> jest skróconą właściwością, która łączy <code>grid-template-rows</code> i <code>grid-template-columns</code>.</p<p>Na przykład, <code>grid-template: 50% 50% / 200px;</code> stworzy siatkę (grid) z dwoma wierszami każdy po 50%, i jedną kolumnę, która jest szeroka na 200 pixeli.</p><p>Spróbuj użyć <code>grid-template</code> by nawodnić powierzchnię, która za 60% od góry i 200 pixeli od lewej.</p>',
      'es': '<p><code>grid-template</code> es una propiedad abreviada que combina <code>grid-template-rows</code> y <code>grid-template-columns</code>.</p><p>Por ejemplo, <code>grid-template: 50% 50% / 200px;</code> creará una cuadrícula con dos filas que ocuparán el 50% del alto cada una, y una columna que será 200 píxeles de ancho.</p><p>Prueba a usar <code>grid-template</code> para regar un área que incluya el 60% superior y 200 píxeles desde la izquierda en tu jardín.</p>',
      'sv': '<p><code>grid-template</code> är en förenklad egenskap som kombinerar <code>grid-template-rows</code> och <code>grid-template-columns</code>.</p><p>Till exempel, <code>grid-template: 50% 50% / 200px;</code> kommer skapa ett rutnät med två rader på 50% var, samt en kolumn som är 200 pixlar bred.</p><p>Använd <code>grid-template</code> för att vattna ett område som inkluderar 60% från toppen och 200 pixlar från vänsterkant av trädgården.</p>',
      'fa': '<p><code>grid-template</code> روش کوتاه شده ی <code>grid-template-rows</code> و <code>grid-template-columns</code> است.</p><p>برای مثال, <code>;grid-template: 50% 50% / 200px</code> گریدی با دو سطر 50 درصدی و یک  ستون 200 پیکسلی  می سازد.</p><p>با استفاده از <code>grid-template</code> ناحیه ای از باغتان شامل 60 درصد بالایی و 200 پیکسل سمت چپ را می شود را آبیاری کنید</p>'
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
      'fr': '<p>Votre jardin a l\'air très bien. Ici, vous avez laissé un chemin au bas de votre jardin de 50 pixels et vous avez rempli le reste avec des carottes.</p><p>Malheureusement, 20 % de vos carottes à gauche ont été envahies par les mauvaises herbes. Utilisez la grille CSS une dernière fois pour traiter votre jardin.</p>',
      'de': '<p>Dein Garten sieht grossartig aus. Hier hast du einen 50 Pixel hohen Pfad am unteren Rand des Gartens gelassen und den Rest mit Karotten aufgefüllt.</p><p>Unglücklicherweise wurden die linken 20% deiner Karotten mit Unkraut überwuchert. Benutze CSS Grid ein letztes Mal, um deinen Garten zu behandeln.</p>',
      'pt-br': '<p>Sua horta está parecendo ótima. Aqui você tem 50 pixels no rodapé da sua horta e o resto preenchido com cenouras. Infelizmente, 20% das suas cenouras foram danificadas com ervas daninhas. Use CSS grid uma última vez para tratar sua horta.</p>',
      'ru': '<p>Ваш сад выглядит прекрасно. Здесь вы оставили 50 пиксельный путь в нижней части вашего сада и заполнили все оставшееся пространство морковью.</p><p>К сожалению, левые 20% вашей моркови заполонили сорняки. Используйте CSS Grid в последний раз чтобы очистить ваш сад.</p>',
      'pl': '<p>Twój ogród wygląda świetnie. Tutaj pozostawiłeś 50 pixelową ścieżkę na spodzie swojego ogrodu, a reszcie posadziłeś marchewki.</p><p>Niestety, 20% od lewej twoich marchewek zostało zarośnięte przez chwasty. Użyj CSS grid ostatni raz aby uzdrowić swój ogród.</p>',
      'es': '<p>Tu jardín tiene una pinta genial. Esta vez se ha dejado un camino de 50 píxeles de ancho en el fondo de tu jardín y se ha llenado el resto con zanahorias.</p><p>Desafortunadamente, el 20% izquierdo de tus zanahorias han sido invadidas por malas hierbas. Usa CSS Grid una última vez para tratar tu jardín.</p>',
      'sv': '<p>Din trädgård ser fantastisk ut! Här har du lämnat en 50 pixlars yta vid botten och fyllt ut resten av morötter.</p><p>Tyvärr så har de 20% av morötterna till vänster i trädgården blivit överväxta av ogräs. Använd CSS Grid en sista gång för att fixa din trädgård.</p>',
      'fa': '<p>باغ شما عالی به نظر می رسد. در اینجا شما یک مسیر 50 پیکسلی در پایین باغ خود باقی گذاشته اید و بقیه آن را با کاشت هویج پر کرده اید.</p><p>متأسفانه, به 20 درصد از هویج های شما علف هرز زده است. برای بار آخر از سی اس اس گرید برای نجات باغ خود استفاده کنید.</p>'
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
    'fr': '<p>Vous avez gagné ! Par la puissance de la grille CSS, vous avez pu cultiver suffisamment de carottes pour Froggy pour faire cuire son célèbre gâteau de 20-carottes. Quoi, vous vous attendiez à un ami différent ?</p><p>Si vous avez apprécié Grid Garden, veuillez consulter <a href="http://flexboxfroggy.com/">Flexbox Froggy</a> pour en savoir plus sur une nouvelle fonctionnalité puissante sur la mise en page CSS. Vous pouvez également vous tenir au courant de mes autres projets sur <a href="http://thomaspark.co">mon blog</a> ou sur <a href="https://twitter.com/thomashpark">Twitter</a>.</p><p>Vous voulez soutenir Grid Garden ? Essayez les cours de conception et de codage proposés par <a href="http://treehouse.7eer.net/c/371033/228915/3944?subId1=gridgarden">Treehouse</a>. Et passez le mot à vos amis et à votre famille au sujet de Grid Garden !</p>',
    'de': '<p>Du hast gewonnen! Mit der Macht von CSS Grid hast du es geschafft, genügend Karotten anzubauen für Froggy, so dass er seinen weltberühmten 20-Karotten-Kuchen backen kann. Was, du hast einen anderen hoppelnden Freund erwartet?</p><p>Falls dir Grid Gardn gefallen hat, schau dir auch mal <a href="http://flexboxfroggy.com/">Flexbox Froggy</a> an, um etwas über einen weiteren neuen und mächtigen Bestandteil von CSS Layout zu lernen. Du kannst auch über meine anderen Projekte auf dem Laufenden bleiben auf <a href="http://thomaspark.co">meinem Blog</a> oder via <a href="https://twitter.com/thomashpark">Twitter</a>.</p><p>Willst du Grid Garden unterstützen? Probiere die erstklassigen Design- und Programmier-Kurse aus, die von <a href="http://treehouse.7eer.net/c/371033/228915/3944?subId1=gridgarden">Treehouse</a> angeboten werden. Und erzähle deinen Freunden und deiner Familie von Grid Garden!</p>',
    'pt-br': '<p>Você ganhou! Com o poder do CSS grid, você foi capaz de colher cenouras suficientes para o Froggy fazer seu mundialmente famoso bolo de 20 cenouras. O que, você esperava um amigo diferente?</p><p>Se você gostou do Grid Garden, veja também o <a href="http://flexboxfroggy.com/">Flexbox Froggy</a> para aprender sobre outra funcionalidade poderosa dos leiautes CSS. Você também pode se manter atualizado com meus outros projetos em <a href="http://thomaspark.co">meu blog</a> ou <a href="https://twitter.com/thomashpark">Twitter</a>.</p><p>Deseja ajudar o Grid Garden? Faça os cursos de web design e codificação oferecidos por <a href="http://treehouse.7eer.net/c/371033/228915/3944?subId1=gridgarden">Treehouse</a>. E semeie para seus amigos e família o Grid Garden!</p>',
    'ru': '<p>Вы победили! Благодаря силе CSS Grid, вы смогли вырастить достаточно моркови для Froggy чтобы испечь его знаменитый 20-морковный пирог. Что, вы ожидали другого прыгучего друга?</p><p>Если вам понравился Grid Garden, удостоверьтесь посмотреть <a href="http://flexboxfroggy.com/">Flexbox Froggy</a> чтобы изучить другую новую возможность CSS. Вы также можете оставаться в курсе всех моих проектов(автора проекта) <a href="http://thomaspark.co">мой блог</a> или <a href="https://twitter.com/thomashpark">Twitter</a>.</p><p>Хотите поддержать Grid Garden? Попробуйте "topnotch" веб-дизайна и курсы программирования предложенные <a href="http://treehouse.7eer.net/c/371033/228915/3944?subId1=gridgarden">Treehouse</a>. Расскажите своим друзьям и членам семьи о Grid Garden!</p>',
    'pl': '<p>Wygrałeś! Dzięki możliwościom CSS grid, byłeś w stanie wychodować wystarczającą ilość marchewek dla Pana Żabki, aby on mógł upiec swoje światowej sławy ciasto marchewkowe. Co, spodziewałeś się innego skocznego przyjaciela?</p><p>Jeżeli spodobał Ci się Grid Garden, zobacz też <a href="http://flexboxfroggy.com/">Flexbox Froggy</a> aby nauczyć się o innej nowej i potężnej właściwości struktury CSS. Możesz także śledzić inne moje projekty poprzez <a href="http://thomaspark.co">mój blog</a> lub <a href="https://twitter.com/thomashpark">Twitter</a>.</p><p>Chcesz wesprzeć Grid Garden? Wypróbuj znakomite kursy z web designu i programowania na <a href="http://treehouse.7eer.net/c/371033/228915/3944?subId1=gridgarden">Treehouse</a>. Podziel się także informacją o Grid Garden z przyjaciółmi i rodziną!</p>',
    'es': '<p>¡Has ganado! Por el poder de CSS Grid, has sido capaz de cultivar suficientes zanahorias para que Froggy pueda cocinar su mundialmente famosa tarta de 20 zanahorias. Qué, ¿esperabas a algún amigo diferente?</p><p>Si has disfrutado de Grid Garden, échale un vistazo a <a href="http://flexboxfroggy.com/">Flexbox Froggy</a> para aprender otra nueva característica de diseño en CSS. También puedes mantenerte al día de mis otros proyectos en <a href="http://thomaspark.co">mi blog</a> o <a href="http://twitter.com/thomashpark">Twitter</a>.</p><p>¿Quieres apoyar Grid Garden? Prueba los mejores cursos de diseño web y programación ofrecidos por <a href="http://treehouse.7eer.net/c/371033/228915/3944?subId1=gridgarden">Treehouse</a>. ¡Y comparte Grid Garden con tus amigos y familia!</p>',
    'sv': '<p>Du vinner! Genom att utnyttja CSS grid har du odlat nog med morötter för Froggy att baka sin världsberömda 20-morots kaka.</p><p>Ifall du gillade Grid Garden, testa också <a href="http://flexboxfroggy.com/">Flexbox Froggy</a> för att lära dig mer om CSS layout. Du kan också följa mina andra projekt på <a href="http://thomaspark.co">min blogg</a> eller <a href="https://twitter.com/thomashpark">Twitter</a>.</p><p>Vill du stödja Grid Garden? Testa högkvalitativa webbdesign och kodningskurser av <a href="http://treehouse.7eer.net/c/371033/228915/3944?subId1=gridgarden">Treehouse</a>. Sprid gärna ordet om Grid Garden till vänner och familj! Tack!</p>',
    'fa': '<p>شما برنده شدید! با قدرت سی اس اس گرید, تونستی هویج کافی برای پخت کیک معروف 20-هویج خاله قورباغه رو تامین کنی. چیه, انتنظار داشتی کس دیگه ای باشه؟</p><p>اگر از بازی باغ گرید لذت بردی, حتما سری به <a href="http://flexboxfroggy.com/">قورباغه فلکس باکس</a> بزن  تا یه ویژگی جدید و قدرتمند دیگه از سی اس اس رو یاد بگیری. همینطور می تونی از پروژه های دیگه من از طریق <a href="http://thomaspark.co">وبلاگ من</a> یا <a href="https://twitter.com/thomashpark">توییتر</a> باخبر بشی.</p><p>می خوای از باغ گرید حمایت کنی؟ آموزش های فوق العاده طراحی وب و کدنویسی که توسط  <a href="http://treehouse.7eer.net/c/371033/228915/3944?subId1=gridgarden">Treehouse</a> ارائه شده رو امتحان کن. و یادت نره که در مورد باغ گرید به دوستان و خانواده ات اطلاع رسانی کنی!</p>'
  },
  board: '',
  classes: {'#garden, #plants, #overlay': 'win'},
  style: {},
  before: "#pond {\n  display: flex;\n",
  after: "}"
};

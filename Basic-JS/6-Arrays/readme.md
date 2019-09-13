### ARRAYS
*adding new elements
*finding elements
*removing elements
*splitting arrays
*combining arrays

#finding elements (primitives)
Metóda indexOf() => vracia prvý index, pri ktorom sa daný prvok nachádza v poli, alebo -1, ak nie je prítomný.

Metóda lastIndexOf() => vráti index v rámci volajúceho objektu String posledného výskytu zadanej hodnoty a vyhľadáva späť od indexu. Vráti -1, ak sa hodnota nenájde.

#finding elements (reference types)
Metoda find() => vráti hodnotu prvého prvku v poli, ktorý spĺňa zadanú testovaciu funkciu. V opačnom prípade sa nedefinované vráti.

#removing elements
Metoda shift() => odstráni prvý prvok z poľa a vráti tento odstránený prvok. Táto metóda mení dĺžku poľa.

Metoda splice() => mení obsah poľa odstránením alebo nahradením existujúcich prvkov a / alebo pridaním nových prvkov na miesto.

Metoda pop() => odstráni posledný prvok z poľa a vráti tento prvok. Táto metóda mení dĺžku poľa.

#combining and splitting arrays
Metóda concat() => sa používa na zlúčenie dvoch alebo viacerých polí. Táto metóda nemení existujúce polia, ale namiesto toho vracia nové pole.

#Iterating an Array
Metóda forEach() => vykoná poskytnutú funkciu raz pre každý prvok poľa.

#Joining Arrays - pripojenie poli
Metóda join() => vytvára a vracia nový reťazec zreťazením všetkých prvkov v poli (alebo objekte podobnom poli), oddelených čiarkami alebo určeným oddeľovacím reťazcom. Ak pole obsahuje iba jednu položku, táto položka sa vráti bez použitia oddeľovača.

#Sorting Arrays
Metóda sort() => triedi prvky poľa na mieste a vracia ZORADENE POLE. Predvolené poradie zoradenia je založené na prevode prvkov na reťazce a potom porovnávaní ich sekvencií hodnôt kódových jednotiek UTF-16.

Metóda reverse() => obracia pole na svojom mieste. Prvý prvok poľa sa stáva posledným a posledný prvok poľa sa stáva prvým.

Metóda toLowerCase() => vráti hodnotu volajúceho reťazca premenenú na malé písmená.

Metóda toUpperCase() => vráti hodnotu volajúceho reťazca konvertovanú na veľké písmená (táto hodnota sa skonvertuje na reťazec, ak tam nie je).

#Testing the Elements of an Array
Metóda every() => testuje, či všetky prvky v poli vyhovujú testu implementovanému poskytnutou funkciou. Vracia booleovskú hodnotu.

Metóda some() => testuje, či aspoň jeden prvok v poli prešiel testom implementovaným poskytnutou funkciou. Vracia booleovskú hodnotu.

#Filtering Array
Metóda filter() => vytvorí nové pole so všetkými prvkami, ktoré vyhovujú testu implementovanému poskytnutou funkciou.

#Mapping an Array
Metóda map() => vytvára nové pole s výsledkami volania poskytnutej funkcie na každý prvok vo volajúcom poli.

#Reducing an Array
Metóda reduce() => vykonáva funkciu redukcie (ktorú zadáte) na každom prvku poľa, čo vedie k jednej výstupnej hodnote.

#Exercise
* Metóda push() => pridá jeden alebo viac prvkov na koniec poľa a vráti novú dĺžku poľa.
* Metóda includes() => určuje, či pole obsahuje medzi svojimi záznamami určitú hodnotu a podľa potreby vracia true alebo false.
* Metóda except() => ....
* Metóda move() => použitá na kopírovanie postupnosti prvkov poľa v poli na pozíciu začínajúcu v cieli. Táto neštandardná metóda sa však nahradila štandardnou Metódou TypedArray.prototype.copyWithin(). TypedArray je tu jedným zo zadaných typov polí.
* countOccurrences(array, searchElement) - pocet vyskytov v poli
* 
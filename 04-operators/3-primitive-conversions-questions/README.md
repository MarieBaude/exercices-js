importance: 5

---

# Les conversions de type 

Quels sont les résultats de ces expressions ?

```js no-beautify
"" + 1 + 0 //"10"           -> deviens string vu que les doubles côte sont suivi d'un +, ajoute 1, ajoute 0 à côté 
"" - 1 + 0 //-1             -> ne convertie pas en string, fais le calcul
true + false //1            -> true = 1, false = 0
6 / "3" //2                 -> fais la divion, vu que ca commence par un number
"2" * "3" //6               -> convertie en number et fais le calcul
4 + 5 + "px" //"9px"        -> fait l'addition puis rajoute "px"
"$" + 4 + 5 //"$45"         -> double cote et + convertie tout en string, 
"4" - 2 //2                 -> string avec -, fais le calcul
"4px" - 2 //NaN             -> string avec -, essai de faire le calcul, mais le px, retourne un NaN (not a number)
"  -9  " + 5 //"  -9  5"    -> ne prend pas en compte les espaces au début et à la fin du -9, "" avec + convertie en string le tout
"  -9  " - 5 //-14          -> string avec -, fais le calcul
null + 1 //1                -> null deviens 0
undefined + 1 //NaN         -> undefined deviens NaN
" \t \n" - 2 //-2           -> " \t \n" deviens 0 comme une chaine de caractère vide
```

Réfléchissez bien, notez et comparez avec la réponse.

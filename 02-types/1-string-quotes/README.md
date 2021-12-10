importance: 5

---

# String quotes

Quelle est la sortie du script ?

```js
let name = "Ilya";

alert( `hello ${1}` ); // hello 1 (1 n'est pas déclaré et n'a pas de valeur, alert convertie en chaine de caractère) 

alert( `hello ${"name"}` ); // hello name (les doubles cote font qu'il affiche le mot brut, et pas le contenu de la variable name)

alert( `hello ${name}` ); // hello Ilya 
```

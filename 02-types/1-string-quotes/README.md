importance: 5

---

# String quotes

Quelle est la sortie du script ?

```js
let name = "Ilya";

alert( `hello ${1}` ); // hello 1 (1 est undefined, ${1} appele la valeur de la variable 1 mais celle ci n'existe pas) 

alert( `hello ${"name"}` ); // hello name (les doubles cote font qu'il affiche le mot brut, et pas le contenu de la variable name)

alert( `hello ${name}` ); // hello Ilya 
```

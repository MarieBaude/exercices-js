importance: 5

---

# Une question à propos de "if"

Lesquelles de ces `alert`es vont s'exécuter ?

Quels seront les résultats des expressions à l'intérieur de `if (...)` ?  

```js
if (-1 || 0) alert( 'first' ); //-1 ou 0 = -1, s'exécute 
if (-1 && 0) alert( 'second' ); //-1 et 0 = 0, ne s'exécute pas
if (null || -1 && 1) alert( 'third' ); //null || -1 && 1 = 1, s'exécute
```


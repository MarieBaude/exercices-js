importance: 5

---

# Comparaisons

Quel sera le résultat pour les expressions suivantes :

```js no-beautify
5 > 4 //true
"apple" > "pineapple" // false      -> p est plus grand que a, il s'arrête au premier caractère qui n'est pas égal
"2" > "12" // true                  -> 2 plus grand que 1, il s'arrête au premier caractère qui n'est pas égal
undefined == null // true           -> == comparait et convertie, undefined et null sont égale
undefined === null // false         -> === comparaison seul, les types sont différent, c'est donc faux
null == "\n0\n" // false            -> == comparait et convertie, null et "\n0\n" = undefined sont égale
null === +"\n0\n" // false          -> === comparaison seul, les types sont différent, c'est donc faux
```


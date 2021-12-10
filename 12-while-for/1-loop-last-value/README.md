importance: 3

---

# Dernière valeur de boucle

Quelle est la dernière valeur affichée par ce code ? Pourquoi ?

```js
let i = 3;

while (i) {
  alert( i-- );
}
```
i = 3, la boucle 'tant que' (qui diminue de 1) s'exucutera jusqu'à ce que i soit égale à 0.

Affiche 3 - 1 -> Deviens 2
Affiche 2 - 1 -> Deviens 1
Affiche 1 - 1 -> Deviens 0
Fin

La dernière valeur afficher est 1.
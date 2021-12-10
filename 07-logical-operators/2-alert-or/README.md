importance: 3

---

# Quel est le résultat des alertes OR ?

Qu'est-ce que le code ci-dessous va sortir ?

```js
alert( alert(1) || 2 || alert(3) );
```

1 puis 2

Il affiche le résultat du premier alert, mais comme alert retourne undefined, OR va continuer et afficher 2, vraie valeur, il s'arrête la.
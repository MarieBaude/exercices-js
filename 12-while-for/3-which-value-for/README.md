importance: 4

---

# Quelles valeurs sont affichées par la boucle "for" ?

Pour chaque boucle, notez les valeurs qui vont s'afficher. Ensuite, comparez avec la réponse.

Les deux boucles `alert` les mêmes valeurs ou pas ?

1. La forme postfix :

    ```js
    for (let i = 0; i < 5; i++) alert( i );
    ```
2. La forme préfix :

    ```js
    for (let i = 0; i < 5; ++i) alert( i );
    ```
De 0 à 4 pour les deux
La vérification (< 5) se fait avant l'incrémantation, postfix ou préfix ne change rien. 


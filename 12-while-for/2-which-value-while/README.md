importance: 4

---

# Quelles valeurs affiche la boucle while ?

A votre avis, quelles sont les valeurs affichées pour chaque boucle ?  Notez-les puis comparer avec la réponse.

Les deux boucles affichent-elles les mêmes valeurs dans l'`alert` ou pas ?

1. Le préfixe sous forme `++i` :

    ```js
    let i = 0;
    while (++i < 5) alert( i ); 
    ```
Affiche de 1 à 4

Ajoute 1 à 0 = 1 compare à < 5 continue affiche 1
Ajoute 1 à 1 = 2 compare à < 5 continue affiche 2
Ajoute 1 à 2 = 3 compare à < 5 continue affiche 3
Ajoute 1 à 3 = 4 compare à < 5 continue affiche 4
Ajoute 1 à 4 = 5 compare à < 5 Fin 

2. Le postfixe sous forme `i++` :

    ```js
    let i = 0;
    while (i++ < 5) alert( i );
    ```
Affiche de 1 à 5
0 + 1 = 1 renvoie l'ancienne valeur 0 compare à < 5 continue affiche 1 
1 + 1 = 2 renvoie l'ancienne valeur 1 compare à < 5 continue affiche 2
2 + 1 = 3 renvoie l'ancienne valeur 2 compare à < 5 continue affiche 3
3 + 1 = 4 renvoie l'ancienne valeur 3 compare à < 5 continue affiche 4
4 + 1 = 5 renvoie l'ancienne valeur 4 compare à < 5 continue affiche 5
5 + 1 = 6 renvoie l'ancienne valeur 5 compare à < 5 Fin
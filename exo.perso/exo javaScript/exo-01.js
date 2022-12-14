// declarer la variable nombre et resultat en entier

var nombre= 0; 
let resultat= 0;
let i= "";

// demander de saisir un nombre
nombre= parseInt (prompt (" saisir un nombre"));

// ecrire la table de multiplication de 1 à 10
for (let i= 0; i<= 10; i++)
{ 
    // multiplier le nomnbre par i et le retenir
    resultat= nombre * i;
    // afficher a l'ecran le resultat de la mutiplication du nombre saisi par i
    console.log (" le resultat de" + nombre + "par" + i + "=" + resultat);

}


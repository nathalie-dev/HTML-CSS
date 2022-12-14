
let resultat=1;
 
// demander un nombre
let nombre = parseInt(prompt("saisir un nombre"));

// calculer la factorielle

for (let i=1 ; i<=nombre; i++)
{
    resultat =resultat*i;
    console.log(resultat);
}
log('fact de '+nombre+'='+resultat)

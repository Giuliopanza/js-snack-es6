/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
Snack 3 (Bonus)
Scrivere una funzione che accetti tre argomenti, un array 
( esempio: ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'] )e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con li elementi estratti dall'array di partenza che hanno la posizione 
compresa tra i due numeri (a e b).
*/

const biciDaCorsa = [
    { nome: "Speedster 5000", peso: 7.8 },
    { nome: "Alpine Racer", peso: 8.2 },
    { nome: "RoadKing Pro", peso: 7.5 },
    { nome: "Velocity X", peso: 7.9 },
    { nome: "Endurance Max", peso: 8.1 }
  ];

let pesom

  for (let i = 0; i < biciDaCorsa.length-1; i++) {
    if (biciDaCorsa.peso[i] < biciDaCorsa.peso [i+1]) {

        pesom = biciDaCorsa.peso [i]
        
    }
    else{

        pesom = biciDaCorsa.peso [i+1]

    }
    
  }

console.log(`${pesom}`)
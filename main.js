/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
inizio es.1*/
const biciDaCorsa = [
    { nome: "Speedster 5000", peso: 7.8 },
    { nome: "Alpine Racer", peso: 8.2 },
    { nome: "RoadKing Pro", peso: 7.5 },
    { nome: "Velocity X", peso: 7.9 },
    { nome: "Endurance Max", peso: 8.1 }
  ];

let nomem

  for (let i = 0; i < biciDaCorsa.length; i++) {

    let element = biciDaCorsa [i]

    let verifica = 0

  for (let x = 0; x < biciDaCorsa.length; x++) {

    let elementb = biciDaCorsa [x]

    if (element.peso < elementb.peso) {

        verifica++        
    }   
  } 
  if (verifica == biciDaCorsa.length-1) {

    nomem = element.nome
    
  }   
  }

  console.log(`${nomem}`) 

  /* Fine es.1*/

/*Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
Inizio es.2*/

  const squadreCalcio = [
    { nome: "Juventus", punti: 0, falliSubiti: 0 },
    { nome: "Inter", punti: 0, falliSubiti: 0 },
    { nome: "Milan", punti: 0, falliSubiti: 0 },
    { nome: "Napoli", punti: 0, falliSubiti: 0 },
    { nome: "Roma", punti: 0, falliSubiti: 0 }
  ];

  function numrand(min, max) {

    let random = Math.floor(Math.random() * max) + min ;

    return random
    
}

for (let i = 0; i < squadreCalcio.length; i++) {
  let element = squadreCalcio [i]

  element.punti = numrand(0,50)

  element.falliSubiti = numrand (0,20)

  console.log(`La squadra ${element.nome} ha ${element.punti} punti e ${element.falliSubiti} falli subiti`)
  
}

let newarray = []

for (let x = 0; x < squadreCalcio.length; x++) {
  let elementa = squadreCalcio [x]

  delete elementa.punti

  newarray.push(elementa)
  
}

for (let k = 0; k < newarray.length; k++) {
  let elementb = newarray[k];
  for (const y in elementb) {

    console.log(y)

    console.log(elementb [y])
    
  }
  
}
/*Fine es.2*/

/*Snack 3 (Bonus)
Scrivere una funzione che accetti tre argomenti, un array 
( esempio: ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'] )e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con li elementi estratti dall'array di partenza che hanno la posizione 
compresa tra i due numeri (a e b).
Inizio Es.3*/

const array = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

const min = 0;

const max = 3;

function myFunction(array, k, x) {

  let arrayb = []

  for (let i = k++ ; k < x; k++) {

    arrayb.push(array[k])
  
  }

  return arrayb
  
}



console.log(myFunction(array, min, max))
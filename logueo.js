import { inicio } from "./Assets/Js/auth.js";
import { atacar } from "./Assets/Js/batalla.js";
const username = inicio()


alert(`Profesor Oak: Bienvenido ${username}, para convertirte en un verdadero entrenador pokemón tendrás que elegir a tu acompañante pokemón entre tres opciones`)
let PokemonesIniciales = 
    [
    {name:'Charmander', type:"fuego", vit:100},
    {name:'Bulbasaur', type:"planta", vit:100},
    {name:'Squirtle', type:"agua", vit:100}    
    ];

    for (let i = 0; i < PokemonesIniciales.length; i++) {
   console.log(`Teclea ${i} para ${PokemonesIniciales[i].name}`)
    }

   do {
    var opcion = prompt("Ingrese el numero del pokemón que desea elegir")
   } while ( opcion<0 || opcion>2);  
    let pokemonSelected=PokemonesIniciales[opcion];
    PokemonesIniciales.splice(PokemonesIniciales.indexOf(pokemonSelected), 1)

    alert("tu pokemón seleccionado es " + pokemonSelected.name)
    console.log (`aqui comienza tu pokeaventura ${username}, para convertirte en masestro pokemon deberas atrapar pokemones y ganar batallas`)
    alert(`alguien te ha desafiado a una batalla`)

    let resp=null;
     do{
           resp = prompt("¿aceptaras el desafio [S/N]?").toLowerCase()
          
         switch(resp){
             case 's':
                break;
             case 'n':
                console.log(`tu desafiante ha dicho: "${username} eres una gallina y estas temblando de miedo"`)
                break;
              }
      }while(resp!=="s" && resp!=="n");

      if (resp==="s") {

        let pokemonRivalSelected = PokemonesIniciales[Math.floor(Math.random() * 2)];
        alert(`tu rival ha seleccionado a ${pokemonRivalSelected.name}`)


        var turno = 1;
        do {
            if (turno%2===0) {
                pokemonSelected.vit= atacar(pokemonSelected, "Gary", pokemonRivalSelected, false)     
            }else{
                pokemonRivalSelected.vit= atacar(pokemonRivalSelected, username, pokemonSelected, true)  
            }
            turno++;
        } while (pokemonSelected.vit>0 && pokemonRivalSelected.vit>0);
      } else {
          console.log('game over');
      }
        




        
  


    
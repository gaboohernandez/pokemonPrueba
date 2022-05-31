export function inicio () {
alert('Bienvenido a pokemón')

do{
    let user = prompt("Ingrese su nombre")
    let respuesta = prompt (`estas conforme con que ${user} sea tu nombre de entrenador pokemón [S/N]?`).toLowerCase()
    while (respuesta!=="s" && respuesta!=="n"){
        console.log('no es una respuesta valida')
        respuesta= prompt (`estas conforme con que ${user} sea tu nombre de entrenador pokemón [S/N]?`).toLowerCase()
    }
    switch(respuesta){
        case 's':
            return user;
            break;
        case 'n':
            console.log("por favor corrija su nombre")
            // console.log( user = prompt('por favor corrija su nombre'))
        break;
    }
}while(true);
}
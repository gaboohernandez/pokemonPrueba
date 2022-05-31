export function atacar(receptor, entrenador, atacante, estado) {
            var damage = Math.floor(Math.random() * 25);
            receptor.vit=receptor.vit - damage;
            console.log(`Narrador: ${atacante.name} de ${entrenador} ha hecho `+ damage + ` de daño con su ataque a ${receptor.name}  dejandolo con vitalidad ${receptor.vit<0 ? "0":receptor.vit }` )
            if (receptor.vit <=0) {
                console.log(`el pokemón: ${receptor.name} ha perdido la batalla`)
            }
        return receptor.vit;    
}
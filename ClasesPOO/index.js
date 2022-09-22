//Clases con herencia, constructores y metodos

class Carlitox {

    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    Hablar() {
        return 'Hola mi nombre es ' + this.nombre + 'Y tengo ' + this.edad + ' años';
    }
}

const Carli = new Carlitox("Carlitox", "Alzate", 18);
console.log(Carli.Hablar());


class mascota extends Carlitox {
    constructor() {
        super("Carlitox", "Alzate", 18);

    }
    maxi() {
        return 'Soy Max y mi padrastro es ' + this.nombre + ' ' + this.apellido;
    }
}

const max = new mascota();
console.log(max.maxi());

//Objetos

const Equipos = {
    Equipo1: "Barca",
    Equipo2: "Milan",
    Equipo3: "RealM",
    //arreglo [] ,{}
    Jugadores: [{
        Jugador1: "Gavi",
        Jugador2: "Zlatan",
        Jugador3: "Kross"

    }, {
        cel1: "Central",
        cel2: "Delantero",
        cel3: "Centro"

    }]

}

console.log(Equipos.Equipo1 + '  ' + Equipos.Jugadores[0].Jugador1 + "  " + Equipos.Jugadores[1].cel1 + ' \n ' + Equipos.Equipo2 + '  ' + Equipos.Jugadores[0].Jugador2 + "  " + Equipos.Jugadores[1].cel2 + ' \n ' + Equipos.Equipo3 + '  ' + Equipos.Jugadores[0].Jugador3 + "  " + Equipos.Jugadores[1].cel3)
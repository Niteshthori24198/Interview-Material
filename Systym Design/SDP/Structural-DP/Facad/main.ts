// The Facade Pattern provides a simplified interface to a complex system. It acts as a front-facing interface that hides the complexities of the system and makes it easier to use.

// Real-life Example: Think of a home theater system. You have multiple components like a DVD player, projector, sound system, etc. Instead of controlling each device individually, you can use a single remote (the facade) that makes it easy to turn everything on with one button.



class DVD {
    turnOnDVD(): void {
        console.log("DVD is on !")
    }
}


class SoundSystem {
    turnOn(): void {
        console.log("Sound System is On !")
    }
}


class Projector {
    turnOn(): void {
        console.log("Projector is On !")
    }
}



class HomeTheator {
    private dvdPlayer: DVD;
    private soundSystem: SoundSystem;
    private projector: Projector;

    constructor() {
        this.dvdPlayer = new DVD();
        this.soundSystem = new SoundSystem();
        this.projector = new Projector();
    }


    watchMovie(): void {
        this.dvdPlayer.turnOnDVD();
        this.projector.turnOn();
        this.soundSystem.turnOn();
        console.log("Moview Started !!")
    }
}


const ht = new HomeTheator();
ht.watchMovie()



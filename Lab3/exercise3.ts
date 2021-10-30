class Car {
    name: string;
    acceleration: number;

    constructor(name: string) { // need ot put string here even though it's done above as well
        this.name = name;
        this.acceleration = 0;
    }

    //can change the structure of the above part
    /**
     * constructor(public name: string, public accleration: number = 0){}
     * this is a shortcut
     */

    honk(): void {
        console.log(`${this.name} is saying: Toooooooooot!`);
    }
    accelerate(speed: number): void {//same as above - need to put type in declaration even when it's passed as a parameter
        this.acceleration = this.acceleration + speed;
    }
}

let car = new Car("BMW");
car.honk(); // BMW is saying: Toooooooooot!
console.log(car.acceleration); // 0
car.accelerate(60);
console.log(car.acceleration); // 60
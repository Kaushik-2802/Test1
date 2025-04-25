class livingBeing{
    constructor(){
        this.alive=true
    }
    breathe(){
        console.log("Breathing...")
    }
}

class Animal extends livingBeing{
    constructor(name){
        super()
        this.name=name
    }
    eats(){
        console.log(`${this.name} is eating`)
    }
}

class Bird extends Animal{
    fly(){
        console.log(`${this.name} is flying`)
    }
}

class Fish extends Animal{
    swim(){
        console.log(`${this.name} is swimming`)
    }
}

const parrot=new Bird("Parrot")
const fish=new Fish("Fish")

console.log("/n Parrot:")
console.log("Alive:",parrot.alive)
parrot.breathe()
parrot.fly()
parrot.eats()
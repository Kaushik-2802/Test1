const livingBeing={
    alive:true,
    breathe:function(){
        console.log("breathing....")
    }
}

const animal=Object.create(livingBeing)
animal.eats=true
animal.walk=function(){
    console.log("animal walks")
}

const bird=Object.create(animal)
bird.fly=function(){
    console.log("bird is flying")
}

const fish=Object.create(animal)
fish.swim=function(){
    console.log("fish swims")
}

console.log("/n Bird:")
console.log("Alive:",bird.alive)
console.log("Eats:",bird.eats)
bird.walk()
bird.fly()

console.log("/n fish:")
console.log("Alive:",fish.alive)
fish.swim()
fish.breathe()
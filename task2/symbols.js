const id1=Symbol('id')
const id2=Symbol('id')

console.log(id1===id2)

const user={
    name:"abc",
    age:20,
    [id1]:101,
    [id2]:102
}

console.log(user)

console.log(user[id1])
console.log(user[id2])
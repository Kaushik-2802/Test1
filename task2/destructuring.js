const person={
    name:"abc",
    age:20,
    address:{
        city:"HYD",
        zip:"500013"
    }
}

const {name,age}=person
console.log(name)
console.log(age)
const {city,zip}=person.address
console.log(city)
console.log(zip)

const arr=[10,20,30]
const [num1,num2,num3]=arr
console.log(num1)

const arr2=[
    {name:"abcd",age:21},
    {name:"def",age:30}
]

const [user1,user2]=arr2
const{name:name1,age:age1}=user1
console.log(user1)
console.log(name1)
console.log(age1)
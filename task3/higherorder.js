const products=[
  { name: "Laptop", price: 1500 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 600 },
  { name: "Monitor", price: 300 }
]

const productNames=products.map(product=>product.name)
console.log("names:",productNames)

const expensive=products.filter(product=>product.price>700)
console.log("expensive products:",expensive)

const total=products.reduce((sum,product)=>sum+product.price,0)
console.log("total price:",total)
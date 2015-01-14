var data = require("./products.json")

// Write your solutions below

// console.log(data["items"]);

var shoppingProductsArray = []
var backorderArray = []
var multiImageArray = []
var canonArray = []
var ebayCanonArray = []

// SHOPPING#PRODUCT ITEMS
for (i=0; i < data.items.length; i++){
  if (data.items[i].kind === "shopping#product"){
    shoppingProductsArray.push(i)
  }
}
console.log(shoppingProductsArray.length)

// ITEMS ON BACKORDER
for (i=0; i < data.items.length; i++) {
  if (data.items[i].product.inventories[0].availability === "backorder"){
    backorderArray.push(data.items[i].product.title)
  }
}
console.log(backorderArray)

//ITEMS WITH MULITPLE IMAGES
for (i=0; i < data.items.length; i++) {
  if (data.items[i].product.images.length > 1){
    multiImageArray.push(data.items[i])
  }
}
console.log(multiImageArray)

//CANON ITEMS
for (i=0; i < data.items.length; i++) {
  if (data.items[i].product.brand === "Canon"){
    canonArray.push(data.items[i])
  }
}
console.log(canonArray)

// EBAY & CANON ITEMS
for (i=0; i < data.items.length; i++) {
  if (data.items[i].product.brand === "Canon" && data.items[i].product.author.name === "eBay"){
    ebayCanonArray.push(data.items[i])
  }
}
console.log(ebayCanonArray)

// NEAT ITEMS LIST
for (i=0; i < data.items.length; i++) {
  console.log(data.items[i].product.title)
  console.log(data.items[i].product.brand)
  console.log(data.items[i].product.inventories[0].price)
  console.log(data.items[i].product.images[0].link)
  console.log("-----------------------------")
}

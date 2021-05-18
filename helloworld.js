//for(i=0;i<300000000;i++){}
//console.log("hello world from Javascript")
let myName = "Beau Adams"
let myValue = 50
console.log("My name is: " + myName)
console.log("value = " + myValue)
console.log(myValue + " + 10 = " + (myValue+10))

let person = {
  name: "Beau Adams",
  age: 44,
  birthYear: 1976,
  died: null
}
let year = ""
if(person.age == 1) {year = "year"} else {year = "years"}
let isDead = ""
if (person.died == null) {isDead = "not "} else {""}
let story = person.name + " is " + person.age + " " + year + " old, and is " + isDead + "dead."
if (person.died != null) {story = story + " (Death in: " + person.died + ")"}
console.log(story)
document.getElementById("welcome").innerText = "Welcome to Programming " + person.name + "!"

let fruits = ["apples", "oranges"]
console.log("Comparing " + fruits[0] + " to " + fruits[1] + ", is like comparing apples to oranges!\nHow ironic!")
fruits.push("pears")
console.log("But we now have " +  fruits[2] + ".")
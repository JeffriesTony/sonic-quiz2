console.log("work")

let food = (".food");
console.log(food)
let color = (".color");
console.log(color)
let button = document.querySelector("button");
console.log(button)

button.addEventListener("click", function(){
let food = document.querySelector(".food").value
console.log(food);
console.log(color);
if(food === "Chili Dog" & color === "Blue"){
document.querySelector("p").innerHTML = "Your too slow! You got Sonic";
}
})
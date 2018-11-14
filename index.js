let f_name = prompt("Enter your first name")
let l_name = prompt("Enter your last name")

let age = prompt("Enter your age")

let height = prompt("Enter your height in cm")

let pet_name = prompt("Enter your pet's name")

let f_letter = f_name[0]
let l_letter = l_name[0]

if(f_letter === l_letter && age > 20 && age < 30 && height >= 170 && pet_name.slice(-1) === "y"){
  console.log("Welcome secret agent...");
}else{
  console.log("Nothing to see here");
}

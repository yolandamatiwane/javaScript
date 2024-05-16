//no.1
let name = "Yolanda"
const surname =" Matiwane"

//2
//name + surname

//no.3
let numberVar = 5

//no.4
//25

//no.5
const Name = "Yolanda"
//yes


// console.log(myName
// )

let num1 = 12
let num2 = 13.5

let bool = true //false
let nothing = null
let value = Symbol("message")

let Object1 = {
    type: "table",
    price:2000,
    legs: {
        color:"brown",
        number:2
    },
    colors:['black','yellow','blue']
}

let arr = [num2,18,'strings']
//let calc=3+2*4+4/2-1

//console.log( eval(`${input}+ ${input2}`))
// let input = +prompt("Enter a number")
// let input2 = +prompt("Enter a number2")


// Conditional Statements
// if(input > 20 && input2 > 40){
//     let answer = input+input2
//     if(answer<100){
//         console.log( `${answer} is less than 100`)
//     }else{
//         console.log(`${answer} is more than 100`)
//     }
// } else if(input ==20 || input2 <20){
//     console.log('The value1 is actually 20 or the value2 is less than 20')
// }
// else{
//     console.log('Bleh')
// }

let car = {
    color:'black',
    model: 'Ford',
    transmission:'semi-auto',
    year: 2014
}

let phone = {
    screenSize: 6.5,
    storage: '128GB',
    brand: 'Apple',
    OS: 'iOS',
    color:'Rose Gold',
    model: '14 Pro Max'
}

// if (car.color == phone.color) {
//     console.log('The colors are the same')
// } else if(car.model=="Ford" && phone.brand == "Apple"){
//     console.log('The car is a Ford and it is an iPhone')
//     if (car.color == "Pink" || phone.model == "14 Pro Max") {
//         console.log('They either have a pink car or a 14 Pro Max')
//     } else {
//         console.log('LOL they have neither')
//     }

// }
// else{
//     console.log('The colors are not the same')
// }

//Variable for age
let age  = 20

//Learners age
if(age>=16){
    if(age >= 18){
        console.log('Qualifies for Drivers')
    }else{
    console.log('Qualify for learners only')
    }
}
else{
    console.log('You do not qualify at all')
}

//Driver's age
//The key is what you're checking
switch (true) {
    case age>=16 && age <18:
        console.log('Y0u qualify for learners only')
        break;
    case age >=18 :
        console.log('Y0u qualify for your drivers')
        break;

    default:
        console.log('You do not qualify at all')
        break;
}

//write a program that determines if a number is positive or negative

let numVar = 0

if(numVar>=0){
    console.log('positive number')
}else{
    console.log('negative number')

}
//params=parameters
// function add(number1,number2) {
//     result=number1+number2
//     console.log(result)
// }
// console.log(add(5,8))
// const add=(number1,number2) {
//     return number1+number2
    
// }
function checkEven(number){
    if(number%2==0){
        console.log('it is even')
    }else{
        console.log('It is odd')
    }

    number%2==0?console.log('it is even'): console.log('It is odd');   //ternary statement(?true :false)
}

let heading = document.getElementById('heading')
//document.querySelector('#heading') //same as above.
//innerText
//textContent
//innerHTML
heading.innerText += " Yolanda"

let classHeading = document.getElementsByClassName('heading5')[0]
//document.querySelector('.heading5') //same as above
classHeading.textContent ="h5"

let p = document.getElementsByTagName('p')
// document.querySelectorAll('p') //same as above
p[1].innerText = "second"

//DAY3
//Event listener
let button = document.querySelector('[name="button"]')

function message(){
    alert('Hello, You pressed the button!')
}

//event = what we're doing //function = code we want to run when clicked
button.addEventListener('click',changeText)

function changeText(){
    heading.innerText = " Matiwane"
}

// button.addEventListener('click',('')=>{
//     message
//      checkeven
// })

let input = document.querySelector('[data-input]')
let btn1 = document.querySelector('[value]')
let btn2 = document.querySelectorAll('[value]')[1]
let btn3 = document.querySelector('#result')
let span = document.querySelector('span')

btn1.addEventListener('click',()=>{
    input.value += btn1.value
})
btn2.addEventListener('click',()=>{
    input.value += btn2.value + btn1.value
})


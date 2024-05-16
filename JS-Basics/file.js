// function myFunction(){
//     alert("Hello! My name is Yolanda!!");
// }

//Day 3 Exercise
//1.
// let day3 = 'aString'
// typeof(day3)
// 'string'
//2.
// day3 = 5
// typeof(day3)
// 'number'
// let object2 = {
//     year: 2003,
//     color: ['pink', 'white', 'purple'],
//     model:'Ferrari',
//     old: true,
//     typeOfWheels: null,
//     owner:undefined
// }
// console.log(typeof(object2), typeof(object2.color),typeof(object2.model),typeof(object2.old),typeof(object2.owner),typeof(object2.typeOfWheels),typeof(object2.year))
//object object string boolean undefined object number



//Day4 Exercise
// let person ={
//     Name:'John',
//     Age: 30
// }

// let person2 = {
//     Name: 'Mark',
//     Age: 60
// }

// console.log(person)
// console.log(person2)

// let people = [person, person2]
// console.log(people)

//write a program that determines whether the given number is negative or positive
let numVar = 2

if(numVar>=0){
    console.log('positive number')
}else{
    console.log('negative number')
}

//write a program that determines if the given number is even or odd

let numVar2 = 5

if(numVar2%2 == 0){
    console.log('even number')
}else{
    console.log('odd number')
}

// Write a program(using a switch statement) that transforms a numerical grade to a letter grade (e.g grade 8 should display "A",grade 9 should display "B",..., grade 12 should display "E").

let grade = 12

switch (grade) {
    case 8:
        console.log('A')
        break;
    case 9:
        console.log('B')
        break;
    case 12:
        console.log('E')
        break;
    
    default:
        break;
}

// Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.
//<12 = 5, <18 = 10 , >60 = 15, <60 =20

let age =17

switch (true) {
    case age<12:
        console.log('Ticket = 5')
        break;
    case age<18:
        console.log('Ticket = 10')
        break;
    case age<60:
        console.log('Ticket = 20')
        break;
    case age>60:
        console.log('Ticket = 15')
        break;

    default:
        break;
}

// Write a program that determines if a year is a leap year.

let daysInYear = 366

if(daysInYear > 365){
    console.log('Leap year')

}else{
    console.log('Normal year')
}

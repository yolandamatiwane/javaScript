//Multiplication
let inpMult1 = document.querySelectorAll('[data-input]')[0]
let inpMult2 = document.querySelectorAll('[data-input]')[1]
let btn1 = document.querySelector('.btn1')
let ans1 = document.querySelector('#ans1')

btn1.addEventListener('click',()=>{
    ans1.innerText = inpMult1.value * inpMult2.value //proper way eval(`${inpMult1.value} * ${inpMult2.value})
})

//ADDITION
let inpAdd1 = document.querySelectorAll('#addition')[0]
let inpAdd2 = document.querySelectorAll('#addition')[1]
let btn2 = document.querySelector('.btn2')
let ans2 = document.querySelector('#ans2')

btn2.addEventListener('click',()=>{
    ans2.innerText = eval(`${inpAdd1.value}+${inpAdd2.value}`)
})

//  SUBTRACTION
let inpSub1 = document.querySelectorAll('.subtraction')[0]
let inpSub2 = document.querySelectorAll('.subtraction')[1]
let btn3 = document.querySelector('.btn3')
let ans3 = document.querySelector('#ans3')

btn3.addEventListener('click',()=>{
    ans3.textContent = eval(`${inpSub1.value}-${inpSub2.value}`)
})

//DIVISION
let inpDiv1 = document.querySelectorAll('.division')[0]
let inpDiv2 = document.querySelectorAll('.division')[1]
let btn4 = document.querySelector('.btn4')
let ans4 = document.querySelector('#ans4')

btn4.addEventListener('click',()=>{
    ans4.textContent = eval(`${inpDiv1.value}/${inpDiv2.value}`)
})
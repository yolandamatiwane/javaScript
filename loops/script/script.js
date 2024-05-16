// for (let m = 0; m < array.length; m++) {
    //     const element = array[index];
    
    // }
let colors = ['blue','pink','yellow','green','purple']
    //For loop
for (let m = 0; m < colors.length; m++) {
    console.log(colors[m]);
    
}
//While loop
//only add limitation //include increment, goes at end
let k = 0
while (k<5) {
    console.log(k)
    k++
}
//Do-While loop // does the same thing as the while loop
let i = 0
do {
    console.log(i)
    i++
}while (i<5)
    
    
    //For-of loop
    for (let color of colors) {
        console.log(color)
    }
    
    //For-in loop
    for (let color in colors) {
        console.log('position:'+ color);
        // if (Object.hasOwnProperty.call(object, key)) {
            //     const element = object[key];
            
            // }
    }
    
    
    
    //For Each
     colors.forEach((value,index)=>{
        console.log(`${index}:${value}`);
     })
    //map()
    //filter
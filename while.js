function AddOddNumber(number){
    let i = 0;
let sum = 0;
while(i < number){
   i++;
    if(i%2!==0){
     sum = sum + i;
    }   
}  
return sum;
}

var addtionOfOddNumber = AddOddNumber(90)

    console.log(addtionOfOddNumber)
  


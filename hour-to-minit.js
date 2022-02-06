function convateToMinit(hour){
    let minit = 60;
    minit = hour * minit;
   return minit;
}

var getMinit = convateToMinit(10);
console.log(getMinit)
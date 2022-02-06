function getResult(mark){
    
if(mark >= 40 && mark < 50){
    return 'your are get C'
}
else if(mark >= 50 && mark < 60){
    return 'your are get B'
}
else if(mark >= 60 && mark < 70){
    return 'your are get A'
}
if(mark >= 70 && mark < 80){
    return 'your are get A-'
}
else if(mark >= 80 && mark <= 100){
    return 'your are get A+'
}
else{
    return 'plase enter you right number'
}

}

var ExamNumber = getResult(90)
console.log(ExamNumber)
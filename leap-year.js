function cekLeapYear(giveYear){
    if ((giveYear % 4 == 0) && ( 0 != giveYear % 100)){
        return true;
    }
    else{
        return false;
    }
}

var year = cekLeapYear(2424)
console.log(year)
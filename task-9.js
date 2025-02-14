// Check whether a year is a Leap Year or not

// Clue:
// 1.those year is not divisible by 100 and if the year is divisible by 4,
// then it will be a Leap Year
// 2.if the year is divisible by 100 and 400, then it is a leap year

function isLeapYear(leapYear){
    // console.log(leapYear)
    if(leapYear % 100 !== 0 && leapYear%4 ===0){
        return true
    }
    else if(leapYear % 100 === 0 && leapYear % 400===0){
        return true;
    }
    else{
        return false
    }
    }
    
    const year=2000;
    const result=isLeapYear(year);
    console.log(result)
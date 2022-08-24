
//program to find whether a given year is a leap year or not.
function leap_year(year){
    

    if (year%100!=0 && year%4==0 || year%400==0)
    {
        console.log(`${year} is a leap year`) 
    }
    else
    {
        console.log(`${year} is not a leap year`)
    }
}
//pass the value of year in below function to find if it is a leap year or not
leap_year(2100)
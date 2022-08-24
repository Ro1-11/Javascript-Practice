
//program to convert temperatures to and from Celsius to Fahrenheit.
function type(inputtype,value)
{
 let b 
 if (inputtype==="D")
 {
    
    b=9*(value/5)+32
    console.log(b)
 }
 else if (inputtype==="F")
 {
    b= 5*((value-32)/9)
    console.log(b)
 }
 else
 {
   console.log("Wrong Input")
 }
   
}
//pass your input type and value to be converted in other temp format
type("F",23)

/*
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in
Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C
*/
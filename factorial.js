//program to find the factorial of a number.
let factorial=function(n)
{
    let fact=1
    for(let i=1;i<=n;i++)
    {
     fact=fact*i
    }
    return fact
}


//pass the value in function of which you want the factorial value
let result=factorial(12)
console.clear()
console.log(result)
// Factorialize a Number
// I/O: number n
// O/P: n! = 1*2*3.......(n-1)*n
// steps:
// make a function factorialize and pass n parameter
// use if / else 
// if n equal 0 then n! = 1
// if n less than 0 then cannot factorialise 
// inside else make a variable ,initialise to 1 & use for loop to iterate through all number 
// then m * i and assign it to m 
// return m to print m value
// call factorialize()


function factorialize(n){
    if(n === 0){
        return 1;
    } else if(n<0){
        return "negative number"
    } else {
        let m = 1;
        for(i=1; i<=n; i++){
         m = m*i;
    }
    return m;
} 

}
let result = factorialize(5)

console.log("factorialize(5) should return " + result);



// We will be using EJS ( new module for this assignment )
//i.e Import instead of require 
import * as imports from './script2.js'

//Utilizing the imports/functions we imported form the script2.js file
imports.Intro("Georgian@Illac", "Rana")//First function

console.log(imports.toFahrenheit(2.6))//Second function
console.log(typeof imports.toFahrenheit(2.6))// Double checking the type just to make sure

console.log(imports.square(5));//Third function
console.log(imports.square(2.5));

console.log(imports.maxOfTwo(10, 7));//Fourth function
console.log(imports.maxOfTwo(3, 9));  

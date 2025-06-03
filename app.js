// let user=prompt("Enter your name")

import {add,mul,division,sub} from "./math.js";

console.log(add(2,2));
console.log(mul(2,2));
console.log(sub(2,2));
console.log(division(2,2));

//greet username
import {name,greet} from "./greet.js";
console.log(name,greet("Welcome") );

//movie detail import from movi file
import moviedetail from "./movie.js";
console.log(moviedetail);
 
//add with other file
//Acter deafult 2 from another page 
import Acters from "./Acters.js";
console.log(Acters)



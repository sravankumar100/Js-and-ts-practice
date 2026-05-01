//named function
function Username(name:string):void
{
console.log(name);
}
Username("sravan");

//arrow function
(a:number,b:number):number=>a+b;

//anonymous function
/* let variable=function(name:string):string{
anonymous function is used to pass function as  aparameter of another function
} */

//optional parameters
/* function sum(a:number,b?:number):number{
return a+b;
}
sum(10,20); */
//rest parameters
function add2(...num: number[]): number{
let sum=0;
for(let n of num){
sum=sum+n;
console.log(sum);
}
return sum;
}
add2(1,2,3,4,5,6,10);

//function as parameter of another function and anonymous function
const square=function(a:number):number{
    return a*a;
}
square(5);

function type(name2:string):string{
return name2;
}
type("virat");

//anonymous function
const greet=function (name3:string){
    return name3;
}
greet("hello");

//Syntax : function as parameter of another function
// function outerFunction(paramFunction: functionType): returnType {
//   // function body
// }

// Example: Using an anonymous function as parameter of another function
function run(  greet: (name: string) => void  ): void {
    greet("Charlie");
}

function printName(name: string): void {
    console.log("Hello, "+name+"! Good Morning.");
}

//calling the function
run(

function(name:string):void{
    console.log("Hello, "+name+"! Good Morning.");
}

)

printName("Bharath");

//function outerFunction(paramFunction: functionType): returnType {
//   // function body
// }

function run2(operation: (a: number, b: number) => void): void {
    operation(10, 20); // call the passed function with arguments
}

// Example: pass an anonymous function
run2(function(a: number, b: number): void {
    console.log("Sum is: " + (a + b));
});

// Example: pass a named function
function printSum(a: number, b: number): void {
    console.log("Sum is: " + (a + b));
}
printSum(20,30);
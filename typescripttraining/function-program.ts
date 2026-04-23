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
function add(...num: number[]): number{
let sum=0;
for(let n of num){
sum=sum+n;
console.log(sum);
}
return sum;
}
add(1,2,3,4,5,6,10);
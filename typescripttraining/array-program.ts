let number:number[]=[1,2,3,4,5];
let fruit:string[]=["Apple","orange","mango"];
1.//accessing elements
console.log(number[0]);
//add
number.push(6);
console.log(number);
number.pop();
console.log(number);
//add at first
number.unshift(0);
//remove at first
number.shift();
console.log(fruit);
number.indexOf(2);
//splice
let spliceddata=number.splice(2,2,10,20);
console.log(spliceddata);
//slice
let sliceddata=number.slice(2,4);
console.log(sliceddata);
number.forEach((element)=>{
    console.log(element);
});

//filtering
let filterednumber=number.filter(x=>x%2==0);
console.log(filterednumber);

let squarednumber=number.map(x=>x*x);
console.log(squarednumber);


//primitive datatype-immutable-original value will not be changed
let a=10;
let b=10.6;
let c="sravan";
let d=true;
let e;//undefined
let f=null;
//non primitive
let g=["orange",10];
let phone=Symbol();
let persondetails={
    state:"andhra",
    pincode:530078,
    address:{
        [phone]:987654321
    }
}
function sum(x,y){
let result=x+y;
console.log(result);
}
sum(10,20);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g[0]);
console.log(persondetails.address.phone);
console.log(persondetails);
let empMap = new Map();
empMap.set("empid", 101);
console.log(empMap.get("empid")); // Correct way to access value
console.log(empMap); 
let empdata = new Set();
empdata.add("10");
empdata.add("virat");
console.log(empdata);


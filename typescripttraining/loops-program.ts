//while
let i:number=1;
while(i>0){
    console.log(i);
    i++;
    if(i==3){
        break;
    }
}
//for loop
//1.for of loop
let fruits:string[]=["Apple","orange","guava"];
//normal for loop
for(let i:number=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
//for of loop
for(let fruit of fruits){
console.log(fruit);
}
//for in loop
interface EmployeeDetails {
    empid: number;
    empname: string;
}

let employeeinfo: EmployeeDetails = {
    empid: 101,
    empname: "sravan"
};
for(let key in employeeinfo){
    console.log(key);
    //to get values
    //to get key
  const typedkey=key as keyof EmployeeDetails;
  console.log(typedkey,employeeinfo[typedkey]);

}
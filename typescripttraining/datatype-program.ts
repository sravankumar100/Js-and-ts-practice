 let a: number = 10;
let b: boolean = true;
let c: undefined;
let d: null | string = "kumar";

let data1: (string | number)[] = ["Rohit,dhoni", 201];

// tuple
let data2: [string, string, number] = ["1234", "DK", 1234];

let result;
function add(x: number, y: number): number {
     result = x + y;
    return result;
    
}
add(10, 20);

interface EmployeeDetails {
    empid: number;
    empname: string;
}

let empinfo: EmployeeDetails = {
    empid: 101,
    empname: "sravan"
};

let employeemap: Map<string, string> = new Map();
employeemap.set("rollno", "201");

let studentdetails: Set<number> = new Set();
studentdetails.add(200);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(data1);
console.log(data2);
console.log(result);
console.log(empinfo);
console.log(empinfo.empid);
console.log(employeemap);
console.log(studentdetails);

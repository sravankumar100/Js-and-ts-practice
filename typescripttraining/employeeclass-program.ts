class Employeedetails{
    //instance variable
    //inside class should not mention let,var,const
    age:number=10;
    //static
    static name3:string="virat";
    printDetails():void{
        //inside method we can use let/var/const
        let name:string="Dhoni";
        let age2:number=45;
        console.log("print current details");
    }
    constructor(){
        console.log("Constructor is executed");
    }
   

}
let  e1=new Employeedetails();
console.log(e1.age);//non static without object we cant access
//console.log(age2);error since local scope
console.log(Employeedetails.name3);
e1.printDetails();

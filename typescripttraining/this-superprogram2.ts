import {Base} from "./this-superprogram";
class Derived extends Base{
    name:string="Dhoni";
    greet():void{
console.log("Hello from child");
    }
    execute():void{
        console.log(this.greet());
        console.log(super.greet());
        console.log(this.name);
         //console.log(super.name);//not correct
         
    }
     
}
let a2=new Derived();
a2.greet();
a2.execute();
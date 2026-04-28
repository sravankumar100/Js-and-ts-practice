//this >> current class object
//super refers parent class object
class Base{
    name:string="virat";
    greet():void{
console.log("Hello from base");
    }
     constructor(){
      console.log("Base class constructor");  
    }
}

export{Base};
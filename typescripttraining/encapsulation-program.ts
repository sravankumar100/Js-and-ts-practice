class Emp{
    name:string="archer";
    setName(name2:string):void{
         this.name=name2;
    }
    //by default method is public
    getName():void{
        console.log(this.name);
        

    }
    

}
let e6=new Emp();
e6.setName("rohit");
e6.getName();




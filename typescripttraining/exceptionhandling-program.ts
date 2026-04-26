let newEmployee:any;
try{
    console.log(newEmployee.toLowerCase());//will get error
}
catch(error){
    console.log("Exception occcured");
    //here we cant use Exception object

}
finally{
    console.log("Finally block executed");
}
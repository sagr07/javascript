// // javascript closure example

// function greet() {

//    let name = 'John';

   
//    function displayName() {

      
//        return 'Hi' + ' ' + name;
     
//    }

//    return displayName;
// }

// const g1 = greet();
// console.log(g1); 
// console.log(g1());



//  function a(){

//    let x = "sagar";
//    function b(){
//       return "hello"+" "+x;
      
//    }
//    return b;

//  } 
// const c = a();
//  console.log(c);
//  console.log(c());
 
class student {
    constructor(name,course){
    this.studentname = name;
    this.studentcourse = course;
    console.log("Student details");
}
hello(){
console.log("hello"+ this.studentname);

}
let a= newstudentname("sagar","MCA");
a.hello();
}

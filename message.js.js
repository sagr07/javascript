// // javascript closure///////////////////////////////

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


//////Nested object/////////////////////////////////////

// const student={
//     name:"Ram",
//     class: 12,
//     marks:{
//         science:70,
//         math:60,
//     }
// }
//console.log(student);
//console.log(student.marks.science);


////////////////////////////////////////////////////

///Adding method in object/////

// const course={
//     name: "sagar",
//     age:24,
//     course:"javascript",
//     notes:{
//         introduction:"welcome to js course"

//     },
//     enroll(){
//         console.log("enrolled sucessfully");

//     }

// }
// course.fee=10000,
//  course.enroll()
//  console.log(course.fee);


////////Using This keyword////////

// const person={
//     name:"sagar",
//     age: 24,
//     mess:function(){
//         console.log("This is "+ this.name );
//     }
// }
// person.mess();

///////Constructor Function Parameters/////////////

// function person(fname,lname,agge){
// this.name=fname,
// this.surname=lname,
// this.age=agge,
// this.greet =function(){
//     return ("this is "+ this.name);
// }
// }
// const person1 =new person("sagr","kumar",24);
// const person2= new person("ram","kumar",20);

// console.log(person1);

// console.log(person2);

//////For Each loop//////////////
// let a= 1;
// for(let i=10 ;i>a;i--){
//     console.log(i)
// }

//////while loop////////////
// let a= 1;
// let i =5;
// while(i>=a){
//     console.log(i)
//     i=i-a

//////Promise Program///////////

// const count = true;

// let countValue = new Promise(function (resolve, reject) {
//     if (count) {
//         resolve("There is a count value.");
//     } else {
//         reject("There is no count value");
//     }
// });

// console.log(countValue);

/////////////////////////////////////

// function pro (complete){


// return new Promise((pass,fail)=>
// {
//     console.log("fetching Data,please wait...")
//     setTimeout(()=>{

//         if(complete){
//             pass("you will pass");
//         }
//         else{
//             fail("you will fail");
//         }
//         },2000)
//         });
//     }
//  pro(true).then((result)=>{
//     console.log(result);
//    }).catch((error)=>{
//     console.log(error);})
   
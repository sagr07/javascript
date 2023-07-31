///////Functions////////

// function sub (eng,sci,math)
// {
//    let a =(eng+sci+math);
   
//    return a;
// }
// function avg (av){
// let b = (av/3);
// console.log(b);
// }
// let c= sub(10,1,1);
// avg(c)


///// nested function///////////////////////////


// function mess(name) {
//     function a() {
//         console.log('Hi' + ' ' + name);
//     }
//     a();
//  }
//  mess('sagar'); 

///////Arrow function/////////////////////////////

/////////Single parameter//////////////////////////

// let sqr = (num) => num *num
// console.log(sqr(10));


//////Double parameter////////////////////

// let a = (x, y) => {
//     return x+y;
// }
// console.log(a(10,20))


    
//////Arrow function with expression///////

    // let age = 15;
    // let wlcm = (age < 18) ?
    //   () => console.log('child') :
    //   () => console.log('Adult');
    // wlcm(); 

     

////////Rest operator////////

// function sum(a,b, ...args){
// console.log(arguments);
// console.log(`hello ${a} ${b}`)
// let sum =0;
// for( let i in args){
//     sum=sum+ args[i];

// }
// console.log(sum);
// }
// sum(10,20);


// function num(x,y,z) {
//     console.log(x+y+z);

// }
// const num1=[2,4,6];
// num(...num1)
 

////////insert item in Map //////////

// let map1= new Map();
// map1.set('info',{name:"sagar",age:24});
// console.log(map1)


/////////settimeout ///////////
// function mess(){
//     console.log("hello");
// }
// setTimeout(mess,1000);
// console.log("please wait")

////////////////////////////////////////////////

// let a="hello";
// console.log(a);
// function mess(name){

//     console.log(name);

// }
// setTimeout(mess,2000,"sagar");

/////callback function///////////////////

//  const per1 = (name,callfrnd)=>{
//     console.log(`hello ${name} i m bsy now`)
// callfrnd();
//  }
 
//     const per2= ()=>{
//         console.log(`i will call you later`)
    

//  }
//  per1("Rahul",per2);
 

//  const count = true;
//  let countValue= new Promise (function(_resolve){
//    if(count){
//    console.log("you will pass");
//    }else{
//     console.log("you will fail");

//    }
    
//  });
//  console.log(countValue);
//module.exports=countValue
// const removeSname = (name)=>{
//     let expectedoutput= names;
//     name.forEach(element =>{
//         if(element.charAt(0)==='s'){
//             const index= expectedOutput.indexOf(element);
//             expectedOutput.splice(index,1)
//         }
//     });
//     return expectedOutput;
// }



// async function test(){
//     console.log("message2");
//   console.log("message3");
//    await console.log("message4");
//     console.log("message5")
// }


// console.log("message1")
// test();
// console.log("message6")
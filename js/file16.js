//promise 

import { json } from "express";

// const f1 = ()=>{
//     setTimeout(()=>{
//         return 5;
//     },1000);
// }

// const f2 = (x)=>{
//     console.log(x+6);
// }
// const n = f1();
// f2(n);


// const f1 = ()=>{
//     return new Promise((resolve,reject)=>{
//         resolve(5);
//     })
// }

// const f2 = (x) =>{
//     console.log(x+6);
// }

// f1().then((n)=>f2(n));

// const buy = ()=>{
//     return new Promise((resolve,reject)=>{
//         // resolve(5);

//         reject("Something went wrong")
//     })
// }

// const pay = (x)=>{
//     return x+10;
// }


// buy().then((n)=>
//     console.log(pay(n))
// ).catch(err=> console.log(err))



// const f1 = (x)=>{
    
//         return new Promise((resolve,reject)=>{
//             if(x>0){
//                 resolve(x);
//             }else{
//                 reject("Negative Number")
//             }
//         })
// }

// f1(-3).then((x)=>console.log(x+6)).catch((err)=>console.log(err))


// the data which is comming fron fetch is comming via internet
// that is the reason it is in string format 
// and then we convert the string to json by 
// writing data.json

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((data)=> data.json())
// .then((val)=> {
//     val.forEach(element => {
//         console.log(element.name);
//         console.log(element.email);
//     });
    
// })
// .catch((err)=>console.log(err))



const fetchData = async()=>{

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();

    data.forEach(element => {
        console.log(element.name) 
    });
}

fetchData();
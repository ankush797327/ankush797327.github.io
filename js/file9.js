



const point = [2,5,3,2,1,8];


point.forEach((value,index,array)=>{
    console.log(index);
})


const newArray = point.map((value,index)=>{
    return value +5;
})

console.log(newArray)

const arr = point.filter((value)=> value>3);
console.log(arr);


const result = point.find((value )=> value == 2)
console.log(result);

const res1 = point.reduce((sum,value)=>{
    return sum+value;
},0)

console.log(res1);

let cart = {};

const products = [
    {id: 1,name: "Product 1",price: 25},
    {id: 2,name: "Product 2",price: 50},
    {id: 3,name: "Product 3",price: 75},
]


const showProducts = ()=>{
    let str = '';
    
    products.map((values)=>{
    str+=`${values.id} - ${values.name} - ${values.price}`;



})
    console.log("***Product List***");
    console.log(str);
    

}

showProducts();


const addToCart = (id)=>{
    cart = {... cart, [id] : 1};
};

addToCart(1);
addToCart(3);

const showCart = ()=>{
    let str= "";
    products.map(value =>{
        cart[value.id] > 0  &&(
        str +=` ${value.name} - ${value.price} - ${cart[value.id]} - ${cart[value.id] * value.price}`
        )
    })

    console.log("*** My cart ***");
    console.log(str);

}

showCart();

const increment = (id) =>{
    cart = {...cart, [id] : cart[id] +1}
}   

increment(1)

const decrement = (id) =>{
    cart = {...cart, [id] : cart[id] -1}
}   

increment(1)
decrement(1)


const orderValue  = products.reduce((sum,value) =>{
    return sum+value.price * (cart[value.id] ?? 0)
},0 )

console.log(orderValue);

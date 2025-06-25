let cart = {};

const products = [
    {id: 1,name: "Product 1",price: 25},
    {id: 2,name: "Product 2",price: 50},
    {id: 3,name: "Product 3",price: 75},
]


const showProducts = ()=>{
    let str = '';
    const container = document.getElementById('product-list');
    container.innerHTML = '';


    products.forEach(product =>{
        const div = document.createElement('div');
        div.className = product
        div.innerHTML = `${product.name} - $${product.price} <button onclick="addToCart(${product.id})">Add To Cart</button>`

        container.appendChild(div)
    })
    

}



const addToCart = (id) => {
  cart = { ...cart, [id]: (cart[id] || 0) + 1 };
  showCart();
};


const showCart = ()=>{
    let str= "";
    const container = document.getElementById('cart-list')
    container.innerHTML= ''
    
    products.forEach(product =>{
        const quantity = cart[product.id] || 0;

        if(quantity >0){
            const div = document.createElement('div');
            div.className = 'cart-item';

            div.innerHTML = `${product.name} -$${product.price} * ${quantity} = $${product.price * quantity}
            <button onclick="increment(${product.id})">+</button>
            <button onclick="decrement(${product.id})">-</button>`;
            container.appendChild(div)
        }

        document.getElementById('total-value').innerHTML = 
        "Total Value = $ " + calculateOrderValue()
    })



}
const calculateOrderValue = () => {
      return products.reduce((sum, product) => {
        return sum + product.price * (cart[product.id] || 0);
      }, 0);
    };

const increment = (id) => {
  cart = { ...cart, [id]: (cart[id] || 0) + 1 };
  showCart();
};

const decrement = (id) => {
  if (cart[id] > 1) {
    cart = { ...cart, [id]: cart[id] - 1 };
  } else {
    delete cart[id];
  }
  showCart();
};
const orderValue  = products.reduce((sum,value) =>{
    return sum+value.price * (cart[value.id] ?? 0)
},0 )

   // Initialize
    showProducts();
    showCart();

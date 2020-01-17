const restaurant = {
    name: "Bob's Burgers",
    placeOrder: function (meal) {
        this.orders.push(meal);
    },
    'orders': [],
    viewOrders: function(){
        for (let i=0; i<this.orders.length;i++){
            console.log(this.orders[i]);
        }
    }
}

const chickenComboMeal = {
    'sandwichType': 'chicken',
    'fries': true,
    'drinkSize': 'medium'
}

const burgerComboMeal = {
    'sandwichType': 'burger',
    'fries': false,
    'drinkSize': 'large'
}

// Place an order
restaurant.placeOrder(chickenComboMeal);
restaurant.placeOrder(burgerComboMeal);

// Invoke the function to return the list of all orders
restaurant.viewOrders();
// Output all orders to the console using console.table()
// console.log(restaurant.orders)
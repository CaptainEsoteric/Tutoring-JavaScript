window.cart = (function() {
var item = menu.menuItem;
var cartList = document.getElementById("cart")
var cartItem = document.getElementById("cartItem")
var cartCount = document.getElementById("cartCount")
var cartCost = document.getElementById("cartCost")
var itemCost = 0
var burgerCount = 0
var burgerCost = burgerCount * 5;

function addItem() {
    if (burgerCount == 0) {
            burgerCount++
            var burgerCost = burgerCount * 5;
    cartItem.appendChild(document.createTextNode(item[0].name))
    cartCount.appendChild(document.createTextNode(burgerCount))
    cartCost.appendChild(document.createTextNode(burgerCost))
    }

    else {
        burgerCount++
        var burgerCost = burgerCount * 5;
        cartCount.innerText=burgerCount
        cartCost.innerText = burgerCost
    }

}
function getItem () {

}
function updateItem () {

}
function removeItem () {
    if (burgerCount == 1) {
            burgerCount--
    cartList.removeChild(document.createTextNode(item[0].name))
    cartList.removeChild(document.createTextNode(burgerCount))
    cartList.removeChild(document.createTextNode(burgerCost))
    }

    if (burgerCount > 1) {
        burgerCount--
        var burgerCost = burgerCount * 5;
        cartCount.innerText=burgerCount
        cartCost.innerText = burgerCost
    }


}
function getCart () {

}
function loadCart () {

}

function updateDomFromCart (updateFromThisCart, domNode) {
    for (i=0; i < updateFromThisCart.CartData.length; i++)
    {
       cartItem.appendChild(document.createTextNode(updateFromThisCart.CartData[i].Name))
       cartCount.appendChild(document.createTextNode(updateFromThisCart.CartData[i].Quantity))
       cartCost.appendChild(document.createTextNode(updateFromThisCart.CartData[i].TotalItemCost))
    }    
}

function getTotal () {

}


//Creates class of Food item with name and cost as required values upon instantiation
function FoodItem(name, cost) {
    this.Name = name;
    this.Cost = cost;
}



//Creates an empty menu array
function Menu() {
    this.FoodData = [];

//Puts a new item on the menu array
    this.AddFoodItem = function(newFoodItem) {
        this.FoodData.push(newFoodItem);
    }
}


//Creates a class of items which will be put in the cart. It will always have a count of 1.
function CartItem(desiredItem) {
    this.DesiredItem=desiredItem;
    this.Quantity=1;
//Creates a subtotal for each item based on quantity
    this.TotalItemCost = function() {
        return Quantity*DesiredItem.Cost;
    }
}



//Creates an empty cart array
function Cart() {
    this.CartData = [];


//Adds an item to the cart
    this.AddCartData = function(newCartItem) {
//Looks for the item to see if it's in the cart's array already
        var Item = CartData.find(newCartItem)
//If the item is not found, the returned value is undefined. A new item is added to the array        
    if (Item===undefined) {
        this.CartData.push(newCartItem);        
        }
//If the item is found, it increases the count by 1.
    else {
        Item.Quantity++
        }

    }

//Removes item from the cart
    this.SubtractCartData = function(cartItem) {
//Verifies item is in array first
    var index = CartData.indexOf(cartItem);
//Does nothing if item is not in array
    if (index < 0) {
    }
    else {
//Reduces item cart by one if quantity is greater than 1
        if (Item.Quantity > 1) {
            Item.Quantity--
        }
//Removes from cart entirely if 1 is in the cart at time of event
        else {
            this.CartData.splice(index);
        }
    }

}
//Computes the total cost
    this.TotalCost = function() {
//Initializes total as zero
        var Total = 0;
//Performs total item cost for each item in array
        for (i = 0; i < CartData.arraylength; i++) {
            Total += CartData[i].TotalItemCost();
        }
        return Total;

    }
}


})();

//Creates class of Food item with name and cost as required values upon instantiation
function FoodItem(name, cost)
{
this.Name = name;
this.Cost = cost;
}



//Creates an empty menu array
function Menu() {
    this.FoodData = [];

//Puts a new item on the menu array
    this.AddFoodItem = function (newFoodItem) {
        this.FoodData.push(newFoodItem);
    };
}


//Creates a class of items which will be put in the cart. It will always have a count of 1.
function CartItem(desiredItem) {
    this.DesiredItem=desiredItem;
    this.Quantity=1;
//Creates a subtotal for each item based on quantity
    this.TotalItemCost = function () {
        return this.Quantity * this.DesiredItem.Cost;
    };
}



//Creates an empty cart array
function Cart() {
    this.CartData = [];


//Adds an item to the cart
    this.AddCartData = function (newCartItem) {
        //Looks for the item to see if it's in the cart's array already
        var Item = this.CartData.find(function (searchedCartItem)
        {
            return searchedCartItem.DesiredItem.Name === newCartItem.DesiredItem.Name;
        });
        //If the item is not found, the returned value is undefined. A new item is added to the array        
        if (Item === undefined) {
            this.CartData.push(newCartItem);
        }
        //If the item is found, it increases the count by 1.
        else {
            Item.Quantity++;
        }

    };

//Removes item from the cart
    this.SubtractCartData = function (cartItem) {

        var item = this.CartData.find(function (searchedCartItem)
        {
            return searchedCartItem.DesiredItem.Name === cartItem.DesiredItem.Name;
        });

        //Verifies item is in array first
        var index = this.CartData.indexOf(item);
        //Does nothing if item is not in array
        if (index >= 0)
        {

            //Reduces item cart by one if quantity is greater than 1
            if (item.Quantity > 1)
            {
                item.Quantity--;
            }
            //Removes from cart entirely if 1 is in the cart at time of event
            else {
                this.CartData.splice(index,1);
            }
        }

    };
//Computes the total cost
    this.TotalCost = function () {
        //Initializes total as zero
        var Total = 0;
        //Performs total item cost for each item in array
        for (i = 0; i < this.CartData.length; i++) {
            Total += this.CartData[i].TotalItemCost();
        }
        return Total;

    };
}



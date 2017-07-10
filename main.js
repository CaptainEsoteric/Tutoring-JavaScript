window.onload = function(){
// Menu access
window.main = (function(menu){
var c = console

// Makes the modular variable local and easier to write
var item = menu.menuItem;
var menuList = document.getElementById("menu")
var myCart = new Cart();

// Inserts the menu onto the page
function insertMenu() {
for (i = 0; i < window.menu.length; i++) { //Goes through the array
var MenuData = window.menu.FoodData[i];
var tempCartItem = new CartItem(MenuData);

    //Creates an add button
var addButton = document.createElement("button")
// Assigns text to the button
addButton.innerHTML = "+"
//Leverages bootstrap to make a green button
addButton.setAttribute("class", "btn-success")
//Creates a variable for a line break.
var lineSpacing = document.createElement("br")
//Executes function when button is clicked
addButton.addEventListener("click",function(){
    myCart.AddCartData(tempCartItem);
    window.cart.updateDomFromCart();
})

//Creates a subtract button
var subtractButton = document.createElement("button")
//Assigns text to button
subtractButton.innerHTML = "-"
//Leverages bootstrap to make a red button
subtractButton.setAttribute("class", "btn-danger")
//Executes function when clicked
subtractButton.addEventListener("click", function(){
    myCart.SubtractCartData(tempCartItem)
    window.cart.updateDomFromCart()
})

//populates web page with menu
    document.getElementById("menu").appendChild(document.createTextNode(MenuData.name))
    document.getElementById("menu").appendChild(lineSpacing)
    document.getElementById("menucost").appendChild(document.createTextNode(MenuData.price))
    document.getElementById("menucost").appendChild(lineSpacing)
    document.getElementById("addremove").appendChild(addButton);
    document.getElementById("addremove").appendChild(subtractButton)
    document.getElementById("addremove").appendChild(lineSpacing)
    menuList.appendChild(document.createElement("p"))
// document.getElementById("main").appendChild (itemName[i].name)
}


}

insertMenu()



})(window.menu || (window.menu) ); //IIFE function


// Cart functions
window.mainCart = (function(cart) {
// Makes cart function local and easier to read/write
//var addItem = cart.addItem() 


})(window.cart || (window.cart) );

};
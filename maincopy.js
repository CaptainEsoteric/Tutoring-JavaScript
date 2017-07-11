window.onload = function(){
// Menu access
window.main = (function(menu){
var c = console

// Makes the modular variable local and easier to write
var item = menu.menuItem;
var StartingMenu=window.menu.menuItem;
var menuList = document.getElementById("menu")

// Inserts the menu onto the page
function insertMenu() {
for (i = 0; i < 6; ++i) { //Goes through the array
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
    window.cart.addItem()
})

//Creates a subtract button
var subtractButton = document.createElement("button")
//Assigns text to button
subtractButton.innerHTML = "-"
//Leverages bootstrap to make a red button
subtractButton.setAttribute("class", "btn-danger")
//Executes function when clicked
subtractButton.addEventListener("click", function(){
    window.cart.removeItem()
})

//Creates a variable which will assign a specific ID to each button
var setClass = document.getElementsByTagName("button") + i
//populates web page with menu
    menuList.appendChild(document.createTextNode(item[i].name))
    menuList.appendChild(lineSpacing)
    menuList.appendChild(document.createTextNode(item[i].price))
    menuList.appendChild(lineSpacing)
    menuList.appendChild(addButton);
    menuList.appendChild(subtractButton)
    document.getElementsByTagName("button")[i].setAttribute("id", setClass)
    menuList.appendChild(document.createElement("p"))
// document.getElementById("main").appendChild (itemName[i].name)
}


}

Menu();



})(window.menu || (window.cart) ); //IIFE function
var burgerCount = cart.burgerCount


// Cart functions
window.mainCart = (function(cart) {
// Makes cart function local and easier to read/write
//var addItem = cart.addItem() 


})(window.cart || (window.cart) );

};
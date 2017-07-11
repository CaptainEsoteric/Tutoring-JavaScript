window.onload = AppSetup;

function AppSetup()
{
    var myCart = new Cart();
    var menu = PopulateMenu();

    InsertMenu(menu,myCart);
}

// Inserts the menu onto the page
function InsertMenu(menuObj, cartObj)
{
    var cartList = document.getElementById("cart");

    var cartItem = document.getElementById("cartItem");
    var cartCount = document.getElementById("cartCount");
    var cartCost = document.getElementById("cartCost");
    var cartTotalCost = document.getElementById("totalcost");
    var menuList = document.getElementById("menu");

    var menuTitleNode = document.getElementById("menu");
    var menuCostNode = document.getElementById("menucost");
    var arButtonNode = document.getElementById("addremove");



    for (i = 0; i < menuObj.FoodData.length; i++)
    { //Goes through the array
         
        menuData = menuObj.FoodData[i];
        //Creates an add button
        var addButton = document.createElement("button");
        // Assigns text to the button
        addButton.innerHTML = "+";
        //Leverages bootstrap to make a green button
        addButton.setAttribute("class", "btn-success");
        //Creates a variable for a line break.
        var lineSpacing = document.createElement("br");
        //Executes function when button is clicked

        function AddHandler(index) {

            var tempMenuItem = menuObj.FoodData[index];

            addButton.addEventListener("click", function ()
            {
                cartObj.AddCartData(new CartItem(tempMenuItem));
                UpdateDomFromCart(cartObj, cartItem, cartCount, cartCost, cartTotalCost);
            });
        }

        AddHandler(i);

        //Creates a subtract button
        var subtractButton = document.createElement("button");
        //Assigns text to button
        subtractButton.innerHTML = "-";
        //Leverages bootstrap to make a red button
        subtractButton.setAttribute("class", "btn-danger");
        //Executes function when clicked

        function SubtractHandler(index)
        {
            var tempMenuItem = menuObj.FoodData[index];

            subtractButton.addEventListener("click", function () {
                cartObj.SubtractCartData(new CartItem(tempMenuItem));
                UpdateDomFromCart(cartObj, cartItem, cartCount, cartCost, cartTotalCost);
            });
        }

        SubtractHandler(i);

        //populates web page with menu


        menuTitleNode.appendChild(document.createTextNode(menuData.Name));
        menuTitleNode.appendChild(document.createElement("br"));
        menuCostNode.appendChild(document.createTextNode(menuData.Cost));
        menuCostNode.appendChild(document.createElement("br"));
        arButtonNode.appendChild(addButton);
        arButtonNode.appendChild(subtractButton);
        arButtonNode.appendChild(document.createElement("br"));
        menuList.appendChild(document.createElement("p"));
        // document.getElementById("main").appendChild (itemName[i].name)
    }
}

function UpdateDomFromCart(updateFromThisCart, cartItemNode, cartCountNode, cartCostNode, totalCostNode)
{
    cartItemNode.innerHTML = "";
    cartCountNode.innerHTML = "";
    cartCostNode.innerHTML = "";
    totalCostNode.innerHTML = "";

    for (i = 0; i < updateFromThisCart.CartData.length; i++)
    {
        cartItemNode.appendChild(document.createTextNode(updateFromThisCart.CartData[i].DesiredItem.Name));
        cartItemNode.appendChild(document.createElement("br"));
        cartCountNode.appendChild(document.createTextNode(updateFromThisCart.CartData[i].Quantity));
        cartCountNode.appendChild(document.createElement("br"));
        cartCostNode.appendChild(document.createTextNode(updateFromThisCart.CartData[i].TotalItemCost()));
        cartCostNode.appendChild(document.createElement("br"));
    }

    totalCostNode.appendChild(document.createTextNode(updateFromThisCart.TotalCost()));
}


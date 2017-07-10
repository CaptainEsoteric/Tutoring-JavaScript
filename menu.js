function PopulateMenu() {
var StartMenu = new Menu();
StartMenu.AddFoodItem(new FoodItem("Burger",4.99));
StartMenu.AddFoodItem(new FoodItem("Cheesebuger", 5.49));
StartMenu.AddFoodItem(new FoodItem("Hot Dog", 3.99));
StartMenu.AddFoodItem(new FoodItem("Chili Dog", 4.49));
StartMenu.AddFoodItem(new FoodItem("Nachos", 5.99));
StartMenu.AddFoodItem(new FoodItem("Soft Drink", 1.99));
return StartMenu;
}

window.menu = PopulateMenu();
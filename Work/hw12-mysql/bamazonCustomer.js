const mysql = require("mysql");
const inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "",
	database: "bamazon"
});

/*

Welcome to Bamazon
------------------
Our current products:
ID#1 Vtech Socrates // Electronics Department // Price: $130.00

ID#${results[0].item_id}  ${results[0].product_name} // ${results[i].department.name} Department // Price: $${results[i].price}

Enter the ID number of the item you would like to purchase.

*/

var productsArray = [];
var productList = `No products available at this time.`;

connection.query('SELECT * FROM `products`', function(error, results){
	var productList = JSON.stringify(results);
// 	var productsArray = results;
// 	for (var i = 0; i < productsArray.length; i++) {
// 		productList = `\
// ID#${productsArray[i].item_id}  ${productsArray[i].product_name} // ${productsArray[i].department_name} Department // Price: $${productsArray[i].price}`
// 		}
// 	};
// 	makeProductList();
	console.log(productList);
});

// inquirer.prompt([
// 	{
// 		type: 'input',
// 		name: 'ourCurrentProducts',
// 		message: `\
// Welcome to Bamazon! Please enter the ID number of the item you would like to purchase.
//   SELECTION: `,
// 	}
// ]);

/*
Display all items available for sale including IDs, names and prices. mysql query?
Ask user for ID of product they'd like to buy. (inquirer)
	Then ask how many units.
	Check if there are enough in stock.
	If not, log error message to the user.
	If there is enough in stock, fulfill the order:
	Calculate and log total price of order to the user.
	Deplete stock by the amount ordered (mysql).
*/
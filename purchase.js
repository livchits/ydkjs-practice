/*
    Write a program to calculate the total price of your phone purchase. You will keep purchasing phones (hint: loop!) until you run out of money in your bank account. You'll also buy accessories for each phone as long as your purchase total is below your mental spending threshold.
    After you've calculated your purchase total, add in the tax, then print out the calculated purchase total, properly formatted.
    Finally, check the total against your bank account balance to see if you can afford it or not.
    You should set up some constants for the "tax rate," "phone price," "accessory price," and "spending threshold," as well as a variable for your "bank account balance.""
    You should define functions for calculating the tax and for formatting the price with a "$" and rounding to two decimal places.
    Bonus Challenge: Try to incorporate input into this program, perhaps with the prompt(..) covered in "Input" earlier. You may prompt the user for their bank account balance, for example. Have fun and be creative!
*/

var bankAccountBalance = prompt("¿Cuánto dinero tiene en su cuenta?");
const SPENDING_THRESHOLD = bankAccountBalance * 0.4; 
const TAX_RATE = 0.1;
const PHONE_PRICE = 100;
const ACCESSORY_PRICE = 10;
var total = 0;
var phones = 0;
var accessories = 0;

const tax = (amount) => amount * TAX_RATE;

const format = (amount) => "$" + amount.toFixed(2);

while (bankAccountBalance > (PHONE_PRICE + tax(PHONE_PRICE)) && bankAccountBalance > SPENDING_THRESHOLD) {
//Si en la cuenta hay más del valor de un teléfono con impuestos y más de lo que me puedo permitir gastar, se compra un teléfono.
  total += PHONE_PRICE + tax(PHONE_PRICE);
  phones++;
  if ((total + ACCESSORY_PRICE + tax(ACCESSORY_PRICE)) < SPENDING_THRESHOLD) {
  //Si lo que me puedo permitir gastar es más que el total sumado a un accesorio y sus impuestos, se compra un accesorio.
    total += ACCESSORY_PRICE + tax(ACCESSORY_PRICE);
    accessories++      
  }
  bankAccountBalance -= total;
}

console.log(`El total de la compra es ${format(total)}.\nSe compraron ${phones} teléfonos y ${accessories} accesorios.`);

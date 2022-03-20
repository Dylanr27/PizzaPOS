//order
let pizzaOrder = document.getElementById('order');
let pizzaCount = 1;
const subTotalDisplay = document.getElementById('subTotal');
let subTotal = 0;
let deliveryMethod = 0;
const deliveryFee = document.getElementById('delivery-fee');
const taxDisplay = document.getElementById('tax');
let tax = 0;
const totalDisplay = document.getElementById('total');
let total = 0;

//pepperoni pizza
const pepperoniButton = document.getElementById('pepperoni-button');
const pCheese = document.getElementById('Pcheese');
const pPepperoni = document.getElementById('Ppepperoni')

pepperoniButton.addEventListener('click', function(){
    pizzaOrder.innerText += ("Pepperoni Pizza: $15\n")
    // pizzaCount++;
    subTotal += 15;
    if(pCheese.checked){
        pizzaOrder.innerText += ("Extra Cheese: $2\n")
        subTotal += 2;
        pCheese.checked = false;
    }
    if(pPepperoni.checked){
        pizzaOrder.innerText += ("No Pepperoni: $-2\n")
        subTotal -= 2;
        pPepperoni.checked = false;
    }
    pizzaOrder.innerText += ("==================\n");
    DisplayCost();
});

//Meat Lovers Pizza
const meatLoversButton = document.getElementById('meatLovers-button');
const mCheese = document.getElementById('Mcheese');
const mBacon = document.getElementById('Mbacon');
const mChicken = document.getElementById('Mchicken');
const mSausage = document.getElementById('Msausage');
const mHam = document.getElementById('Mham');
// const meatLoversPizza = document.getElementById('meatLovers-pizza');
// const toppings = document.getElementsByClassName('toppings')
meatLoversButton.addEventListener('click', function(){
    pizzaOrder.innerText += ("Meat Lovers Pizza: $21\n")
    //pizzaCount++;
    subTotal += 21;
    if(mCheese.checked){
        pizzaOrder.innerText += ("Extra Cheese: $2\n")
        subTotal += 2;
        mCheese.checked = false;
    }
    if(mBacon.checked){
        pizzaOrder.innerText += ("No Bacon: $-1\n")
        subTotal -= 1;
        mBacon.checked = false;
    }
    if(mChicken.checked){
        pizzaOrder.innerText += ("No Chicken: $-2\n")
        subTotal -= 2;
        mChicken.checked = false;
    }
    if(mSausage.checked){
        pizzaOrder.innerText += ("No Sausage: $-2\n")
        subTotal -= 2;
        mSausage.checked = false; 
    }
    if(mHam.checked){
        pizzaOrder.innerText += ("No Ham: $-2\n")
        subTotal -= 2;
        mHam.checked = false;
    }
    pizzaOrder.innerText += ("==================\n");
    DisplayCost();
});

//Supreme Pizza
const supremeButton = document.getElementById('supreme-button');
const sCheese = document.getElementById('Scheese');
const sPepperoni = document.getElementById('Spepperoni');
const sSausage = document.getElementById('Ssausage');
const sExtraVeggies = document.getElementById('Sextraveggies');
const sRemoveVeggies = document.getElementById('Sremoveveggies');

supremeButton.addEventListener('click', function(){
    pizzaOrder.innerText += ("Supreme Pizza: $19\n")
    //pizzaCount++;
    subTotal += 19;
    if(sCheese.checked){
        pizzaOrder.innerText += ("Extra Cheese: $2\n")
        subTotal += 2;
        sCheese.checked = false;
    }
    if(sPepperoni.checked){
        pizzaOrder.innerText += ("No Pepperoni: $-2\n")
        subTotal -= 2;
        sPepperoni.checked = false;
    }
    if(sSausage.checked){
        pizzaOrder.innerText += ("No Sausage: $-1\n")
        subTotal -= 1;
        sSausage.checked = false;
    }
    if(sExtraVeggies.checked){
        pizzaOrder.innerText += ("Extra Veggies: $1\n")
        subTotal += 1;
        sExtraVeggies.checked = false; 
    }
    if(sRemoveVeggies.checked){
        pizzaOrder.innerText += ("No Veggies\n")
        sRemoveVeggies.checked = false;
    }
    pizzaOrder.innerText += ("==================\n");
    DisplayCost();
});

//Hawaiian Pizza
const hawaiianButton = document.getElementById('hawaiian-button');
const hCheese = document.getElementById('Hcheese');
const hHam = document.getElementById('Hham');
const hPineapple = document.getElementById('Hpineapple');

hawaiianButton.addEventListener('click', function(){
    pizzaOrder.innerText += ("Hawaiian Pizza: $18\n")
    //pizzaCount++;
    subTotal += 18;
    if(hCheese.checked){
        pizzaOrder.innerText += ("Extra Cheese: $2\n")
        subTotal += 2;
        hCheese.checked = false;
    }
    if(hHam.checked){
        pizzaOrder.innerText += ("No Ham: $-1\n")
        subTotal -= 1;
        hHam.checked = false;
    }
    if(hPineapple.checked){
        pizzaOrder.innerText += ("No Pineapple\n")
        hPineapple.checked = false;
    }
    pizzaOrder.innerText += ("==================\n");
    DisplayCost();
});


//Taco Pizza
const tacoButton = document.getElementById('taco-button');
const tCheese = document.getElementById('Tcheese');
const tBeef = document.getElementById('Tbeef');
const tChives = document.getElementById('Tchives');
const tTomato = document.getElementById('Ttomato');
const tOnions = document.getElementById('Tonions');

tacoButton.addEventListener('click', function(){
    pizzaOrder.innerText += ("Taco Pizza: $20\n")
    //pizzaCount++;
    subTotal += 20;
    if(tCheese.checked){
        pizzaOrder.innerText += ("Extra Cheese: $2\n")
        subTotal += 2;
        tCheese.checked = false;
    }
    if(tBeef.checked){
        pizzaOrder.innerText += ("No Beef: $-3\n")
        subTotal -= 3;
        tBeef.checked = false;
    }
    if(tChives.checked){
        pizzaOrder.innerText += ("No Chives\n")
        tChives.checked = false;
    }
    if(tTomato.checked){
        pizzaOrder.innerText += ("No Tomato\n")
        tTomato.checked = false; 
    }
    if(tOnions.checked){
        pizzaOrder.innerText += ("No Onions\n")
        tOnions.checked = false;
    }
    pizzaOrder.innerText += ("==================\n");
    DisplayCost();
});

//Chicken Bacon Ranch Pizza
const cbrButton = document.getElementById('cbr-button');
const cbrCheese = document.getElementById('Ccheese');
const cbrBacon = document.getElementById('Cbacon');
const cbrChicken = document.getElementById('Cchicken');
const cbrTomato = document.getElementById('Ctomato');
const cbrOnions = document.getElementById('Conions');

cbrButton.addEventListener('click', function(){
    pizzaOrder.innerText += ("Chicken Bacon Ranch Pizza: $18\n")
    //pizzaCount++;
    subTotal += 18;
    if(cbrCheese.checked){
        pizzaOrder.innerText += ("Extra Cheese: $2\n")
        subTotal += 2;
        cbrCheese.checked = false;
    }
    if(cbrBacon.checked){
        pizzaOrder.innerText += ("No Bacon: $-1\n")
        subTotal -= 1;
        cbrBacon.checked = false;
    }
    if(cbrChicken.checked){
        pizzaOrder.innerText += ("No Chicken: $-2\n")
        subTotal -= 2;
        cbrChicken.checked = false;
    }
    if(cbrTomato.checked){
        pizzaOrder.innerText += ("No Tomato\n")
        cbrTomato.checked = false; 
    }
    if(cbrOnions.checked){
        pizzaOrder.innerText += ("No Onions\n")
        cbrOnions.checked = false;
    }
    pizzaOrder.innerText += ("==================\n");
    DisplayCost();
});

// Delivery Method
const deliveryButton = document.getElementById("delivery");
const pickUpButton = document.getElementById("pick-up");

//delivery button
deliveryButton.addEventListener('click', function(){
    deliveryMethod = 20.00;
    DisplayCost();
    
})
//pickup button
pickUpButton.addEventListener('click', function(){
    deliveryMethod = 0;
     DisplayCost();
})

const submitOrderButton = document.getElementById('submit-order');
const clearOrderButton = document.getElementById('clear-order');

submitOrderButton.addEventListener('click', function(){
    if(total == 0){
        alert("Cannot submit an empty order :(");
        return;
    }
    if(!deliveryButton.checked && !pickUpButton.checked){
        alert("Please select either delivery or pick-up")
        return;
    }
    alert("Order #" + pizzaCount + "\nYour Order is on the way!\n" + "Order total: $" + total +"\nThank you come again :)");
    pizzaCount++;
    ClearCostDisplay();
})

clearOrderButton.addEventListener('click', function(){
    ClearCostDisplay();
})

const firstNameDisplay = document.getElementById('first-name');
const lastNameDisplay = document.getElementById('last-name');
const emailDisplay = document.getElementById('email');
const addressDisplay = document.getElementById('address');
const userNameDisplay = document.getElementById('user-name');
const passwordDisplay = document.getElementById('password');
const submitAccount = document.getElementById('submit-account');

submitAccount.addEventListener('click', function(){
    if(firstNameDisplay.value == ""){
        alert("Please enter all fields");
        return;
    }
    if(lastNameDisplay.value == ""){
        alert("Please enter all fields");
        return;
    }
    if(emailDisplay == ""){
        alert("Please enter all fields");
        return;
    }
    if(addressDisplay.value == ""){
        alert("Please enter all fields");
        return;
    }
    if(userNameDisplay.value == ""){
        alert("Please enter all fields");
        return;
    }
    // if(passwordDisplay.value == ""){
    //     alert("Please enter all fields");
    //     return;
    // }
    alert("Thank you for joining the rewards program for Dyl's Pizzeria :)\n" +
          "Account Details:\nFirst Name: " + firstNameDisplay.value +
          "\nLast Name: " + lastNameDisplay.value +
          "\nEmail: " + emailDisplay.value +
          "\nAddress: " + addressDisplay.value +
          "\nUserName: " + userNameDisplay.value +
          "\nPassword: " + passwordDisplay.value);
          firstNameDisplay.value = "";
          lastNameDisplay.value = "";
          emailDisplay.value = "";
          addressDisplay.value = "";
          userNameDisplay.value = "";
          passwordDisplay.value = "";
})


function DisplayCost(){
    deliveryFee.value = "$"+deliveryMethod; 
    subTotalDisplay.value = "$"+subTotal;
    tax = subTotal * 0.09;
    taxDisplay.value = "$"+tax;
    total = tax + subTotal + deliveryMethod;
    totalDisplay.value = "$"+total;
};

function ClearCostDisplay(){
    total = 0;
    subTotal = 0;
    tax = 0;
    deliveryMethod = 0;
    deliveryFee.value = "$0";
    taxDisplay.value = "$0";
    subTotalDisplay.value = "$0";
    totalDisplay.value = "$0";
    pizzaOrder.innerText = "";
    pickUpButton.checked = true;
};
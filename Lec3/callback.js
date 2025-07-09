// function calculate(param1) {
//   console.log("calculate");
//   param1();
// }

// var abc = () => {
//   console.log("working");
// }

// calculate(abc);


// main high order function
// function calculate(logicFunction, a, b) {
//   return logicFunction(a, b)
// }

// function add(a, b) {
//   return a+b;
// }

// function sub(a, b){
//   return a-b;
// }

// console.log(calculate(add, 3, 4));

// function HOF(students) {
//   const student = { name: "Pransh", fees: 30000 };
//   students(student);
// }

// function studentDetails(student) {
//   console.log(`name : ${student.name} \nfees : ${student.fees}`);
// }

// function feesEmi(student) {
//   let emi  = student.fees/10;
//   console.log(`emi of fees calculated for student of fees ${student.fees} is : ${(student.name)} is ${emi}`)
// }

// HOF(studentDetails);
// HOF(feesEmi);



// console.log("Start Script")


// function walking(cb){
//     console.log("Walking in");
//     setTimeout(cb,2000);
// }

// function checkMenu(cb){
//     console.log("Checking Menu");
//     setTimeout(cb,3000);
// }

// function order(cb){
//     console.log("Ordering");
//     setTimeout(cb,4000);
// }

// function HavingLunch(cb){
//     console.log("Having Lunch");
//     setTimeout(cb,5000);
// }

// function bill(cb){
//     console.log("paying bill");
//     setTimeout(cb,2000);
// }

// function leave(cb){
//     console.log("Walking out");
// }

// walking(() => {
//   checkMenu(() => {
//     order(() => {
//       HavingLunch(() => {
//         bill(() => {
//           leave();
//         })
//       })
//     })
//   })
// })
// console.log("End Script");

var cart = ["shoes", "shirts", "jeans"];

function createOrder(cart){
    console.log('Cart Items');
    for (const element in cart) {
        console.log(cart[element]+ " ");
    }
    console.log("Order Created");
    setTimeout(placeOrder, 1000, 5000, 3);
}


function placeOrder(amount, noOfItems){
    console.log("Total Amount: ", amount);
    console.log("Total Items: ", noOfItems);
    console.log("Order Placed");
    let orderId = Math.floor(Math.random() * 1000);
    setTimeout(orderPayment, 1000, orderId, amount, noOfItems);

}

function orderPayment(orderId, amount, noOfItems){
    console.log("The Order ID is : ", orderId, "\nTotal Amount: ", amount, "\nTotal Items: ", noOfItems);
    setTimeout(orderStatus, 1000);
}

function orderStatus(){
    console.log("Order Successful");
}

createOrder( cart,() => {
  placeOrder( () => {
    orderPayment( () => {
      orderStatus();
    })
  })
})

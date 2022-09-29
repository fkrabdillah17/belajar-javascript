// Callback Function

// const orderCoffee = () => {
//     let coffee = null;
//     console.log("Sedang membuat kopi, silakan tunggu...");
//     setTimeout(() => {
//         coffee = "Kopi sudah jadi!";
//     }, 3000);
//     return coffee;
// }

// const coffee = orderCoffee();
// console.log(coffee);

const orderCoffee = (callback) => {
  let coffee = null;
  console.log("Kopi sedang dibuat, silahkan tunggu...");
  setTimeout(() => {
    coffee = "Kopi sudah jadi!";
    callback(coffee);
  }, 3000);
};

orderCoffee((coffee) => {
  console.log(coffee);
});

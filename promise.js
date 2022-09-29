// Promise

// const executorFunction = (resolve, reject) => {
//   const isCoffeeMakerReady = true;
//   if (isCoffeeMakerReady) {
//     resolve("Kopi berhasil dibuat");
//   } else {
//     reject("Mesin kopi tidak bisa digunakan");
//   }
// };

// const makeCoffee = () => {
//   return new Promise(executorFunction);
// };
// const coffeePromise = makeCoffee();
// console.log(coffeePromise);

// Consume Promise

// const stock = {
//   coffeeBeans: 250,
//   water: 1000,
// };

// const checkStock = () => {
//   return new Promise((resolve, reject) => {
//     if (stock.coffeeBeans >= 16 && stock.water >= 250) {
//       resolve("Stok cukup. Bisa membuat kopi");
//     } else {
//       reject("Stok tidak cukup");
//     }
//   });
// };

// const handleSuccess = (resolvedValue) => {
//   console.log(resolvedValue);
// };

// const handleFailure = (rejectionReason) => {
//   console.log(rejectionReason);
// };

// checkStock().then(handleSuccess, handleFailure);

// Chaining Promise

const state = {
  stock: {
    coffeeBeans: 250,
    water: 1000,
  },
  isCoffeeMachineBusy: false,
};

const checkAvailability = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!state.isCoffeeMachineBusy) {
        resolve("Mesin kopi siap digunakan.");
      } else {
        reject("Maaf, mesin sedang sibuk.");
      }
    }, 1000);
  });
};

const checkStock = () => {
  return new Promise((resolve, reject) => {
    state.isCoffeeMachineBusy = true;
    setTimeout(() => {
      if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250) {
        resolve("Stok cukup. Bisa membuat kopi.");
      } else {
        reject("Stok tidak cukup!");
      }
    }, 1500);
  });
};

const boilWater = () => {
  return new Promise((resolve, reject) => {
    console.log("Memanaskan air...");
    setTimeout(() => {
      resolve("Air panas sudah siap!");
    }, 2000);
  });
};

const grindCoffeeBeans = () => {
  return new Promise((resolve, reject) => {
    console.log("Menggiling biji kopi...");
    setTimeout(() => {
      resolve("Kopi sudah siap!");
    }, 1000);
  });
};

const brewCoffee = () => {
  console.log("Membuatkan kopi Anda...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Kopi sudah siap!");
    }, 2000);
  });
};

// function makeEspresso() {
//   checkAvailability()
//     .then((value) => {
//       console.log(value);
//       return checkStock();
//     })
//     .then((value) => {
//       console.log(value);
//       const promises = [boilWater(), grindCoffeeBeans()];
//       return Promise.all(promises);
//     })
//     .then((value) => {
//       console.log(value);
//       return brewCoffee();
//     })
//     .then((value) => {
//       console.log(value);
//       state.isCoffeeMachineBusy = false;
//     })
//     .catch((rejectedReason) => {
//       console.log(rejectedReason);
//       state.isCoffeeMachineBusy = false;
//     });
// }

makeEspresso();

// Async-await
const getCoffee = () => {
  return new Promise((resolve, reject) => {
    const seeds = 100;
    setTimeout(() => {
      if (seeds >= 10) {
        resolve("Kopi didapatkan!");
      } else {
        reject("Biji kopi habis!");
      }
    }, 1000);
  });
};

// async function makeCoffee() {
//   const coffee = await getCoffee();
//   console.log(coffee);
// }

// makeCoffee();

// Async-await with handleRejecting
async function makeCoffee() {
  try {
    const coffee = await getCoffee();
    console.log(coffee);
  } catch (rejectedReason) {
    console.log(rejectedReason);
  }
}

// makeCoffee();

// Chaining Promise using async-await
async function makeEspresso() {
  try {
    await checkAvailability();
    await checkStock();
    await Promise.all([boilWater(), grindCoffeeBeans()]);
    const coffee = await brewCoffee();
    console.log(coffee);
  } catch (rejectedReason) {
    console.log(rejectedReason);
  }
}

// makeEspresso();

function fetchUsername() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("JSUser");
    }, 3000);
  });
}

console.log("Fetching username...");
fetchUsername().then((value) => {
  console.log(`You are logged in as ${value}`);
});
console.log("Welcome!");

let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

// *** CallBack Hell ***

// let order = (fruit_name, call_production) => {
//   setTimeout(() => {
//     console.log(`${stocks.Fruits[fruit_name]}`);
//     call_production();
//   }, 2000);
// };

// let production = () => {
//   setTimeout(() => {
//     console.log("Production has started");
//   }, 0);
//   setTimeout(() => {
//     console.log("The fruit has been chopped");

//     setTimeout(() => {
//       console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
//       setTimeout(() => {
//         console.log("The machine was started");
//         setTimeout(() => {
//           console.log(`ice cream was pleaced on ${stocks.holder[0]} `);

//           setTimeout(() => {
//             console.log(`${stocks.toppings[0]}`);
//             setTimeout(() => {
//               console.log("serve ice cream ");
//             }, 2000);
//           }, 3000);
//         }, 2000);
//       }, 1000);
//     }, 1000);
//   }, 2000);
// };

// order(0, production);

let is_shop_open = true;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("Our Shop Is Colsed"));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`${stocks.Fruits[0]}`);
    await time(0000);
    console.log("start production");
    await time(2000);
    console.log("cut the fruit");
    await time(1000);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were added`);
    await time(1000);
    console.log(`Start the machine`);
    await time(2000);
    console.log(`ice cream was added to ${stocks.holder[0]}`);
    await time(3000);
    console.log(`${stocks.toppings[0]} was added `);
    await time(1000);
    console.log(`Serve Ice Cream`);
  } catch (error) {
    console.log("Customer Left", error);
  } finally {
    console.log("day ended, shop closed");
  }
}
kitchen();

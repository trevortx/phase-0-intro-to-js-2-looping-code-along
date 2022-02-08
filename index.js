// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);

let name = ["Charlie", "Samip", "Ali"];
let thankYou = [];

function writeCards(inputArray, event) {
  for (let i = 0; i < inputArray.length; i++) {
    thankYou.push(`Thank you, ${inputArray[i]}, for the wonderful ${event} gift!`);
  }

  return thankYou;

}

function countDown(int) {
  while (int > -1) {
    console.log(int);
    int--;
  }
}

countDown(5);
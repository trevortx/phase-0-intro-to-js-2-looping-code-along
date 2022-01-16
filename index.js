const names = [];
const birthday = "birthday";
let newArray = [];
function writeCards(array, event) {
    for (let i = 0; i < array.length; i++) {
    newArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
}

return newArray;
}

console.log(writeCards(names, birthday));

function countDown(integer) {
  let number = 10;
  while (number >= 0) {
    console.log(number--);
  }
}
countDown();

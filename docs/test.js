let a = [1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0];

let max = 0;
let length = 0;
for (let x of a) {
  if (x === 0) {
    length += 1;
  }
  if (length > max) {
    max = length;
  }
  if (x !== 0) {
    length = 0;
  }
}

console.log(max);

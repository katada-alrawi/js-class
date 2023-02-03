// let index = 0;
//  DRY
// console.log(`Hej ${arr[0]} `); // +1
// console.log(`Hej ${arr[1]} `); // +1
// console.log(`Hej ${arr[2]} `); // +1
// console.log(`Hej ${arr[3]} `); // +1
// console.log(arr.length);

// i +=1  ,  i = i +1  , i++
const names = ["Nancy", "Zain", "Olga", "Ali"];
const work = ["Teacher", "Painter", "Personal trainer", "Programmer"];
for (let i = 0; i < names.length; i++) {
  console.log(`Hej ${names[i]}, your work as ${work[i]}.`);
}
// 1 * 1 = 1
// 1 * 2 = 2
// 1 * 3 = 3
// 1 * 10 = 10
for (let i = 0; i <= 10; i++) {
  console.log(`1 * ${i} = ${1 * i}`);
}

const images = ["😎", "🥳", "😈"];
const likes = [232, 543, 88];
for (let i = 0; i < images.length; i++) {
  console.log(
    `----------------------
        this img ${images[i]}
        👍🏻 ${likes[i]} `
  );
}

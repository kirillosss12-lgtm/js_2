const input = prompt("Введите число:");
const number = Number(input);
const resultArr = [];

for (let i = 0; i <= number; i++) {
    resultArr.push(i);
}

console.log(resultArr);
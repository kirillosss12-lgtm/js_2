const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};

const arrValues = [];

for (let key in obj) {
    if (Array.isArray(obj[key])) {
        // Если значение массив, используем spread или concat
        arrValues.push(...obj[key]);
    } else {
        arrValues.push(obj[key]);
    }
}

console.log(arrValues);
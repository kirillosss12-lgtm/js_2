const word = "Довод";

const reversedWord = word.toLowerCase().split('').reverse().join('');

if (word.toLowerCase() === reversedWord) {
    console.log(`Слово ${word} является палиндромом`);
} else {
    console.log(`Слово ${word} не является палиндромом`);
}
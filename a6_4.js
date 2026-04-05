const boardSize = 3;

for (let i = 0; i < boardSize; i++) {
    let row = "";
    for (let j = 0; j < boardSize; j++) {
        // Чередуем x и o на основе суммы индексов
        row += (i + j) % 2 === 0 ? "x " : "o ";
    }
    console.log(row.trim());
}
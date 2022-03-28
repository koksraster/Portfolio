document.getElementById("smyle").addEventListener("click", () => {
    let hex = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B","C","D", "E", "F",];
    let hexColor1 = "";
    let hexColor2 = "";
    let randomIn = getRandomInt(0, 360);

    for (let i = 0; i < 6; i++) {  //задаём формат в hex, 6 можно заменить на 3
        hexColor1 += hex[getRandomNumber()];
        hexColor2 += hex[getRandomNumber()];
    };

    document.body.style.background = `linear-gradient(${randomIn}deg, #${hexColor1}, #${hexColor2})`;

    //Функция рандомного числа
    function getRandomNumber() {
        return Math.floor(Math.random() * hex.length);  
    };

    //Функция рандомного числа в диапозоне от 0 до 360
    function getRandomInt(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    };
});
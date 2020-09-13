let phrases = [
    {
        text: "poslať priateľovi vtipný GIF",
        image: "https://code.s3.yandex.net/web-code/procrastinate/1.gif"
  },
    {
        text: "hľadať zľavy na lety",
        image: "https://code.s3.yandex.net/web-code/procrastinate/2.png"
  },
    {
        text: "zistiť, o čom spievajú rapperi",
        image: "https://code.s3.yandex.net/web-code/procrastinate/3.png"
  },
    {
        text: "situácia s vírusom Covid-19",
        image: "https://github.com/MaxSkachkov/prepinac/blob/master/img/girl-in%20mask.png?raw=true"
  },
    {
        text: "zoradiť podľa farby knihy na poličke",
        image: "https://github.com/MaxSkachkov/prepinac/blob/master/img/books-by-color.png?raw=true"
  },
    {
        text: "prečítať o platoch v San Franciscu",
        image: "https://code.s3.yandex.net/web-code/procrastinate/6.png"
  },
    {
        text: "prečítať v správach, čo ešte Elon Musk vymyslel",
        image: "https://github.com/MaxSkachkov/prepinac/blob/master/img/musk.png?raw=true"
  },
    {
        text: "dostať sa do prúdu smutných piesní a spomenúť si na všetky chyby svojej mladosti",
        image: "https://code.s3.yandex.net/web-code/procrastinate/8.png"
  },
    {
        text: "pozrieť trailer k seriálu a celú prvú sezónu tiež",
        image: "https://code.s3.yandex.net/web-code/procrastinate/9.png"
  },
    {
        text: "skontrolovať nové správy na Facebooku",
        image: "https://github.com/MaxSkachkov/prepinac/blob/master/img/facebook.png?raw=true"
  }
];

function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
}

let button = document.querySelector(".button");
let phrase = document.querySelector(".phrase");
let advice = document.querySelector(".advice");
let image = document.querySelector(".image");

button.addEventListener("click", function () {
    let randomElement = getRandomElement(phrases);
    smoothly(phrase, "textContent", randomElement.text);
    smoothly(image, "src", randomElement.image);

    if (randomElement.text.length > 40) {
        advice.style.fontSize = "33px";
    } else {
        advice.style.fontSize = "42px";
    }
});

for (let i = 0; i <= 2; i++) {
    smoothly(phrase, "textContent", phrases[i].text);
    smoothly(image, "src", phrases[i].image);
}

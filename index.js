const rand1 = Math.ceil((Math.random() * 9));
const rand2 = Math.ceil((Math.random() * 9));

const rand3 = Math.ceil((Math.random() * 99));
const rand4 = Math.ceil((Math.random() * 9));

const rand5 = Math.ceil((Math.random() * 99));
const rand6 = Math.ceil((Math.random() * 99));

const rand7 = Math.ceil((Math.random() * 999));
const rand8 = Math.ceil((Math.random() * 99));

const input = document.getElementById("input");

const formEl = document.getElementById("form");

const scoreEl = document.getElementById("score");

const levelEl = document.getElementById("level");

let score = JSON.parse(localStorage.getItem("score"));
if (score === null || isNaN(score)) {
    score = 0;
} else if (score < 0) {
    score = 0;
}

scoreEl.innerText = `Score: ${score}`;

const questionEl = document.getElementById("question");

if (score <= 30) {
    questionEl.innerText = `What is ${rand1} multiply by ${rand2}?`;
} else if (score > 30 && score <= 50) {
    questionEl.innerText = `What is ${rand3} multiply by ${rand4}?`;
} else if (score > 50 && score <= 80) {
    questionEl.innerText = `What is ${rand5} multiply by ${rand6}?`;
} else if (score > 80 && score <= 100) {
    questionEl.innerText = `What is ${rand7} multiply by ${rand8}?`;
}

let level = 1;
if (score >= 80) {
    level = "max";
} else if (score >= 50) {
    level = 3;
} else if (score >= 30) {
    level = 2;
}

levelEl.innerText = `Level: ${level}`;

formEl.addEventListener("submit", () => {  
    const userAns = +input.value;
    if (userAns === correctLv1 || userAns === correctLv2 || userAns === correctLv3 || userAns === correctLvMax) {
        score+=5;
        updateLocalStorage(score);
    } else {
        score-=5;
        updateLocalStorage(score);
    }
})

const correctLv1 = rand1 * rand2;
const correctLv2 = rand3 * rand4;
const correctLv3 = rand5 * rand6;
const correctLvMax = rand7 * rand8;

function updateLocalStorage(newScore) {
    localStorage.setItem("score", JSON.stringify(newScore));
}





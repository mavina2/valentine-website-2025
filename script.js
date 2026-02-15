const config = window.VALENTINE_CONFIG;

// Apply page title
document.title = config.pageTitle;

// Apply gradient background
document.body.style.background = `linear-gradient(135deg, ${config.colors.backgroundStart}, ${config.colors.backgroundEnd})`;
document.body.style.fontFamily = "sans-serif";
document.body.style.textAlign = "center";
document.body.style.padding = "40px";

// Elements
const titleScreen = document.getElementById("title-screen");
const startBtn = document.getElementById("start-btn");
const questionScreen = document.getElementById("question-screen");
const questionText = document.getElementById("question-text");
const buttonContainer = document.getElementById("button-container");

const meterScreen = document.getElementById("meter-screen");
const meterQuestion = document.getElementById("meter-question");
const loveSlider = document.getElementById("love-slider");
const loveMessage = document.getElementById("love-message");
const nextBtn = document.getElementById("next-btn");

const celebrationScreen = document.getElementById("celebration-screen");
const celebrationTitle = document.getElementById("celebration-title");
const celebrationMessage = document.getElementById("celebration-message");

// Set title name
document.getElementById("title-name").innerText = config.valentineName + " 💖";

// Button styling
function styleButton(btn) {
    btn.className = "btn";
    btn.style.background = config.colors.buttonBackground;
    btn.style.color = "white";
    btn.style.border = "none";
    btn.style.padding = "12px 25px";
    btn.style.margin = "10px";
    btn.style.borderRadius = "25px";
    btn.style.cursor = "pointer";
    btn.style.fontSize = "16px";
    btn.style.transition = "0.3s";

    btn.onmouseover = () => btn.style.background = config.colors.buttonHover;
    btn.onmouseout = () => btn.style.background = config.colors.buttonBackground;
}

// START BUTTON
startBtn.addEventListener("click", () => {
    titleScreen.style.display = "none";
    showFirstQuestion();
});

// FIRST QUESTION
function showFirstQuestion() {
    questionScreen.style.display = "block";
    questionText.innerText = config.questions.first.text;

    buttonContainer.innerHTML = "";

    const yesBtn = document.createElement("button");
    yesBtn.innerText = config.questions.first.yesBtn;
    styleButton(yesBtn);

    const noBtn = document.createElement("button");
    noBtn.innerText = config.questions.first.noBtn;
    styleButton(noBtn);

    yesBtn.onclick = showSecondQuestion;
    noBtn.onclick = showSecondQuestion;

    buttonContainer.appendChild(yesBtn);
    buttonContainer.appendChild(noBtn);
}

// SECOND QUESTION (LOVE METER)
function showSecondQuestion() {
    questionScreen.style.display = "none";
    meterScreen.style.display = "block";

    meterQuestion.innerText = config.questions.second.text;
    nextBtn.innerText = config.questions.second.nextBtn;

    loveSlider.oninput = () => {
        const value = loveSlider.value;

        if (value > 5000) {
            loveMessage.innerText = config.loveMessages.extreme;
        } else if (value > 1000) {
            loveMessage.innerText = config.loveMessages.high;
        } else {
            loveMessage.innerText = config.loveMessages.normal;
        }
    };

    nextBtn.onclick = showThirdQuestion;
    styleButton(nextBtn);
}

// THIRD QUESTION
function showThirdQuestion() {
    meterScreen.style.display = "none";
    questionScreen.style.display = "block";

    questionText.innerText = config.questions.third.text;
    buttonContainer.innerHTML = "";

    const yesBtn = document.createElement("button");
    yesBtn.innerText = config.questions.third.yesBtn;
    styleButton(yesBtn);

    const noBtn = document.createElement("button");
    noBtn.innerText = config.questions.third.noBtn;
    styleButton(noBtn);

    yesBtn.onclick = showCelebration;
    noBtn.onclick = showCelebration;

    buttonContainer.appendChild(yesBtn);
    buttonContainer.appendChild(noBtn);
}

// CELEBRATION
function showCelebration() {
    questionScreen.style.display = "none";
    celebrationScreen.style.display = "block";

    celebrationTitle.innerText = config.celebration.title;
    celebrationMessage.innerText = config.celebration.message;

    // Floating emojis
    for (let i = 0; i < 20; i++) {
        const emoji = document.createElement("div");
        emoji.innerText = config.celebration.emojis[Math.floor(Math.random() * config.celebration.emojis.length)];
        emoji.style.position = "fixed";
        emoji.style.left = Math.random() * 100 + "vw";
        emoji.style.top = Math.random() * 100 + "vh";
        emoji.style.fontSize = "24px";
        emoji.style.animation = `float ${config.animations.floatDuration} infinite alternate`;
        document.body.appendChild(emoji);
    }
}

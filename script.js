const config = window.VALENTINE_CONFIG;

// Set page title
document.title = config.pageTitle;

// Set title name
document.getElementById("title-name").innerText = config.valentineName + " 💖";

// Floating emojis
createFloatingEmojis();
function createFloatingEmojis() {
    const allEmojis = [...config.floatingEmojis.hearts, ...config.floatingEmojis.bears];

    for (let i = 0; i < 25; i++) {
        const emoji = document.createElement("div");
        emoji.innerText = allEmojis[Math.floor(Math.random() * allEmojis.length)];
        emoji.style.position = "fixed";
        emoji.style.left = Math.random() * 100 + "vw";
        emoji.style.bottom = "-40px";
        emoji.style.fontSize = (20 + Math.random() * 20) + "px";
        emoji.style.opacity = 0.8;
        emoji.style.pointerEvents = "none";
        emoji.style.animation = `floatUp ${config.animations.floatDuration} linear infinite`;
        emoji.style.animationDelay = Math.random() * 20 + "s";
        document.body.appendChild(emoji);
    }
}

// Apply gradient background
document.body.style.background = `linear-gradient(135deg, ${config.colors.backgroundStart}, ${config.colors.backgroundEnd})`;
document.body.style.fontFamily = "sans-serif";
document.body.style.textAlign = "center";
document.body.style.padding = "40px";

// Music
const musicToggle = document.getElementById("musicToggle");
const bgMusic = document.getElementById("bgMusic");
const musicSource = document.getElementById("musicSource");

musicSource.src = config.music.musicUrl;
bgMusic.volume = config.music.volume || 0.5;
bgMusic.load();

musicToggle.addEventListener("click", () => {
    if (bgMusic.paused) {
        bgMusic.play();
        musicToggle.textContent = config.music.stopText;
    } else {
        bgMusic.pause();
        musicToggle.textContent = config.music.startText;
    }
});

// Title screen start button
const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", () => {
    document.getElementById("title-screen").style.display = "none";
    showFirstQuestion();
});

// First question
function showFirstQuestion() {
    const questionScreen = document.getElementById("question-screen");
    const questionText = document.getElementById("question-text");
    const buttonContainer = document.getElementById("button-container");

    questionScreen.style.display = "block";
    questionText.innerText = config.questions.first.text;

    buttonContainer.innerHTML = "";

    const yesBtn = document.createElement("button");
    yesBtn.innerText = config.questions.first.yesBtn;
    yesBtn.className = "btn";
    yesBtn.onclick = showSecondQuestion;

    const noBtn = document.createElement("button");
    noBtn.innerText = config.questions.first.noBtn;
    noBtn.className = "btn";
    noBtn.onclick = showSecondQuestion;

    buttonContainer.appendChild(yesBtn);
    buttonContainer.appendChild(noBtn);
}

// Second question (love meter)
function showSecondQuestion() {
    document.getElementById("question-screen").style.display = "none";
    const meterScreen = document.getElementById("meter-screen");
    meterScreen.style.display = "block";

    document.getElementById("meter-question").innerText = config.questions.second.text;
    const loveSlider = document.getElementById("love-slider");
    const loveMessage = document.getElementById("love-message");
    const nextBtn = document.getElementById("next-btn");

    loveSlider.oninput = () => {
        const value = loveSlider.value;
        if (value > 5000) loveMessage.innerText = config.loveMessages.extreme;
        else if (value > 1000) loveMessage.innerText = config.loveMessages.high;
        else loveMessage.innerText = config.loveMessages.normal;
    };

    nextBtn.innerText = config.questions.second.nextBtn;
    nextBtn.onclick = showThirdQuestion;
}

// Third question
function showThirdQuestion() {
    document.getElementById("meter-screen").style.display = "none";
    const questionScreen = document.getElementById("question-screen");
    questionScreen.style.display = "block";
    const questionText = document.getElementById("question-text");
    const buttonContainer = document.getElementById("button-container");

    questionText.innerText = config.questions.third.text;
    buttonContainer.innerHTML = "";

    const yesBtn = document.createElement("button");
    yesBtn.innerText = config.questions.third.yesBtn;
    yesBtn.className = "btn";
    yesBtn.onclick = showCelebration;

    const noBtn = document.createElement("button");
    noBtn.innerText = config.questions.third.noBtn;
    noBtn.className = "btn";
    noBtn.onclick = showCelebration;

    buttonContainer.appendChild(yesBtn);
    buttonContainer.appendChild(noBtn);
}

// Celebration
function showCelebration() {
    document.getElementById("question-screen").style.display = "none";
    const celebrationScreen = document.getElementById("celebration-screen");
    celebrationScreen.style.display = "block";
    document.getElementById("celebration-title").innerText = config.celebration.title;
    document.getElementById("celebration-message").innerText = config.celebration.message;
}

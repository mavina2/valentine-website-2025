const config = window.VALENTINE_CONFIG;

/* -------------------- INIT WHEN PAGE LOADS -------------------- */
window.addEventListener("DOMContentLoaded", () => {

    document.title = config.pageTitle;

    // Apply background gradient
    document.body.style.background =
        `linear-gradient(135deg, ${config.colors.backgroundStart}, ${config.colors.backgroundEnd})`;

    createFloatingEmojis();
    setupApp();
});


/* -------------------- FLOATING EMOJIS -------------------- */
function createFloatingEmojis() {

    const emojis = [
        ...config.floatingEmojis.hearts,
        ...config.floatingEmojis.bears
    ];

    for (let i = 0; i < 30; i++) {

        const emoji = document.createElement("div");
        emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];

        emoji.style.position = "fixed";
        emoji.style.left = Math.random() * 100 + "vw";
        emoji.style.top = Math.random() * 100 + "vh";
        emoji.style.fontSize = (20 + Math.random() * 20) + "px";
        emoji.style.opacity = 0.8;
        emoji.style.pointerEvents = "none";
        emoji.style.zIndex = "0";

        animateFloating(emoji);

        document.body.appendChild(emoji);
    }
}

function animateFloating(element) {
    const duration = parseFloat(config.animations.floatDuration) || 20;

    function float() {
        element.animate([
            { transform: "translate(0px, 0px)" },
            { transform: `translate(${random(-50,50)}px, -100vh)` }
        ], {
            duration: duration * 1000,
            iterations: 1,
            easing: "linear"
        }).onfinish = () => {
            element.style.left = Math.random() * 100 + "vw";
            element.style.top = "100vh";
            float();
        };
    }

    float();
}

function random(min, max) {
    return Math.random() * (max - min) + min;
}


/* -------------------- MAIN APP -------------------- */
function setupApp() {

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

    document.getElementById("title-name").innerText =
        config.valentineName + " 💖";

    styleButton(startBtn);

    startBtn.onclick = () => {
        titleScreen.style.display = "none";
        showFirstQuestion();
    };

    function styleButton(btn) {
        btn.style.background = config.colors.buttonBackground;
        btn.style.color = "white";
        btn.style.border = "none";
        btn.style.padding = "12px 25px";
        btn.style.margin = "10px";
        btn.style.borderRadius = "25px";
        btn.style.cursor = "pointer";
        btn.style.fontSize = "16px";
        btn.style.transition = "0.3s";

        btn.onmouseover = () =>
            btn.style.background = config.colors.buttonHover;

        btn.onmouseout = () =>
            btn.style.background = config.colors.buttonBackground;
    }

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

    function showSecondQuestion() {
        questionScreen.style.display = "none";
        meterScreen.style.display = "block";

        meterQuestion.innerText = config.questions.second.text;
        nextBtn.innerText = config.questions.second.nextBtn;
        styleButton(nextBtn);

        loveSlider.oninput = () => {
            const value = parseInt(loveSlider.value);

            if (value > 5000)
                loveMessage.innerText = config.loveMessages.extreme;
            else if (value > 1000)
                loveMessage.innerText = config.loveMessages.high;
            else
                loveMessage.innerText = config.loveMessages.normal;
        };

        nextBtn.onclick = showThirdQuestion;
    }

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

    function showCelebration() {
        questionScreen.style.display = "none";
        celebrationScreen.style.display = "block";

        celebrationTitle.innerText = config.celebration.title;
        celebrationMessage.innerText = config.celebration.message;
    }
}

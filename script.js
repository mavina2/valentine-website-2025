const config = window.VALENTINE_CONFIG;

// Set page title
document.title = config.pageTitle;

// Floating emojis
function createFloatingEmojis() {
    const container = document.querySelector('.floating-elements');
    const allEmojis = [...config.floatingEmojis.hearts, ...config.floatingEmojis.bears];

    for (let i = 0; i < 25; i++) {
        const emoji = document.createElement('div');
        emoji.innerText = allEmojis[Math.floor(Math.random() * allEmojis.length)];
        emoji.style.position = 'fixed';
        emoji.style.left = Math.random() * 100 + 'vw';
        emoji.style.bottom = '-40px';
        emoji.style.fontSize = (20 + Math.random() * 20) + 'px';
        emoji.style.opacity = 0.8;
        emoji.style.pointerEvents = 'none';
        emoji.style.animation = `floatUp ${config.animations.floatDuration} linear infinite`;
        emoji.style.animationDelay = Math.random() * 20 + 's';
        container.appendChild(emoji);
    }
}
createFloatingEmojis();

// Start button and screens
const titleScreen = document.getElementById('title-screen');
const startBtn = document.getElementById('start-btn');
const questionScreen = document.getElementById('question-screen');
const questionText = document.getElementById('question-text');
const buttonContainer = document.getElementById('button-container');
const meterScreen = document.getElementById('meter-screen');
const meterQuestion = document.getElementById('meter-question');
const loveSlider = document.getElementById('love-slider');
const loveMessage = document.getElementById('love-message');
const nextBtn = document.getElementById('next-btn');
const celebrationScreen = document.getElementById('celebration-screen');
const celebrationTitle = document.getElementById('celebration-title');
const celebrationMessage = document.getElementById('celebration-message');

// Set title name
document.getElementById('title-name').innerText = config.valentineName + ", Be My Forever Valentine 💝";

// Button styling
function styleButton(btn) {
    btn.className = 'btn';
    btn.style.background = config.colors.buttonBackground;
    btn.style.color = 'white';
    btn.style.border = 'none';
    btn.style.padding = '12px 25px';
    btn.style.margin = '10px';
    btn.style.borderRadius = '25px';
    btn.style.cursor = 'pointer';
    btn.style.fontSize = '16px';
    btn.style.transition = '0.3s';

    btn.onmouseover = () => btn.style.background = config.colors.buttonHover;
    btn.onmouseout = () => btn.style.background = config.colors.buttonBackground;
}

// Start button
startBtn.addEventListener('click', () => {
    titleScreen.style.display = 'none';
    showFirstQuestion();
});

// First question
function showFirstQuestion() {
    questionScreen.style.display = 'block';
    questionText.innerText = config.questions.first.text;

    buttonContainer.innerHTML = '';
    const yesBtn = document.createElement('button');
    yesBtn.innerText = config.questions.first.yesBtn;
    styleButton(yesBtn);

    const noBtn = document.createElement('button');
    noBtn.innerText = config.questions.first.noBtn;
    styleButton(noBtn);

    yesBtn.onclick = showSecondQuestion;
    noBtn.onclick = showSecondQuestion;

    buttonContainer.appendChild(yesBtn);
    buttonContainer.appendChild(noBtn);
}

// Second question (love meter)
function showSecondQuestion() {
    questionScreen.style.display = 'none';
    meterScreen.style.display = 'block';
    meterQuestion.innerText = config.questions.second.text;
    nextBtn.innerText = config.questions.second.nextBtn;

    loveSlider.oninput = () => {
        const value = loveSlider.value;
        if (value > 5000) loveMessage.innerText = config.loveMessages.extreme;
        else if (value > 1000) loveMessage.innerText = config.loveMessages.high;
        else loveMessage.innerText = config.loveMessages.normal;
    };

    nextBtn.onclick = showThirdQuestion;
    styleButton(nextBtn);
}

// Third question
function showThirdQuestion() {
    meterScreen.style.display = 'none';
    questionScreen.style.display = 'block';
    questionText.innerText = config.questions.third.text;

    buttonContainer.innerHTML = '';
    const yesBtn = document.createElement('button');
    yesBtn.innerText = config.questions.third.yesBtn;
    styleButton(yesBtn);

    const noBtn = document.createElement('button');
    noBtn.innerText = config.questions.third.noBtn;
    styleButton(noBtn);

    yesBtn.onclick = showCelebration;
    noBtn.onclick = showCelebration;

    buttonContainer.appendChild(yesBtn);
    buttonContainer.appendChild(noBtn);
}

// Celebration
function showCelebration() {
    questionScreen.style.display = 'none';
    meterScreen.style.display = 'none';
    celebrationScreen.style.display = 'block';

    celebrationTitle.innerText = config.celebration.title;
    celebrationMessage.innerText = config.celebration.message;

    // Floating emojis in celebration
    for (let i = 0; i < 20; i++) {
        const emoji = document.createElement('div');
        emoji.innerText = config.celebration.emojis[Math.floor(Math.random() * config.celebration.emojis.length)];
        emoji.style.position = 'fixed';
        emoji.style.left = Math.random() * 100 + 'vw';
        emoji.style.top = Math.random() * 100 + 'vh';
        emoji.style.fontSize = '24px';
        emoji.style.animation = `floatUp ${config.animations.floatDuration} infinite alternate`;
        document.body.appendChild(emoji);
    }
}

// Music setup
const musicToggle = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');
const musicSource = document.getElementById('musicSource');

if(config.music.enabled){
    musicSource.src = config.music.musicUrl;
    bgMusic.volume = config.music.volume;
    bgMusic.load();
    if(config.music.autoplay) bgMusic.play().catch(()=>{});
}

musicToggle.addEventListener('click', ()=>{
    if(bgMusic.paused){
        bgMusic.play();
        musicToggle.innerText = config.music.stopText;
    } else {
        bgMusic.pause();
        musicToggle.innerText = config.music.startText;
    }
});

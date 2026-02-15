const CONFIG = {
    valentineName: "Mario",
    pageTitle: "Will You Be My Forever Valentine? 💝",

    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],
        bears: ['🧸', '🐻']
    },

    questions: {
        first: {
            text: "Be my bello minion?",
            yesBtn: "Yes",
            noBtn: "No",
            secretAnswer: "I love you bello"
        },
        second: {
            text: "How much I wish your dreams come true",
            startText: "This much!",
            nextBtn: "Next ❤️"
        },
        third: {
            text: "Think about you forever",
            yesBtn: "Yes!",
            noBtn: "No"
        }
    },

    loveMessages: {
        extreme: "Always dream come true",
        high: "Forever",
        normal: "And beyond!"
    },

    celebration: {
        title: "Yay! I'm the luckiest person in the world! 🎉💝💖💝💓",
        message: "Kiss forever",
        emojis: ['💖','💝','❤️','💕']
    },

    colors: {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
    },

    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.5
    },

    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "https://soundcloud.com/liluzivert/chrome-heart-tags?si=0be7f7fbc90e44e9a3f3d1e201bc317d&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        startText: "🎵 Play Music",
        stopText: "🔇 Stop Music",
        volume: 0.5
    }
};

window.VALENTINE_CONFIG = CONFIG;

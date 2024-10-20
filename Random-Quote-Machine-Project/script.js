const quotes = [
    {
        text: "The only limit to our realization of tomorrow is our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        text: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
        author: "Buddha"
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "The best way to predict the future is to create it.",
        author: "Peter Drucker"
    },
    {
        text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston S. Churchill"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "Peace comes from within. Do not seek it without.",
        author: "Buddha"
    },
    {
        text: "Do not wait to strike till the iron is hot, but make it hot by striking.",
        author: "William Butler Yeats"
    },
    {
        text: "The mind is everything. What you think you become.",
        author: "Buddha"
    }
];

const backgrounds = [
    'url("https://t4.ftcdn.net/jpg/07/16/85/55/360_F_716855589_NmtNuphimHoq93dmOpBBc7G32UKBvGA2.jpg")',
    'url("https://wallpapers.com/images/hd/zen-buddha-statue-m0yxebcijh76eb63.jpg")',
    'url("hhttps://img.freepik.com/premium-photo/stack-rocks-with-reflection-water_1073248-69075.jpg")',
    'url("https://images8.alphacoders.com/358/thumb-1920-358164.jpg")',
    'url("https://img.freepik.com/premium-photo/zen-garden-background_951133-14371.jpg")',
    'url("https://wallpapercave.com/wp/wp3351879.jpg")',
    'url("https://t3.ftcdn.net/jpg/09/17/53/04/360_F_917530402_osYQTBxafH9uXwaJlMCyzH3EWEYbCQMJ.jpg")',
    'url("https://e0.pxfuel.com/wallpapers/683/20/desktop-wallpaper-zen-garden-background-zen-spring.jpg")',
    'url("https://wallpapergod.com/images/hd/zen-3840X2160-wallpaper-4m4e5p5mmdcfbnxm.jpeg")',
];

const textElement = document.getElementById('text');
const authorElement = document.getElementById('author');
const newQuoteButton = document.getElementById('new-quote');
const tweetQuoteElement = document.getElementById('tweet-quote');
const bodyElement = document.body; // Reference to the body element

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function getRandomBackground() {
    return backgrounds[Math.floor(Math.random() * backgrounds.length)];
}

function displayQuote() {
    const { text, author } = getRandomQuote();
    textElement.textContent = text;
    authorElement.textContent = author;
    tweetQuoteElement.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)} - ${encodeURIComponent(author)}`;
    bodyElement.style.backgroundImage = getRandomBackground(); // Change background
}

// Initial load
displayQuote();

// Event listener for new quote button
newQuoteButton.addEventListener('click', displayQuote);

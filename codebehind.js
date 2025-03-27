function temperatureConverter() {
    let tempc = parseFloat(prompt("Enter temperature in degree celsius"));

    if (isNaN(tempc)) {
        alert("Invalid input. Enter a number.");
    } else {
        let tempf = ((tempc*1.8) + 32).toFixed(2);
        alert(`The temperature ${tempc}C in Fahrenheit is ${tempf}F.`);
    }
}
function longerWord() {
    let word1 = prompt("Enter first word").trim();
    let word2 = prompt("Enter second word").trim();

    if (word1.length > word2.length) {
        alert(`The word "${word1}" is longer than "${word2}".`);
    } else if (word1.length < word2.length) {
        alert(`The word "${word2}" is longer than "${word1}".`);
    } else {
        alert(`The words "${word1}" and "${word2}" have equal length.`);
    }
}
function myBirthstone() {
    let month = prompt("Please enter your birth month").trim().toLowerCase();
    let birthstone = "";

    switch (month) {
        case "january": 
            birthstone = "Garnet";
            alert(`Your birthstone is ${birthstone}.`);
            break;
        case "february":
            birthstone = "Amethyst";
            alert(`Your birthstone is ${birthstone}.`);
            break;
        case "march": 
            birthstone = "Aquamarine";
            alert(`Your birthstone is ${birthstone}.`);
            break;
        case "april": 
            birthstone = "Diamond";
            alert(`Your birthstone is ${birthstone}.`);
            break;
        case "may": 
            birthstone = "Emerald";
            alert(`Your birthstone is ${birthstone}.`);
            break;
        case "june": 
            birthstone = "Alexandrite & Pearl";
            alert(`Your birthstone is ${birthstone}.`);
            break;
        case "july": 
            birthstone = "Ruby";
            alert(`Your birthstone is ${birthstone}.`);
            break;
        case "august":
            birthstone = "Peridot";
            alert(`Your birthstone is ${birthstone}.`);
            break;
        case "september":
            birthstone = "Sapphire";
            alert(`Your birthstone is ${birthstone}.`);
            break;
        case "october": 
            birthstone = "Opal & Tourmaline";
            alert(`Your birthstone is ${birthstone}.`);
            break;
        case "november": 
            birthstone = "Topaz & Citrine";
            alert(`Your birthstone is ${birthstone}.`);
            break;
        case "december":
            birthstone = "Turquoise, Tanzanite & Zircon";
            alert(`Your birthstone is ${birthstone}.`);
            break;
        default:
            alert("Invalid Input. Please enter a valid month.");
            return;
    }
}
function basicOps() {
    let ope = prompt("Choose an operator:\nM - Multiplication or *\nD - Division or /\nA - Addition or +\nS - Subtraction or -").toUpperCase().trim();
    let num1 = parseFloat(prompt("Enter first number"));
    let num2 = parseFloat(prompt("Enter second number"));
    let ans;
    switch (ope) {
        case "M":
        case "*":
            ans = num1 * num2;
            ope = "*";
            alert(`The answer for (${num1} ${ope} ${num2}) is ${ans}.`);
            break;
        case "D":
        case "/":
            ans = num1 / num2;
            ope = "/";
            alert(`The answer for (${num1} ${ope} ${num2}) is ${ans}.`);
            break;
        case "A":
        case "+":
            ans = num1 + num2;
            ope = "+";
            alert(`The answer for (${num1} ${ope} ${num2}) is ${ans}.`);
            break;
        case "S":
        case "-":
            ans = num1 - num2;
            ope = "-";
            alert(`The answer for (${num1} ${ope} ${num2}) is ${ans}.`);
            break;
        default:
            alert("No matching operator. Enter a valid one.");
    }
}
function computeAccelaration() {
    let iv = parseFloat(prompt("Enter the initial velocity in m/s"));
    let fv = parseFloat(prompt("Enter the final velocity in m/s"));
    let changeTime = parseFloat(prompt("Enter the change in time in seconds"));

    let acce = ((fv - iv)/changeTime).toFixed(2);
    alert(`The accelaration is ${acce}`);
}
function hideAll() {
    var homeDiv = document.getElementById("homeDiv");
    var portfolioDiv = document.getElementById("portfolioDiv");
    var favoritesDiv = document.getElementById("favoritesDiv");

    var homeBtn = document.getElementById("homeBtn");
    var portfolioBtn = document.getElementById("portfolioBtn");
    var favoritesBtn = document.getElementById("favoritesBtn");

    homeDiv.style.display = "none";
    portfolioDiv.style.display = "none";
    favoritesDiv.style.display = "none";

    homeBtn.classList.remove("active");
    portfolioBtn.classList.remove("active");
    favoritesBtn.classList.remove("active");
}

function showHome() {
    hideAll();
    var homeDiv = document.getElementById("homeDiv");
    var homeBtn = document.getElementById("homeBtn");

    homeDiv.style.display = "flex"; 
    homeDiv.offsetHeight;
    homeBtn.classList.add("active");

    const slides = document.querySelector('.carousel-slide');
    if (slides) { 
        let slideIndex = 0;
        const totalSlides = slides.children.length;

        function moveSlide(direction) {
            slideIndex += direction;

            if (slideIndex >= totalSlides) {
                slideIndex = 0;
            } else if (slideIndex < 0) {
                slideIndex = totalSlides - 1;
            }

            slides.style.transform = `translateX(-${slideIndex * 100}%)`;
        }

        window.moveSlide = moveSlide;

        setInterval(() => {
            moveSlide(1);
        }, 5000);
    }
}

function togglePortfolio() {
    hideAll();
    var portfolioDiv = document.getElementById("portfolioDiv");
    var portfolioBtn = document.getElementById("portfolioBtn");

    portfolioDiv.style.display = "block";
    portfolioDiv.offsetHeight;
    portfolioBtn.classList.add("active");
}
window.onload = function() {
    showHome();
}

function toggleFavorites() {
    hideAll();
    var favoritesDiv = document.getElementById("favoritesDiv");
    var favoritesBtn = document.getElementById("favoritesBtn");

    favoritesDiv.style.display = "block";
    favoritesDiv.offsetHeight;
    favoritesBtn.classList.add("active");

    const commentInputs = document.querySelectorAll('.comment-input');
    commentInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const postButton = input.parentElement.querySelector('button');
                addComment(postButton);
            }
        });
    });
}

function toggleLike(element) {
    const img = element.querySelector('img'); // Get the <img> element inside the .heart1 div
    if (img.src.includes("imgs/heart.png")) {
        img.src = "imgs/colored-heart.png";
    } else {
        img.src = "imgs/heart.png";
    }
}

function addComment(button) {
    const commentInput = button.parentElement.querySelector('.comment-input');
    const commentText = commentInput.value.trim();
    const commentsList = button.parentElement.parentElement.querySelector('.comments-list');

    if (commentText !== '') {
        const li = document.createElement('li');
        li.textContent = commentText;
        commentsList.appendChild(li);

        commentInput.value = '';

        const artwork = button.closest('.artwork');
        const commentsSection = button.closest('.comments-section');
        const commentsListHeight = commentsList.scrollHeight;
        commentsSection.style.minHeight = `${commentsListHeight + 60}px`; 

        const content = document.getElementById('content');
        const artExhibit = document.getElementById('art-exhibit');
        const totalHeight = Array.from(artExhibit.children).reduce((total, artwork) => {
            return total + artwork.offsetHeight + 20; 
        }, 0);
        content.style.minHeight = `${totalHeight + 100}px`; 
    }
}
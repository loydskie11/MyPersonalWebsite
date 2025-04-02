

function temperatureConverter() {
    while (true) {
        let input = prompt("Enter temperature in degree Celsius:").trim();

        if (input === null || input === "") { 
            alert("Operation canceled.");
            return;
        }

        let tempc = parseFloat(input);
        if (!isNaN(tempc)) {
            let tempf = ((tempc * 1.8) + 32).toFixed(2);
            alert(`The temperature ${tempc}\u00B0C in Fahrenheit is ${tempf}\u00B0F.`);
            return;
        }
        alert("Invalid input. Please enter a valid number.");
    }
}

function longerWord() {
    let word1, word2;

    function getValidWord(promptMessage) {
        while (true) {
            let word = prompt(promptMessage);
            if (word === null) {
                alert("Operation canceled.");
                return null;
            }
            word = word.trim();
            if (word.length > 0) return word;
            alert("Invalid input. Please enter a non-empty word.");
        }
    }

    word1 = getValidWord("Enter first word:");
    if (word1 === null) return; 
    word2 = getValidWord("Enter second word:");
    if (word2 === null) return; 

    if (word1.length > word2.length) {
        alert(`The word "${word1}" is longer than "${word2}".`);
    } else if (word1.length < word2.length) {
        alert(`The word "${word2}" is longer than "${word1}".`);
    } else {
        alert(`The words "${word1}" and "${word2}" have equal length.`);
    }
}

function myBirthstone() {
    let month;

    while (true) {
        month = prompt("Please enter your birth month:");
        if (month === null) {
            alert("Operation canceled.");
            return;
        }

        month = month.trim().toLowerCase();
        if (month === "") {
            alert("Invalid input. Please enter a non-empty month name.");
            continue;
        }

        let birthstone;
        switch (month) {
            case "january": birthstone = "Garnet"; break;
            case "february": birthstone = "Amethyst"; break;
            case "march": birthstone = "Aquamarine"; break;
            case "april": birthstone = "Diamond"; break;
            case "may": birthstone = "Emerald"; break;
            case "june": birthstone = "Alexandrite & Pearl"; break;
            case "july": birthstone = "Ruby"; break;
            case "august": birthstone = "Peridot"; break;
            case "september": birthstone = "Sapphire"; break;
            case "october": birthstone = "Opal & Tourmaline"; break;
            case "november": birthstone = "Topaz & Citrine"; break;
            case "december": birthstone = "Turquoise, Tanzanite & Zircon"; break;
            default:
                alert("Invalid input. Please enter a valid month (e.g., January, February, etc.).");
                continue;
        }
        alert(`Your birthstone is ${birthstone}.`);
        return;
    }
}

function basicOps() {
    let ope;
   
    while (true) {
        ope = prompt("Choose an operator:\nM - Multiplication or *\nD - Division or /\nA - Addition or +\nS - Subtraction or -");
        if (ope === null) {
            alert("Operation canceled.");
            return;
        }

        ope = ope.trim().toUpperCase();
        if (["M", "*", "D", "/", "A", "+", "S", "-"].includes(ope)) {
            break;
        }

        alert("Invalid operator. Please enter a valid one.");
    }

    let num1, num2;

    function getValidNumber(promptMessage) {
        while (true) {
            let input = prompt(promptMessage);
            if (input === null) {
                alert("Operation canceled.");
                return null;
            }

            let num = parseFloat(input);
            if (!isNaN(num) && input.trim() === num.toString()) {
                return num;
            }

            alert("Invalid number. Please enter a valid number.");
        }
    }

    num1 = getValidNumber("Enter first number:");
    if (num1 === null) return;
    num2 = getValidNumber("Enter second number:");
    if (num2 === null) return;

    let ans;
    let symbol;

    switch (ope) {
        case "M":
        case "*":
            ans = num1 * num2;
            symbol = "*";
            break;
        case "D":
        case "/":
            if (num2 === 0) {
                alert("Error: Division by zero is not allowed.");
                return;
            }
            ans = num1 / num2;
            symbol = "/";
            break;
        case "A":
        case "+":
            ans = num1 + num2;
            symbol = "+";
            break;
        case "S":
        case "-":
            ans = num1 - num2;
            symbol = "-";
            break;
        default:
            alert("Unexpected error.");
            return;
    }
    alert(`The answer for (${num1} ${symbol} ${num2}) is ${ans}.`);
}

function computeAcceleration() {
    function getValidNumber(promptMessage) {
        while (true) {
            let input = prompt(promptMessage);
            
            if (input === null) {
                alert("Operation canceled.");
                return null;
            }

            let num = parseFloat(input.trim());
            if (!isNaN(num) && input.trim() === num.toString()) {
                return num;
            }

            alert("Invalid input. Please enter a valid number.");
        }
    }

    let iv = getValidNumber("Enter the initial velocity in m/s:");
    if (iv === null) return;
    let fv = getValidNumber("Enter the final velocity in m/s:");
    if (fv === null) return;

    let changeTime;
    while (true) {
        changeTime = getValidNumber("Enter the change in time in seconds:");
        if (changeTime === null) return;
        if (changeTime !== 0) break;
        
        alert("Time change cannot be zero. Please enter a valid time.");
    }
    let acce = ((fv - iv) / changeTime).toFixed(2);
    alert(`The acceleration is ${acce} m/s\u00B2.`);
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

function showExitModal() {
    document.getElementById("exitModal").style.display = "block";
}

function closeExitModal() {
    document.getElementById("exitModal").style.display = "none";
}

function closeSite() {
    self.close(); 
}

// function that write text in typing effect and also remove it letter by letter
const text = "Cybersecurity Accessibility";
let index = 0;
let direction = 1;
const textEl = document.querySelector("#text");
function type() {
    if (direction === 1) {
        if (index < text.length) {
            textEl.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 100);
        } else {
            direction = -1;
            setTimeout(type, 1000);
        }
    } else {
        if (index >= 0) {
            textEl.innerHTML = text.slice(0, index);
            index--;
            setTimeout(type, 100);
        } else {
            direction = 1;
            setTimeout(type, 1000);
        }
    }
}

window.onload = type;

// Coding for the toolbar

const toggle = document.getElementById("toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", ()=>
  {
  nav.classList.toggle("active");
});

// Javascript for changing background colors

function typColour()
{
    document.getElementById('typ').setAttribute("class", "typcolour");
}

function tritColour()
{
    document.getElementById('trit').setAttribute("class", "tritcolour");
}

function deutColour()
{
    document.getElementById('deut').setAttribute("class", "deutcolour");
}

function monoColour()
{
    document.getElementById('mono').setAttribute("class", "monocolour");
}

//function to trap focus inside my web page
window.addEventListener("keydown", function (event) {
    if (event.key === "Tab") {
        event.preventDefault();
        const focusableElements = Array.from(document.querySelectorAll("a[href], button, textarea, input[type='text'], input[type='radio'], input[type='checkbox'], select"));
        const firstFocusableElement = focusableElements[0];
        const lastFocusableElement = focusableElements[focusableElements.length - 1];
        if (event.shiftKey) {
            if (document.activeElement === firstFocusableElement) {
                lastFocusableElement.focus();
            } else {
                let index = focusableElements.indexOf(document.activeElement);
                focusableElements[index - 1].focus();
            }
        } else {
            if (document.activeElement === lastFocusableElement) {
                firstFocusableElement.focus();
            } else {
                let index = focusableElements.indexOf(document.activeElement);
                focusableElements[index + 1].focus();
            }
        }
    }
});

// function to play audio files related to button, on focus
const buttons = document.querySelectorAll("button");
const audioFiles = [
    "./Audio_Files/Colour.mp3",
    "./Audio_Files/Home.mp3",
    "./Audio_Files/About.mp3",
    "./Audio_Files/Home.mp3",
    "./Audio_Files/Home.mp3",
    "./Audio_Files/Blog.mp3",
    "./Audio_Files/Home.mp3",
    "./Audio_Files/Home.mp3",
    "./Audio_Files/Contact-Us.mp3"
];
let currentAudio = null;

buttons.forEach((button, index) => {
    button.addEventListener("focus", () => {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        currentAudio = new Audio(audioFiles[index]);
        currentAudio.play();
    });

    button.addEventListener("click", () => {

        button.classList.add("button-outline");

        if (!currentAudio || currentAudio.paused) {
            currentAudio = new Audio(audioFiles[index]);
            currentAudio.play();
        }
    });

    button.addEventListener("blur", function () {
        button.classList.remove("button-outline");
    });

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        const focusedButton = document.activeElement;

        if (focusedButton.tagName === "BUTTON") {
            if (!currentAudio || currentAudio.paused) {
                const index = Array.from(buttons).indexOf(focusedButton);
                currentAudio = new Audio(audioFiles[index]);
                currentAudio.play();
            }
        }
    } else if (event.key.length === 1) {
        const button = Array.from(buttons).find(
            button => button.accessKey === event.key.toLowerCase()
        );

        if (button) {
            button.focus();
        }
    }
});

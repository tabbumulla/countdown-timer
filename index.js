let countdownDate = new Date().getTime();
let countdownInterval;

function setCountdown() {
    clearInterval(countdownInterval);

    const customDateInput = document.getElementById("customDate");
    const customTimeInput = document.getElementById("customTime");

    const customDateTime = customDateInput.value + " " + customTimeInput.value;
    const customDate = new Date(customDateTime).getTime();
    const currentTime = new Date().getTime();

    if (customDate >= currentTime) {
        countdownDate = customDate;
        updateCountdown();
    } else {
        alert("Please enter a future date and time.");
    }
}

function startCountdown() {
    clearInterval(countdownInterval);

    const customDateInput = document.getElementById("customDate");
    const customTimeInput = document.getElementById("customTime");

    const customDateTime = customDateInput.value + " " + customTimeInput.value;
    const customDate = new Date(customDateTime).getTime();
    const currentTime = new Date().getTime();

    if (customDate >= currentTime) {
        countdownDate = customDate;
        updateCountdown();
        countdownInterval = setInterval(updateCountdown, 1000);
    } else {
        alert("Please enter a future date and time.");
    }
}

function stopCountdown() {
    clearInterval(countdownInterval);
}

const setCountdownButton = document.getElementById("setCountdownButton");
setCountdownButton.addEventListener("click", setCountdown);

const startButton = document.getElementById("startButton");
startButton.addEventListener("click", startCountdown);

const stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopCountdown);

function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeLeft = countdownDate - currentDate;

    if (timeLeft <= 0) {
        clearInterval(countdownInterval);
        document.querySelector(".timer").innerHTML = "Countdown Expired!";
    } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days.toString().padStart(2, '0');
        document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
        document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
    }
}

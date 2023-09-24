 // Set the initial countdownDate
 let countdownDate = new Date("September 24, 2023 23:59:59").getTime();
 let countdownInterval;

 // Function to start or update the countdown timer
 function startCountdown() {
     clearInterval(countdownInterval); // Clear any previous countdown intervals

     // Read the user-entered date and time from the input field
     const customDateInput = document.getElementById("customDate");
     const customDateValue = customDateInput.value;

     // Parse the custom date input and calculate the time difference
     const customDate = new Date(customDateValue).getTime();
     const currentTime = new Date().getTime();

     if (customDate >= currentTime) {
         countdownDate = customDate;
         updateCountdown(); // Update the countdown immediately
         countdownInterval = setInterval(updateCountdown, 1000); // Start the countdown
     } else {
         alert("Please enter a future date and time.");
     }
 }

 // Function to update the countdown
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

 // Add an event listener to the button to start/update the countdown
 const updateButton = document.getElementById("updateButton");
 updateButton.addEventListener("click", startCountdown);

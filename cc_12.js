// Task 1 - Business Dashboard – DOM Element Selection and Creation

// Selecting the dashboard container using both getElementById and querySelector
var dashboard = document.getElementById("dashboard") || document.querySelector("#dashboard");

// Creating a new div element to represent the Revenue metric card
var revenueCard = document.createElement("div");

// Setting attributes for styling and identification
revenueCard.setAttribute("class", "metric-card");
revenueCard.setAttribute("id", "revenueCard");

// Populating the card with a title and placeholder value
revenueCard.innerHTML = "<h3>Revenue</h3><p>$0</p>";

// Appending the new metric card to the dashboard container
dashboard.appendChild(revenueCard);
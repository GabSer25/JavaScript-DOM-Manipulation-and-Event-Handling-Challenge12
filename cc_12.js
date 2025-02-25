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

// Task 2 -  Updating Dashboard Metrics – Working with NodeLists and Arrays

// Function to update all metric cards
function updateMetricCards() {
    var metricCards = document.querySelectorAll(".metric-card");
    var metricArray = Array.from(metricCards);

    metricArray.forEach(function(card) {
        // Find the first heading (h3) inside the metric card
        var titleElement = card.querySelector("h3");
        
        if (titleElement && !titleElement.textContent.includes("- Updated")) {
            titleElement.textContent += " - Updated"; // Update only the title
        }
        
        card.style.backgroundColor = "#f4f4f4"; // Optional: Change background color
    });
}

// Call the function to update metric cards
updateMetricCards();

// Task 3 - Dynamic Inventory Management – Adding and Removing Items

// Creating a function to add product items dynamically
function addProductItem(productName) {
    // Selecting the inventory list container
    var inventoryList = document.getElementById("inventoryList");

    // Creating a new list item (li) for the product
    var productItem = document.createElement("li");

    // Adding a class and data attribute for identification
    productItem.setAttribute("class", "product-item");
    productItem.setAttribute("data-product", productName);

    // Setting the text content of the product item
    productItem.textContent = productName;

    // Adding event listener to remove item on click
    productItem.addEventListener("click", function() {
        removeProductItem(productItem);
    });

    // Appending the new product item to the inventory list
    inventoryList.appendChild(productItem);
}

// Creating a function to remove a product item when clicked
function removeProductItem(productItem) {
    var inventoryList = document.getElementById("inventoryList");
    inventoryList.removeChild(productItem); // Removing the clicked product item
}

// Example Usage: Adding some products
addProductItem("Laptop");
addProductItem("Smartphone");
addProductItem("Tablet");

// Task 4 - Business Customer Section – Handling Event Bubbling

// Function to handle customer card click event
function handleCustomerCardClick(event) {
    console.log("Customer card clicked"); // Log message

    event.stopPropagation(); // Stop event from bubbling to parent container
}

// Function to handle customer section click event
function handleCustomerSectionClick() {
    console.log("Customer section clicked"); // Log message
}

// Selecting the parent customer section
var customerSection = document.getElementById("customerSection");

// Adding an event listener to the parent container
customerSection.addEventListener("click", handleCustomerSectionClick);

// Creating customer cards dynamically (as an example)
for (var i = 1; i <= 3; i++) {
    var customerCard = document.createElement("div");
    customerCard.setAttribute("class", "customer-card");
    customerCard.textContent = "Customer " + i;

    // Adding event listener to customer card
    customerCard.addEventListener("click", handleCustomerCardClick);

    // Appending customer card to the customer section
    customerSection.appendChild(customerCard);
}
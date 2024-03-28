const allButtons = document.querySelectorAll("button");

// You can now work with the 'allButtons' NodeList
// For example, you can add an event listener to all buttons:
allButtons.forEach((button) => {
    button.addEventListener("click", function() {
        // Handle button click here
        // You can use 'button' to refer to the clicked button
    });
});
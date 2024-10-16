document.getElementById("filter-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Get filter values
    const recipient = document.getElementById("recipient").value;
    const interest = document.getElementById("interest").value;
    const budget = document.getElementById("budget").value;

    // Build URL based on selected options
    let targetPage = `gifts.html?recipient=${recipient}&interest=${interest}&budget=${budget}`;
    
    // Redirect to the relevant page with query params
    window.location.href = targetPage;
});

document.getElementById("auth-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Make a POST request to your backend (this will be handled by Node.js in the next step)
    fetch("/api/auth", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById("status").textContent = "Login Successful!";
        } else {
            document.getElementById("status").textContent = "Login Failed!";
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
});

function login(event) {
    if (event) event.preventDefault();

    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const btn = document.getElementById("loginBtn");

    if (!user || !pass) {
        alert("Please enter ID and Password");
        return;
    }

    btn.disabled = true;
    btn.innerText = "Connecting...";

    // PASTE YOUR LATEST EXEC URL HERE
    const scriptURL = "https://script.google.com/macros/s/AKfycbzMN7fUpvsFvkTAwf5-3XAHOyqga5aoNEEZ-4GFQuvXKyYOKnyA4dZ0KsjnHAl2u5KE8Q/exec"; 

    fetch(scriptURL, {
        method: "POST",
        mode: "cors", // Added for better cross-origin handling
        body: JSON.stringify({ 
            action: "login", 
            username: user, 
            password: pass 
        })
    })
    .then(res => res.json())
    .then(response => {
        if (response.success) {
            localStorage.setItem("supervisorId", response.supervisorId);
            localStorage.setItem("supervisorName", response.supervisorName);
            window.location.href = "dashboard.html";
        } else {
            alert("Invalid ID or Password!");
            btn.disabled = false;
            btn.innerText = "Login to Dashboard";
        }
    })
    .catch(err => {
        console.error(err);
        alert("Could not connect to Google Script. Check your Internet or Deployment settings.");
        btn.disabled = false;
        btn.innerText = "Login to Dashboard";
    });
}
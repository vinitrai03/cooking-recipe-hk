document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username === "user1@gmail.com" && password === "ROOT") {
      // alert("Login successful!");
      // Redirect to a different page if login successful
      window.location.href = "index.html";
    }
    else if  (username === "user2@gmail.com" && password === "ROOTt"){
      window.location.href = "index.html";
    }
    else {
      alert("Invalid credentials!");
    }
  });
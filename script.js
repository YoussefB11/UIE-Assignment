function handleLogin() {
  const email = document.getElementById("email").value.trim().toLowerCase();
  const password = document.getElementById("password").value;

  const users = {
    "y.baya-2021@hull.ac.uk": "student",
    "supervisor@hull.ac.uk": "supervisor",
    "tutor@hull.ac.uk": "tutor"
  };

  if (!password) {
    alert("Please enter your password.");
    return;
  }

  if (users[email] === "student") {
    window.location.href = "dashboard.html";
  } else if (users[email] === "supervisor") {
    window.location.href = "supervisor.html";
  } else if (users[email] === "tutor") {
    window.location.href = "tutor.html";
  } else {
    alert("Wrong details mate, try again");
  }
}

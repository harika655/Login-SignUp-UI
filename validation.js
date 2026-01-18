//validate login form
function validateLogin() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  //Check if user exists
  const storedUser = localStorage.getItem(email);

  if (!storedUser) {
    alert("This email does not have an account.Please sign up");
    return false;
  }

  const user = JSON.parse(storedUser);

  //Password check
  if (user.password !== password) {
    alert("Password is incorrect");
    return false;
  }

  alert("Login successful!");
  return true;
}

//validate signup form
function validateSignup() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return false;
  }

  //Save user data in localStorage
  const user = {
    name: name,
    email: email,
    password: password
  };

  localStorage.setItem(email, JSON.stringify(user));

  alert("Signup successful! Please login.");
  return true;
}

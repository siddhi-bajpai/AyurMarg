// updateProfile.js

document.addEventListener("DOMContentLoaded", () => {
  const storedEmail = localStorage.getItem('userEmail');

  if (storedEmail) {
    // If email is stored, change the profile icon to the user icon
    console.log(121212);
    document.querySelector(".options a[href='../Profile/index.html'] img").src = "user.png";
  } 
  else {
    // If email is not stored, add the sign-in and sign-up buttons
    const signInButton = document.createElement("button");
    signInButton.textContent = "Sign In";
    signInButton.classList.add("sign-in-button");
    signInButton.addEventListener("click", () => {
      // Add your sign-in logic here
      // For example, redirect to the sign-in page
      window.location.href = "../login/index.html";
    });

    const signUpButton = document.createElement("button");
    signUpButton.textContent = "Sign Up";
    signUpButton.classList.add("sign-up-button");
    signUpButton.addEventListener("click", () => {
      // Add your sign-up logic here
      // For example, redirect to the sign-up page
      window.location.href = "../Sign-Up/index.html";
    });

    // Replace the existing profile icon with the sign-in and sign-up buttons
    const optionsDiv = document.querySelector(".options");
    optionsDiv.innerHTML = ""; // Clear existing content
    optionsDiv.appendChild(signInButton);
    optionsDiv.appendChild(signUpButton);
  }
});
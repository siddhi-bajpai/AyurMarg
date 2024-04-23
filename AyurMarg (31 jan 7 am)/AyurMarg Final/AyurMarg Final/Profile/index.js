// profile.js

document.addEventListener("DOMContentLoaded", () => {
    // Retrieve user email from local storage
    const storedEmail = localStorage.getItem('userEmail');
  
    // Check if email is stored
    if (storedEmail) {
      // Add a sign-out button
      const signOutButton = document.createElement("button");
      signOutButton.textContent = "Sign Out";
      signOutButton.classList.add("sign-out-button"); // Add a class for styling if needed
      signOutButton.addEventListener("click", () => {
        // Remove user email from local storage
        localStorage.removeItem('userEmail');
        
        // Redirect to the homepage
        window.location.href = "../Homepage/index.html";
      });
  
      // Append the sign-out button to the profile-navbar
      const profileNavbar = document.getElementById("profile-navbar");
      profileNavbar.appendChild(signOutButton);
    } else {
      // Handle the case where no email is stored
      console.log("No user email found in local storage");
    }
});


function editAllEntries() {
  const form = document.getElementById('userInfoForm');
  const buttons = form.getElementsByClassName('buttons')[0];
  const saveButton = form.querySelector('button[type="button"]');
  const fields = form.getElementsByClassName('user_details');

  // Toggle visibility of buttons
  buttons.style.display = 'none';
  saveButton.style.display = 'block';

  // Convert text to input fields for each user_detail
  for (let field of fields) {
    const label = field.querySelector('label');
    const dataDiv = field.querySelector('div');
    
    // Create an input element with the existing data
    const input = document.createElement('input');
    input.type = 'text';
    input.value = dataDiv.innerText.trim();

    // Replace the dataDiv with the input element
    field.removeChild(dataDiv);
    field.appendChild(input);

    // Append label to the input for better visibility
    field.insertBefore(label, input);
  }
}

function saveAllEntries() {
  const form = document.getElementById('userInfoForm');
  const buttons = form.getElementsByClassName('buttons')[0];
  const saveButton = form.querySelector('button[type="button"]');
  const fields = form.getElementsByClassName('user_details');

  // Toggle visibility of buttons
  buttons.style.display = 'block';
  saveButton.style.display = 'none';

  // Convert input fields back to text for each user_detail
  for (let field of fields) {
    const label = field.querySelector('label');
    const input = field.querySelector('input');
    
    // Create a div with the existing data
    const dataDiv = document.createElement('div');
    dataDiv.innerText = input.value;

    // Replace the input with the dataDiv
    field.removeChild(input);
    field.appendChild(dataDiv);

    // Append label to the dataDiv for better visibility
    field.insertBefore(label, dataDiv);
  }

  // Now you can fetch the data from the input fields and update Firestore
  // ...

  // For demonstration purposes, I'm logging the updated data to the console
  console.log("Updated Data:", {
    username: document.getElementById('user_name').innerText,
    mobile: document.getElementById('user_mobile').innerText,
    gender: document.getElementById('user_gender').innerText,
    age: document.getElementById('user_age').innerText,
    weight: document.getElementById('user_weight').innerText,
    bloodgroup: document.getElementById('user_bloodgroup').innerText,
    address: document.getElementById('user_address').innerText,
  });
}
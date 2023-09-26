// Get a reference to the form element
const form = document.getElementById("registration-form");

// Add a submit event listener to the form
form.addEventListener("submit", function(event) {
    // Prevent the form from submitting by default
    event.preventDefault();

    // Get the values entered by the user
    const teamName = document.getElementById("teamName").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const email = document.getElementById("email").value.trim();
    const projectTopic = document.getElementById("projectTopic").value.trim();
    const category = document.getElementById("category").value;
    const groupSize = document.getElementById("groupSize").value;

    // Perform validation checks
    let isValid = true;

    // Validate teamName
    if (teamName === "") {
        isValid = false;
        alert("Please enter the team's name.");
    }

    // Validate phoneNumber
    if (phoneNumber === "") {
        isValid = false;
        alert("Please enter a phone number.");
    } else if (!/^\d{10}$/.test(phoneNumber)) {
        isValid = false;
        alert("Please enter a valid 10-digit phone number.");
    }

    // Validate email
    if (email === "") {
        isValid = false;
        alert("Please enter an email address.");
    } else if (!/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(email)) {
        isValid = false;
        alert("Please enter a valid email address.");
    }

    // Validate projectTopic
    if (projectTopic === "") {
        isValid = false;
        alert("Please enter a project topic.");
    }

    // Validate category and groupSize (assuming you don't want the default "Select" values)
    if (category === "" || groupSize === "") {
        isValid = false;
        alert("Please select a category and group size.");
    }

    // If all checks pass, submit the form
    if (isValid) {
        form.submit();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Get a reference to the form element
    const form = document.getElementById("registration-form");

    // Add a submit event listener to the form
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the form data
        const formData = new FormData(form);

        // Perform validation checks
        let isValid = true;

        // Validate teamName
        const teamName = formData.get('teamName');
        if (teamName.trim() === '') {
            isValid = false;
            alert("Please enter the team's name.");
        }

        // Validate phoneNumber
        const phoneNumber = formData.get('phoneNumber');
        if (phoneNumber.trim() === '') {
            isValid = false;
            alert("Please enter a phone number.");
        } else if (!/^\d{10}$/.test(phoneNumber)) {
            isValid = false;
            alert("Please enter a valid 10-digit phone number.");
        }

        // Validate email
        const email = formData.get('email');
        if (email.trim() === '') {
            isValid = false;
            alert("Please enter an email address.");
        } else if (!/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(email)) {
            isValid = false;
            alert("Please enter a valid email address.");
        }

        // Validate projectTopic
        const projectTopic = formData.get('projectTopic');
        if (projectTopic.trim() === '') {
            isValid = false;
            alert("Please enter a project topic.");
        }

        // Validate category and groupSize
        const category = formData.get('category');
        const groupSize = formData.get('groupSize');
        if (category === '' || groupSize === '') {
            isValid = false;
            alert("Please select a category and group size.");
        }

        // If all checks pass, submit the form data to the API
        if (isValid) {
            // Define the API endpoint URL
            const apiUrl = 'https://get-linked-pre-hack.vercel.app/register.html';

            // Make a POST request to the API
            fetch(apiUrl, {
                method: 'POST',
                body: formData,
            })
            .then(response => response.json())
            .then(data => {
                // Handle the API response (you can display a success message or perform other actions)
                console.log(data); // Log the response for debugging
                alert('Form submitted successfully!');
            })
            .catch(error => {
                // Handle errors (display an error message or perform other actions)
                console.error('Error:', error);
                alert('An error occurred. Please try again later.');
            });
        } else {
            // If the form is not valid, display an error message or take other actions as needed.
            alert('Please fill out all required fields correctly.');
        }
    });
});
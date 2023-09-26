document.addEventListener('DOMContentLoaded', function () {
    // Get the form element
    const form = document.querySelector('.contact-form');

    // Add an event listener for form submission
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission

        // Get form data
        const formData = new FormData(form);

        // Check if the form is valid
        if (form.checkValidity()) {
            // Define the API endpoint URL (replace with your actual API URL)
            const apiUrl = 'https://getlinked-pre-hack.vercel.app/contact.html';

            // Make a POST request to the API
            fetch(apiUrl, {
                method: 'POST',
                body: formData,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                // Handle the API response here (e.g., show a success message)
                console.log(data); // You can log the response for debugging
                alert('Form submitted successfully!'); // Display a success message
            })
            .catch(error => {
                // Handle errors (e.g., show an error message)
                console.error('Error:', error);
                alert('An error occurred. Please try again later.');
            });
        } else {
            // If the form is not valid, display an error message or take other actions as needed.
            alert('Please fill out all required fields correctly.');
        }
    });
});

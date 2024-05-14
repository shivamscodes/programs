$(document).ready(function(){
    $('#signupForm').submit(function(e){
        e.preventDefault(); // Prevent form submission
        // Perform form validation here if needed

        // Assuming the form is valid, you can show the success message
        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'You have successfully signed up.',
            showConfirmButton: false,
            timer: 1500 // Close after 1.5 seconds
        });

        // Here you can add AJAX to submit the form data to the server if needed
        // Example:
        // $.ajax({
        //     url: 'your_backend_endpoint',
        //     type: 'POST',
        //     data: $(this).serialize(),
        //     success: function(response) {
        //         // Handle success response from the server
        //     },
        //     error: function(xhr, status, error) {
        //         // Handle error response from the server
        //     }
        // });

        // Optionally, reset the form after successful submission
        this.reset();
    });
});

document.getElementById("dob").addEventListener("change", function () {
    const dob = new Date(this.value);
    const age = new Date().getFullYear() - dob.getFullYear();
    if (document.getElementById("age")) {
        document.getElementById("age").value = age;
    }
});

document.getElementById("signupForm").addEventListener("submit", function (e) {
    const dob = new Date(document.getElementById("dob").value);
    const age = new Date().getFullYear() - dob.getFullYear();
    if (age < 18) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid Age',
            text: 'You must be 18 or older to sign up.'
        });
        e.preventDefault();
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Signed Up!',
            text: 'You have successfully signed up.'
        });
        e.preventDefault();  // prevent page refresh or actual submission
    }
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
    Swal.fire({
        icon: 'success',
        title: 'Logged In!',
        text: 'You have successfully logged in.'
    });
    e.preventDefault();  // prevent page refresh or actual submission
}); 
const button = document.getElementById('submit-button');
button.addEventListener('click', function() {
})

function validateFullName() {
    const firstname= document.getElementById('firstname');
    const lastname= document.getElementById('lastname');
    const fullNameError = document.getElementById('full-name-error');
     const fullName = firstname.value.trim() + ' ' + lastname.value.trim();
    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    const gender = document.getElementById('gender').value;
    const genderError = document.getElementById('gender-error');
    const pasword = document.getElementById('password');
    const passwordError = document.getElementById('password-error');
    const confirmPassword = document.getElementById('confirm-password');
    const confirmPasswordError = document.getElementById('confirm-password-error');
    const dateOfBirth = document.getElementById('event-date');
    const dateOfBirthError = document.getElementById('date-of-birth-error');
    const createAccountButton = document.getElementById('submit-button');
    const form = document.getElementById('registration-form');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const dateOfBirthValue = new Date(dateOfBirth.value);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - dateOfBirthValue.getFullYear();

    if (fullName === '' || email=== '' || phone === '' || gender === '' || pasword === '' || confirmPassword === '' || dateOfBirth === '') {
        fullNameError.textContent = 'Please fill in all fields.';
        return false;
    } else if (!nameRegex.test(fullName)) {
        fullNameError.textContent = 'Please enter a valid full name.';
        return false;
    }
    
}

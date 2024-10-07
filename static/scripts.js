document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const contact = document.getElementById('contact').value;
    const email = document.getElementById('email').value;

    // For demonstration purposes, we will log the data to the console.
    console.log('Patient Details:');
    console.log('Name:', name);
    console.log('Age:', age);
    console.log('Gender:', gender);
    console.log('Contact:', contact);
    console.log('Email:', email);

    alert('Registration successful!');

    // Reset the form
    document.getElementById('registrationForm').reset();
});

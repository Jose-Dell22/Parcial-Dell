document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario para realizar las validaciones
    
    validarFormulario();
});

function validarFormulario() {
    let valido = true;

    // Nombre
    const firstName = document.getElementById('first-name').value;
    const regexNombre = /^[A-Z][a-zA-Z\s]{2,14}$/;
    if (!regexNombre.test(firstName)) {
        document.getElementById('errorFirstName').textContent = 'El nombre debe empezar con una letra mayúscula, contener solo letras y espacios, y tener entre 3 y 15 caracteres.';
        document.getElementById('errorFirstName').style.display = 'block';
        valido = false;
    } else {
        document.getElementById('errorFirstName').style.display = 'none';
    }

    // Apellidos
    const lastName = document.getElementById('last-name').value;
    if (!regexNombre.test(lastName)) {
        document.getElementById('errorLastName').textContent = 'El apellido debe empezar con una letra mayúscula, contener solo letras y espacios, y tener entre 3 y 15 caracteres.';
        document.getElementById('errorLastName').style.display = 'block';
        valido = false;
    } else {
        document.getElementById('errorLastName').style.display = 'none';
    }

    // Email
    const email = document.getElementById('email').value;
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regexEmail.test(email)) {
        document.getElementById('errorEmail').textContent = 'Introduce un correo electrónico válido en el formato algo@gmail.com.';
        document.getElementById('errorEmail').style.display = 'block';
        valido = false;
    } else {
        document.getElementById('errorEmail').style.display = 'none';
    }

    // Teléfono
    const phone = document.getElementById('phone').value;
    const regexPhone = /^[0-9]{10}$/;
    if (!regexPhone.test(phone)) {
        document.getElementById('errorPhone').textContent = 'Introduce un número de teléfono válido de 10 dígitos.';
        document.getElementById('errorPhone').style.display = 'block';
        valido = false;
    } else {
        document.getElementById('errorPhone').style.display = 'none';
    }

    // Fecha de Nacimiento
    const dob = document.getElementById('dob').value;
    if (!dob) {
        document.getElementById('errorDob').textContent = 'Por favor, selecciona una fecha de nacimiento.';
        document.getElementById('errorDob').style.display = 'block';
        valido = false;
    } else {
        document.getElementById('errorDob').style.display = 'none';
    }

    // Estrato
    const estrato = document.getElementById('estrato').value;
    if (estrato < 1 || estrato > 6) {
        document.getElementById('errorEstrato').textContent = 'El estrato debe estar entre 1 y 6.';
        document.getElementById('errorEstrato').style.display = 'block';
        valido = false;
    } else {
        document.getElementById('errorEstrato').style.display = 'none';
    }

    // Grupo Sanguíneo
    const bloodGroup = document.getElementById('blood-group').value;
    if (!bloodGroup) {
        document.getElementById('errorBloodGroup').textContent = 'Por favor, selecciona un grupo sanguíneo.';
        document.getElementById('errorBloodGroup').style.display = 'block';
        valido = false;
    } else {
        document.getElementById('errorBloodGroup').style.display = 'none';
    }

    // Género
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        document.getElementById('errorGender').

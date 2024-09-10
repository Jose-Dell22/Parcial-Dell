document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();

        if (validarLogin()) {
            alert('Login exitoso. Redirigiendo a la selección de cursos...');
            window.location.href = 'cursos.html';
        }
    });

    function validarLogin() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const validUsername = 'Dell';
        const validPassword = '12345678';

        if (username === validUsername && password === validPassword) {
            return true;
        } else {
            alert('Credenciales inválidas.');
            return false;
        }
    }
});

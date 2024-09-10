let currentIndex = 0;
const images = [
    '../images/img_1.jpg',
    '../images/img_2.jpg',
    '../images/img_3.jfif',
    '../images/img_4.jpg',
    '../images/img_5.jfif'
];

function changeImage(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    document.getElementById('gallery-image').src = images[currentIndex];
    updateProgressDots(); // Actualiza los indicadores de progreso
}

function updateProgressDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function cambiarTexto() {
    const textElement = document.getElementById('text');
    const textoInicial = 'Lorem ipsum dolor sit amet consectetur adipiscing elit conubia potenti, aliquet felis eu netus augue sociis curae eleifend a, urna rhoncus primis cum hendrerit taciti hac nisl. Netus bibendum quis sodales fusce natoque quam scelerisque varius sapien aliquam curae diam feugiat, hendrerit risus taciti orci magna ultrices dictum duis nascetur morbi id dis. Aenean vehicula rutrum enim mattis sociosqu orci euismod ac imperdiet, tortor nulla dictumst nunc morbi proin eros.<br><br>Litora urna porttitor mi et nibh scelerisque venenatis senectus netus cursus, pretium dictumst curae ut maecenas tellus in feugiat. Natoque nisi rhoncus est faucibus, enim aliquet pharetra massa, mi donec lectus. Facilisis libero hac montes placerat quam conubia sociosqu enim tristique, phasellus lectus vehicula fusce auctor bibendum ligula malesuada laoreet, tempor aptent vivamus taciti vitae per posuere nec.';
    const textoCambiado = '¡Hola mundo!';

    if (textElement.innerHTML.trim() === textoInicial) {
        textElement.innerHTML = textoCambiado;
    } else {
        textElement.innerHTML = textoInicial;
    }
}

function cambiarColor() {
    if (colorToggle) {
        document.body.style.backgroundColor = '#282c34';
        document.body.style.color = '#ffffff';
        colorToggle = false;
    } else {
        document.body.style.backgroundColor = '#ffffff';
        document.body.style.color = '#000000';
        colorToggle = true;
    }
}

let colorToggle = true;


document.addEventListener('DOMContentLoaded', () => {
    updateProgressDots();
});

//Js de los deslizamiento de las cajas registro y Inicio
const linkInicio = document.querySelector('.link-Inicio');
const linkRegistro = document.querySelector('.link-Registrar');
const cajaInicio = document.querySelector('.inicio');
const cajaRegistro = document.querySelector('.caja-larga');

linkInicio.addEventListener('click', () => {
    cajaInicio.classList.add('activate');
    cajaRegistro.classList.remove('activate');
});

linkRegistro.addEventListener('click', () => {
    cajaRegistro.classList.add('activate');
    cajaInicio.classList.remove('activate');
});


/*Js para validar que el usuario si o si tenga que elegir  una foto de perfil y al registrarse se guarde en el LocalStorage*/
document.addEventListener('DOMContentLoaded', () => {
    const imagenesPerfil = document.querySelectorAll('.imagen-perfil');
    const registroForm = document.getElementById('registro-Form');

    let fotoSeleccionada = '';

    // Verificamos que seleccione una foto de perfil 
    imagenesPerfil.forEach(imagen => {
        imagen.addEventListener('click', () => {
            // Marcar la imagen seleccionada
            imagenesPerfil.forEach(img => img.classList.remove('seleccionada'));
            imagen.classList.add('seleccionada');
            fotoSeleccionada = imagen.dataset.foto;
        });
    });

    // envio del formulario
    registroForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Recibir los datos del formulario 
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const email = document.getElementById('email').value;
        const contraseña = document.getElementById('contraseña').value;

        // Ver si se selecciono una foto
        if (!fotoSeleccionada) {
            alert('Debes seleccionar una foto de perfil.');
            return;
        }


        // Crear el usuario
        const usuario = {
            nombre,
            apellido,
            email,
            contraseña,
            foto: fotoSeleccionada
        };

        // Guardar en el localStorage
        localStorage.setItem('usuario', JSON.stringify(usuario));

        // Confirmar el  registro
        alert('Registro exitoso!');

        // Aquí puedes redirigir al usuario o limpiar el formulario
        registroForm.reset();
        fotoSeleccionada = ''; // Resetear la foto seleccionada
        imagenesPerfil.forEach(img => img.classList.remove('seleccionada'));
    });
});







    











    









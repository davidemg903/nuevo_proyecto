let nombre = prompt("Dime tu nombre");
alert(`Hola ${nombre} bienvenido!`);

function guardarDatos() {
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const datosCompletos = `Nombre: ${nombre}, Correo: ${correo}`;

    const contenido = new Blob([datosCompletos], { type: 'text/plain' });
    const enlaceDescarga = document.createElement('a');
    enlaceDescarga.href = URL.createObjectURL(contenido);
    enlaceDescarga.download = 'mis_datos.txt';
    enlaceDescarga.click();

    document.getElementById('nombre').value = '';
    document.getElementById('correo').value = '';
}


let botonCerrarModal = document.getElementById('CerrarModal');
document.addEventListener('DOMContentLoaded', function() {
    cargarProveedores();
    cargarMedicamentos();
});

if (botonCerrarModal) {
    botonCerrarModal.addEventListener('click', function () {
        cerrarModal();
    });
}

// Obtén el elemento select por su ID
var select = document.getElementById('dropdownProveedor');

if (select) {
    select.addEventListener('change', function () {
        abrirModal();
    });
}
var selectm = document.getElementById('dropdownMedicamento');

if (selectm) {
    selectm.addEventListener('change', function () {
        abrirModal();
    });
}
let inputFecha = document.getElementById('input-fecha');

if (inputFecha) {
    inputFecha.addEventListener('input', function () {
    abrirModal();
    });
}
var inputAnio9 = document.getElementById('inputAnio9');
inputAnio9.addEventListener('input', function () {
    validarAnio(inputAnio9);
});
var inputAnio15 = document.getElementById('inputAnio15');
inputAnio15.addEventListener('input', function () {
    validarAnio(inputAnio15);
});
var inputAnio18 = document.getElementById('inputAnio18');
inputAnio18.addEventListener('input', function () {
    validarAnio(inputAnio18);
});
var inputAnio24 = document.getElementById('inputAnio24');
inputAnio24.addEventListener('input', function () {
    validarAnio(inputAnio24);
});
function validarAnio(inputAnio) {
    var anio = inputAnio.value;
    if (anio.length === 4 && !isNaN(anio)) {
        abrirModal();
    } 
}


function cerrarModal() {
    // Obtiene el elemento modal por su id
    var modal = document.getElementById('staticBackdrop');

    // Cierra el modal
    if (modal) {
        modal.classList.remove('show');
        modal.style.display = 'none';
        var modalTitle = document.getElementById('TituloResultadoConsultaInventario');
        modalTitle.innerHTML = '';
        var modalBody = document.getElementById('resultadoConsultaInventario');
        modalBody.innerHTML = '';
    }
}

function abrirModal() {
    // Obtiene el elemento modal por su id
    var modal = document.getElementById('staticBackdrop');
    // Abre el modal
    if (modal) {
        modal.classList.add('show');
        modal.style.display = 'block';
    }
}

function cargarProveedores() {
    fetch('http://localhost:5115/api/farmacia/persona')
        .then(response => response.json()) // Parsear la respuesta JSON
        .then(data => {
            var proveedores = data.filter(proveedor => proveedor.rol.nombre == "Proveedor");
            var select = document.getElementById('dropdownProveedor');
            select.innerHTML = '';
            var optionDefault = document.createElement('option');
            optionDefault.textContent = 'Seleccione un proveedor';
            select.appendChild(optionDefault);
            proveedores.forEach(proveedor => {
                var option = document.createElement('option');
                option.value = proveedor.id; 
                option.textContent = proveedor.nombre; 
                select.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Error al cargar los proveedores:', error);
        });
}
function cargarMedicamentos() {
    fetch('http://localhost:5115/api/farmacia/descripcionMedicamento')
        .then(response => response.json()) // Parsear la respuesta JSON
        .then(data => {
            var Medicamentos = data;
            var selects = document.querySelectorAll('#dropdownMedicamento');

            selects.forEach(select => {
                select.innerHTML = '';
                var optionDefault = document.createElement('option');
                optionDefault.textContent = 'Seleccione un medicamento';
                select.appendChild(optionDefault);
                Medicamentos.forEach(medicamento => {
                    var option = document.createElement('option');
                    option.value = medicamento.id; 
                    option.textContent = medicamento.nombre; 
                    select.appendChild(option);
                });
            });
        })
        .catch(error => {
            console.error('Error al cargar los medicamentos:', error);
        });
}
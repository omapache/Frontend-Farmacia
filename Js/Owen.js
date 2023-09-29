function abrirModal() {
    // Obtiene el elemento modal por su id
    var modal = document.getElementById('staticBackdrop');

    // Abre el modal
    if (modal) {
        modal.classList.add('show');
        modal.style.display = 'block';
    }
}
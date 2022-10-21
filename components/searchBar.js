function buscarProducto() {
    const searchInput = document.querySelector('[data]');
    searchInput.addEventListener('input', e => {
        const value = e.target.value.toLowerCase();
        let i = 0
        listaProductos.forEach(product => {
            
            const existe = product.nombre.toLowerCase().includes(value) || product.descripcion.toLowerCase().includes(value)
            const card = document.getElementsByClassName('card')
                card[i].classList.toggle('hide',!existe)
            i++
        })
    })
}
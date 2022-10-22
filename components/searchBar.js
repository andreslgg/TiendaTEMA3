function buscarProducto() {
    const searchInput = document.querySelector('[data]');
    searchInput.addEventListener('input', e => {
        const value = e.target.value.toLowerCase();
        
        listaProductos.forEach(product => {
            let i = listaProductos.lastIndexOf(product)
            const existe = product.nombre.toLowerCase().includes(value) || product.descripcion.toLowerCase().includes(value)
            const card = document.getElementsByClassName('card')
                card[i].classList.toggle('hide',!existe)
            
        })
    })
}
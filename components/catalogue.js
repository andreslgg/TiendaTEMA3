function catalogo(numeroCatalogo) {
    const card = document.getElementsByClassName('card')
                listaProductos.forEach(product => {
                    let i = listaProductos.lastIndexOf(product)
            
                card[i].classList.toggle('hide',numeroCatalogo!=product.catalogo)
            
                    
                })
  
}


    
    
    
    document.addEventListener('DOMContentLoaded', () => {
        let carrito = (localStorage.getItem('carrito') == null) ? [] : JSON.parse(localStorage.carrito)
        const articulos = document.getElementById('articulos')
        
        let carritoSinDuplicados = [...new Set(carrito)];
        carritoSinDuplicados.forEach((item) => {
            // Obtenemos el item que necesitamos de la variable base de datos
            const miItem = listaProductos.filter((itemProductos) => {
                // ¿Coincide las id? Solo puede existir un caso
                return itemProductos.id === parseInt(item);
            });
            // Cuenta el número de veces que se repite el producto
            const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
                return itemId === item ? total += 1 : total;
            }, 0);
            
            const nodoFila = document.createElement('tr');


            const nodoNombre = document.createElement('td');
            nodoNombre.textContent = `${miItem[0].nombre}`
            
            const nodoPrecio = document.createElement('td');
            nodoPrecio.textContent = `$${miItem[0].precio}`

            const nodoCantidad = document.createElement('td');
            nodoCantidad.textContent = `${numeroUnidadesItem}`;

            let total = miItem[0].precio*numeroUnidadesItem;
            const nodoTotal = document.createElement('td');
            nodoTotal.textContent = total; 


          



            nodoFila.appendChild(nodoNombre);
            nodoFila.appendChild(nodoCantidad);
            nodoFila.appendChild(nodoPrecio);
            nodoFila.appendChild(nodoTotal);
            
            
            // Mezclamos nodos
            articulos.appendChild(nodoFila);
        });
        
        nodoSubtotal = document.getElementById('subtotal')
        nodoIVA = document.getElementById('iva')
        nodoTotal = document.getElementById('total')


        const comas = Intl.NumberFormat('en-US');

        const subtotal = calcularSubTotal();
        nodoSubtotal.textContent = "SUBTOTAL: "+ comas.format(subtotal)
        
        
        let iva= subtotal * 0.16;
        nodoIVA.textContent = "IVA 16%: "+ comas.format(iva)

        let total= (subtotal + iva);
        nodoTotal.textContent = "TOTAL A PAGAR: "+comas.format(total);

        function calcularSubTotal() {
            // Recorremos el array del carrito 
            return carrito.reduce((total, item) => {
                // De cada elemento obtenemos su precio
                const miItem = listaProductos.filter((itemProductos) => {
                    return itemProductos.id === parseInt(item);
                });
                // Los sumamos al total
    
                return total + miItem[0].precio;
            }, 0);
        }
    
    })

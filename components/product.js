document.addEventListener('DOMContentLoaded', () => {
    // Variables
    const productos = [
        {
            id: 1,
            nombre: 'Laptop de trabajo',
            precio: 8000,
            imagen: './assets/laptop.png'
        },
        {
            id: 2,
            nombre: 'Computadora de gama alta',
            precio: 32000,
            imagen: './assets/pc.png'
        },
        {
            id: 3,
            nombre: 'Memorias RAM 8GB',
            precio: 1200,
            imagen: './assets/ram8gb.png'
        },
        {
            id: 4,
            nombre: 'Disco de estado solido 1TB',
            precio: 1400,
            imagen: './assets/disco1tb.png'
        },
        {
            id: 5,
            nombre: 'Computadora de gama media',
            precio: 24000,
            imagen: './assets/pcmid.png'
        },
        {
            id: 6,
            nombre: 'Memorias RAM 4GB',
            precio: 400,
            imagen: './assets/ram4gb.png'
        },
        {
            id: 7,
            nombre: 'Disco de estado solido 500GB',
            precio: 800,
            imagen: './assets/disco500gb.png'
        },
        {
            id: 8,
            nombre: 'Computadora de gama baja',
            precio: 800,
            imagen: './assets/pclow.png'
        },
        {
            id: 9,
            nombre: 'Laptop de gama alta',
            precio: 35000,
            imagen: './assets/laptophigh.png'
        },
        {
            id: 10,
            nombre: 'Tarjeta grafica Nvidia 4090',
            precio: 30000,
            imagen: './assets/4090.png'
        },

    ];

    let carrito = [];
    const divisa = '$';
    const DOMitems = document.querySelector('#items');
    const DOMcarrito = document.querySelector('#carrito');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');

    function renderizarProductos() {
        productos.forEach((info) => {
            // Estructura
            const nodo = document.createElement('div');
            nodo.classList.add('card');
            // Body
            const nodoCardBody = document.createElement('div');
            nodoCardBody.classList.add('card-body');
            // Titulo
            const nodoTitle = document.createElement('h5');
            nodoTitle.classList.add('card-title');
            nodoTitle.textContent = info.nombre;
            // Imagen
            const nodoImagen = document.createElement('img');
            nodoImagen.classList.add('img-card');
            nodoImagen.setAttribute('src', info.imagen);
            // Precio
            const nodoPrecio = document.createElement('p');
            nodoPrecio.classList.add('card-text');
            nodoPrecio.textContent = `${divisa}${info.precio}`;
            // Boton 
            const nodoBoton = document.createElement('button');
            nodoBoton.classList.add('btn-add');
            nodoBoton.setAttribute('marcador', info.id);
            nodoBoton.addEventListener('click', añadirProductoAlCarrito);
            // Insertamos
            nodoCardBody.appendChild(nodoImagen);
            nodoCardBody.appendChild(nodoTitle);
            nodoCardBody.appendChild(nodoPrecio);
            nodoCardBody.appendChild(nodoBoton);
            nodo.appendChild(nodoCardBody);
            DOMitems.appendChild(nodo);
        });
    }

    //Evento para añadir un producto al carrito de la compra
    
    function añadirProductoAlCarrito(evento) {
        carrito.push(evento.target.getAttribute('marcador'))
        // Actualizamos el carrito 
        renderizarCarrito();

    }

    //Dibuja todos los productos guardados en el carrito
    
    function renderizarCarrito() {
        // Vaciamos todo el html
        DOMcarrito.textContent = '';
        // Quitamos los duplicados
        const carritoSinDuplicados = [...new Set(carrito)];

        //Creamos la tabla que contiene los datos
        //table
        const nodoTabla = document.createElement('table');
        //caption
        const nodoCaption = document.createElement('caption')
        nodoCaption.textContent = ("Carrito de compras")

        //thead
        const nodoThead = document.createElement('thead')
        //tr
        const nodoTr = document.createElement('tr');

        //th
        const nodoColumna1 = document.createElement('th');
        nodoColumna1.setAttribute('scope', 'col')
        nodoColumna1.textContent = `imagen`
        const nodoColumna2 = document.createElement('th');
        nodoColumna2.setAttribute('scope', 'col')
        nodoColumna2.textContent = `Cantidad`
        const nodoColumna3 = document.createElement('th');
        nodoColumna3.setAttribute('scope', 'col')
        nodoColumna3.textContent = `Precio`
        const nodoColumna4 = document.createElement('th');
        nodoColumna4.setAttribute('scope', 'col')
        nodoColumna4.textContent = `Nombre`
        const nodoColumna5 = document.createElement('th');
        nodoColumna5.setAttribute('scope', 'col')
        nodoColumna5.textContent = `Accion`

        //tbody
        const nodoTbody = document.createElement('tbody')

        //insertamos todos los nodos dentro de la tabla
        nodoTabla.appendChild(nodoCaption)
        nodoTabla.appendChild(nodoThead)
        nodoThead.appendChild(nodoTr)
        nodoTr.appendChild(nodoColumna1)
        nodoTr.appendChild(nodoColumna2)
        nodoTr.appendChild(nodoColumna3)
        nodoTr.appendChild(nodoColumna4)
        nodoTr.appendChild(nodoColumna5)
        nodoTabla.appendChild(nodoTbody)

        // Generamos los Nodos a partir de carrito
        carritoSinDuplicados.forEach((item) => {
            // Obtenemos el item que necesitamos de la variable base de datos
            const miItem = productos.filter((itemProductos) => {
                // ¿Coincide las id? Solo puede existir un caso
                return itemProductos.id === parseInt(item);
            });
            // Cuenta el número de veces que se repite el producto
            const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
                return itemId === item ? total += 1 : total;
            }, 0);

            //Nodo para poner imagen
            const nodoImg = document.createElement('img');
            nodoImg.classList.add('img-card-s');
            nodoImg.setAttribute('src', miItem[0].imagen);

            //Nodos para poner botones
            const nodoBotonB = document.createElement('button');
            nodoBotonB.classList.add('btn-borrar');
            nodoBotonB.dataset.item = item;
            nodoBotonB.addEventListener('click', borrarItemCarrito);

            const nodoBotonA = document.createElement('button');
            nodoBotonA.classList.add('btn-agregar');
            nodoBotonA.setAttribute('marcador', item);
            nodoBotonA.dataset.item = item;
            nodoBotonA.addEventListener('click', agregarItemCarrito);

            const nodoBotonR = document.createElement('button');
            nodoBotonR.classList.add('btn-restar');
            nodoBotonR.setAttribute('marcador', item);
            nodoBotonR.dataset.item = item;
            nodoBotonR.addEventListener('click', restarItemCarrito);

            //Nodos de las filas
            const nodoFilaX = document.createElement('tr');
            const nodoImagen = document.createElement('td');
            nodoImagen.setAttribute('scope', 'row');
            nodoImagen.setAttribute('data-label', 'imagen');

            nodoImagen.appendChild(nodoImg)
            const nodoCantidad = document.createElement('td');
            nodoCantidad.setAttribute('data-label', 'cantidad');

            nodoCantidad.textContent = `${numeroUnidadesItem}`;
            const nodoPrecio = document.createElement('td');
            nodoPrecio.setAttribute('data-label', 'precio');

            nodoPrecio.textContent = `$${miItem[0].precio}`
            const nodoNombre = document.createElement('td');
            nodoNombre.setAttribute('data-label', 'nombre');
            nodoNombre.textContent = `${miItem[0].nombre}`;
            const nodoBotones = document.createElement('td');
            nodoBotones.setAttribute('data-label', 'accion');


            nodoBotones.appendChild(nodoBotonA);
            nodoBotones.appendChild(nodoBotonR);
            nodoBotones.appendChild(nodoBotonB);

            nodoFilaX.appendChild(nodoImagen);
            nodoFilaX.appendChild(nodoCantidad);
            nodoFilaX.appendChild(nodoPrecio);
            nodoFilaX.appendChild(nodoNombre);
            nodoFilaX.appendChild(nodoBotones);



            // Mezclamos nodos
            nodoTbody.appendChild(nodoFilaX);
            DOMcarrito.appendChild(nodoTabla);
        });
        // Renderizamos el precio total en el HTML
        DOMtotal.textContent = calcularTotal();
    }

    //Funcion +1
    function agregarItemCarrito(evento) {
        carrito.push(evento.target.getAttribute('marcador'))

        // volvemos a renderizar
        renderizarCarrito();
    }

    //Funcion -1
    function restarItemCarrito(evento) {
        const id = evento.target.getAttribute('marcador')
        const index = carrito.indexOf(id);
        if (index > -1) { 
            carrito.splice(index, 1); 
        }

        renderizarCarrito();
    }
    
    // Evento para borrar un elemento del carrito
    
    function borrarItemCarrito(evento) {
        // Obtenemos el producto ID que hay en el boton pulsado
        const id = evento.target.dataset.item;
        // Borramos todos los productos
        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });
        // volvemos a renderizar
        renderizarCarrito();
    }

    //Calcula el precio total teniendo en cuenta los productos repetidos
     
    function calcularTotal() {
        // Recorremos el array del carrito 
        return carrito.reduce((total, item) => {
            // De cada elemento obtenemos su precio
            const miItem = productos.filter((itemProductos) => {
                return itemProductos.id === parseInt(item);
            });
            // Los sumamos al total

            return total + miItem[0].precio;
        }, 0).toFixed(2);
    }

     //Vacia el carrito y vuelve a dibujarlo
    
    function vaciarCarrito() {
        // Limpiamos los productos guardados
        carrito = [];
        // Renderizamos los cambios
        renderizarCarrito();
    }

    // Eventos
    DOMbotonVaciar.addEventListener('click', vaciarCarrito);

    // Inicio
    renderizarProductos();
    renderizarCarrito();
});
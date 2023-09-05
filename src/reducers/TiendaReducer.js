import React from 'react';

const estadoInicial = {
    productos: 
    [
        { id: 1, nombre: "Producto 1" },
        { id: 2, nombre: "Producto 2" },
        { id: 3, nombre: "Producto 3" },
        { id: 4, nombre: "Producto 4"}
    ],
    
    carrito:
    [
    ]
}




const reducer = (estado = estadoInicial, accion) => {
   switch (accion.type) {
    case 'AGREGAR_PRODUCTO_AL_CARRITO':

        const {nombre, idProductoAAgregar} = accion;
        
        if(estado.carrito.length === 0){
            return {
                ...estado, 
                carrito: [{id: idProductoAAgregar, nombre: nombre, cantidad: 1}]
            }
        } else {
            // debemos clonar el carrito para editarlo
            const nuevoCarrito = [...estado.carrito];
            // comprobamos si el carrito ya tiene el ID del producto a agregar
            const yaEstaEnCarrito = nuevoCarrito.filter((productoDeCarrito) => {
                return productoDeCarrito.id === idProductoAAgregar
            }).length > 0;

            //si ya esta el producto se debe actualizar
            if (yaEstaEnCarrito) {
                nuevoCarrito.forEach((productoDeCarrito, index) => {
                    if (productoDeCarrito.id === idProductoAAgregar) {
                        const cantidad = nuevoCarrito[index].cantidad;
                        // modificamos carrito
                        nuevoCarrito[index] = { id: idProductoAAgregar, nombre: nombre, cantidad: cantidad + 1 }
                    }
                })
                // si no esta en carrito
            } else {
                nuevoCarrito.push({ id: idProductoAAgregar, nombre: nombre, cantidad: 1 })
            }


            return {
                ...estado,
                carrito: nuevoCarrito
            }

        }
        
       default:
           return estado;
   }

}

//{type: 'AGREGAR_PRODUCTO_AL_CARRITO'}

export default reducer;
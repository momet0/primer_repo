let carrito = {
  total: 10,
  productos: [
      {
          nombre: 'leche',
          precio: 2,
          unidades: 5
      }
  ]
}

function agregarProducto(nombre, precio, unidades) {
  carrito.productos.push({
    nombre: nombre,
    precio : precio,
    unidades : unidades
  })
  carrito.total += precio * unidades

}
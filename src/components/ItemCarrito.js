import React, {Fragment} from 'react';


const ItemCarrito = ({carrito}) => {
    return (

        <Fragment>
            <div className="row" key={carrito.id}>
                <div className="one-half column">
                    <label>Nombre Producto:</label>
                    <p>{carrito.nombre}</p>
                </div>
                <div className="one-half column">
                    <label>Nombre Cantidad:</label>
                    <p>{carrito.cantidad}</p>
                </div>
                <label>Precio : $ {carrito.precio}</label>
            </div>
        </Fragment>
      );



}
 
export default ItemCarrito;
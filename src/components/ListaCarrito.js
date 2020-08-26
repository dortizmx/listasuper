import React, {Fragment, useState} from 'react';

import ItemCarrito from './ItemCarrito';

const ListaCarrito = ({carrito}) => {
    return (  
        <Fragment>
        <h2>Carrito compras</h2>
        {
            carrito.map((carr) => (
                <ItemCarrito 
                    key={carr.id}
                    carrito = {carr}
                />
            ))
        }
        
        </Fragment>

    );
}
 
export default ListaCarrito;
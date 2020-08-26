import React, {Fragment} from 'react';

const ItemProducto = ({producto, pasaacarrito}) => {

    
    //const {nombre, cantidad, precio} = producto;
    return ( 
        <Fragment>
            <div className="row" key={producto.id}>
                <div className="one-half column">
                    <label>Nombre Producto:</label>
                    <p>{producto.nombre}</p>
                </div>
                <div className="one-half column">
                    <label>Cantidad:</label>
                    <p>{producto.cantidad}</p>
                </div>
                <button
                    type="button"
                    className = "btn btn-block btn-primary"
                    onClick={() => pasaacarrito(producto)}
                >
                Agrega a Carrito
                </button>
                
            </div>
            
        </Fragment>
        
     );
}
 
export default ItemProducto;
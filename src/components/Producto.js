import React, {Fragment, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Error from './Error';

const Producto = ({agregaProducto}) => {
    
    const [error, guardaError] = useState(false);
    const [errmensaje, guardaErrMensaje] = useState('');
    const [producto, guardaProducto] = useState({
    nombre : "",
    cantidad : 0.0,
    precio : 0
    });

    const handleChange = (e)=>{
        guardaProducto({
            ...producto,
            [e.target.name] : e.target.value
        });
    }

    const submitProducto = (e)=>{
        e.preventDefault();
        if(producto.nombre.trim() === ''){
            guardaError(true);
            guardaErrMensaje('Debe definir un nombre');
            return;
        }
        if(producto.cantidad <= 0 || isNaN(producto.cantidad)){
            guardaError(true);
            guardaErrMensaje("La Cantidad debe ser mayor a 0");
            return;
        }
        guardaError(false);
        guardaErrMensaje('');
        producto.id = uuidv4();
        agregaProducto(producto);
        guardaProducto({
            id : "",
            nombre : '',
            cantidad : 0,
            precio : 0
        });
        
    }

    return (
        <Fragment>
            <h2>Agrega Productos</h2>
            { error ?  <Error mensaje={errmensaje}/>: null} 
            <form>
                <label>Producto</label>
                <input 
                    type="text"
                    className = "u-full-width"
                    placeholder="Nombre Producto"
                    name = "nombre"
                    value = {producto.nombre}
                    onChange = {handleChange}
                />
                <label>Cantidad</label>
                <input 
                    type="number"
                    className = "u-full-width"
                    placeholder="Cantidad Producto"
                    name = "cantidad"
                    value = {producto.cantidad}
                    onChange = {handleChange}
                />
                <input 
                type="button" 
                className = "button-primary u-full-width"
                value ="Agrega Producto" 
                onClick={submitProducto}         
                />
            </form>
        </Fragment>
      );
}
 
export default Producto;
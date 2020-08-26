import React, {Fragment, useState} from 'react';
import Error from './Error';


const Pregunta = ({  guardarPresupuesto, guardarRestante}) => {

    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);
    const definirPresupuesto = (e)=>{
        let _cantidad = parseInt(e.target.value);
        if(isNaN(_cantidad)) {
          guardarCantidad("");
          return;  
        }
        guardarCantidad(_cantidad);
    }

    const agregarPresupuesto = (e) => {
        e.preventDefault();
        
        if(cantidad < 1 || isNaN(cantidad)){
            guardarError(true);
            return;
        }

        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        guardarCantidad(0);
    }

    return ( 
        <Fragment>
            <h2>Define tu Presupuesto</h2>
            { error ?  <Error mensaje="Presupuesto no valido"/>: null} 
            <form>
                <label>Cantidad</label>
                <input 
                    type="number"
                    className = "u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                    value = {cantidad}
                />
                <input 
                type="button" 
                className = "button-primary u-full-width"
                value ="Agrega tu Presupuesto" 
                onClick={agregarPresupuesto}        
                />
            </form>   
        </Fragment>

     );
}
export default Pregunta;
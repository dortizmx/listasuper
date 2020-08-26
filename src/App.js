import React, { Fragment, useState }from 'react';
import Pregunta from './components/Pregunta';
import Producto from './components/Producto';
import ListaProductos from './components/ListaProductos';
import ListaCarrito from './components/ListaCarrito';
import Error from './components/Error';



function App() {

  const  [presupuesto, guardarPresupuesto] = useState(0);
  const  [restante, guardarRestante] = useState(0);
  const  [productos, guardarProductos] = useState([]);
  const  [carrito, guardaCarrito] = useState([]);
  const  [isPresupuesto, guardaIsPresupuesto] = useState(false);
  const  [muestraPresupuesto, guardaMuestraPresupuesto] = useState(false);
  const  [error, guardaError] = useState(false);

  const agregaProducto = (producto)=>{
    guardarProductos([...productos,producto]);
  }

  const agregaCarrito = (carr) =>{
    if((presupuesto === 0 || isNaN(presupuesto ))){
      guardaError(true);
      return;
    }
    guardaError(false);
    guardaCarrito([...carrito, carr]);
    let _prods = productos.filter(prod => prod.id !== carr.id);
    let _restante = restante;
    
    guardarProductos(_prods);
    _restante = _restante - (parseInt(carr.precio) * parseInt(carr.cantidad));
    console.log(_restante);
    guardarRestante(_restante);
  }

  const changeMenu = ()=>{
    guardaIsPresupuesto(!isPresupuesto);
  }

  return (
    <Fragment>
      <div className="container">
        { error ? <Error mensaje="Debes definir un presupuesto"/> : null}
        <header>
          <h1>Lista del Supermercado</h1>
          <div className="contenido-principal contenido">
          <div className="row">
                <div className="one-half column">
                  <input
                    type="button"
                    className = "button-primary u-full-width"
                    value="Agrega Presupuesto"
                    onClick={changeMenu}
                  />
                </div>
                <div className="one-half column">
                  <input
                    type="button" 
                    className= "button-primary u-full-width"
                    value="Agrega Productos"
                    onClick={changeMenu}
                  />
                </div>
              </div>
          { isPresupuesto ?
            <Pregunta 
            guardarPresupuesto={guardarPresupuesto}
            guardarRestante = {guardarRestante}
            />
            :
            <Producto agregaProducto = {agregaProducto}/>

          }
          <div className="row">
            {
              presupuesto <= 0 ? 
                null 
                :
                <div className="row">
                  <div className="one-half column"><label>Presupuesto: </label> <p>{presupuesto}</p></div>
                  <div className="one-half column"><label>Restante: </label> <p>{restante}</p></div>
                </div>
            }
          </div>

              <div className="row">
                <div className="one-half column">
                  <ListaProductos 
                  productos={productos}
                  agregaCarrito = {agregaCarrito}
                  />
                </div>
                <div className="one-half column">
                  <ListaCarrito
                    carrito = {carrito}
                    
                  />
                </div>
              </div>
          </div>

        </header>
        
      </div>
      
    </Fragment>
  );
}

export default App;

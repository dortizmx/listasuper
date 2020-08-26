import React, {Fragment, useState} from 'react';
import ItemProducto from './ItemProducto';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Error from './Error';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));


const ListaProductos = ({productos, agregaCarrito}) => {

    const [modalStyle ] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const [productomodal, setProductoModal] = useState({});
    const [error, setError] = useState(false);
    const classes  = useStyles();
    
    const {cantidad , precio, nombre} = productomodal;

    const handleOpen = ()=>{
        setOpen(true);
    }

    const handleClose = ()=>{
        setOpen(false);
    }

    const pasaacarrito = (producto)=>{
        setProductoModal(producto);
        handleOpen();

    }

    const handleCantidad = e =>{
        setProductoModal({
            ...productomodal,
            [e.target.name] : e.target.value
        });

    }
    const addCarrito = ()=> {
        if(productomodal.precio <= 0){
            setError(true);
            return;
        }
        setError(false);
        agregaCarrito(productomodal);
        handleClose();
    }

    return (  
        <Fragment>
        <h2>Lista del Super</h2>
        {
            productos.map((producto) => (
                <ItemProducto 
                    key={producto.id}
                    producto = {producto}
                    pasaacarrito = {pasaacarrito}
                    
                />
            ))
        }
        <Modal
            open={open}
            onClose={()=>{handleClose()}}
        >
            <div style={modalStyle} className={classes.paper}> 
                { error ? <Error mensaje="Debe escribir un precio o cantidad"/> : null}
                <h2>{productomodal.nombre}</h2>
                <div className="row">
                    <div className="one-half column">
                    <label>Cantidad</label>
                    <input 
                        type="number"
                        className="u-full-width"
                        placeholder="Cantidad"
                        name = "cantidad"
                        value = {cantidad}
                        onChange={handleCantidad}
                    />
                    
                    </div>
                    <div className="one-half column">
                    <label>Precio</label>
                        <input 
                        type="number"
                        className="u-full-width"
                        placeholder="Precio"
                        name = "precio"
                        value = {precio}
                        onChange={handleCantidad}
                        />
                    </div>
                </div>
                <div className="row">
                    <button
                        type="button"
                        className="u-full-width"
                        onClick={addCarrito}
                    >
                    Pasar al Carrito
                    </button>
                </div>
            </div>
        </Modal >
        </Fragment>
        
    );
}
 
export default ListaProductos;
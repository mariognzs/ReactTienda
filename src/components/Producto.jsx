import React, { useState } from "react";

function Producto({ nombre, precio, setPrecioTotal, srcLink, descripcion, setObj }) {
  const [cantidad, SetCantidad] = useState(0);
  const modificarCantidad = (e) => {
    SetCantidad(e.target.value);
  };

  var obj = {};
  const anadirCantidad = () => {
    setPrecioTotal((total) => total + precio * cantidad);
    obj = {nombre: nombre, precio: precio, img: srcLink}
    setObj(obj)
  };
  
  return (
    <div className="card m-5" style={{ width: "18rem" }}>
      <img src={srcLink} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h3 className="card-title">{nombre}</h3>
        <h5>{precio}€</h5>
        <p style={{ textAlign: "justify" }}>{descripcion}</p>
      </div>
      <div className="card-footer">
        <div className="input-group">
        <input
          className="form-control"
          type="number"
          value={cantidad}
          onChange={modificarCantidad}
        />
        <span className="input-group-text">{precio*cantidad} €</span>
        </div>
        <div className="d-grid gap-2">
        <button className="btn btn-outline-dark mt-2" onClick={anadirCantidad}>
          Añadir al carrito
        </button>
        </div>
      </div>
    </div>
    
  );
}
export default Producto;

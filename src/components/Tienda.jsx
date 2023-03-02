import Producto from "./Producto";
import { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
var lista = [];
function Tienda() {
  const [precioTotal, SetPrecioTotal] = useState(0);
  const [obj, setObj] = useState({});
  
  
  lista.push(obj);

  const reiniciarCarrito = () => {
    SetPrecioTotal(0);
    lista = [];
    listaLi = [];
  };

  const borrarElemento = (i) => {
    let pos = i;
    listaLi.splice(pos, 1);
    listaLi.splice(pos, 1);
  };

  let listaLi = [];
  for (let i = 0; i < lista.length; i++) {
    listaLi.push(
      <tr>
        <td scope="row">
          <img src={lista[i].img} style={{ width: "50px" }} />
        </td>
        <td>{lista[i].nombre}</td>
        <td>{lista[i].precio}€</td>
        <td>
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={borrarElemento}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/542/542724.png"
              width={25}
            />
          </button>
        </td>
      </tr>
    );
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="container text-center">
            <div className="row">
              <div className="col-3 me-5">
                <Producto
                  srcLink="https://i0.wp.com/relentless-off.com/wp-content/uploads/2022/09/art1.png?resize=600%2C600&ssl=1"
                  nombre="Be Relentless Tee"
                  precio={20}
                  descripcion="Logo delante y “BE RELENTLESS” detrás."
                  setPrecioTotal={SetPrecioTotal}
                  setObj={setObj}
                />
              </div>
              <div className="col-3 me-5">
                <Producto
                  srcLink="https://i0.wp.com/relentless-off.com/wp-content/uploads/2022/12/Post-de-Instagram-joyeria-accesorios-tienda-venta-aretes-collar-beige-.png?resize=600%2C600&ssl=1"
                  nombre="Moon Hoodie"
                  precio={35}
                  descripcion="Sudadera Moon Hoodie, perfecta para llegar hasta el infinito."
                  setPrecioTotal={SetPrecioTotal}
                  setObj={setObj}
                />
              </div>
              <div className="col-3">
                <Producto
                  srcLink="https://i0.wp.com/relentless-off.com/wp-content/uploads/2022/09/art3.png?resize=600%2C600&ssl=1"
                  nombre="Progress Tee"
                  precio={20}
                  descripcion="Progress is the key, el progresso es la clave"
                  setPrecioTotal={SetPrecioTotal}
                  setObj={setObj}
                />
              </div>
              <div className="row">
                <div className="col-3 me-5">
                  <Producto
                    srcLink="https://i0.wp.com/relentless-off.com/wp-content/uploads/2022/09/art2.png?resize=600%2C600&ssl=1"
                    nombre="Unstoppable Tee"
                    precio={20}
                    descripcion="Los límites son para gente limitada. “F#ck their limits”."
                    setPrecioTotal={SetPrecioTotal}
                    setObj={setObj}
                  />
                </div>
                <div className="col-3 me-5">
                  <Producto
                    srcLink="https://i0.wp.com/relentless-off.com/wp-content/uploads/2022/12/Post-de-Instagram-joyeria-accesorios-tienda-venta-aretes-collar-beige-1.png?fit=600%2C600&ssl=1"
                    nombre="Trust Hoodie"
                    precio={20}
                    descripcion="I don't trust words, i trust vibes. No confío en las palabras."
                    setPrecioTotal={SetPrecioTotal}
                    setObj={setObj}
                  />
                </div>
                <div className="col-3">
                  <Producto
                    srcLink="https://i0.wp.com/relentless-off.com/wp-content/uploads/2022/09/art4.png?fit=600%2C600&ssl=1"
                    nombre="Relentless Basic Tee"
                    precio={18}
                    descripcion="Cómoda y duradera, adecuada para el uso diario."
                    setPrecioTotal={SetPrecioTotal}
                    setObj={setObj}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col col-lg-2 mt-5">
          <div className="card" style={{width: "19rem"}}>
            <div className="card-header">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Precio</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                {<tbody>{listaLi}</tbody>}
              </table>
            </div>
            <div className="card-body">
              <div className="container mt-5">
                <h2>Total a pagar: {precioTotal}€</h2>
                <div className="d-grid gap-2 mt-2 mb-2">
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={reiniciarCarrito}
                  >
                    Borrar Todo
                  </button>
                </div>
                <PayPalScriptProvider options={{ "client-id": "test" }}>
                  <PayPalButtons style={{ layout: "horizontal" }} />
                </PayPalScriptProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tienda;

import {BrowserRouter,Routes,Route, NavLink } from 'react-router-dom';
import Tienda from './Tienda';
import Error404 from './Error404';
import Perfil from './Perfil';

import Home from './Home';
function Cabezera(){
    return(
        <BrowserRouter>
        <nav className="navbar mb-4">
            <NavLink to='/'><img src="https://i0.wp.com/relentless-off.com/wp-content/uploads/2022/08/Diseno_222.png?fit=300%2C207&ssl=1" width={120}/></NavLink>
            <h1><NavLink to="/" className="text-black" style={{ textDecoration:"none" }}>RELENTLESS OFF</NavLink></h1>
            <div>
                <NavLink to='/tienda'><img src="https://cdn-icons-png.flaticon.com/512/7183/7183688.png" className="me-3" width={35}/></NavLink>
                <NavLink to='/perfil'><img src="https://cdn-icons-png.flaticon.com/512/3856/3856336.png" className="me-3" width={30}/></NavLink>
                <img data-bs-target="#canvas" data-bs-toggle="offcanvas" src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" width={35}/>
            </div>
      </nav>

    <div className="offcanvas offcanvas-end" id="canvas">
        <div className="offcanvas-header">
        <img data-bs-target="#canvas" data-bs-toggle="offcanvas" src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" width={35}/>
        <h5 className="offcanvas-title">Carrito </h5>
        <button className="btn btn-close" data-bs-dismiss="offcanvas"></button>
        </div>
        <hr></hr>
        <div className="offcanvas-body">
            <ul>
                <li></li>
            </ul>
        </div>
    </div>
      <Routes>
                <Route path='/' element={
                    <Home/>
                }>
                </Route>
                <Route path='/tienda' element={
                    <Tienda/>
                }>
                </Route>
                <Route path='/perfil' element={
                    <Perfil/>
                }>
                </Route>
                <Route path='*' element={
                <Error404/>
                }>
                </Route>
            </Routes> 
      </BrowserRouter>

    );
};

export default Cabezera;

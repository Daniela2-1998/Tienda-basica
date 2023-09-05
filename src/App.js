import React, {useState} from 'react';
import styled from 'styled-components';
import {NavLink, Routes, Route} from 'react-router-dom';
import Inicio from './componentes/Inicio';
import Blog from './componentes/Blog';
import Tienda from './componentes/Tienda';
import Error404 from './componentes/Error404';
import Carrito from './componentes/Carrito';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers/TiendaReducer';

const App = () => {

  //const [carrito, cambiarCarrito] = useState([]);

  /*
  const agregarProductoAlCarrito = (idProductoAAgregar, nombre) => {
    if(carrito.length === 0){
      cambiarCarrito([{id: idProductoAAgregar, nombre: nombre, cantidad: 1}]);
    } else{
      // debemos clonar el carrito para editarlo
      const nuevoCarrito = [...carrito];
      // comprobamos si el carrito ya tiene el ID del producto a agregar
      const yaEstaEnCarrito = nuevoCarrito.filter((productoDeCarrito) => {
          return productoDeCarrito.id === idProductoAAgregar
       }).length > 0;
       //si ya esta el producto se debe actualizar
       if(yaEstaEnCarrito){
        nuevoCarrito.forEach((productoDeCarrito, index) => {
          if(productoDeCarrito.id === idProductoAAgregar){
            const cantidad = nuevoCarrito[index].cantidad;
            // modificamos carrito
            nuevoCarrito[index] = {id: idProductoAAgregar, nombre: nombre, cantidad: cantidad + 1}
          }
        })
        // si no esta en carrito
      } else {
        nuevoCarrito.push({id: idProductoAAgregar, nombre: nombre, cantidad: 1})
      }

      // actualizar carrito
      cambiarCarrito(nuevoCarrito);
    }
  }


*/


  const store = createStore(reducer);

  return (
    // estado global
    <Provider store={store}>
      <Contenedor>
        <Menu>
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/tienda">Tienda</NavLink>
        </Menu>
        <main>
          <Routes>
            {/* 
          se puede usar component o element 
          // antes se usaba switch y ahora routes
          No hace falta usar el exact hoy en día
           */}
            <Route path='/' exact={true} Component={Inicio} />
            <Route path='/blog' Component={Blog} />
            <Route path='/tienda' Component={Tienda} />
            <Route path='*' Component={Error404} />
          </Routes>
        </main>
        <aside>
          <Carrito />
        </aside>
      </Contenedor>
    </Provider>

  );
}


const Contenedor = styled.div`
    max-width: 1000px;
    padding: 40px;
    width: 90%;
    display: grid;
    gap: 20px;
    grid-template-columns: 2fr 1fr;
    background: #fff;
    margin: 40px 0;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;
 
const Menu = styled.nav`
    width: 100%;
    text-align: center;
    background: #092c4c;
    grid-column: span 2;
    border-radius: 3px;
 
    a {
        color: #fff;
        display: inline-block;
        padding: 15px 20px;
    }
 
    a:hover {
        background: #1d85e8;
        text-decoration: none;
    }
`;


export default App;




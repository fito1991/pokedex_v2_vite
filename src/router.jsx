import React from 'react';
import App from './App';
import BusquedaPokemon from './components/BusquedaPokemon';
import Favoritos from './components/Favoritos';

const routes = {
    "/": () => <App/>,
    "/busqueda": () => <BusquedaPokemon />,
    "/favoritos": () => <Favoritos />
}

export default routes;
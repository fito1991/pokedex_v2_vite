import PokeFav from "./PokeFav"
const ListaFavoritos = ({listaFavoritos, setPokeFavorito, verForm, eliminarFav}) => {

    // const { id, name, height, weight, types, sprites } = pkmn
    // const hectogramo = 5.436 //valor para convertir los hectogramos del peso del pkmn a lbs
    // const decimetro = 10 // valor para convertir los decimetro de la altura del pkmn a metros

    // const favoritosAnteriores = JSON.parse(localStorage.getItem("favoritos")) || []
    // let fechaActualizacion = favoritosAnteriores.find(pokemon => pokemon.id === id).dateUpdate

    // // Elimina al poke fav de la página de favoritos
    // const delFav = (idPokemon) => {
    //     const favoritosActuales = JSON.parse(localStorage.getItem("favoritos"))
    //     const actualizaStorage = favoritosActuales.filter( function (favorito) {
    //         return favorito.id !== idPokemon
    //     })
    //     localStorage.setItem('favoritos', JSON.stringify(actualizaStorage))
    //     document.getElementById(idPokemon).remove()
    // }

    // console.log(listaFavoritos)

    // listaFavoritos.map( p => {
    //     console.log(p.id)
    // })

    return (
        <>
            {listaFavoritos && listaFavoritos.length ? (
                <>
                    <h4 className="center">Tu Equipo Favorito</h4>
                    {
                        listaFavoritos.map( pokeFavorito => (
                            <PokeFav 
                            key={pokeFavorito.id}
                            pokeFavorito={pokeFavorito}
                            setPokeFavorito={setPokeFavorito}
                            eliminarFav={eliminarFav}
                            verForm={verForm}
                            />
                        ))
                    }
                </>
            ):(
                <>
                    <h4 className="center">No tienes ningún pokémon añadido a favoritos</h4>
                </>
            )}
        </>
    )
}

export default ListaFavoritos
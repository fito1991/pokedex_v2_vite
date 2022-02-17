import typeColors from "../helpers/TypeColor";
import { useState } from "react";
function Pokemon({resultadoBusqueda}){

    // extraer los valores del resultado del pokededex
    // console.log(resultado);
    const [favPokemon, setFavPokemon] = useState(false)

    const {id, name, height, weight, types, sprites} = resultadoBusqueda
    const hectogramo = 5.436 //valor para convertir los hectogramos del peso del pkmn a lbs
    const decimetro = 10 // valor para convertir los decimetro de la altura del pkmn a metros

    // si no existe ninguno de los campos siguientes se pausa la carga del componente
    if(!id || !name || !height || !weight || !types || !sprites ) return null
    // console.log(resultado);

    // Valida si ya existen favoritos, si existe más de uno setFavPokemon pasara a true
    // y se mostrará el icono de favorito activo
    const favoritosActuales = JSON.parse(localStorage.getItem("favoritos")) || []
    const mostrarFavoritos = favoritosActuales.filter( function (favorito) {
        return favorito.id === id
    })
    // console.log(mostrarFavoritos.length)
    let fav
    if(favPokemon){
        fav = <i className="material-icons">favorite</i>
    }else if(mostrarFavoritos.length === 1){
        // Se muestra el icono de fav activo si existen favoritos
        setFavPokemon(true)
        fav = <i className="material-icons">favorite</i>
    }else {
        // setFavPokemon(false)
        fav = <i className="material-icons">favorite_border</i>
    }

    // Alamcena y elimina en LocalStorage los pokemon favoritos
    const addFav = (resultadoBusqueda, idPokemon) => {

        if(favPokemon){
            // Elimina un favorito de la lista y actualiza el local storage
            fav = <i className="material-icons">favorite_border</i>
            setFavPokemon(false)
            
            const favoritosActuales = JSON.parse(localStorage.getItem("favoritos"))
            const actualizaStorage = favoritosActuales.filter( function (favorito) {
                return favorito.id !== idPokemon
            })
            localStorage.setItem('favoritos', JSON.stringify(actualizaStorage))
            
        }else{
            // Alamacena den localstorage
            const arrFavoritos = JSON.parse(localStorage.getItem('favoritos')) || []
            arrFavoritos.push(resultadoBusqueda)
            localStorage.setItem('favoritos', JSON.stringify(arrFavoritos))
            setFavPokemon(true)

        }

    }

    return(
        <div className="col s12 m12 l12 xl12 center">
            <div className="card">
                <img src={sprites.front_default} alt="sprite" />
                <p><strong>#{id} - {name}</strong></p>
                {
                    types.map(type => {
                        return <span key={type.slot} className="chip white-text" style={{backgroundColor: typeColors[type.type.name]}}>{type.type.name}</span>
                    })
                }
                <div className="container center-align poke-info">
                    <p><strong>Altura:</strong> {(height / decimetro).toFixed(2)} m.</p>
                    <p><strong>Peso:</strong> {(weight / hectogramo).toFixed(2)} lbs.</p>
                </div>
                <div className="card-action">
                    <a onClick={() => addFav(resultadoBusqueda, id)} title="Añadir a favoritos" className="btn-floating btn-small waves-effect waves-light red">
                        {fav}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Pokemon
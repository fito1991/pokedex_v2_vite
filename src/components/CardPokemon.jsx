import { useState } from 'react'
import typeColors from "../helpers/TypeColor";
const CardPokemon = ({pokemon}) => {
  
    const [favPokemon, setFavPokemon] = useState(false)

    const { id, name, height, weight, types, sprites } = pokemon
    const hectogramo = 5.436 //valor para convertir los hectogramos del peso del pkmn a lbs
    const decimetro = 10 // valor para convertir los decimetro de la altura del pkmn a metros

    // Valida si ya existen favoritos, si existe más de uno setFavPokemon pasara a true
    // y se mostrará el icono de favorito activo
    const favoritosActuales = JSON.parse(localStorage.getItem("favoritos")) || []
    const mostrarFavoritos = favoritosActuales.filter( function (favorito) {
        return favorito.id === id
    })

    let fav
    if(favPokemon){
        fav = <i className="material-icons">favorite</i>
    }else if(mostrarFavoritos.length === 1){
        // Se muestra el icono de fav activo si existen favoritos
        setFavPokemon(true)
        fav = <i className="material-icons">favorite</i>
    }
    else{
        fav = <i className="material-icons">favorite_border</i>
    }

    // Alamcena y elimina en LocalStorage los pokemon favoritos
    const addFav = (pokemon, idPokemon) => {

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
            arrFavoritos.push(pokemon)
            localStorage.setItem('favoritos', JSON.stringify(arrFavoritos))
            setFavPokemon(true)

        }

    }

    return (
        <div className="col s12 m6 l4 xl4 center">
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
                    {/* <span><strong>Añadir a favoritos</strong></span> */}
                    <a onClick={() => addFav(pokemon, id)} title="Añadir a favoritos" className="btn-floating btn-small waves-effect waves-light red">
                        {fav}
                    </a>
                </div>
            </div>
        </div>
  )
}

export default CardPokemon
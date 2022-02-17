import Nav from "./Nav"
import ListaFavoritos from "./ListaFavoritos"
import FormApodo from "./FormApodo"
import { useState, useEffect } from "react"
const Favoritos = () => {

    // Obtener el listado de pkmns favoritos del localStorage
    
    const [visibleForm, setVisibleFrom] = useState(false)
    const [idApodo, setIdApodo] = useState('')
    const [nombreApodo, setNombreApodo] = useState('')
    
    const [listaFavoritos, setListaFavoritos] = useState([])
    const [pokeFavorito, setPokeFavorito] = useState({})
    
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || []
    const consultaFavoritos = favoritos.map(pk => {
        let pokeFav = pk
        return pokeFav
    })
    // console.log(consultaFavoritos)
    // setListaFavoritos(['hola'])
    // setNombreApodo('hola')
    // const consultaFavoritos = (favoritos) => {
    //     llenaListado(favoritos)
    // }

    useEffect(() => {
        setListaFavoritos(consultaFavoritos)
    }, [])
    
    useEffect(() => {
        localStorage.setItem('favoritos', JSON.stringify(listaFavoritos))
    }, [listaFavoritos])

    const eliminarFav = id => {
        const favoritosActualizados = listaFavoritos.filter( pokemon => pokemon.id !== id )
        setListaFavoritos(favoritosActualizados)
    }
    
    const verForm = (dataVer, id, name) => {
        setVisibleFrom(dataVer)
        setIdApodo(id)
        setNombreApodo(name)
    }


    return (
        <>
            <Nav/>
            <div className="container pokelist-fav">
                <div className="row">
 
                        { !visibleForm ? '' : 
                            <FormApodo 
                                idApodo={idApodo} 
                                nombreApodo={nombreApodo}
                                verForm={verForm}
                                listaFavoritos={listaFavoritos}
                                />}
                        {
                            // listaFavoritos.map((pkmn, i) => {
                            //     return <ListaFavoritos 
                            //         key={i} 
                            //         pkmn={pkmn} 
                            //         verForm={verForm}
                            //         eliminarFav={eliminarFav}
                            //     />
                            // })
                            <ListaFavoritos 
                                    listaFavoritos={listaFavoritos}
                                    setPokeFavorito={setPokeFavorito}
                                    verForm={verForm}
                                    eliminarFav={eliminarFav}
                                />
                        }
                </div>
            </div>
        </>
    )
}

export default Favoritos
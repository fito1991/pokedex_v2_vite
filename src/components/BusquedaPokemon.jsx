import { useState, useEffect } from "react"
import Nav from "./Nav"
import Formulario from "./Formulario"
import Pokemon from "./Pokemon"
import missigno from "../missigno.jpg"

const BusquedaPokemon = () => {

    const [nombrePokemon, setNombrePokemon] = useState('')
    const [errorPokemon, setErrorPokemon] = useState(false)
    const [resultadoBusqueda, setResultadoBusqueda] = useState({})

    // Resetear el resultado si no se encuentra el pokémon
    if(resultadoBusqueda === undefined){
        setResultadoBusqueda({})
    }

    useEffect(() => {
        
        //prevenir ejecución de la consulta a la API al inicio
        if(nombrePokemon === '') return;
    
        const consultarPokeAPI = () => {
        
            const urlAPI = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`
    
            fetch(urlAPI)
                .then(response => {
                    if (response.status >= 200 && response.status < 300) {
                        console.log(response.status)
                        return response.json()
                    }else{
                        console.log(response.status)
                        setErrorPokemon(true)
                    }
                })
                .then(jsonPoke => {
                    setResultadoBusqueda(jsonPoke)
                })
    
        }
        consultarPokeAPI()
    }, [nombrePokemon])
    
    // console.log(resultadoBusqueda)

    const dataPokemon = dataPKMN => {
        setNombrePokemon(dataPKMN.pokemon)
        setErrorPokemon(false)
    }

    // Cargar component con la info del pokémon condicionalmente
    let pkmn

    if (nombrePokemon === '') {
        pkmn = <h4>Busca a tu Pokémon</h4>
    }else if (errorPokemon){
        pkmn = <>
        <img className="missigno" src={missigno} alt="logo-pokemon"/>
        <h5>No hemos encontrado a tu Pokémon...eso o el Team Rocket se lo robo</h5>
        </>
    }else{
        pkmn = <Pokemon resultadoBusqueda={resultadoBusqueda} />
    }

    return (
        <>
            <Nav/>
            <div className="container">
                <div className="row">
                    <div className="col s12 m12 l6 xl6">
                        <Formulario dataPokemon={dataPokemon} />
                    </div>
                    <div className="col s12 m12 l6 xl6"><br/>
                        {pkmn}
                    </div>
                </div>
            </div>
        </>
    )
}

export default BusquedaPokemon
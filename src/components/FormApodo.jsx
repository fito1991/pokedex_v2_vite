import React from 'react'
import { useState, useEffect } from "react"
import { format } from 'date-fns'
const FormApodo = ({idApodo, nombreApodo, verForm, listaFavoritos}) => {

    const [apodo, setApodo] = useState({
        pokeApodo: ''
    });


    // useEffect(() => {
    //     localStorage.setItem('favoritos', JSON.stringify(listaFavoritos))
    // }, [listaFavoritos])

    // console.log(listaFavoritos.find( pokemon => pokemon.id === idApodo))
    // console.log(pokeFavorito)

    const handleChange = e => {
        //Cambiar el state
        setApodo({
            ...apodo,
            [e.target.name] : e.target.value
        });
    }

    const ocultarForm = (valor, id, name) => {
        verForm(valor, id, name)
    }

    // console.log(listaFavoritos)
    const cambiarNombre = e => {
        e.preventDefault()
        // Modifica el apodo del pokemon y actualiza el localstorage para que se mantenga el cambio
        listaFavoritos.find( pokemon => pokemon.id === idApodo).name = apodo.pokeApodo
        localStorage.setItem('favoritos', JSON.stringify(listaFavoritos))
        const nombreOriginal = listaFavoritos.find(pokemon => pokemon.id === idApodo).species.name
        listaFavoritos.find(pokemon => pokemon.id === idApodo).dateUpdate = format(new Date(), 'dd-MM-yy')
        localStorage.setItem('favoritos', JSON.stringify(listaFavoritos))

        const apodoActual =  `¡Ahora tu <strong>"${nombreOriginal}"</strong> se llama <strong>"${apodo.pokeApodo}"</strong>`

        ocultarForm(false, '', '')
        // Resetear formulario
        setApodo({
            pokeApodo: ''
        })
        M.toast({html: apodoActual, classes: 'red darken-3'})
    }

    return (
        <div className="row">
            <form onSubmit={cambiarNombre}>
                <div className="input-field col s12">
                    <input type="text" value={apodo.pokeApodo} id="pokeApodo" name="pokeApodo" onChange={handleChange} autoFocus/>
                    <label htmlFor="pokeApodo">¿Quieres cambiarle el nombre a "{nombreApodo}"?</label>
                </div>
                <div className="input-field col s12">
                    <button className="waves-effect waves-light btn-small red darken-1 white" type="submit">
                        <i className="material-icons left">save</i>Guardar
                    </button>
                    <a onClick={() => ocultarForm(false,'','')} href='#' className="waves-effect waves-light btn-small red darken-1 white" style={{marginLeft: 16}}>
                        <i className="material-icons left">cancel</i>Cancelar
                    </a>
                </div>
            </form>
        </div>
    )
}

export default FormApodo
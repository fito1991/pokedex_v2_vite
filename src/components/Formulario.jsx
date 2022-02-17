import {useState} from 'react';

function Formulario({dataPokemon}) {

    const [ busquedaPKMN, setBusquedaPKMN ] = useState({
        pokemon: ''
    });

    const handleChange = e => {
        //Cambiar el state
        setBusquedaPKMN({
            ...busquedaPKMN,
            [e.target.name] : e.target.value.toLowerCase()
        });
    }

    const consultarPokemon = e => {
        e.preventDefault();
        
        dataPokemon(busquedaPKMN);
    }

    return(
        <form onSubmit={consultarPokemon}><br/>
            <div className="input-field col s12">
                <input type="text" id="pokemon" name="pokemon" onChange={handleChange} required/>
                <label htmlFor="pokemon">Pokémon</label>
            </div>
            <div className="input-field col s12">
                <button className="waves-effect waves-light btn-large red darken-1 white" type="submit">
                    <i className="material-icons left">search</i>Buscar
                </button>
            </div>
        </form>

    );
}

export default Formulario
import {useState, useEffect} from 'react'
import CardPokemon from './components/CardPokemon'
import Nav from './components/Nav'
import { getAllPokemon, getPokemon } from './services/pokemon'

function App() {

  const [nextURL, setNextUrl] = useState('') // Url siguiente paginacion
  const [prevURL, setPrevUrl] = useState('') // Url anterior paginacion
  const [listadoPokemon, setListadoPokemon] = useState([]) // objeto que guardara el result de la api
  const [cargando, setCargando] = useState(false)
  const urlAPI = `https://pokeapi.co/api/v2/pokemon`

  const consultaPokeAPI = async () => {
  
    let response = await getAllPokemon(urlAPI)
    setNextUrl(response.next)
    setPrevUrl(response.previous)
    await cargarPokemon(response.results)
    setCargando(false);

  }
  
  useEffect(() => {
    consultaPokeAPI()
  }, [])

  // Siguiente página
  const next = async () => {
    setCargando(true);
    let data = await getAllPokemon(nextURL);
    await cargarPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setCargando(false);
  }

  // Página Anterior
  const prev = async () => {
    if (!prevURL) return;
    setCargando(true);
    let data = await getAllPokemon(prevURL);
    await cargarPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setCargando(false);
  }
  
  // Carga el listado de pokemon en la página de inicio
  const cargarPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon.url)
      return pokemonRecord
    }))

    setListadoPokemon(_pokemonData)
  }
  return (
    <div className="App">
      <Nav/>
      <div className="container">
        <div className="row center botones">
          <button className="btn waves-effect waves-light" onClick={prev}>
            <i className="material-icons">arrow_back</i>
          </button>
          <button className="btn waves-effect waves-light" onClick={next}>
            <i className="material-icons">arrow_forward</i>
          </button>
        </div>
        <div className="row pokemon-list">
          { 
            cargando ? 
              <div className="progress">
                <div className="indeterminate"></div>
              </div> : (
              <>
                {
                  listadoPokemon.map((pokemon, i) => {
                    return <CardPokemon key={i} pokemon={pokemon} />
                  })
                }
              </>
            )
          }
        </div>
        <div className="row center botones">
          <button className="btn waves-effect waves-light" onClick={prev}>
            <i className="material-icons">arrow_back</i>
          </button>
          <button className="btn waves-effect waves-light" onClick={next}>
            <i className="material-icons">arrow_forward</i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default App

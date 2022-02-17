import typeColors from "../helpers/TypeColor"
const PokeFav = ({pokeFavorito, setPokeFavorito, eliminarFav, verForm}) => {

    const { id, name, height, weight, types, sprites, dateUpdate } = pokeFavorito
    const hectogramo = 5.436 //valor para convertir los hectogramos del peso del pkmn a lbs
    const decimetro = 10 // valor para convertir los decimetro de la altura del pkmn a metros

    const handleEliminar = () => {
        eliminarFav(id)
    }

    const mostrarForm = (valor, id, name) => {
        verForm(valor, id, name)
    }

    return (
        <div className="col s12 m6 l4 xl4 center">
            <div className="card">
                <img src={sprites.front_default} alt="sprite" />
                <p>
                    <strong>#{id} - <span id={`${name}-${id}`}>{name}</span></strong>
                    <a onClick={()=>mostrarForm(true, id, name)}  title="Editar apodo" className="waves-effect waves-teal btn-flat">
                        <i className="material-icons">edit</i>
                    </a>
                </p>
                {
                    types.map(type => {
                        return <span key={type.slot} className="chip white-text" style={{backgroundColor: typeColors[type.type.name]}}>{type.type.name}</span>
                    })
                }
                <div className="container center-align poke-info">
                    <p><strong>Altura:</strong> {(height / decimetro).toFixed(2)} m.</p>
                    <p><strong>Peso:</strong> {(weight / hectogramo).toFixed(2)} lbs.</p>
                    <p>
                        <strong>Modificado:</strong>
                        <span id={`fecha-${id}`}>
                            {dateUpdate ? dateUpdate : ' - ' }
                        </span>
                    </p>
                </div>
                <div className="card-action">
                    <a onClick={handleEliminar} title="Eliminar de favoritos" className="btn-floating btn-small waves-effect waves-light red">
                        <i className="material-icons">delete</i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default PokeFav
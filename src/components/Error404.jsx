import Nav from "./Nav"
import missigno from "../missigno.jpg"
const Error404 = () => {
  return (
    <>
      <Nav />
      <div className="container center">
        <br/>
        <img className="missigno" src={missigno} alt="logo-pokemon"/>
        <h4>
          Es posible que tu Pokémon no exista o la URL fue modifica por missigno
        </h4>
      </div>
    </>
  )
}

export default Error404
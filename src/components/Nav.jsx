import pokemonlogo from '../pokemonlogo.png'
import bgmenu from '../bgmenu.webp'
const Nav = () => {
  return (
    <>
      <nav className="red">
        <div className="nav-wrapper container">
          <a href="/" rel="noopener" className="brand-logo">
            <img className="img-logo-poke" src={pokemonlogo} alt="logo-pokemon"/>
          </a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/" className="tooltipped" data-position="bottom" data-tooltip="Inicio"><i className="material-icons">home</i></a></li>
            <li><a href="/busqueda" className="tooltipped" data-position="bottom" data-tooltip="Búsqueda"><i className="material-icons">search</i></a></li>
            <li><a href="/favoritos" className="tooltipped" data-position="bottom" data-tooltip="Favoritos"><i className="material-icons">favorite</i></a></li>
          </ul>
        </div>
      </nav>
      <ul className="sidenav" id="mobile-demo">
        <li>
          <div className="user-view">
            <div className="background">
              <img src={bgmenu} />
            </div>
            <a href="#!" className="sidenav-close white-text right"><i className="material-icons">close</i></a>
            <br/>
            <br/>
            <br/>
          </div>
        </li>
        <li><a href="/">Pokédex<i className="material-icons">home</i></a></li>
        <li><a href="/busqueda">Busca tu Pokémon<i className="material-icons">search</i></a></li>
        <li><a href="/favoritos">Favoritos<i className="material-icons">favorite</i></a></li>
      </ul>
    </>
  )
}

export default Nav
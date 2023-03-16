//import { link } from 'react-router-dom'

/*function Navbar() {
  const currentRoute = window.location.pathname

  return (
    <nav className="navbar">
      <ul className="nav_list">
        <li
          className={
            currentRoute === '/Kasa/' ? 'nav_list_item_active' : 'nav_list_item'
          }
        >
          <link to="/kasa/">Accueil</link>
        </li>
        <li
          className={
            currentRoute === '/about' ? 'nav_list_item_active' : 'nav_list_item'
          }
        >
          <link to="/about">A propos</link>
        </li>
      </ul>
    </nav>
  )
}
export default <Navbar></Navbar*/

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav_list">
        <li>Accueil</li>
        <li>A propos</li>
      </ul>
    </nav>
  )
}
export default Navbar

import './Header.css'
import NavBar from './components/NavBar'
import NavBarSmall from './components/NavBarSmall'

const Header = () => {

  return(
    <div className="Header">
      <NavBar />
      <NavBarSmall />
  </div>
  )
}
  
export default Header
import './Header.css';
import NavBar from './components/NavBar';
import InfoNav from './components/InfoNav';

const Header = () => {
  return (
    <div className="Header">
      <InfoNav />
      <NavBar />
    </div>
  );
};

export default Header;

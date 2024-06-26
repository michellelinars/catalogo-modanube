import './Navbar.css';
import logoModaNube from '../../assets/images/logo-txt.png';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export const Navbar = () => {
  const [searchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid align-items-between">
        <div className='nav-menu'>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="*" className={"nav-link"} data-bs-toggle={"pill"}>Inicio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/products" className={"nav-link"} data-bs-toggle={"pill"}>Catalogo</NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className='pe-5'>
          <img className="logo-nav img-fluid" src={logoModaNube} alt="Logo ModaNube" />
          <i className="fas fa-cloud"></i>
         
        </div>
      
        <div className="nav-right">  
          <div className="icon-container me-5" onClick={toggleSearch}>
            
          </div>
        </div>
      </div>
    </nav>
  );
};
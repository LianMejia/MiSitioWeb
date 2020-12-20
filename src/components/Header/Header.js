import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
class Header extends React.Component{
    render(){
        return(
            <section>
                <div className="Titulo">
                    <p>MiWeb</p>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/HomePage">Home</Link></li>
                        <li><Link to="/Prueba">About</Link></li>
                        <li><Link to ="/">Services</Link></li>
                        <li><Link to ="/">Contact</Link></li>
                    </ul>
                </nav>
            </section>
        );
    }
}

export default Header;
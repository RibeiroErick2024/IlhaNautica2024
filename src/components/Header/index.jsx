import React, { useState } from 'react';
import menuIcon from '../../assets/menu.svg'; // Certifique-se de que o caminho está correto
import './index.css'; // Supondo que você tenha um arquivo CSS para estilos

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className='header-container'>
            <div className="logo-container">
                <h1>Ilha Náutica</h1>
            </div>

            <div className="iconMenu-container">
                <img 
                    src={menuIcon} 
                    alt="Menu" 
                    onClick={handleMenuToggle} 
                    style={{ cursor: 'pointer', width: '40px', height: '40px' }}
                />
                {isMenuOpen && (
                    <div className="dropdown-menu">
                        <a href="/">Perfil</a>
                        <a href="/about">Anuncie seu barco</a>
                        <a href="/contact">Sobre nós</a>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;

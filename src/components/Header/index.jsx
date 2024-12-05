import React, { useState, useEffect, useRef } from 'react';
import menuIcon from '../../assets/menu.svg'; // Certifique-se de que o caminho está correto
import './index.css'; // Supondo que você tenha um arquivo CSS para estilos
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

function HeaderPrincipal() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const navigate = useNavigate("/embarcacao")
    const { logout, logado } = useAuth()

    const handleMenuToggle = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className='header-container'>
            <div className="logo-container" onClick={() => navigate('/home')}>
                <h1>Ilha Náutica</h1>
            </div>

            <div className="iconMenu-container" ref={menuRef}>
                <img
                    src={menuIcon}
                    alt="Menu"
                    onClick={handleMenuToggle}
                    style={{ cursor: 'pointer', width: '40px', height: '40px' }}
                />
                {isMenuOpen && (
                    <div className="dropdown-menu">

                        {!logado &&

                        <a href="/login" >Login | Cadastro</a>
                        }

                        {logado && <a href="/perfilUsuario">Perfil</a>}
                        <a href="/about">Anuncie seu barco</a>
                        <a href="/contact">Sobre nós</a>
                        {logado &&

                            <a href="/home" onClick={logout}>Logout</a>
                        }
                    </div>
                )}
            </div>
        </header>
    );
}

export default HeaderPrincipal;

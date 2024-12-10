import React, { useState, useEffect, useRef } from 'react';
import menuIcon from '../../assets/menu.svg';
import './index.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useLocation } from 'react-router-dom';
import filterAzul from '../../assets/filter-azul.png';  // Filtro desativado
import closeBranco from '../../assets/botao-fechar.png';  // Filtro ativado
function HeaderPrincipal({ toggleFiltro }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isFiltroAtivo, setIsFiltroAtivo] = useState(false);  // Estado para controlar o filtro ativado/desativado
    const menuRef = useRef(null);
    const navigate = useNavigate("/embarcacao");
    const { logout, token } = useAuth();

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

    const verificar = () => {
        if (token) {
            navigate("/cadastroLocador");
        } else {
            navigate("/login");
        }
    };

    const location = useLocation();  // Obter a localização da página atual

    const handleFiltroClick = () => {
        setIsFiltroAtivo(!isFiltroAtivo);  // Alternar o estado do filtro
        toggleFiltro();  // Alternar a visibilidade do filtro
    };

    return (
        <header className='header-container' style={{  borderColor: isFiltroAtivo ? '#1f2366' : 'grey' }}>
            <div className="logo-container" onClick={() => navigate('/home')}>
                <h1>Ilha Náutica</h1>
            </div>

            <div className="iconMenu-container" ref={menuRef}>
                {/* Mostrar botão de filtro somente na página Home */}
                {location.pathname === '/home' && (
                    <button 
                        className="home-button" 
                        onClick={handleFiltroClick}
                        style={{ backgroundColor: isFiltroAtivo ? '#1f2366' : 'transparent' }} // Alterando o background color
                    >
                        <img 
                            className={`filtro-icon-${isFiltroAtivo ? 'visible' : 'hidden'}`}
                            src={isFiltroAtivo ? closeBranco : filterAzul} 
                            alt="Filtro" 
                        />
                    </button>
                )}

                <img
                    src={menuIcon}
                    alt="Menu"
                    onClick={handleMenuToggle}
                    style={{ cursor: 'pointer', width: '40px', height: '40px' }}
                />
                {isMenuOpen && (
                    <div className="dropdown-menu">
                        {token ? <a href="/perfilUsuario">Perfil</a> : <a href="/login">Login | Cadastro</a>}
                        <a onClick={verificar}>Anuncie seu barco</a>
                        <a href="/contact">Sobre nós</a>
                        {token && <a href="/home" onClick={logout}>Logout</a>}
                    </div>
                )}
            </div>
        </header>
    );
}

export default HeaderPrincipal;

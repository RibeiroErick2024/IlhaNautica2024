// src/ListagemBarcos.jsx
import React, { useState, useEffect, useRef, Suspense } from 'react';
import './index.css';

// Importando o CardBarco de forma lazy
const CardBarco = React.lazy(() => import('../Card_barco'));

function ListagemBarcos() {
    const [barcos, setBarcos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const limit = 10;
    const observer = useRef();

    // Função para buscar barcos na API do Unsplash
    const fetchBarcos = async () => {
        setLoading(true);
        try {
            const res = await fetch(`https://api.unsplash.com/photos?client_id=oQEAPfZsvFNYA5C0pCteQbmEbk5TmeElNPc2H6-6Qqo&per_page=${limit}&page=${page}`);
            if (!res.ok) {
                throw new Error('Erro ao buscar os barcos');
            }
            const data = await res.json();
            // Adicionando informações fictícias de cidade e modelo
            const formattedData = data.map(barco => ({
                ...barco,
                model: 'Modelo Exemplo',
                city: 'Cidade Exemplo',
                url: barco.urls.small,
                title: barco.description || 'Sem descrição'
            }));
            setBarcos((prev) => [...prev, ...formattedData]);
            if (data.length < limit) {
                observer.current.disconnect();
            }
            
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    // Effect para buscar barcos quando a página mudar
    useEffect(() => {
        fetchBarcos();
    }, [page]);

    // Função para observar o último barco
    const lastBarcoRef = (node) => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setPage((prev) => prev + 1);
            }
        });

        if (node) observer.current.observe(node);
    };

    return (
        <div className='listagem-container'>
            <Suspense fallback={<div>Carregando barcos...</div>}>
                {barcos.map((barco, index) => {
                    const barcoProps = {
                        url: barco.url,
                        title: barco.title,
                        model: barco.model,
                        city: barco.city
                    };
                    
                    if (barcos.length === index + 1) {
                        return <CardBarco ref={lastBarcoRef} key={barco.id} user={barcoProps} />;
                    } else {
                        return <CardBarco key={barco.id} user={barcoProps} />;
                    }
                })}
            </Suspense>
            {loading && <p>Carregando...</p>}
        </div>
    );
}

export default ListagemBarcos;

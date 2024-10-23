import React from 'react'
import './index.css'
import CardBarco from '../Card_barco';
function ListagemBarcos() {
    const barcos = [
        { id: 1, img:'🛥', cidade: 'cidade', nomeBarco: 'Fabricante e modelo', caracteristicas:'10 pessoas, 25 metros', preçoDiaria: 500, avaliações:5.0  },
        { id: 2, img:'🛥', cidade: 'cidade', nomeBarco: 'Fabricante e modelo', caracteristicas:'10 pessoas, 25 metros', preçoDiaria: 500, avaliações:5.0  },
        { id: 3, img:'🛥', cidade: 'cidade', nomeBarco: 'Fabricante e modelo', caracteristicas:'10 pessoas, 25 metros', preçoDiaria: 500, avaliações:5.0  },
        { id: 4, img:'🛥', cidade: 'cidade', nomeBarco: 'Fabricante e modelo', caracteristicas:'10 pessoas, 25 metros', preçoDiaria: 500, avaliações:5.0  },
        { id: 5, img:'🛥', cidade: 'cidade', nomeBarco: 'Fabricante e modelo', caracteristicas:'10 pessoas, 25 metros', preçoDiaria: 500, avaliações:5.0  },
        { id: 6, img:'🛥', cidade: 'cidade', nomeBarco: 'Fabricante e modelo', caracteristicas:'10 pessoas, 25 metros', preçoDiaria: 500, avaliações:5.0  },
        { id: 7, img:'🛥', cidade: 'cidade', nomeBarco: 'Fabricante e modelo', caracteristicas:'10 pessoas, 25 metros', preçoDiaria: 500, avaliações:5.0  },
        { id: 8, img:'🛥', cidade: 'cidade', nomeBarco: 'Fabricante e modelo', caracteristicas:'10 pessoas, 25 metros', preçoDiaria: 500, avaliações:5.0  },
    ];

    return (
        <div className='listagem-container'>
            <div >
                {barcos.map(barco => (
                    <CardBarco key={barco.id} user={barco} />
                ))}
            </div>
        </div>
    )
}

export default ListagemBarcos

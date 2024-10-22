import React from 'react'
import './CadastroDescricao.css'


function CadastroDescricao() {
    return (
        <div>
        <div className='container'>
            <div className='tituloDesc'>
                <h2>Seu barco</h2>
                <hr className='linhaHr'/>
            </div>
               
            <div className='inputContainer'>
            <div className='descricaoContainer'>
                <div className='textoDesc'>
                    <h4>
                        Descreva sua embarcação
                    </h4>
                </div>
                <div className='descriçaoInput'>
                    <input type="text" placeholder='AAAAAAAAAAAAAA' />
                </div>
            </div>
            <div className='regrasContainer'>
                <div className='textoDesc'> 
                <h4>   
                    Descreva suas regras
                    </h4>
                    </div>
                <div className='regrasInput'>
                    <input type="text" placeholder='AAAAAAAAAAAAAA' />
                </div>
            </div>
            </div>
         
            <div className='fotosContainer'>
                <div className='tituloDesc'>
                    <h2>
                        Fotos
                    </h2>
                    <hr className='linhaHr'/>
                </div>

            </div>
        </div>
        </div>
    )
}

export default CadastroDescricao

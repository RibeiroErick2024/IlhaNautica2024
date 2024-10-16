import React from 'react'
import './CadastroDescricao.css'


function CadastroDescricao() {
    return (
        <div>

        <div className='container'>
            <div className='title'>
                <h2>Seu barco</h2>
            </div>
            <div className='inputContainer'>
            <div className='descricaoContainer'>
                <div className='inputTitulo'>
                    <h4>
                        Descreva sua embarcação
                    </h4>
                </div>
                <div className='descriçaoInput'>
                    <input type="text" placeholder='AAAAAAAAAAAAAA' />
                </div>
            </div>
            <div className='regrasContainer'>
                <div className='inputTitulo'> 
                <h4>   
                    Descreva sua embarcação
                    </h4>
                    </div>
                <div className='regrasInput'>
                    <input type="text" placeholder='AAAAAAAAAAAAAA' />
                </div>
            </div>
            </div>
         
            <div className='fotosContainer'>
                <div className='fotosTitulo'>
                    <h2>
                        Fotos
                    </h2>
                </div>

            </div>
        </div>
        </div>
    )
}

export default CadastroDescricao

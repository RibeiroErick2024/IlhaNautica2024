import React, { useEffect, useState } from 'react';
import './CadastroDescricao.css';

function CadastroDescricao() {
    const [inputDescricao, setInputDescricao] = useState("");
    const [inputRegras, setInputRegras] = useState("");
    const [fotosSelecionadas, setFotosSelecionadas] = useState([]);
    const [previews, setPreviews] = useState([]);

    useEffect(() => {      
        
        // URL representando o arquivo (foto)
        const newPreviews = fotosSelecionadas.map(file => URL.createObjectURL(file));
        setPreviews(newPreviews);

        // Para anular um objeto URL
        return () => {
            newPreviews.forEach(url => URL.revokeObjectURL(url));
        };
    }, [fotosSelecionadas]);

    // Upload multiple photos
    function handleMultipleChange(event) {
        const files = Array.from(event.target.files);
        setFotosSelecionadas(files);
    }

    return (
        <div>
            <div className='container'>
                <div className='mainTitulo'>
                    <div className='tituloDesc'>
                        <h2>Seu barco</h2>
                        <hr className='linhaHr' />
                    </div>
                </div>

                <div className='inputContainer'>
                    <div className='descricaoContainer'>
                        <div className='textoDesc'>
                            <h4>Descreva sua embarcação</h4>
                        </div>
                        <div className='descriçaoInput'>
                            <input 
                                value={inputDescricao} 
                                onChange={e => setInputDescricao(e.target.value)}
                                type="text"
                                placeholder='AAAAAAAAAAAAAA'
                            />
                        </div>
                    </div>
                    <div className='regrasContainer'>
                        <div className='textoDesc'>
                            <h4>Descreva suas regras</h4>
                        </div>
                        <div className='regrasInput'>
                            <input 
                                value={inputRegras} 
                                onChange={e => setInputRegras(e.target.value)}
                                type="text"
                                placeholder='AAAAAAAAAAAAAA'
                            />
                        </div>
                    </div>
                </div>

                <div className='fotosContainer'>
                    <div className='tituloDesc'>
                        <h2>Fotos</h2>
                        <hr className='linhaHr' />
                    </div>
                    <div className='inputFotos'>
                        <input type="file" multiple onChange={handleMultipleChange} />
                    </div>
                    {previews.map((preview, index) => (
                        <img key={index} src={preview} alt={`Uploaded content ${index}`} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CadastroDescricao;

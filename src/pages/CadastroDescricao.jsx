import React, { useEffect, useRef, useState } from 'react';
import './CadastroDescricao.css';
import axios from 'axios';

function CadastroDescricao() {
    const [inputDescricao, setInputDescricao] = useState("");
    const [inputRegras, setInputRegras] = useState("");
    const [fotosSelecionadas, setFotosSelecionadas] = useState([]);
    const [previews, setPreviews] = useState([]);

    //Para esconder o input file de origem
    const esconderInputFile = useRef(null);
    useEffect(() => {

        // URL representando o arquivo (foto)
        const newPreviews = fotosSelecionadas.map(file => URL.createObjectURL(file));
        setPreviews(newPreviews);

        // Para anular um objeto URL
        return () => {
            newPreviews.forEach(url => URL.revokeObjectURL(url));
        };
    }, [fotosSelecionadas]);

    const handleUploadClick = () => {
        // 👇 Click para fazer upload das fotos do input que está escondido
        esconderInputFile.current?.click();
    };


    // Upload multiple photos
    function handleMultipleChange(event) {
        const fotos = Array.from(event.target.files);
        setFotosSelecionadas(fotos);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const url = 'http://localhost:8080/';
        const formData = new FormData();
        fotosSelecionadas.forEach((file, index) => {
          formData.append(`foto${index}`, file);
        });
    
        const config = {
          headers: {
            'content-type': 'multipart/form-data',
          },
        };
    
        axios.post(url, formData, config)
          .then((response) => {
            console.log(response.data);
            // setUploadedFiles(response.data.files);
          })
          .catch((error) => {
            console.error("Error ao fazer upload de fotos: ", error);
          });
      }

    return (
        <div>
            <div className='container'>
                <form onSubmit={handleSubmit}>
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
                                <textarea
                                    className='descriçaoInput'
                                    value={inputDescricao}
                                    onChange={e => setInputDescricao(e.target.value)}
                                    type="text"
                                    aria-multiline={true}
                                    rows="7" cols="130"

                                    placeholder='Um barco lindo de 1000m²'
                                />
                            </div>
                        </div>
                        <div className='regrasContainer'>
                            <div className='textoDesc'>
                                <h4>Descreva suas regras</h4>
                            </div>
                            <div className='regrasInput'>
                                <textarea
                                    value={inputRegras}
                                    onChange={e => setInputRegras(e.target.value)}
                                    type="text"
                                    aria-multiline={true}
                                    rows="7" cols="100"
                                    placeholder='Descreva as regras da embarcação'
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
                            <input type="file"
                                accept="image/*"
                                multiple
                                ref={esconderInputFile}
                                style={{ display: 'none' }}
                                onChange={handleMultipleChange} />

                            <div className='imagesList'>
                                <button className='btnSelecionar'
                                    onClick={handleUploadClick}>
                                    "Click to select"
                                </button>
                                <div className='imagesList'>
                                    {previews.map((preview, index) => (
                                        <img className='imageSelecionada' key={index}
                                            src={preview}
                                        />
                                    ))}
                                </div>
                            </div>

                        </div>
                        <div>


                        </div>

                    </div>
                    {/* <button type="submit" className="btnAnuncie">Anuncie</button> */}
                </form>
            </div>
        </div>
    );
}

export default CadastroDescricao;

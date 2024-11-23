import React, { useEffect, useRef, useState } from 'react';
import './index.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DescricaoEmbarcacao() {
    const [inputDescricao, setInputDescricao] = useState("");
    const [inputRegras, setInputRegras] = useState("");
    const [fotosSelecionadas, setFotosSelecionadas] = useState([]);
    const [previews, setPreviews] = useState([]);
    const [imageSrc, setImageSrc] = useState([]);

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


    // Upload multiplas fotos
    function handleMultipleChange(event) {
        const fotos = Array.from(event.target.files);

        if (fotos.length > 5) {
            toast("Você pode selecionar no máximo 5 fotos.");
            // alert("Você pode selecionar no máximo 5 fotos.");
            return;
        }
        setFotosSelecionadas(fotos);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const url = 'http://localhost:8080/imagem/upload';
        const formData = new FormData();
        fotosSelecionadas.forEach((file, index) => {
            console.log("Appending file:", file);
            formData.append(`imagens`, file);
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
            <div className='containerDescricao'>
                <form onSubmit={handleSubmit}>
                    {/* <div className='mainTitulo'>
                        <div className='tituloDesc'>
                            <h2>Seu barco</h2>
                            <hr className='linhaHr' />
                        </div>
                    </div> */}

                    <div className='inputContainer'>
                        <div className='descricaoContainer'>
                            <div className='textoDesc'>
                                <h3>Descreva sua embarcação</h3>
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
                                <h3>Descreva suas regras</h3>
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
                        <ToastContainer
                            className={"toastContainer"}
                            position="top-center"
                            autoClose={5000}
                            hideProgressBar={true}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                            transition:Bounce
                        />
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
                                    Click para selecionar
                                </button>
                                <div className='imagesList'>
                                    {previews.map((preview, index) => (
                                        <img className='imageSelecionada' key={index}
                                            src={preview}
                                        />
                                    ))}
                                    {/* {imageSrc.map((src, index) => (
                                        <img key={index} src={src} alt={`Imagem ${index}`} />
                                    ))} */}
                                    {/* {imageSrc && <img src={imageSrc} alt="Imagem carregada" />} */}

                                </div>
                            </div>

                        </div>
                        <div>


                        </div>

                    </div>
                    <div className="btnContainer">
                        <button type="submit" className="btnAnuncie">Anuncie</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default DescricaoEmbarcacao;

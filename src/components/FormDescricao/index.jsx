import React, { useEffect, useRef, useState } from 'react';
import './index.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContextGlobal } from '../../contexts/GlobalContext';
import {TextAreaInputField} from '../FormCompletarCadastro/styles.jsx'
import { useForm } from 'react-hook-form';
import { instanceMultipart } from '../../config/axios';
function DescricaoEmbarcacao(id) {
 
    const [fotosSelecionadas, setFotosSelecionadas] = useState([]);
    const [previews, setPreviews] = useState([]);
    const [imageSrc, setImageSrc] = useState([]);
    const { editando, setEditando, definirValidadeEtapa, gatilho, setGatilho } = useContextGlobal();
    const {
        register,
        handleSubmit,
        watch,
        setError,
        setValue,
        clearErrors,
        trigger,
        control,
        formState: { errors },
      } = useForm();
  
      //Para esconder o input file de origem
      const esconderInputFile = useRef(null);
      useEffect(() => {
        console.log(id)
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
        
        function onSubmit(event) {
            // event.preventDefault();
            
            const formData = new FormData();
            fotosSelecionadas.forEach((file, index) => {
                console.log("Appending file:", file);
                formData.append(`imagens`, file);
            });
            
            instanceMultipart.post('imagem/upload/66d82cd5-d24a-462e-bcf9-8b833ef1b11f', formData)
            .then((response) => {
                console.log(response.data);
                // setUploadedFiles(response.data.files);
            })
            .catch((error) => {
                console.error("Error ao fazer upload de fotos: ", error);
            });
        }
        
        const onError = (errors) => {
          console.log("Error no form", errors);
        };
    return (
        <div>
          <div className="containerDescricao">
            <form onSubmit={handleSubmit(onSubmit, onError)}>
             
              {/* Adicionando as outras seções do formulário */}
              <div className="fotosContainer">
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
                  transition="Bounce"
                />
                <div className="tituloDesc">
                  <h2>Fotos</h2>
                  <hr className="linhaHr" />
                </div>
                <div className="inputFotos">
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    ref={esconderInputFile}
                    style={{ display: 'none' }}
                    onChange={handleMultipleChange}
                  />
                  <div className="imagesList">
                    <button className="btnSelecionar" onClick={handleUploadClick}>
                      Click para selecionar
                    </button>
                    <div className="imagesList">
                      {previews.map((preview, index) => (
                        <img className="imageSelecionada" key={index} src={preview} />
                      ))}
                    </div>
                  </div>
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

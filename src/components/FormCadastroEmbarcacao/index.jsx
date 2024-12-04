import React, { useEffect, useRef, useState } from 'react';
import "./index.css";
import { useForm, Controller } from "react-hook-form";
import { instanceMultipart, axiosapi } from '../../config/axios';
import { ToastContainer, toast } from 'react-toastify';
import { useAuth } from "../../contexts/AuthContext.jsx";
import 'react-toastify/dist/ReactToastify.css';

import {
  ColorButtonCancelar,
  ColorButtonSalvar,
  ContainerTextFieldInput,
  SelectInput,
  TextFieldInput,
  TextAreaInputField,
  Titulo,
  ContainerModal,
  FormControlDiv,
} from "../FormCompletarCadastro/styles.jsx";
import { useContextGlobal } from "../../contexts/GlobalContext.jsx";

function CadastroEmbarcacoes() {
  const { idUsuario } = useAuth();
  const { editando, setEditando } = useContextGlobal();
  const [isDisabled, setIsDisabled] = useState(false);
  const [fotosSelecionadas, setFotosSelecionadas] = useState([]);
  const [idEmb, setIdEmb] = useState()
  const [previews, setPreviews] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false); 
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
  // const onSubmit = async (data, event) => {
  //   event.preventDefault();
  //   await handleCadastroEmbarcacao(data)
  //   console.log(data);

  // };
  const onError = (errors) => {
    console.log("Error no form", errors);
  };




  // useEffect(() => {
  // if (editando) {
    //   axios
    //     .get("http://localhost:8080/embarcacao/b23f42e2-7e3d-4c68-bdc6-09027dff0fbb")
    //     .then((response) => {
    //       const data = response.data;
    //       if (data.categoria == "Jet Ski") {
    //         setIsDisabled(true);
    //       }
    //       console.log(data);
    //       setValue("nome", data.nome);
    //       setValue("fabricante", data.fabricante);
    //       setValue("anoFabricacao", data.anoFabricacao);
    //       setValue("tamanho", data.tamanho);
    //       setValue("capacidade", data.capacidade);
    //       setValue("quantidadeCabines", data.quantidadeCabines);
    //       setValue("quantidadeBanheiro", data.quantidadeBanheiro);
    //       setValue("potencia", data.potencia);


    //       setValue("enderecoEmbarque", data.enderecoEmbarque);
    //       setValue("inscricao", data.inscricao);
    //       setValue("preco", data.preco);
    //       setValue("bandeira", data.bandeira);
    //     })
    //     .catch((error) => console.log(error));
  // }

  // }, []);
  const onSubmit = async (data, event) => {
    event.preventDefault();

    if (isSubmitting) {
      return; // Impede o envio se já estiver em processo de envio
    }

    setIsSubmitting(true);  // Desabilita o botão

    const embarcacao = {
      nome: data.nome,
      fabricante: data.fabricante,
      anoFabricacao: data.anoFabricacao,
      tamanho: data.tamanho,
      capacidade: data.capacidade,
      quantidadeCabines: data.quantidadeCabines,
      quantidadeBanheiro: data.quantidadeBanheiro,
      potencia: data.potencia,
      enderecoEmbarque: data.enderecoEmbarque,
      inscricao: data.inscricao,
      preco: data.preco,
      bandeira: data.bandeira,
      categoria: "TESTE",
      disponibilidade: true,
      regras: data.regras,
      descricao: data.descricao,
      usuario: {
        id: idUsuario,
      },
    };


    try {
      const response = await axiosapi.post(`embarcacao`, embarcacao);
      setIdEmb(response.data.idEmbarcacao);
      console.log("Embarcacao cadastrada com sucesso", response);

      // toast.success("Embarcação salva com sucesso!");

      // Adicionar fotos associando ao idEmbarcacao
      if (response.data.idEmbarcacao) {
        onSubmitFotos(response.data.idEmbarcacao);
      }
    } catch (error) {
      console.log("Erro ao enviar dados ao back", error.response);
      // toast.error("Erro ao salvar embarcação!");
    } finally {
      setIsSubmitting(false);  // Reabilita o botão após a operação
    }
  }

  // Adicionando fotos
  function onSubmitFotos(id) {
    const formData = new FormData();
    fotosSelecionadas.forEach((file) => {
      formData.append("imagens", file);
    });

    instanceMultipart
      .post(`imagem/upload/${id}`, formData)
      .then((response) => {
        console.log("Fotos enviadas com sucesso:", response.data);
      })
      .catch((error) => {
        console.error("Erro ao fazer upload de fotos: ", error);
      });
  }


  const handleMultipleChange = (event) => {
    const fotos = Array.from(event.target.files);
    if (fotos.length > 5) {
      toast("Você pode selecionar no máximo 5 fotos.");
      return;
    }
    setFotosSelecionadas(fotos);
  };

  useEffect(() => {
    const newPreviews = fotosSelecionadas.map((file) => URL.createObjectURL(file));
    setPreviews(newPreviews);

    return () => {
      newPreviews.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [fotosSelecionadas]);

  const esconderInputFile = useRef(null);
  const handleUploadClick = () => {
    esconderInputFile.current?.click();
  };




  return (
    <div className="container-cadastro-embarcacoes">
      <h1 className="titulo-embarcacao">Embarcação</h1>
      <form onSubmit={handleSubmit(onSubmit, onError)} className="form-section-embarcacoes">

        <ContainerTextFieldInput>
          <TextFieldInput
            fullWidth
            focused={editando}
            label="Fabricante"
            variant="outlined"
            margin="dense"
            {...register("fabricante", {
              required: "Campo obrigatório",
              minLength: 3,
            })}
            error={!!errors.fabricante}
            helperText={errors.fabricante?.message}
          />

          <TextFieldInput
            fullWidth
            focused={editando}
            label="Nome da Embarcação"
            variant="outlined"
            margin="dense"
            {...register("nome", {
              required: "Campo obrigatório",
              minLength: 3,
            })}
            error={!!errors.nome}
            helperText={errors.nome?.message}
          />
          <TextFieldInput
            fullWidth
            focused={editando}
            type="number"
            label="Ano de Fabricação"
            variant="outlined"
            margin="dense"
            {...register("anoFabricacao", {
              required: "Campo obrigatório",
              min: {
                value: 1900,
                message: "Ano inválido",
              },
              max: {
                value: new Date().getFullYear(),
                message: "Ano de fabricação não pode ser maior que o ano atual",
              },
            })}
            error={!!errors.anofabricacao}
            helperText={errors.anofabricacao?.message}
          />

          <TextFieldInput
            fullWidth
            focused={editando}
            type="number"
            label="Comprimento"
            variant="outlined"
            margin="dense"
            {...register("tamanho", {
              required: "Campo obrigatório",
              min: {
                value: 0,
                message: "Comprimento inválido",
              },
            })}
            error={!!errors.tamanho}
            helperText={errors.tamanho?.message}
          />
          <TextFieldInput
            fullWidth
            focused={editando}
            type="number"
            label="Potência"
            variant="outlined"
            margin="dense"
            {...register("potencia", {
              required: "Campo obrigatório",
              min: {
                value: 1,
                message: "Potência mínima é 1",
              },
            })}
            error={!!errors.potencia}
            helperText={errors.potencia?.message}
          />
        </ContainerTextFieldInput>

        <ContainerTextFieldInput>

          <TextFieldInput
            fullWidth
            focused={editando}
            type="number"
            label="Número de Cabines"
            variant="outlined"
            margin="dense"
            {...register("quantidadeCabines", {
              required: "Campo obrigatório",
            })}
            disabled={isDisabled}
            error={!!errors.quantidadecabines}
            helperText={errors.quantidadecabines?.message}
          />
          <TextFieldInput
            fullWidth
            focused={editando}
            type="number"
            label="Número de Banheiros"
            variant="outlined"
            margin="dense"
            {...register("quantidadeBanheiro", {
              required: "Campo obrigatório",
            })}
            disabled={isDisabled}
            error={!!errors.quantidadeBanheiro}
            helperText={errors.quantidadeBanheiro?.message}
          />

          <TextFieldInput
            fullWidth
            focused={editando}
            type="number"
            label="Capacidade"
            variant="outlined"
            margin="dense"
            {...register("capacidade", {
              required: "Campo obrigatório",
              min: {
                value: 1,
                message: "Capacidade mínima é 1",
              },
            })}
            error={!!errors.capacidade}
            helperText={errors.capacidade?.message}
          />
          <TextFieldInput
            fullWidth
            focused={editando}
            label="Cidade"
            variant="outlined"
            margin="dense"
            {...register("cidade", {
              required: "Campo obrigatório",
              minLength: 3,
            })}
            error={!!errors.cidade}
            helperText={errors.cidade?.message}
          />
          <TextFieldInput
            fullWidth
            focused={editando}
            label="Endereco de Embarque"
            variant="outlined"
            margin="dense"
            {...register("enderecoEmbarque", {
              required: "Campo obrigatório",
              minLength: 3,
            })}
            error={!!errors.enderecoEmbarque}
            helperText={errors.enderecoEmbarque?.message}
          />
        </ContainerTextFieldInput>

        <ContainerTextFieldInput>


          <TextFieldInput
            fullWidth
            focused={editando}
            label="Datas Disponíveis"
            variant="outlined"
            margin="dense"
            type="text"
            {...register("datasdisponiveis", {
              required: "Campo obrigatório",
            })}
            error={!!errors.datasdisponiveis}
            helperText={errors.datasdisponiveis?.message}
          />



          <TextFieldInput
            fullWidth
            focused={editando}
            type="number"
            label="Preço"
            variant="outlined"
            margin="dense"
            {...register("preco", {
              required: "Campo obrigatório",
              min: {
                value: 0,
                message: "Preço deve ser maior ou igual a 0",
              },
            })}
            error={!!errors.preco}
            helperText={errors.preco?.message}
          />

          <TextFieldInput
            fullWidth
            focused={editando}
            label="Inscrição IMO"
            variant="outlined"
            margin="dense"
            {...register("inscricao", {
              required: "Campo obrigatório",
              minLength: {
                value: 6,
                message: "Inscrição IMO inválida",
              },
            })}
            error={!!errors.inscricao}
            helperText={errors.inscricao?.message}
          />

          <TextFieldInput
            fullWidth
            focused={editando}
            label="Bandeira"
            variant="outlined"
            margin="dense"
            {...register("bandeira", {
              required: "Campo obrigatório",
              minLength: {
                value: 2,
                message: "Bandeira inválida",
              },
            })}
            error={!!errors.bandeira}
            helperText={errors.bandeira?.message}
          />
        </ContainerTextFieldInput>

        <div className="inputContainer">
          <div className="descricaoContainer">
            <h3>Descreva sua embarcação</h3>

            <div className="descricaoInput">
              <TextAreaInputField
                fullWidth
                multiline
                rows={7}
                label="Descrição da Embarcação"
                variant="outlined"
                margin="dense"
                {...register("descricao", {
                  required: "Campo obrigatório",
                  minLength: { value: 10, message: "Descrição muito curta" },
                })}
                error={!!errors.descricao}
                helperText={errors.descricao?.message}
                placeholder="Exemplo: Um barco lindo de 1000m²"
              />
            </div>
          </div>

          <div className="regrasContainer">
            <h3>Descreva suas regras</h3>
            <div className="regrasInput">
              <TextAreaInputField
                fullWidth
                multiline
                rows={7}
                label="Regras da Embarcação"
                variant="outlined"
                margin="dense"
                {...register("regras", {
                  required: "Campo obrigatório",
                  minLength: { value: 5, message: "Regras muito curtas" },
                })}
                error={!!errors.regras}
                helperText={errors.regras?.message}
                placeholder="Exemplo: Não é permitido o transporte de carga"
              />
            </div>
          </div>
        </div>

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
              required
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
        <button type="submit" className="btn-salvar-embarcacao">
          Salvar
        </button>
      </form>
    </div>
  );
}

export default CadastroEmbarcacoes;

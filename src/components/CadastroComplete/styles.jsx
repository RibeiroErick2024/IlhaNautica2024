import { makeStyles } from '@material-ui/styles';
import { Button, Dialog, DialogContent, DialogTitle, Select, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { purple, lightGreen, lightBlue, cyan } from '@mui/material/colors';


export const Titulo = styled(DialogTitle)(({ theme }) => ({
    color: theme.palette.getContrastText(cyan[300]),
    // backgroundColor: "#1DE59F",
    // width: "100%",
   
    /* background-color: green; */
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    color: "black",
    fontWeight: 500,
    lineHeight: "29px",
    fontSize: "1.3vw",
    color: "black",
    fontFamily: "Montserrat",
    fontWeight: 600,
    lineHeight: "29px",
    borderRadius:".8vw",
    '&:hover': {
      backgroundColor: cyan[800],
    },
  }));
export const ColorButtonSalvar = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(cyan[300]),
    backgroundColor: "#1DE59F",
    width: 150,
    color: "white",
    fontFamily: "Montserrat",
    fontWeight: 800,
    lineHeight: "29px",
    borderRadius:".8vw",
    '&:hover': {
      backgroundColor: cyan[800],
    },
  }));

export const ColorButtonCancelar = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(lightBlue[300]),
    backgroundColor: lightBlue[500],
    width: 100,
    color: "white",
    fontFamily: "Montserrat",
    fontWeight: 800,
    lineHeight: "29px",
    borderRadius:".8vw",
    borderRadius:".8vw",
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));

export const ContainerModal= styled(Dialog)(({ theme }) => ({
    color: theme.palette.getContrastText(lightBlue[300]),
    //  width: "100%",
    //  alignItems: "center",
    //  display: "flex",
    //  flexDirection: "column",
    //  justifyContent: "space-evenly",
     padding: "0 1vw",
     borderRadius: "20px",
         // '&:hover': {
    //   backgroundColor: purple[700],
    // },
  }));

export const ContainerTextFieldInput= styled(DialogContent)(({ theme }) => ({
    color: theme.palette.getContrastText(lightBlue[300]),
    // width: "10vw",
    //  alignItems: "center",
    //  display: "flex",
    //  flexDirection: "column",
    //  justifyContent: "space-evenly",
     padding: "0% 15%",

    // '&:hover': {
    //   backgroundColor: purple[700],
    // },
  }));
export const TextFieldInput= styled(TextField)(({ theme }) => ({
    color: theme.palette.getContrastText(lightBlue[300]),
    width: "80%",
     border: "2px solid rgba(19,141,147,255)",
    //  alignItems: "center",
    //  display: "flex",
    //  flexDirection: "column",
    //  justifyContent: "space-evenly",
    borderRadius: "20px",
    // '&:hover': {
    //   backgroundColor: purple[700],
    // },
  }));
  export const SelectInput= styled(Select)(({ theme }) => ({
    color: theme.palette.getContrastText(lightBlue[300]),
    width: "80%",
     border: "2px solid rgba(19,141,147,255)",
    borderRadius: "20px",
    // '&:hover': {
    //   backgroundColor: purple[700],
    // },
  }));
const useStyles = makeStyles((theme) => ({
  dialog: {
    backgroundColor: "wheat", // Cor de fundo do modal
    borderRadius: "1vw", // Bordas arredondadas do modal
  },
  paper: {
    padding: "2em", // Adiciona um pouco de padding no conteúdo do modal
  },
  title: {
    fontSize: "2vw", // Tamanho da fonte para o título
    fontWeight: "bold",
    color: "#333", // Cor do título
  },
  formContainer: {
    padding: "20px",
    backgroundColor: "white", // Fundo branco para o formulário
    borderRadius: "12px",
  },
  inputField: {
    marginBottom: "15px",
    borderRadius: "40px",
    border: "1px solid rgba(19,141,147,255)", // Bordas personalizadas
  },
  selectField: {
    marginBottom: "15px",
    borderRadius: "40px",
    border: "1px solid rgba(19,141,147,255)",
  },
  button: {
    backgroundColor: "#1DE59F", // Cor do botão
    color: "white",
    padding: "10px 20px",
    borderRadius: "12px",
    fontSize: "1vw",
    '&:hover': {
      backgroundColor: "#0f9c7f", // Cor de hover do botão
    }
  },
  dialogActions: {
    justifyContent: "space-between",
    padding: "10px 20px",
  }
}));

export default useStyles;
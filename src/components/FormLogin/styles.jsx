import { TextField,  DialogContent } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TextFieldInput = styled(TextField)(({ theme }) => ({
  width: "100%",
  "& .MuiOutlinedInput-root": {
    borderRadius: 40,
    "& fieldset": {
      borderColor: "green", // Matches the original border style
    },
  },
  "& .MuiInputBase-formControl": {
    borderRadius: 40,
    "& fieldset": {
      borderColor: "rgba(255, 255, 255, 0.829)", // Keep this consistent with original
    },
  },
  "& .MuiInputBase-input": {
    padding: "20px 45px 20px 25px", // Match the padding as per your previous style
    fontSize: "16px",
    color: "#fff",
  },
  "& .MuiInputLabel-root": {
    color: "#f7f7f7", // Matches the placeholder color
  },
}));

export const ContainerTextFieldInput = styled(DialogContent)(({ theme }) => ({
    // color: theme.palette.getContrastText(lightBlue[300]),
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  
  }));
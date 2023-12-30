import React from "react";
import { useForm } from "react-hook-form";
import { ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Divider, { dividerClasses } from "@mui/material/Divider";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Link from "@mui/material/Link";
import { SpaceBar } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  borderRadius: "16px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const errorStyles = {
  color: "#d32f2f",
  fontFamily: "Roboto",
  fontWeight: 400,
  fontSize: "0.75rem",
  lineHeight: 1.66,
  letterSpacing: "0.03333em",
  textAlign: "left",
  marginTop: "3px",
  marginRight: "14px",
  marginBottom: 0,
  marginLeft: "14px",
};

const registerObject = {
  name: "",
  pwd1: "",
  pwd2: "",
};

export default function RegisterModal({ setModalType }) {
  const [open, setOpen] = React.useState(true);
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors, isDirty, touchedFields },
  } = useForm({ defaultValues: { name: "", pwd1: "", pwd2: "" } });

  const [showPassword, setShowPassword] = React.useState(false);
 
  const onSubmit = (data) => {
    console.log(data);
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  


  const nameWatcher = watch("name");

  console.log(getValues());
  console.log(errors);

  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={style}>
          <Typography
            variant="h6"
            component={"h1"}
            sx={{ marginBottom: 3, textAlign: "center" }}
          >
            Regístrate
          </Typography>
          <Box sx={{ color: "text.disabled" }}>
            <Divider variant="middle"> O </Divider>
          </Box>
          <Box sx={{ marginTop: 3 }}>
            <TextField
              id="outlined-required"
              label="Nombre de usuario"
              fullWidth
              sx={{ marginBottom: 3 }}
              {...register("name", {
                required: "Ingresa tu nombre de usuario ",
              })}
              error={errors.name}
              helperText={errors.name && errors.name.message}
            />
            <FormControl
              required
              fullWidth
              variant="outlined"
              error={errors.pwd1}
              sx={{ marginBottom: 3 }}
            >
              <InputLabel
                sx={{ backgroundColor: "white" }}
                htmlFor="outlined-adornment-password"
              >
                Contraseña
              </InputLabel>
              <OutlinedInput
                required
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                {...register("pwd1", {
                  required: "Ingresa una contraseña",
                  minLength: {
                    value: 5,
                    message: "La contraseña debe tener al menos 5 caracteres",
                  },
                })}
                error={errors.pwd1}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
              {errors.pwd1 && (
                <Typography variant="span" sx={errorStyles}>
                  {errors.pwd1.message}
                </Typography>
              )}
            </FormControl>
            <FormControl
              required
              fullWidth
              variant="outlined"
              error={errors.pwd2}
              sx={{ marginBottom: 3 }}
            >
              <InputLabel
                sx={{ backgroundColor: "white" }}
                htmlFor="outlined-adornment-confirmPassword"
              >
                Confirma la contraseña
              </InputLabel>
              <OutlinedInput
                {...register("pwd2", {
                  required: "Confirma la contraseña",
                  // validate: 
                })}
                error={errors.pwd2}
                id="outlined-adornment-confirmPassword"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
              {errors.pwd2 && (
                <Typography variant="span" sx={errorStyles}>
                  {errors.pwd2.message}
                </Typography>
              )}
            </FormControl>
          </Box>
          <Typography variant="body2" component={"p"} sx={{ marginBottom: 3 }}>
            Si ya tienes una cuenta{" "}
            <Link
              component={"button"}
              onClick={() => setModalType("login")}
              variant="body2"
            >
              Inicia sesión!
            </Link>
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button type="submit" variant="contained">
              Iniciar Sesión
            </Button>
          </Box>
        </Box>
      </form>
    </Modal>
  );
}

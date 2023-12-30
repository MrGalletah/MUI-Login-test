import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Link from "@mui/material/Link";
import { styled } from "@mui/system";

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

const loginData = {
  name: "",
  pwd: "",
};

export default function LoginModal({ setModalType }) {
  const [open, setOpen] = React.useState(true);
  const [showPassword, setShowPassword] = React.useState(false);
  const [loginInfo, setLoginInfo] = React.useState(loginData);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log(loginInfo);
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            variant="h6"
            component={"h1"}
            sx={{ marginBottom: 3, textAlign: "center" }}
          >
            Inicia Sesión
          </Typography>
          <Box sx={{ color: "text.disabled" }}>
            <Divider variant="middle"> O </Divider>
          </Box>
          <Box component={"form"} sx={{ marginTop: 3 }}>
            <TextField
              onChange={handleInputChange}
              value={loginInfo.name}
              name="name"
              required
              id="outlined-required"
              label="Nombre de usuario"
              fullWidth
              sx={{ marginBottom: 3 }}
            />
            <FormControl
              required
              fullWidth
              variant="outlined"
              sx={{ marginBottom: 3 }}
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Contraseña
              </InputLabel>
              <OutlinedInput
                name="pwd"
                value={loginInfo.pwd}
                onChange={handleInputChange}
                required
                id="outlined-adornment-password"
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
            </FormControl>
          </Box>
          <Typography variant="body2" component={"p"} sx={{ marginBottom: 3 }}>
            Si no tienes una cuenta{" "}
            <Link
              component={"button"}
              onClick={() => setModalType("register")}
              variant="body2"
            >
              Registrate!
            </Link>
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button variant="contained">Iniciar Sesión</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

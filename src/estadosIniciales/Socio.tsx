import { Socio, Usuario } from "@/interfaces/interfaces";

// Definir dato con el que inician las variables
export const initialStateSocio: Socio = {
  nombre: "",
  correo: "",
  contrasenia: "",
  telefono: "",
  fechaNacimiento: "",
  biografia: "",
  genero: "",
  terminos: false,
};

export const initialStateUsuario: Usuario = {
  username: "",
  password: "",
};

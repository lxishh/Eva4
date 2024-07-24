export interface Socio {
  nombre: string;
  correo: string;
  contrasenia: string;
  telefono: string;
  fechaNacimiento?: string;
  biografia?: string;
  genero?: string;
  terminos: boolean;
  key?: string;
}

export interface Usuario {
  username: string;
  password: string;
}

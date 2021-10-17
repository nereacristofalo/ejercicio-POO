import { Usuario } from './usuario';

export class Administrador extends Usuario {
  nivelSeguridad = '';

  constructor(
    nombre,
    apellido,
    email,
    password,
    fechaNacimiento,
    nivelSeguridad
  ) {
    super(nombre, apellido, email, password, fechaNacimiento);
    this.nivelSeguridad = nivelSeguridad;
  }
}

export class Usuario {
  nombre = '';
  apellido = '';
  email = '';
  password = '';
  fechaNacimiento = new Date();

  constructor(nombre, apellido, email, password, fechaNacimiento) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.password = password;
    this.fechaNacimiento = fechaNacimiento;
  }

  login() {}
  logout() {}
}

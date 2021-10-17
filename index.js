import { Usuario } from './usuario';
import { Administrador } from './administrador';

const usuario = new Usuario(
  'Bilbo',
  'Baggins',
  'bilbo@gmail.com',
  'sarasa',
  new Date('05/20/1993')
);

const administrador = new Administrador(
  'El gris',
  'Gandalf',
  'gandalf@gmail.com',
  'lalala',
  new Date('12/07/1989'),
  'sudo'
);

// Write Javascript code!
const appDiv = document.getElementById('app');

const htmlUsuario = `<h1>USUARIO: ${JSON.stringify(usuario)}</h1>`;
const htmlAdministrador = `<h1>ADMINISTRADOR: ${JSON.stringify(
  administrador
)}</h1>`;

appDiv.innerHTML = `${htmlUsuario} ${htmlAdministrador}`;

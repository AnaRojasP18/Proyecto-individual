import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  listUsuarios: Usuario[] = [
    {usuario: '101', nombre: 'Agustin Melgar', apellido: 'Lopez Mateos',entrevial2:'Niños Heroes', zona:'Tesistan',descripcion:'Bache de alrededor de 40cm', tipouser: 'Bache en la calle',tiempo:'2 semanas',img:'img.jpg',estadoact:'Pendiente'},
    {usuario: '71', nombre: 'Calz del Federalismo Nte', apellido: 'Independencia',entrevial2:'Miguel Hidalgo y Costilla', zona:'Centro',descripcion:'Bache profundo', tipouser: 'Bache en avenida',tiempo:'2 semanas',img:'img12119.jpg',estadoact:'Pendiente'},
    {usuario: '123', nombre: 'Lucio Blanco', apellido: 'Don Bosco',entrevial2:'Libertad', zona:'Tesistan',descripcion:'Varios baches pequeños ', tipouser: 'Bache en la calle',tiempo:'2 semanas',img:'img02771.jpg',estadoact:'Pendiente'},
    {usuario: '134', nombre: 'Contreras Medellin', apellido: 'Arteaga',entrevial2:'Eulogio Parra', zona:'Centro',descripcion:'Bache grande (afuera de una escuela)', tipouser: 'Bache en la calle',tiempo:'1 semanas',img:'img82622.jpg',estadoact:'Pendiente'},
  ];

  constructor() { }

  getUsuario(){
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index: number){
    this.listUsuarios.splice(index, 1);
  }

  agregarUsuario(usuario: Usuario){
    this.listUsuarios.unshift(usuario);
  }
}

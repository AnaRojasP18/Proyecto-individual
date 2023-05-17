import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  listUsuarios: Usuario[] = [
    {usuario: 'ana181', nombre: 'Ana', apellido: 'Rojas', sexo: 'Femenino'},
    {usuario: 'daniel2', nombre: 'Daniel', apellido: 'Andrade', sexo: 'Masculino'},
    {usuario: 'cassandraRC', nombre: 'Cassandra', apellido: 'Ramirez', sexo: 'Femenino'},
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

import { Component, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent {
  listUsuarios: Usuario[] = []; 

  tipouser: any[] = ['Centro', 'Colonia Americana', 'Olimpica','Tesistan']
  form: FormGroup;

  constructor(private fb: FormBuilder, 
    private _usuarioService: UsuarioService,
    private router: Router,
    private _snackBar: MatSnackBar){
    
      this.form = this.fb.group({
      usuario: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      entrevial2: ['', Validators.required],
      zona: ['', Validators.required],
      descripcion: ['', Validators.required],
      tipouser: ['', Validators.required],
      tiempo: ['', Validators.required],
      img: ['', Validators.required],
      estadoact: ['', Validators.required]
    })
  }

  ngOnInit(): void{

  }

  agregarUsuario(){

  const user: Usuario ={
    usuario: this.form.value.usuario,
    nombre: this.form.value.nombre,
    apellido: this.form.value.apellido,
    entrevial2: this.form.value.entrevial2,
    zona: this.form.value.zona,
    descripcion: this.form.value.descripcion,
    tipouser: this.form.value.tipouser,
    tiempo: this.form.value.tiempo,
    img: this.form.value.img,
    estadoact: this.form.value.estadoact
  }

    this._usuarioService.agregarUsuario(user);

    this._snackBar.open('El reporte se hizo correctamente','',{
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }
}

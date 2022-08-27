import { Component, OnInit } from '@angular/core';
// IMPORTAR LAS WEÁS QUE VAMOS A USAR
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro : FormGroup; //VARIABLE INICIALIZADA DEL FORMULARIO DE TIPO FORMGROUP

  constructor(public fb : FormBuilder) {
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'contraseña': new FormControl("",Validators.required),
      'confirmacionContraseña': new FormControl("",Validators.required),
    })
   }

  ngOnInit() {
  }

  // INICIO EVENTO GUARDAR
  guardar(){
    console.log("FUNCIONA GUARDAR")
  }
  // FIN EVENTO GUARDAR

  //INICIO EVENTO LIMPIAR
  limpiar(){
    this.formularioRegistro.reset()
  }
  // FIN EVENTO LIMPIAR
  
  // INICIO EVENTO INGRESAR
  ingresar(){
    console.log("Boton ingresar funciona correctamente")
    this.formularioRegistro.reset()
  }
}

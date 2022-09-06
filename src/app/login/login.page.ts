import { Component, OnInit } from '@angular/core';
// IMPORTAR LAS WEÁS QUE VAMOS A USAR
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit { // NOMBRE DE LA CLASE, EN ESTE CASO "LoginPage"

  formularioLogin : FormGroup; //VARIABLE INICIALIZADA DEL FORMULARIO DE TIPO FORMGROUP

  constructor(public fb : FormBuilder) { // fb = ATRIBUTO DE TIPO FormBuilder 
    this.formularioLogin = this.fb.group({ // PARA INICIALIZAR EL FORMULARIO

      'nombre': new FormControl("",Validators.required), // PRIMER CAMPO REQUERIDO EN NUESTRO FORMULARIO
      'contraseña': new FormControl("",Validators.required) // SEGUNDO CAMPO REQUERIDO EN NUESTRO FORMULARIO
      
    }) // FIN DE LOS CAMPOS REQUERIDOS EN NUESTRO FORMULARIO
   }

  ngOnInit() {
  }

  //EVENTO INGRESAR
  ingresar(){
    console.log("Funciona ingresar")
  }
  // FIN EVENTO INGRESAR
}

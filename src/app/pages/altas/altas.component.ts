import { Component } from '@angular/core';
import { Persona } from 'src/app/persona';
import { PersonasService } from 'src/app/personas.service';
import { FormBuilder, Validators } from '@angular/forms';
import { UUID } from 'angular2-uuid';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-altas',
  templateUrl: './altas.component.html',
  styleUrls: ['./altas.component.css']
})
export class AltasComponent {
constructor(public personaService:PersonasService, private fb:FormBuilder, private router:Router){

}
personaFormulario=this.fb.nonNullable.group({
  nombre:['',Validators.required],
  apellido:['',Validators.required],
  correo:['',Validators.required]

})
  
onSubmit(){
  const persona:Persona={
    id:UUID.UUID(),
    nombre:this.personaFormulario.value.nombre!,
    apellido:this.personaFormulario.value.apellido!,
    correo:this.personaFormulario.value.correo!
  }
  console.log(this.personaFormulario.value)
  this.personaService.agregar(persona)
}
volver(){
  this.router.navigate(['/listado'])
}
}

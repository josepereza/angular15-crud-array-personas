import { Component, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/personas.service';
import { FormBuilder, Validators } from '@angular/forms';
import { UUID } from 'angular2-uuid';
import { ActivatedRoute, Route, Router, TitleStrategy } from '@angular/router';
import { Persona } from 'src/app/persona';
@Component({
  selector: 'app-modificaciones',
  templateUrl: './modificaciones.component.html',
  styleUrls: ['./modificaciones.component.css']
})
export class ModificacionesComponent implements OnInit{
  constructor(public personaService:PersonasService, private fb:FormBuilder,
     private router:Router,private route: ActivatedRoute){
  }
  ngOnInit(): void {
    console.log('prepersona')
    const personaId = this.route.snapshot.paramMap.get('id')!;
    this.personaService.listOne(personaId).subscribe(data=>{
      console.log('mi data',data)
      this.personaFormulario
      .patchValue({
        id:data[0].id,
        nombre: data[0].nombre,
        apellido: data[0].apellido,
        correo: data[0].correo
        
      })
    
    })
    
  }
  personaFormulario=this.fb.nonNullable.group({
    id:[''],
    nombre:['',Validators.required],
    apellido:['',Validators.required],
    correo:['',Validators.required]
  
  })
    
  onSubmit(){
   
    const persona:Persona={
      id:this.personaFormulario.value.id,
      nombre:this.personaFormulario.value.nombre!,
      apellido:this.personaFormulario.value.apellido!,
      correo:this.personaFormulario.value.correo!
    }
    console.log(this.personaFormulario.value)
    this.personaService.modificar(persona)
  }
  volver(){
    this.router.navigate(['/listado'])
  }
}

import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/persona';
import { PersonasService } from 'src/app/personas.service';
import { UUID } from 'angular2-uuid';
import {FadeIn} from '../../animation';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
  animations: [FadeIn(1200, true)]
})
export class ListadoComponent implements OnInit{
personas:Persona[]=[]
  constructor(public personaService:PersonasService){
    
  }
  ngOnInit(): void {
   this.personaService.listado().subscribe(data=>{
    this.personas=data;
   })
  }
eliminar(id:string){
  this.personaService.eliminar(id).subscribe((data)=>{
    this.personas=data

  })
 
} 
  

  
}

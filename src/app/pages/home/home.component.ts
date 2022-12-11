import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonasService } from 'src/app/personas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit {

  animal:string=''
  constructor(private personaService:PersonasService, private router:Router){

  }
  ngOnInit(): void {
    this.animal=this.personaService.prueba
  }

listado(){
this.router.navigate(['/listado'])
}
}

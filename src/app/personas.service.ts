import { Injectable } from '@angular/core';
import { filter, Observable, of, Subject } from 'rxjs';
import { Persona } from './persona';

import { UUID } from 'angular2-uuid';

let listPersonas: Persona[] = [
  {
    id:UUID.UUID(),
    nombre: 'Juan',
    apellido: 'perez',
    tipoDocumento: 'DNI',
    documento: 123424242,
    correo: 'josepsf@gmail.com',
    fechaNacimiento: new Date(),
  },
  {
    id:UUID.UUID(),

    nombre: 'Juan Antonio',
    apellido: 'pereza',
    tipoDocumento: 'DNI',
    documento: 6664242,
    correo: 'josssep@gmail.com',
    fechaNacimiento: new Date(),
  },
  {
    id:UUID.UUID(),

    nombre: 'Pedro',
    apellido: 'sanchez',
    tipoDocumento: 'DNI',
    documento: 2423424242,
    correo: 'ajosep1@gmail.com',
    fechaNacimiento: new Date(),
  },
  {
    id:UUID.UUID(),

    nombre: 'Santi',
    apellido: 'sepulveda',
    tipoDocumento: 'DNI',
    documento: 2423424242,
    correo: 'ajosep2@gmail.com',
    fechaNacimiento: new Date(),
  },
  {
    id:UUID.UUID(),

    nombre: 'Juan',
    apellido: 'sanchez',
    tipoDocumento: 'DNI',
    documento: 2423424242,
    correo: 'juan@gmail.com',
    fechaNacimiento: new Date(),
  },
  {
    id:UUID.UUID(),

    nombre: 'Pedro Marin',
    apellido: 'sanchez',
    tipoDocumento: 'DNI',
    documento: 2423424242,
    correo: 'ajosep4@gmail.com',
    fechaNacimiento: new Date(),
  },
  {
    id:UUID.UUID(),

    nombre: 'Andres',
    apellido: 'Martinez',
    tipoDocumento: 'DNI',
    documento: 2423424242,
    correo: 'ajosep5@gmail.com',
    fechaNacimiento: new Date(),
  },
];
export class PersonasService {
  prueba:string="perro"


  constructor() { }
listado():Observable<Persona[]>{
  return of(listPersonas)
}
listOne(id:string){
  let persona=listPersonas.filter(data=>data.id ===id )
  return of(persona)

}

agregar(persona:Persona){
  listPersonas.push(persona)

}
modificar(persona:Persona){
  let personaModif=listPersonas.find(data=>data.id==persona.id)!
  personaModif.nombre=persona.nombre;
  personaModif.apellido=persona.apellido;
  personaModif.correo=persona.correo
}
eliminar(id:any){
 listPersonas=listPersonas.filter(data=>data.id !== id)
 return of(listPersonas)
}
}

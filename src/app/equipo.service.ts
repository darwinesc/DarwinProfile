import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Menu } from './cabecera/menu';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  constructor(private http: HttpClient) {}

  private _menu: string = "/assets/datos.json";

  getMenu(){
    return this.http.get<Menu[]>(this._menu);
  }


  equipo:any[] =  [
    {
      nombre: 'Darwin',
      edad: 31,
      descripcion: 'Estoy probando un poco de angular. Pensé que era dificil, pero al parecer no es tan asi.' 
    },
    {
      nombre: 'Andrés',
      edad: 25,
      descripcion: 'Estoy probando un poco de angular. Pensé que era dificil, pero al parecer no es tan asi.' 
    },
    {
      nombre: 'Constanza',
      edad: 29,
      descripcion: 'Esto es una pequeña descripción. No tiene ninguna relavencia.'
    }
  ]
  
/*
  constructor() { 
      console.log("Probando servicios")
  }*/

  obtenerEquipo() {
    return this.equipo;
  }

  obtenerUno(i){
    return this.equipo[i];
  }
}

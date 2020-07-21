import { Component, OnInit } from '@angular/core';
import datos from './../../assets/datos.json';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  menu:any = datos;

  constructor() { }

  ngOnInit() {
  }

}

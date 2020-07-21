import { Component, ViewChild, TemplateRef } from '@angular/core';
import { fadeAnimation } from './animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[fadeAnimation]
})
export class AppComponent {
  personas:Array<any> = [
    {nombre:"Mark", edad:21, cargo: "Analista"},
    {nombre:"Juanito", edad:28, cargo: "Jefe"},
    {nombre:"Luchin", edad:30, cargo: "Lider"}, 
    {nombre:"Pepito", edad:25, cargo: "Developer"} 
  ]

  ngOnInit(){
    
  }
}

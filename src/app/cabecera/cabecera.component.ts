import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import datos from './../../assets/datos.json';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  

  menu:any = datos;
  public activeLan = 'es';

  constructor(private translate: TranslateService, private http: HttpClient) {
    this.translate.setDefaultLang(this.activeLan);
   }

  ngOnInit() {
  }

  public changeLanguage(lan){

    this.activeLan = lan;
    this.http.get(`../assets/i18n/${lan}.json`).subscribe(res => 
    {
      this.translate.use(lan);
      //console.log(res);
      setTimeout(() => {
      }, 800);
    });

  }

}

import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.css']
})
export class TranslationComponent implements OnInit {

  public activeLan = 'es';

  constructor( private translate: TranslateService) { 
    this.translate.setDefaultLang(this.activeLan);  
  }

  ngOnInit() {
  }

  public changeLanguage(lan){
    this.activeLan = lan;
    this.translate.use(lan);
  }
}

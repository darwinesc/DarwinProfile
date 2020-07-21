import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Animacion
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CountoModule }  from 'angular2-counto';

// Progress Bar 
import {NgProgressModule} from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';

// Servicios
import { EquipoService } from './equipo.service';

// Router 
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { InicioComponent } from './inicio/inicio.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { HabilidadesComponent, Pane } from './habilidades/habilidades.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslationComponent } from './translation/translation.component';

//Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'nosotros',component: NosotrosComponent },
  { path: 'educacion', component: EducacionComponent },
  { path: 'habilidades', component:HabilidadesComponent},
  { path: '', component: InicioComponent, pathMatch: 'full'},
  { path: 'experiencia',component:ExperienciaComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FooterComponent,
    ContactComponent,
    NosotrosComponent,
    InicioComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    Pane,
    TranslationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    CountoModule,
    NgProgressModule.withConfig({
      spinnerPosition: 'right',
      color: '#ff0000',
      thick: true,
    }),
    NgProgressHttpModule,
    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({
      // set defaults here
      percent:0,
      radius: 50,
      outerStrokeWidth: 8,
      innerStrokeWidth: 5,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      titleColor: "#FFFFFF",
      subtitle: [
        "progreso"
      ],
      unitsColor: "#FFFFFF",
      showSubtitle: false,
      animateTitle:true,
      unitsFontSize: "18",
      animation:false
    }),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [ HttpClient ]
      }
    })
  ],
  providers: [
    EquipoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { Component, OnInit, Directive, Input } from '@angular/core';
import datos from '../../assets/datos.json';

enum Pe {

  c = 60,
  shell_script = 20,
  pl_sql = 50
}

enum Poo {

  c_plusplus = 60,
  php = 60,
  java = 40,
  c_sharp = 60,
  vb_net = 70,
  java_script = 70

}

enum Framework {

  codeigniter = 70,
  net = 80,
  angular = 40

}

enum Bd {

  oracle = 50,
  mySql = 40,
  postgre = 60,
  sqlServer = 80

}

enum Cv {

  git = 40,
  svn = 70

}


@Directive({selector: 'pane'})
export class Pane {

  skdata:any = datos;
  // TODO(issue/24571): remove '!'.
  @Input() id !: string;
}

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})


export class HabilidadesComponent implements OnInit {

  Sp : typeof Pe = Pe;
  Oop : typeof Poo = Poo;
  Frmwrk : typeof Framework = Framework;
  Db : typeof Bd = Bd;
  Vc : typeof Cv = Cv;
  jsonData : typeof datos = datos;

  constructor() { }

  ngOnInit() {
    
  }

  async delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, 1000) );
  }
  

  animar = (animar:boolean) : boolean => {
    
    return true;
    
  }
  // Convierto el valor desde el Json a tipo number
  convertToNumber(str: string): number {
    return parseInt(str);
  }

}

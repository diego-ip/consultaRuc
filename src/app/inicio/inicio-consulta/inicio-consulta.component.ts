import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadorService } from '../empleador.service';
import { Empleador } from 'src/app/interface/empleador';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio-consulta',
  templateUrl: './inicio-consulta.component.html',
  styleUrls: ['./inicio-consulta.component.css']
})
export class InicioConsultaComponent implements OnInit {
  empleadores$:Observable<Empleador[]>;
  showResult:boolean=false;
  constructor(private router: Router,
              private empleadorService: EmpleadorService) { }
  
  ngOnInit() {
  }

  showDetailEmpleador(id:string){
    console.log(id);
    // por definir
    this.router.navigate(['/empleadorDetalle']);
  }

  buscarEmpleadores(){
    this.showResult = true;
    this.empleadores$ = this.empleadorService.getEmpleadores();
  }

}

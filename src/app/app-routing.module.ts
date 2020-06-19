import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioConsultaComponent } from './inicio/inicio-consulta/inicio-consulta.component';
import { EmpleadorDetailComponent } from './inicio/empleador-detail/empleador-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/empleadores', pathMatch: 'full' },
  { path: 'empleadores', component: InicioConsultaComponent },
  { path: 'empleadorDetalle', component: EmpleadorDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioConsultaComponent } from './inicio/inicio-consulta/inicio-consulta.component';
import { InicioFormComponent } from './inicio/inicio-form/inicio-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { EmpleadorDetailComponent } from './inicio/empleador-detail/empleador-detail.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InicioConsultaComponent,
    InicioFormComponent,
    EmpleadorDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[InicioFormComponent]
})
export class AppModule { }

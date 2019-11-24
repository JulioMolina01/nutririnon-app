import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraMenuComponent } from './components/barra-menu/barra-menu.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { PacientesComponent } from './components/pacientes/pacientes.component';
import { SubirdietaComponent } from './components/subirdieta/subirdieta.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { TipsComponent } from './components/tips/tips.component';
import { HistorialPacienteComponent } from './components/pacientes/historial-paciente/historial-paciente.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TablaDietaComponent } from './components/pacientes/historial-paciente/tabla-dieta/tabla-dieta.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraMenuComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HomeComponent,
    PacientesComponent,
    SubirdietaComponent,
    CalculadoraComponent,
    TipsComponent,
    HistorialPacienteComponent,
    TablaDietaComponent     
  ],  

  imports: [    
    BrowserModule,
    AppRoutingModule,
    FormsModule,  
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class AppModule { }

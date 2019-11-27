import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { PacientesComponent } from './components/pacientes/pacientes.component';
import { SubirdietaComponent } from './components/subirdieta/subirdieta.component';
import { TipsComponent } from './components/tips/tips.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { HistorialPacienteComponent } from './components/pacientes/historial-paciente/historial-paciente.component';
import { RegistrarPacienteComponent } from './components/pacientes/registrar-paciente/registrar-paciente.component';
import { AgregarTipComponent } from './components/tips/agregar-tip/agregar-tip.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'user/login', component: LoginComponent},
  { path: 'user/register', component: RegisterComponent},
  { path: 'user/profile', component: ProfileComponent},
  { path: 'pacientes', component: PacientesComponent},
  { path: 'subirdieta', component: SubirdietaComponent},
  { path: 'calculadora', component: CalculadoraComponent},
  { path: 'tips', component: TipsComponent},
  { path: 'pacientes/historialPaciente', component: HistorialPacienteComponent},
  { path: 'pacientes/registrar-paciente', component: RegistrarPacienteComponent},
  { path: 'tips/agregar-tip', component: AgregarTipComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  

exports: [RouterModule]
})

export class AppRoutingModule { }

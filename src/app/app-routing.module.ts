import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Formation} from '../model/model.formation';
import {AuthGaurdService} from '../services/auth-gaurd-service.service';
import {CongeComponent} from './conge/conge.component';
import {DownloadFichePaieComponent} from './download-fiche-paie/download-fiche-paie.component';
import {EmployeNvFormationComponent} from './employe-nv-formation/employe-nv-formation.component';
import {EmployeNVcongeComponent} from './employe-nvconge/employe-nvconge.component';
import {EmployesComponent} from './employes/employes.component';
import {FichePaieEmployeComponent} from './fiche-paie-employe/fiche-paie-employe.component';
import {FichePaiePdfComponent} from './fiche-paie-pdf/fiche-paie-pdf.component';
import {FichePaieComponent} from './fiche-paie/fiche-paie.component';
import {FormationComponent} from './formation/formation.component';
import {HomeUserComponent} from './home-user/home-user.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {MesCongesComponent} from './mes-conges/mes-conges.component';
import {MesFormationsComponent} from "./mes-formations/mes-formations.component";
import {NewFichePaieComponent} from './new-fiche-paie/new-fiche-paie.component';
import {NouveauEmployeComponent} from './nouveau-employe/nouveau-employe.component';
import {UpdateEmployeComponent} from './update-employe/update-employe.component';
import {UpdateFichePaieComponent} from './update-fiche-paie/update-fiche-paie.component';

const appRoutes: Routes = [
  {path : 'nouveau-employe', component : NouveauEmployeComponent ,  canActivate: [AuthGaurdService] },
  {path : 'nvConge', component : EmployeNVcongeComponent , canActivate: [AuthGaurdService] },
  {path : 'employe', component : EmployesComponent , canActivate: [AuthGaurdService] },
  {path : 'updateEmploye/:id', component : UpdateEmployeComponent , canActivate: [AuthGaurdService]},
  {path : 'demanderConge', component : CongeComponent , canActivate: [AuthGaurdService]},
  {path : 'login', component : LoginComponent},
  {path : 'updateFichePaie/:id', component : UpdateFichePaieComponent},
  {path : 'fichePaie', component : FichePaieComponent},
  {path : 'fichePaieEmploye', component : FichePaieEmployeComponent},
  {path : 'downloadFichePaie/:id', component : DownloadFichePaieComponent},
  {path : 'fichePaiePdf/:id', component : FichePaiePdfComponent},
  {path : 'logout', component : LogoutComponent , canActivate: [AuthGaurdService]},
  {path : 'homeuser', component : HomeUserComponent , canActivate: [AuthGaurdService]},
  {path : 'home', component : HomeComponent , canActivate: [AuthGaurdService]},
  {path : 'ajoutformation', component : FormationComponent , canActivate: [AuthGaurdService]} ,
  {path : 'newFichePaie', component : NewFichePaieComponent , canActivate: [AuthGaurdService]} ,
  {path : 'mesConges' , component : MesCongesComponent , canActivate: [AuthGaurdService]} ,
  {path : 'mesFormations' , component : MesFormationsComponent , canActivate: [AuthGaurdService]} ,
  {path : 'nvFormation', component : EmployeNvFormationComponent , canActivate: [AuthGaurdService]} ,
  {path : '' , redirectTo : '/login' , pathMatch : 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

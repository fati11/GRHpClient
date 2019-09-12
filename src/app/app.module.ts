import {HTTP_INTERCEPTORS, HttpClientModule, HttpRequest} from '@angular/common/http';
import {FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule, MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import {forwardRef, NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthGaurdService} from '../services/auth-gaurd-service.service';
import {AuthenticationService} from '../services/authentication.service';
import {BasicAuthHtppInterceptorService} from '../services/basic-auth-htpp-interceptor.service';
import {EmployeService} from '../services/employe-service.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployesComponent } from './employes/employes.component';
import { NouveauEmployeComponent } from './nouveau-employe/nouveau-employe.component';
import {RouterModule, Routes} from '@angular/router';
import { UpdateEmployeComponent } from './update-employe/update-employe.component';
import { HomeComponent } from './home/home.component';
import { CongeComponent } from './conge/conge.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import {HttpHandler} from '@angular/common/http';
import { EmployeNVcongeComponent } from './employe-nvconge/employe-nvconge.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { FormationComponent } from './formation/formation.component';
import { EmployeNvFormationComponent } from './employe-nv-formation/employe-nv-formation.component';
import { FichePaieComponent } from './fiche-paie/fiche-paie.component';
import { NewFichePaieComponent } from './new-fiche-paie/new-fiche-paie.component';
import { UpdateFichePaieComponent } from './update-fiche-paie/update-fiche-paie.component';
import { DownloadFichePaieComponent } from './download-fiche-paie/download-fiche-paie.component';
import { FichePaieEmployeComponent } from './fiche-paie-employe/fiche-paie-employe.component';
import { FichePaiePdfComponent } from './fiche-paie-pdf/fiche-paie-pdf.component';
import { MesFormationsComponent } from './mes-formations/mes-formations.component';
import { MesCongesComponent } from './mes-conges/mes-conges.component';
// @ts-ignore
// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    NouveauEmployeComponent,
    EmployesComponent,
    UpdateEmployeComponent,
    HomeComponent,
    CongeComponent,
    LoginComponent,
    LogoutComponent,
    EmployeNVcongeComponent,
    HomeUserComponent,
    FormationComponent,
    EmployeNvFormationComponent,
    FichePaieComponent,
    NewFichePaieComponent,
    UpdateFichePaieComponent,
    DownloadFichePaieComponent,
    FichePaieEmployeComponent,
    FichePaiePdfComponent,
    MesFormationsComponent,
    MesCongesComponent,
  ],
  imports: [
    BrowserModule,
    // tslint:disable-next-line:max-line-length
    AppRoutingModule, HttpClientModule, ReactiveFormsModule, FormsModule, MatAutocompleteModule, MatButtonModule, ReactiveFormsModule, MatFormFieldModule,
      MatInputModule  , BrowserAnimationsModule ,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptorService, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}


import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Conge} from '../../model/model.conge';
import {Employe} from '../../model/model.contact';
import {Formation} from '../../model/model.formation';
import {AuthenticationService} from '../../services/authentication.service';
import {EmployeService} from '../../services/employe-service.service';
import {FormationService} from '../../services/formation.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  public formation: Formation = new Formation();
  public nbrJourRestant: number;
  public dateJour: Date = new Date();
  public jour: any;
  public mois: any;
  public annee: any;
  public heure: any;
  public minute: any;
  public show = false ;
// tslint:disable-next-line:ban-types
  public employe: any = new Employe();
  // tslint:disable-next-line:max-line-length
  constructor(public formationService: FormationService , public employeService: EmployeService ,
              public authenticationService: AuthenticationService , public router: Router) {
    this.formation.statut = 'NonValide' ;
    this.jour = this.dateJour.getDay();
    this.mois = this.dateJour.getMonth();
    this.annee = this.dateJour.getFullYear();
    this.heure = this.dateJour.getHours();
    this.minute = this.dateJour.getMinutes();

    employeService.chercherEmploye(sessionStorage.getItem('username')).subscribe(data => {
      console.log(data);
      this.employe = data;
    }, error => console.log(error));
  }
      ngOnInit() {
  }
  onSave() {
    this.formation.employe = this.employe ;
    this.formationService.saveFormation(this.formation)
        .subscribe(data => {
          console.log(data) ;
          this.show = true ;
        } , error => {console.log(error) ; } ) ;
  }

  logOut() {
    this.authenticationService.logOut();
    this.router.navigate(['login']);
  }

}

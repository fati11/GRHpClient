import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {stringify} from 'querystring';
import {error} from 'util';
import {Conge} from '../../model/model.conge';
import {Employe} from '../../model/model.contact';
import {Formation} from '../../model/model.formation';
import {AuthenticationService} from '../../services/authentication.service';
import {CongeService} from '../../services/conge.service';
import {EmployeService} from '../../services/employe-service.service';
import {FormationService} from '../../services/formation.service';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {
public conge: any = new Conge() ;
public employe: any = new Employe();
public formation: any = new Formation();
show = false;
erreurConge = false ;
erreurFormation = false ;
showFormation = false ;
// tslint:disable-next-line:ban-types
etat: Object;
  // tslint:disable-next-line:max-line-length
  constructor(public congeService: CongeService , employeService: EmployeService , public formationService: FormationService , public authenticationService: AuthenticationService , public router: Router) {
    // tslint:disable-next-line:variable-name
    employeService.chercherEmploye(sessionStorage.getItem('username')).subscribe(data => {
      this.employe = data;
      this.congeService.getDernierConge(this.employe.id).subscribe(data1 => {
        this.conge = data1 ;
        console.log('data conge');
        console.log(this.conge.etatConge);
        // tslint:disable-next-line:triple-equals max-line-length
        if (this.conge.etatConge == 'valide') { this.show = true ; } else if (this.conge.etatConge == 'NonValide') { this.show = false ; } else { alert('il n existe pas de congé pour le moment') ; }
      }, error1 => {
        console.log(error1);
      }) ;
      this.formationService.getDernierFormation(this.employe.id).subscribe(data2 => {
        this.formation = data2 ;
        console.log('data formation');
        if (this.formation.statut == null ) { alert('il n existe pas de formation pour le moment');  }
        console.log(this.formation.statut);
        // tslint:disable-next-line:max-line-length triple-equals
        if (this.formation.statut == 'valide') { this.showFormation = true ; } else if (this.formation.statut == 'NonValide') { this.showFormation = false ; } else { alert('il n existe pas de formation pour le moment') ; }
      }, error1 => {
        alert('y a pas de formations pour le moment' );
      }) ;
      // tslint:disable-next-line:no-shadowed-variable
    }, error => {console.log(error); });
  }

  ngOnInit() {
  }

  logOut() {
    this.authenticationService.logOut();
    this.router.navigate(['login']);
  }
}

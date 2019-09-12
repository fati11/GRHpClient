import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Conge} from '../../model/model.conge';
import {Employe} from '../../model/model.contact';
import {AuthenticationService} from '../../services/authentication.service';
import {CongeService} from '../../services/conge.service';
import {EmployeService} from '../../services/employe-service.service';
import {UploadFileService} from '../../services/upload-file.service';

@Component({
  selector: 'app-conge',
  templateUrl: './conge.component.html',
  styleUrls: ['./conge.component.css']
})
export class CongeComponent implements OnInit {
public conge: Conge = new Conge();
public nbrJourRestant: number;
public show = false;

public dateJour: Date = new Date();
public jour: any;
public mois: any;
public annee: any;
public heure: any;
public minute: any;
// tslint:disable-next-line:ban-types
public employe: any = new Employe();
  // tslint:disable-next-line:max-line-length
  constructor(public congeService: CongeService , public employeService: EmployeService , public authenticationService: AuthenticationService , public router: Router) {
    this.conge.etatConge = 'NonValide';
    this.jour = this.dateJour.getDay();
    this.mois = this.dateJour.getMonth();
    this.annee = this.dateJour.getFullYear();
    this.heure = this.dateJour.getHours();
    this.minute = this.dateJour.getMinutes();
    // tslint:disable-next-line:variable-name
    employeService.chercherEmploye(sessionStorage.getItem('username')).subscribe(data => {
      console.log(data);
      this.employe = data;
      congeService.getNbrJoursPris(this.employe.id)
          .subscribe(data1 => {
            console.log(data1);
            this.nbrJourRestant = 30 - Number(data1) ;
          }, error => {console.log(error); } );
    }, error => console.log(error));
  }

  ngOnInit() {
  }

  onSave() {
    this.conge.employe = this.employe ;
    this.congeService.saveConge(this.conge)
        .subscribe(data => {
         console.log(data) ;
         this.show = true;
        } , error => {console.log(error) ;
                      this.show = false ;
        } ) ;
  }

  logOut() {
    this.authenticationService.logOut();
    this.router.navigate(['login']);
  }
}

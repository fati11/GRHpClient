import {HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FichePaie} from '../../model/FichePaie';
import {Employe} from '../../model/model.contact';
import {AuthenticationService} from '../../services/authentication.service';
import {CongeService} from '../../services/conge.service';
import {EmployeService} from '../../services/employe-service.service';
import {FichePaieService} from '../../services/fiche-paie.service';

@Component({
  selector: 'app-new-fiche-paie',
  templateUrl: './new-fiche-paie.component.html',
  styleUrls: ['./new-fiche-paie.component.css']
})
export class NewFichePaieComponent implements OnInit {
  fichePaie: FichePaie = new FichePaie();
  pageFiche: any;
  motCle = '';
  currentPage = 0;
  size = 5;
  pages: Array<number> ;
  employe: any = new Employe();
  // tslint:disable-next-line:max-line-length
  constructor(public http: HttpClient , public fichePaieService: FichePaieService , public router: Router , public authenticationService: AuthenticationService , public employeService: EmployeService ) {
  }

  ngOnInit() {
  }

  doSearch( ) {
    this.fichePaieService.getFichePaie(this.motCle , this.currentPage , this.size)
        .subscribe(data => {
          this.pageFiche = data;
          // @ts-ignore
          this.pages = new Array<number>(data.totalPages);
        }, error => {
          console.log(error);
        } ) ;
    this.employeService.employeByCin(this.motCle).subscribe(data => {
      this.employe = data ;
      console.log(data);
    } , error => {
      console.log(error) ;
    }) ;
  }
  chercher() {
    this.doSearch();
  }

  onDeleteEmploye(e: Employe) {
    const confirm = window.confirm('Etes vous sures??') ;
    // tslint:disable-next-line:triple-equals
    if (confirm == true) {
      this.fichePaieService.deleteFichePaie(e.id)
          .subscribe(data => {
            this.pageFiche.content.splice(this.pageFiche.content.indexOf(e), 1) ;
            console.log('supp') ;
          }, error => {
            console.log(error);
          });
    }
  }

  onUpdate(id: number) {
    this.router.navigate(['updateFichePaie',  id]);
  }

  gotoPage(i: number) {
    this.currentPage = i ;
    this.doSearch();
  }

  logOut() {
    this.authenticationService.logOut();
    this.router.navigate(['login']);
  }

  Download(id: number) {
    this.router.navigate(['downloadFichePaie',  id]);
  }
}

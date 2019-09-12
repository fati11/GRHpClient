import {HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FichePaie} from '../../model/FichePaie';
import {Employe} from '../../model/model.contact';
import {AuthenticationService} from '../../services/authentication.service';
import {EmployeService} from '../../services/employe-service.service';
import {FichePaieService} from '../../services/fiche-paie.service';

@Component({
  selector: 'app-fiche-paie-employe',
  templateUrl: './fiche-paie-employe.component.html',
  styleUrls: ['./fiche-paie-employe.component.css']
})
export class FichePaieEmployeComponent implements OnInit {
fichePaie: any = new FichePaie();
  pageFiche: any;
  currentPage = 0;
  size = 5;
  public employe: any = new Employe();
  pages: Array<number> ;
  // tslint:disable-next-line:max-line-length
  constructor( public http: HttpClient , public fichePaieService: FichePaieService , public router: Router , public authenticationService: AuthenticationService ,
               public employeService: EmployeService ) {
    this.doSearch();
  }
doSearch() {
   this.employeService.chercherEmploye(sessionStorage.getItem('username')).subscribe(data => {
    this.employe = data;
    this.fichePaieService.getFichePaieByCin(this.employe.cin , this.currentPage , this.size)
        .subscribe(data1 => {
          this.pageFiche = data1;
          // @ts-ignore
          this.pages = new Array<number>(data.totalPages);
        }, error => {
          console.log(error);
        } ) ;
  } , error => {
    console.log(error);
  });
}
  ngOnInit() {
  }
  gotoPage(i: number) {
    this.currentPage = i ;
    this.doSearch();
  }

  logOut() {
    this.authenticationService.logOut();
    this.router.navigate(['login']);
  }

  download(id: number) {
    this.router.navigate(['fichePaiePdf' , id]);
  }
}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Conge} from '../../model/model.conge';
import {Employe} from '../../model/model.contact';
import {AuthenticationService} from '../../services/authentication.service';
import {CongeService} from '../../services/conge.service';
import {EmployeService} from '../../services/employe-service.service';

@Component({
  selector: 'app-mes-conges',
  templateUrl: './mes-conges.component.html',
  styleUrls: ['./mes-conges.component.css']
})
export class MesCongesComponent implements OnInit {
public idEmploye: number;
  // tslint:disable-next-line:max-line-length
  constructor(public activatedRoute: ActivatedRoute , public congeService: CongeService ,
              public router: Router , public authenticationService: AuthenticationService
  ,           public employeService: EmployeService) {
    //  this.idConge = this.activatedRoute.snapshot.params.id ;
  }
  public conge: any = new Conge();
  pageConge: any;
  pages: Array<number> ;
  currentPage = 0;
  employe: any = new Employe();
  idConge: number;
  mode = 1 ;
  size = 5;

  ngOnInit() {
    this.doSearch();
  }
  doSearch() {
    this.employeService.chercherEmploye(sessionStorage.getItem('username')).subscribe(data => {
      this.employe = data ;
      this.idEmploye = this.employe.id ;
      this.congeService.listeConge( this.idEmploye, this.currentPage , this.size)
          .subscribe(data1 => {
            this.pageConge = data1;
            // @ts-ignore
            this.pages = new Array<number>(data1.totalPages);
          }, error => {
            console.log(error);
          } ) ;
    } , error => {
      console.log(error) ;
    });
    console.log(this.idEmploye);
  }
  gotoPage(i: number) {
    this.currentPage = i ;
    this.doSearch();
  }
  logOut() {
    this.authenticationService.logOut();
    this.router.navigate(['login']);
  }
}

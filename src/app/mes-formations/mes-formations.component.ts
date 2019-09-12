import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Conge} from "../../model/model.conge";
import {Employe} from "../../model/model.contact";
import {Formation} from "../../model/model.formation";
import {AuthenticationService} from "../../services/authentication.service";
import {CongeService} from "../../services/conge.service";
import {EmployeService} from "../../services/employe-service.service";
import {FormationService} from "../../services/formation.service";

@Component({
  selector: 'app-mes-formations',
  templateUrl: './mes-formations.component.html',
  styleUrls: ['./mes-formations.component.css']
})
export class MesFormationsComponent implements OnInit {

  public idEmploye: number;
  // tslint:disable-next-line:max-line-length
  constructor(public activatedRoute: ActivatedRoute , public formationService: FormationService ,
              public router: Router , public authenticationService: AuthenticationService
      ,       public employeService: EmployeService) {
    //  this.idConge = this.activatedRoute.snapshot.params.id ;
  }
  public formation: any = new Formation();
  pageFormation: any;
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
      this.formationService.listeFormations( this.idEmploye, this.currentPage , this.size)
          .subscribe(data1 => {
            this.pageFormation = data1;
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

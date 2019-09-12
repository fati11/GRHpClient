import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Conge} from '../../model/model.conge';
import {Formation} from '../../model/model.formation';
import {AuthenticationService} from '../../services/authentication.service';
import {FormationService} from '../../services/formation.service';

@Component({
  selector: 'app-employe-nv-formation',
  templateUrl: './employe-nv-formation.component.html',
  styleUrls: ['./employe-nv-formation.component.css']
})
export class EmployeNvFormationComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(public activatedRoute: ActivatedRoute , public formationService: FormationService , public router: Router , public authenticationService: AuthenticationService) {
    //  this.idConge = this.activatedRoute.snapshot.params.id ;
  }
  public formation: any = new Formation();
  pageFormation: any;
  pages: Array<number> ;
  currentPage = 0;
  idConge: number;
  mode = 1 ;
  size = 5;


  ngOnInit() {
    this.doSearch();
  }
  doSearch() {
    this.formationService.getFormationNV(this.currentPage , this.size)
        .subscribe(data => {
          this.pageFormation = data;
          // @ts-ignore
          this.pages = new Array<number>(data.totalPages);
        }, error => {
          console.log(error);
        } ) ;
  }
  gotoPage(i: number) {
    this.currentPage = i ;
    this.doSearch();
  }

  onValidate(formations: Formation) {
    formations.statut = 'valide' ;
    this.formationService.updateFormation(formations)
        .subscribe(data => {
          alert('mise à jour effectuée');
          this.router.navigate(['nouveau-employe']);
        }, error => {
          console.log(error);
          alert('Probléme!!!') ;
        });
  }
  onRefuse() {
    alert('le congé a été refusé');
  }

  logout() {
    this.authenticationService.logOut();
    this.router.navigate(['login']);
  }

}

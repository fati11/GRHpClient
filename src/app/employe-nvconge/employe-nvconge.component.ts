import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Conge} from '../../model/model.conge';
import {AuthenticationService} from '../../services/authentication.service';
import {CongeService} from '../../services/conge.service';

@Component({
  selector: 'app-employe-nvconge',
  templateUrl: './employe-nvconge.component.html',
  styleUrls: ['./employe-nvconge.component.css']
})
export class EmployeNVcongeComponent implements OnInit {
    // tslint:disable-next-line:max-line-length
  constructor(public activatedRoute: ActivatedRoute , public congeService: CongeService , public router: Router , public authenticationService: AuthenticationService) {
  //  this.idConge = this.activatedRoute.snapshot.params.id ;
  }
  public conge: any = new Conge();
  pageConge: any;
  pages: Array<number> ;
  currentPage = 0;
  idConge: number;
  mode = 1 ;
  size = 5;

  ngOnInit() {
this.doSearch();
  }
  doSearch() {
    this.congeService.getCongeNV(this.currentPage , this.size)
        .subscribe(data => {
          this.pageConge = data;
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

  onValidate(conges: Conge) {
    conges.etatConge = 'valide' ;
    this.congeService.updateConge(conges)
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

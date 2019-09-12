import {HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Employe} from '../../model/model.contact';
import {AuthenticationService} from '../../services/authentication.service';
import {CongeService} from '../../services/conge.service';
import {EmployeService} from '../../services/employe-service.service';

@Component({
  selector: 'app-nouveau-employe',
  templateUrl: './nouveau-employe.component.html',
  styleUrls: ['./nouveau-employe.component.css']
})
export class NouveauEmployeComponent implements OnInit {
 employe: Employe = new Employe() ;
  pageEmploye: any;
  motCle = '';
  currentPage = 0;
  size = 5;
  pages: Array<number> ;
    // tslint:disable-next-line:max-line-length
  constructor(public http: HttpClient , public employeServices: EmployeService , public router: Router , public congeService: CongeService , public authenticationService: AuthenticationService) {
      console.log('init') ;
  }

  ngOnInit() {
  }
  doSearch( ) {
    this.employeServices.getEmploye(this.motCle , this.currentPage , this.size)
        .subscribe(data => {
          this.pageEmploye = data;
          // @ts-ignore
          this.pages = new Array<number>(data.totalPages);
        }, error => {
          console.log(error);
        } ) ;
  }
  chercher() {
    this.doSearch();
  }

    onDeleteEmploye(e: Employe) {
      const confirm = window.confirm('Etes vous sures??') ;
        // tslint:disable-next-line:triple-equals
      if (confirm == true) {
          this.employeServices.deleteEmploye(e.id)
              .subscribe(data => {
                  this.pageEmploye.content.splice(this.pageEmploye.content.indexOf(e), 1) ;
                  console.log('supp') ;
              }, error => {
                  console.log(error);
              });
      }
    }

    onUpdate(id: number) {
this.router.navigate(['updateEmploye',  id]);
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

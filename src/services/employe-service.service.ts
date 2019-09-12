import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Employe} from '../model/model.contact';
import {Email} from '../model/model.email';
import {Role} from '../model/Role';
// @ts-ignore
import {map , Response} from 'rxjs/operators';
import {BasicAuthHtppInterceptorService} from './basic-auth-htpp-interceptor.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  getEmploye(motCle: string , page: number , size: number ) {
      const username = 'mohamed';
      const password = 'med';
      return this.http.get('http://localhost:8489/chercherEmployes?mc=' + motCle + '&page=' + page + '&size=' + size );
  }
  chercherEmploye(nom: string ) {
      return this.http.get('http://localhost:8489/chercherEmploye?username=' + nom );
  }
  employeByCin(cin: string) {
      return this.http.get('http://localhost:8489/EmployeByCin?cin=' + cin);
  }
  // @ts-ignore
    listCinEmployess(mc: string) {
        return this.http.get('http://localhost:8489/cinEmploye?mc=' + mc) ;
  }
  // @ts-ignore
    // tslint:disable-next-line:max-line-length
    constructor(public http: HttpClient , public basicAuthHtppInterceptorService: BasicAuthHtppInterceptorService ) { }
  saveEmploye(employe: Employe) {
      const username = 'mohamed';
      const password = 'med';
      return this.http.post('http://localhost:8489/employe', employe );
  }
    saveRole(role: Role) {
        return this.http.post('http://localhost:8489/rola', role );
    }
    getRoleByIdEmploye(id: number) {
        return this.http.get('http://localhost:8489/role/' + id);
    }
  deleteEmploye(id: number) {
      const username = 'mohamed';
      const password = 'med';
      return this.http.delete('http://localhost:8489/employe/' + id ); }
  getEmployeById(id: number ) {
      const username = 'mohamed';
      const password = 'med';

      return this.http.get('http://localhost:8489/employe/' + id);
  }

  // tslint:disable-next-line:ban-types
  updateEmploye(employe: Employe) {
      const username = 'mohamed';
      const password = 'med';
      return this.http.put('http://localhost:8489/updateEmploye/' + employe.id , employe  );
  }

}

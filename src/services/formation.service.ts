import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Conge} from '../model/model.conge';
import {Employe} from '../model/model.contact';
import {Formation} from '../model/model.formation';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  getConge(motCle: string , page: number , size: number ) {
    return this.http.get('http://localhost:8489/chercherFormation?mc=' + motCle + '&page=' + page + '&size=' + size );
  }
  getFormationNV(page: number , size: number) {
    return this.http.get('http://localhost:8489/chercherFormationNV?page=' + page + '&size=' + size);
  }
  constructor(public http: HttpClient) { }
  saveFormation(formation: Formation) {
    return this.http.post('http://localhost:8489/formation', formation);
  }
  getDernierFormation(id: number) {
    return this.http.get('http://localhost:8489/DernierFormationLance/' + id);
  }
  deleteFormation(id: number) {
    return this.http.delete('http://localhost:8489/formation/' + id ); }
  getFormationById(id: number ) {
    return this.http.get('http://localhost:8489/formation/' + id );
  }
  // tslint:disable-next-line:ban-types
  updateFormation(formation: Formation) {
    return this.http.put('http://localhost:8489/updateFormation/' + formation.id , formation );
  }
  listeFormations(id: number , page: number , size: number) {
    return this.http.get('http://localhost:8489/listesFormations/' + id + '?page=' + page + '&size=' + size);
  }
}

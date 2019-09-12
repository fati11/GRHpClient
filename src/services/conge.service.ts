import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Conge} from '../model/model.conge';
import {Employe} from '../model/model.contact';

@Injectable({
  providedIn: 'root'
})
export class CongeService {
  getConge(motCle: string , page: number , size: number ) {
    return this.http.get('http://localhost:8489/chercherConge?mc=' + motCle + '&page=' + page + '&size=' + size );
  }
  getCongeNV(page: number , size: number) {
    return this.http.get('http://localhost:8489/chercherCongesNV?page=' + page + '&size=' + size);
  }
  constructor(public http: HttpClient) { }
  saveConge(conge: Conge) {
    return this.http.post('http://localhost:8489/conge', conge);
  }
  getDernierConge(id: number) {
    return this.http.get('http://localhost:8489/DerniercongePris/' + id);
  }
  deleteConge(id: number) {
    return this.http.delete('http://localhost:8489/conge/' + id ); }
  getCongeById(id: number ) {
    return this.http.get('http://localhost:8489/conge/' + id );
  }
  // tslint:disable-next-line:variable-name
  getNbrJoursPris(id_employe: number) {
    return this.http.get('http://localhost:8489/congePris/' + id_employe ) ;
  }
  // tslint:disable-next-line:ban-types
  updateConge(conge: Conge) {
    return this.http.put('http://localhost:8489/updateConge/' + conge.id , conge );
  }
  listeConge(id: number , page: number , size: number) {
    return this.http.get('http://localhost:8489/listesConge/' + id + '?page=' + page + '&size=' + size);
  }
}

import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {FichePaie} from '../model/FichePaie';
@Injectable({
  providedIn: 'root'
})
export class FichePaieService {

  constructor(public http: HttpClient) { }
  saveFichePaie(fichePaie: FichePaie) {
    return this.http.post('http://localhost:8489/fichePaie', fichePaie);
  }
  getFichePaie(motCle: string , page: number , size: number ) {
    const username = 'mohamed';
    const password = 'med';
    return this.http.get('http://localhost:8489/fichePaies?mc=' + motCle + '&page=' + page + '&size=' + size );
  }
  deleteFichePaie(id: number) {
    const username = 'mohamed';
    const password = 'med';
    return this.http.delete('http://localhost:8489/fichePaie/' + id ); }
  getFichePaieById(id: number ) {
    return this.http.get('http://localhost:8489/fichePaie/' + id);
  }
  getFichePaieByCin(cin: string , page: number , size: number ) {
    return this.http.get('http://localhost:8489/ficheByCin?cin=' + cin + '&page=' + page + '&size=' + size);
  }
  updateFichePaie(fichePaie: FichePaie) {

    return this.http.put('http://localhost:8489/updateFichePaie/' + fichePaie.id , fichePaie  );
  }
}

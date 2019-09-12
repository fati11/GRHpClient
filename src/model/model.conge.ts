import {Employe} from './model.contact';

export class Conge {
   public id: number;
   public dateDebutConge: Date;
   public dateFinConge: Date;
   public motif: string;
   public etatConge: string;
   // tslint:disable-next-line:variable-name
   public nbrjourPris: number;
   public employe: Employe;
}

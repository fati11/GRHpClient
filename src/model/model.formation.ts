import {Employe} from './model.contact';

export class Formation {
    public id: number;
    public sujetFormation: string;
    public dateDebut: string ;
    public NbrJours: number;
    public lieu: string;
    public statut: string;
    public employe: Employe;
}

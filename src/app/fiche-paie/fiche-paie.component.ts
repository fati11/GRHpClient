import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {FichePaie} from '../../model/FichePaie';
import {Employe} from '../../model/model.contact';
import {EmployeService} from '../../services/employe-service.service';
import {FichePaieService} from '../../services/fiche-paie.service';
@Component({
  selector: 'app-fiche-paie',
  templateUrl: './fiche-paie.component.html',
  styleUrls: ['./fiche-paie.component.css']
})
export class FichePaieComponent implements OnInit {
  @ViewChild('autocomplete') public autocomplete: any;
  public employe: any = new Employe() ;
  public fichePaie: FichePaie = new FichePaie();
  public mc: string;
    searchTerm: FormControl = new FormControl();
    searchResult = [];

    constructor( public employeService: EmployeService , public fichePaieService: FichePaieService) {
        // @ts-ignore
        // @ts-ignore
        // @ts-ignore
        // @ts-ignore
        // @ts-ignore
        this.searchTerm.valueChanges
          //  .debounceTime(400)
            .subscribe(data => {
                this.employeService.listCinEmployess(data).subscribe(response => {
                    // @ts-ignore
                    this.searchResult = response ;
                });
            });
    }

  ngOnInit() {
  }

  onSave() {
        this.fichePaieService.saveFichePaie(this.fichePaie).subscribe(data => {
            console.log(data);
            alert('votre fiche de paie a été enregistré avec succes') ;
        } , error => {
            console.log(error) ;
        });
  }

  logOut() {
  }
}

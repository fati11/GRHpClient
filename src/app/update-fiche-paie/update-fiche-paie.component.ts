import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FichePaie} from '../../model/FichePaie';
import {AuthenticationService} from '../../services/authentication.service';
import {EmployeService} from '../../services/employe-service.service';
import {FichePaieService} from '../../services/fiche-paie.service';
import {UploadFileService} from '../../services/upload-file.service';

@Component({
  selector: 'app-update-fiche-paie',
  templateUrl: './update-fiche-paie.component.html',
  styleUrls: ['./update-fiche-paie.component.css']
})
export class UpdateFichePaieComponent implements OnInit {
idFichePaie: number;
  mode = 1;
fichePaie: any = new FichePaie();
  constructor(public activatedRoute: ActivatedRoute , public router: Router , public authenticationService: AuthenticationService ,
              public fichePaieService: FichePaieService ) {
    this.idFichePaie = this.activatedRoute.snapshot.params.id ;
  }

  ngOnInit() {
    this.fichePaieService.getFichePaieById(this.idFichePaie)
        .subscribe(data => {
          this.fichePaie = data ;
        }, error => {
          console.log(error) ;
        });
  }
  onUpdate() {
    this.fichePaieService.updateFichePaie(this.fichePaie)
        .subscribe(data => {
          alert('mise à jour effectuée');
          this.router.navigate(['newFichePaie']);
        }, error => {
          console.log(error);
          alert('Probléme!!!') ;
        });
  }

  logOut() {
    this.authenticationService.logOut();
    this.router.navigate(['login']);
  }
}

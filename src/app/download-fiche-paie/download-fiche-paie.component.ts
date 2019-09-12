import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FichePaie} from '../../model/FichePaie';
import {Employe} from '../../model/model.contact';
import {AuthenticationService} from '../../services/authentication.service';
import h2c from 'html2canvas';
import {EmployeService} from '../../services/employe-service.service';
import * as jsPDF from 'jspdf';
import {FichePaieService} from '../../services/fiche-paie.service';
@Component({
  selector: 'app-download-fiche-paie',
  templateUrl: './download-fiche-paie.component.html',
  styleUrls: ['./download-fiche-paie.component.css']
})
export class DownloadFichePaieComponent implements OnInit {
  idFichePaie: number;
  fichePaie: any = new FichePaie();
  employe: any = new Employe();
  salaireTotal: number;
  chargefamiliale: number;
  @ViewChild('content') content: ElementRef;
  constructor(public activatedRoute: ActivatedRoute , public router: Router , public authenticationService: AuthenticationService ,
              public fichePaieService: FichePaieService , public employeService: EmployeService) {
    this.idFichePaie = this.activatedRoute.snapshot.params.id ;
  }

  ngOnInit() {
    this.fichePaieService.getFichePaieById(this.idFichePaie)
        .subscribe(data => {
          this.fichePaie = data ;
          this.employeService.employeByCin(this.fichePaie.cin).subscribe(data1 => {
            this.employe = data1 ;
            console.log(data1);
          } , error => {
            console.log(error) ;
          }) ;
          this.chargefamiliale = Number(this.fichePaie.salaireBase) * Number(this.fichePaie.enfantAcharge) * (4 / 100) ;
          this.salaireTotal = Number(this.fichePaie.salaireBase) + Number(this.fichePaie.montantPrime) + Number(this.chargefamiliale);
        }, error => {
          console.log(error) ;
        });
  }

  downloadPdf() {
    const doc = new jsPDF('p', 'pt', 'a4');
    // tslint:disable-next-line:only-arrow-functions
    h2c(document.getElementById('content')).then(function(canvas) {
      const width = doc.internal.pageSize.getWidth();
      const height = doc.internal.pageSize.getHeight();
      const dataURL = canvas.toDataURL('image/jpeg', 1.0);
      doc.addImage(dataURL, 'jpeg', 10, 10, 700, 537, 'none');
      doc.save('mypdf.pdf');
    });
  }
}

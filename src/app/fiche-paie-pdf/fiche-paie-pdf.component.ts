import {HttpClient} from '@angular/common/http';
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import * as jsPDF from 'jspdf';
import {FichePaie} from '../../model/FichePaie';
import h2c from 'html2canvas';
import {Employe} from '../../model/model.contact';
import {AuthenticationService} from '../../services/authentication.service';
import {EmployeService} from '../../services/employe-service.service';
import {FichePaieService} from '../../services/fiche-paie.service';

@Component({
  selector: 'app-fiche-paie-pdf',
  templateUrl: './fiche-paie-pdf.component.html',
  styleUrls: ['./fiche-paie-pdf.component.css']
})
export class FichePaiePdfComponent implements OnInit {
employe: any = new Employe();
fichePaie: any = new FichePaie();
  // tslint:disable-next-line:max-line-length
  idFichePaie: number;
  chargefamiliale: number;
  salaireTotal: number;
  @ViewChild('content') content: ElementRef;
  // tslint:disable-next-line:max-line-length
  constructor( public http: HttpClient , public fichePaieService: FichePaieService , public router: Router , public authenticationService: AuthenticationService ,
               public employeService: EmployeService , public activatedRoute: ActivatedRoute)  {
    this.idFichePaie = this.activatedRoute.snapshot.params.id ;
  }

  ngOnInit() {
    this.fichePaieService.getFichePaieById(this.idFichePaie).subscribe(data => {
      this.fichePaie = data;
      this.employeService.employeByCin(this.fichePaie.cin).subscribe(data1 => {
        this.employe = data1 ;
        console.log(data1);
        this.chargefamiliale = Number(this.fichePaie.salaireBase) * Number(this.fichePaie.enfantAcharge) * (4 / 100) ;
        this.salaireTotal = Number(this.fichePaie.salaireBase) + Number(this.fichePaie.montantPrime) + Number(this.chargefamiliale);
      } , error => {
        console.log(error) ;
      }) ;
    } , error => {
      console.log(error);
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

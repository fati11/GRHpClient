import {HttpEventType, HttpResponse} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {subscribeOn} from 'rxjs/operators';
import {Employe} from '../../model/model.contact';
import {AuthenticationService} from '../../services/authentication.service';
import {EmployeService} from '../../services/employe-service.service';
import {UploadFileService} from '../../services/upload-file.service';

@Component({
  selector: 'app-update-employe',
  templateUrl: './update-employe.component.html',
  styleUrls: ['./update-employe.component.css']
})
export class UpdateEmployeComponent implements OnInit {
mode = 1;
idEmploye: number ;
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = {percentage: 0};
// tslint:disable-next-line:ban-types
public employe: any = new Employe() ;
  // tslint:disable-next-line:max-line-length
  constructor(public activatedRoute: ActivatedRoute , public employeService: EmployeService , public router: Router , private uploadService: UploadFileService , public authenticationService: AuthenticationService) {
    this.idEmploye = this.activatedRoute.snapshot.params.id ;
  }

  ngOnInit() {
 this.employeService.getEmployeById(this.idEmploye)
    .subscribe(data => {
     this.employe = data ;
    }, error => {
      console.log(error) ;
    });

  }

    onUpdate() {
        this.employeService.updateEmploye(this.employe)
            .subscribe(data => {
              alert('mise à jour effectuée');
              this.router.navigate(['nouveau-employe']);
            }, error => {
              console.log(error);
              alert('Probléme!!!') ;
            });
    }
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });

    this.selectedFiles = undefined;
  }

    logOut() {
        this.authenticationService.logOut();
        this.router.navigate(['login']);
    }
}

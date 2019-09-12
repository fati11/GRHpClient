import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import {Router} from '@angular/router';
import {Employe} from '../../model/model.contact';
import {Email} from '../../model/model.email';
import {AuthenticationService} from '../../services/authentication.service';
import {EmployeService} from '../../services/employe-service.service';
import {UploadFileService} from '../../services/upload-file.service';
import { Role } from 'src/model/Role';
@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.css']
})
export class EmployesComponent implements OnInit {
    selectedFiles: FileList;
    currentFileUpload: File;
    employe: any = new  Employe();
    public email: Email = new Email() ;
    public role: Role = new Role();
    progress: { percentage: number } = {percentage: 0};

    // tslint:disable-next-line:max-line-length
    constructor(private uploadService: UploadFileService , public employeService: EmployeService , public http: HttpClient , public  authenticationService: AuthenticationService , public router: Router) {
        this.email.texte = 'login : ' + this.employe.nom + ' paswword :' + this.employe.password;
        this.email.email = this.employe.email;
        this.email.subject = 'login and password' ;
    }

    ngOnInit() {
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

    onSave() {
        const username = 'mohamed';
        const password = 'med';
        this.role.employee = this.employe ;
        const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
        this.http.post('http://localhost:8489/sendMail',
            // tslint:disable-next-line:max-line-length
            {email: this.employe.email , texte: 'login : ' + this.employe.nom + ' password :' + this.employe.password , subject: 'login and password'} , {headers})
            .subscribe(data => {
                alert('l employé a été bien ajouté et le login et le password vous a été envoyé par mail');
                console.log(data);
            } , error => {console.log(error) ; }) ;
        this.employeService.saveEmploye(this.employe)
            .subscribe(data => {
                this.employe = data;
                console.log(data);
                // tslint:disable-next-line:no-shadowed-variable
                this.employeService.saveRole(this.role).subscribe(data1 => {
                    console.log(data1);
                } , error => {console.log(error) ; } ) ;
            } , error => {console.log(error) ; } ) ;
    }

    logOut() {
        this.authenticationService.logOut();
        this.router.navigate(['login']);
    }
}

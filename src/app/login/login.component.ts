import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Employe} from '../../model/model.contact';
import {Role} from '../../model/Role';
import {AuthenticationService} from '../../services/authentication.service';
import {EmployeService} from '../../services/employe-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    model: any = {} ;
  invalidLogin = false ;
    loading = false;
    error = '';
    role: any = new Role();
    public employe: any = new Employe();
  constructor(private router: Router,
              private loginservice: AuthenticationService , public employeService: EmployeService) {
  }

  ngOnInit() {
      // tslint:disable-next-line:no-unused-expression label-position

  }
  checkLogin() {
      this.loginservice.authenticate(this.model.username, this.model.password).subscribe(
            data => {
                sessionStorage.setItem('username', this.model.username);
                const tokenStr =  data.token;
                sessionStorage.setItem('token', tokenStr);
                this.invalidLogin = false ;
                this.employeService.chercherEmploye(this.model.username).subscribe(data1 => {
                    this.employe = data1;
                    this.employeService.getRoleByIdEmploye(this.employe.id).subscribe(data2 => {
                        this.role = data2 ;
                        console.log(this.role.roleName) ;
                        // tslint:disable-next-line:triple-equals
                        if (this.role.roleName == 'admin') {
                            this.router.navigate(['home']);
                        } else {
                            this.router.navigate(['homeuser']);
                        }
                    });
                } , error1 => {
                    console.log(error1);
                }) ;
            },
            error => {
              this.error = 'Username or password is incorrect';
              this.loading = false;
            }
        );
  }
}

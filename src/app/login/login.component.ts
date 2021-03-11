import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  isValidUser = false;

  constructor(
         private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private commonService: CommonService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        customerId: ['', Validators.required],
        password: ['', Validators.required]
    });
}
 // convenience getter for easy access to form fields
 get f() { return this.loginForm.controls; }

onSubmit() {

  this.submitted = true;

  // stop here if form is invalid
  if (this.loginForm.invalid) {
      return;
  }

  this.loading = true;
  
  this.commonService.getData()
  .subscribe(
    (data:any) => {
    
      var isValidUser = data.filter(x => x.customerId == this.f.customerId.value && x.password  == this.f.password.value).length == 1 ?true:false;
 
      if(isValidUser){
        this.router.navigate(['favorite-accounts']);
        this.commonService.isSignUp.next(true);
      }
        
    },
    error => {
      this.isValidUser =false;
      this.loading = false;
    });
      
}

}

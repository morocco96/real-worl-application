import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators,} from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { Errors, UserService } from '../shared-module';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

    authType : string = '';
    title : string = '';
    isSubmitting : boolean = false;
    authForm : FormGroup;
    errors: Errors = new Errors();

     

  constructor(private route: ActivatedRoute, 
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    ) { 
    this.authForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  ngOnInit(){
    this.route.url.subscribe(data => {
      this.authType = data[data.length - 1].path;
      this.title = (this.authType === 'login')? 'Sign in' : 'Sign Up';
      if(this.authType === 'register') {
        this.authForm.addControl('username', new FormControl('', Validators.required));
      }
    });
  }

  submitForm() {
    this.isSubmitting = true;
    this.errors = new Errors();

    let credentials = this.authForm.value;
 
    this.userService.attemptAuth(this.authType, credentials)
    .subscribe(
      data => this.router.navigateByUrl('/'),
      err => {
        this.errors = err;
        this.isSubmitting = false;
      }
    );
  }

 

}

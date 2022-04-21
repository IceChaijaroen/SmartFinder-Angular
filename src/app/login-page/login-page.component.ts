import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  postdata = {
    Email: '',
    Password: ''
  };

  getEmail(val: string) {
    console.log(val)
    this.postdata.Email = val
  }

  getPass(val: string) {
    console.log(val)
    this.postdata.Password = val
  }

  url = 'https://cabinet-api-dev.smartfinder.asia/en-US/api/v1/Account/login'


  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.post<any>(this.url, this.postdata).subscribe({
      next: data => {
        localStorage.setItem('Token', data.Data.AccessToken);
        this.router.navigate(["/hotellist"]);
      },
      error: error => {
        if(this.postdata.Email && this.postdata.Password != null){
          alert('รหัสผ่านไม่ถูกต้อง')
        }
        
      }
    })
    //   if (data.Status != 'Ok') {
    //     alert('Login Fail');
    //   } else {
    //     localStorage.setItem('Token', data.Data.AccessToken);
    //     this.router.navigate(["/hotellist"]);
    //   }
    // })
  }

}

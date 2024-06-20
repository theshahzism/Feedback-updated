// import { HttpClient } from '@angular/common/http';
// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [FormsModule,HttpClientModule],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent {
//   loginObj:Login;
//   constructor(private http: HttpClient, private router: Router){
//     this.loginObj=new Login();
//   }

//   onLogin(){
//     // debugger;
//     this.http.post("https://freeapi.miniprojectideas.com/api/User/Login",this.loginObj).subscribe((res:any)=>{
//       if(res.result){
//         alert('Login success')
//         console.log('right')
//         this.router.navigateByUrl('/dashboard')
//       }else{
//         alert(res.message)
//         console.log('wrong');
        
//       }
//     })
//   }

// }


export class Login{
  
    EmailId:string;
    Password:string;
    constructor(){
      this.EmailId='';
      this.Password='';
    }
  
}


import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) { }

  navigateToDashboard() {
    // Placeholder for user authentication logic
    this.router.navigate(['/dashboard']);
  }
}

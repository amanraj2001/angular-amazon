import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


      form=new FormGroup({
        username:new FormControl(),
        password: new FormControl()
      })

constructor(private demo:MainService) {

}


      login(){
        this.demo.auth(this.form.value.username,this.form.value.password)
      }

}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
passwordType: string = 'password';
eyeIcon: string = 'fa-eye-slash';

showLoginForm: boolean = true;

toggleLoginAndRegisterForm(){
  this.showLoginForm = !this.showLoginForm;
}

}



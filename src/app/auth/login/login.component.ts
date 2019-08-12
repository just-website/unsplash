import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ShowHideAnimation } from 'src/app/common/animations';
import { UserService } from '../../common/services/user.service';
import { User } from 'src/app/common/models/user.model';
import { Message } from 'src/app/common/models/message.model';
import { AuthorizeService } from 'src/app/common/services/authorize.service';
import { MessageService } from 'src/app/common/services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [ShowHideAnimation('hideAnimation')]
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup;
  constructor(
    private userService: UserService,
    private authorize: AuthorizeService,
    private message: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', {
        validators: [Validators.required, Validators.minLength(8)],
        updateOn: 'blur'
      })
    })
  }

  formSubmit() {
    this.verifyAuthorize();
  }

  private verifyAuthorize() {
    const formData = this.loginForm.value;
    this.userService.getUserByEmail(formData.email)
      .subscribe(
        result => {
          if (formData.password !== result.password) {
            this.message.showMessage('Ошибка', 'Пароль введён не верно')
          } else {
            this.message.showMessage('Успех', 'Успешная авторизация')
            this.authorize.login(result);
            window.setTimeout(() => {
              this.router.navigate(['/main', 'title']);
            }, 1500)
          }
        },
        error => {
          this.message.showMessage('Ошибка', error.message);
        }
      )
  }
}


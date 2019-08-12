import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ShowHideAnimation } from 'src/app/common/animations';
import { UserService } from '../../common/services/user.service';
import { User } from 'src/app/common/models/user.model';
import { MessageService } from 'src/app/common/services/message.service';
import { CustomValidator } from 'src/app/common/services/validator.service';
import { AuthorizeService } from 'src/app/common/services/authorize.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [ShowHideAnimation('hideAnimation')]
})

export class RegistrationComponent implements OnInit {
  private registForm: FormGroup;

  constructor(
    private userService: UserService,
    private message: MessageService,
    private validator: CustomValidator,
    private authorize: AuthorizeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.registForm = new FormGroup({
      'email': new FormControl('', [
        Validators.required,
        Validators.email
      ],
        [
          this.validator.uniqValueValidator('uniqEmail')
        ]),
      'password': new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(8)
        ],
        updateOn: 'blur'
      }),
      'passwordConfirm': new FormControl('', {
        validators: [
          this.validator.confirmValidator('password', 'confirmPassword'),
          Validators.required
        ],
        updateOn: 'blur'
      })
    });
  }

  formSubmit() {
    const { password, email } = this.registForm.value;
    const user = new User(password, email);
    this.userService.addUser(user)
      .subscribe(response => {
        this.message.showMessage('Успех', `Вы успешно зарегистрировали ${response.email}`);
        this.authorize.login(response);
        window.setTimeout(() => {
          this.router.navigate(['/main', 'title']);
        }, 1500)
      });
  }
}

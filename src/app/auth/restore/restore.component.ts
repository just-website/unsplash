import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/common/services/user.service';
import { MessageService } from 'src/app/common/services/message.service';
import { CustomValidator } from 'src/app/common/services/validator.service';
import { ShowHideAnimation } from 'src/app/common/animations';

@Component({
  selector: 'app-restore',
  templateUrl: './restore.component.html',
  styleUrls: ['./restore.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [ShowHideAnimation('hideAnimation')]
})

export class RestoreComponent implements OnInit {
  private restoreForm: FormGroup;
  constructor(
    private userService: UserService,
    private message: MessageService,
    private validator: CustomValidator
  ) { }

  ngOnInit() {
    this.restoreForm = new FormGroup({
      'email': new FormControl('', [
        Validators.required,
        Validators.email
      ])
    })
  }

  formSubmit() {
    const email = this.restoreForm.get('email').value;

    this.userService.getUserByEmail(email)
      .subscribe(
        user => this.message.showMessage('Успех', `Ваш пароль: ${user.password}`, 6000),
        error => {
          this.message.showMessage('Ошибка', error.message);
        }
      )
  }
}

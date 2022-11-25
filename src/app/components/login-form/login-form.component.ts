import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginFormService } from '../../services/login-form.service';

@Component({
  selector: 'app-login-form',
  styleUrls: ['./login-form.component.scss'],
  templateUrl: './login-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent {
  readonly loginForm: FormGroup = new FormGroup({ login: new FormControl(), password: new FormControl() });

  constructor(private _loginService: LoginFormService) {
  }

  onLoginFormSubmitted(loginForm: FormGroup): void {
    this._loginService.create({
      login: loginForm.get('login')?.value,
      password: loginForm.get('password')?.value,
    }).subscribe();

  }
}

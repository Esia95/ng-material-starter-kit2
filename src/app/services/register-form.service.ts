import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterFormModel } from '../models/register-form.model';

@Injectable()
export class RegisterFormService {
  constructor(private _httpClient: HttpClient) {
  }

  create(register:Omit<RegisterFormModel, "id">):Observable<RegisterFormModel> {
    return this._httpClient.post<RegisterFormModel>("https://fakestoreapi.com/users", register);
  }
}

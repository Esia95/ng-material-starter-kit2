import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductModel} from "../models/product.model";
import {Observable} from "rxjs";
import {LoginFormModel} from "../models/login-form.model";

@Injectable()
export class LoginFormService {
  constructor(private _httpClient: HttpClient) {
  }

  create(login: { password: any; login: any }): Observable<LoginFormModel> {
    return this._httpClient.post<LoginFormModel>('https://fakestoreapi.com/auth/login', login);
  }
}


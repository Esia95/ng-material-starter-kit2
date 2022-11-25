import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeFormModel } from '../models/employee-form.model';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class EmployeeFormService {
  constructor(private _httpClient: HttpClient) {
  }

  create(employee: Omit<EmployeeFormModel, 'id'>): Observable<EmployeeFormModel> {
    return this._httpClient.post<EmployeeFormModel>('https://dummy.restapiexample.com/api/v1/create', employee);
  }
}

import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeFormService } from '../../services/employee-form.service';

@Component({
  selector: 'app-employee-form',
  styleUrls: ['./employee-form.component.scss'],
  templateUrl: './employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFormComponent {
  readonly employeeForm: FormGroup = new FormGroup({
    name: new FormControl(),
    age: new FormControl(),
    salary: new FormControl()
  });
  constructor(private _employeeService: EmployeeFormService) {
  }
  onEmployeeFormSubmitted(employeeForm: FormGroup): void {
    this._employeeService.create({
      name: employeeForm.get('name')?.value,
      age: employeeForm.get('age')?.value,
      salary: employeeForm.get('salary')?.value,
    }).subscribe();
  }
}

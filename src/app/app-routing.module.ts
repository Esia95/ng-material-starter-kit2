import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { ProductFormComponentModule } from './components/product-form/product-form.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { EmployeeFormComponentModule } from './components/employee-form/employee-form.component-module';
import { EmployeeFormServiceModule } from './services/employee-form.service-module';
import { LoginFormComponentModule } from './components/login-form/login-form.component-module';
import { LoginFormServiceModule } from './services/login-form.service-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { RegisterFormComponentModule } from './components/register-form/register-form.component-module';
import { RegisterFormServiceModule } from './services/register-form.service-module';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'create-product', component: ProductFormComponent },
    { path: 'create-employee', component: EmployeeFormComponent },
    { path: 'login', component: LoginFormComponent },
    { path: 'register', component: RegisterFormComponent }
  ]), ProductFormComponentModule,
    ProductServiceModule,
    EmployeeFormComponentModule,
    EmployeeFormServiceModule,
    LoginFormComponentModule,
    LoginFormServiceModule,
    CategoriesServiceModule,
    RegisterFormComponentModule,
    RegisterFormServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

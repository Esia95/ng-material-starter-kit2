import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Observable} from "rxjs";
import {ProductModel} from "../../models/product.model";
import {CategoriesService} from "../../services/categories.service";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product-form',
  styleUrls: ['./product-form.component.scss'],
  templateUrl: './product-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFormComponent {
  readonly productForm: FormGroup = new FormGroup({
    title: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
    image: new FormControl() });
  readonly list$: Observable<ProductModel[]> = this._categoriesService.getAll();

  constructor(private _productsService: ProductService, private _categoriesService:CategoriesService) {
  }

  onProductFormSubmitted(productForm: FormGroup): void {
    this._productsService.create({
      title: productForm.get('title')?.value,
      category: productForm.get('category')?.value,
      price: productForm.get('price')?.value,
      description: productForm.get('description')?.value,
      image: productForm.get('image')?.value,
    }).subscribe();
  }
}

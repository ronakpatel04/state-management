import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { ProductEffects } from './store/product.effects';
import { productReducer } from './store/product.reducer';



@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('products', productReducer),
    EffectsModule.forFeature([ProductEffects]),
    MatTableModule,
    MatInputModule,
    MatFormFieldModule

  ],
  exports:[ProductListComponent]
})
export class ProductsModule { }

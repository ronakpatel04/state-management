import { createReducer, on } from '@ngrx/store';
import { loadProductsFailure, loadProductsSuccess } from './product.action';

export interface ProductState {
  products: any[];
  error: any;
}

export const initialState: ProductState = {
  products: [],
  error: null
};

export const productReducer = createReducer(
  initialState,
  on(loadProductsSuccess, (state, { products }) => ({ ...state, products })),
  on(loadProductsFailure, (state, { error }) => ({ ...state, error }))
);


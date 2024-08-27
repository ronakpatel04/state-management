import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadProducts } from '../store/product.action';
import { selectAllProducts } from '../store/product.selectors';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products$: Observable<any[]>;
  displayedColumns: string[] = ['id', 'title', 'price'];
  searchTerm: string = '';
  dataSource!: MatTableDataSource<any>;  

  constructor(private store: Store) { 
    this.products$ = this.store.pipe(select(selectAllProducts));

  }

  ngOnInit(): void {
    this.store.dispatch(loadProducts());
    this.store.pipe(select(selectAllProducts)).subscribe(products => {
      this.dataSource = new MatTableDataSource(products); 
    });

  }
  applyFilter(event: Event) {
    const input = event.target as HTMLInputElement; 
    this.searchTerm = input.value.trim().toLowerCase(); 
    this.dataSource.filter = this.searchTerm;
  }
}

import { Component, EventEmitter, inject } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search/search.component';
import { MatButton } from '@angular/material/button';
import { HeaderComponent } from '../header/header.component';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ProductCardComponent, CommonModule, SearchComponent, MatButton],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  productsList: any [] = [];

  filteredProducts: any[] = [];

  productService = inject(ProductService)

  ngOnInit() {
    this.productsList = this.productService.products;
    this.filteredProducts = this.productsList;
  }

  viewProduct(event: any) {
    console.log('Product View: ', event);
  }

  onSearch(searchData: string) {
    console.log('From Home: ', searchData);

    if (searchData) {
      this.filteredProducts = this.productsList.filter(
        (product) =>
          product.name.toLowerCase().includes(searchData.toLowerCase()) ||
          product.brand.toLowerCase().includes(searchData.toLowerCase())
      );
      console.log('Filtered Product: ', this.filteredProducts);
    } else {
      this.filteredProducts = this.productsList;
    }
  }
}

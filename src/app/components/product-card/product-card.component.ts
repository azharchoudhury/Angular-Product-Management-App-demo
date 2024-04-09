import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})

export class ProductCardComponent {
  @Input() product: any;

  @Output() productEvent = new EventEmitter<string>()

  view(){
    console.log("View clicked");
    this.productEvent.emit(this.product.id);
  }
}

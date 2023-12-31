import { Component, Input } from '@angular/core';
import { ICoffee } from '../../../../interfaces/coffee.model';

@Component({
  selector: 'app-coffee-card',
  standalone: true,
  imports: [],
  templateUrl: './coffee-card.component.html',
  styleUrl: './coffee-card.component.css'
})
export class CoffeeCardComponent {
  @Input() coffee!: ICoffee;
}

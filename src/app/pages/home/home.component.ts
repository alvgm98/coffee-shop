import { Component } from '@angular/core';
import { CoffeesComponent } from '../coffees/coffees.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CoffeesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

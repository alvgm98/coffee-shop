import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { CoffeeService } from '../../services/coffee.service';
import { ICoffee } from '../../interfaces/coffee.model';
import { CoffeeCardComponent } from './components/coffee-card/coffee-card.component';

@Component({
  selector: 'app-coffees',
  standalone: true,
  imports: [NgClass, CoffeeCardComponent],
  templateUrl: './coffees.component.html',
  styleUrl: './coffees.component.css'
})
export class CoffeesComponent implements OnInit {

  coffees!: ICoffee[];
  availableSelected: boolean = false;

  constructor(private _coffeeService: CoffeeService) {}

  ngOnInit(): void {
    this._coffeeService.getCoffees().subscribe(response => {
      console.log("Response: ", response);
      this.coffees = response;
    })
  }

  selectAllProducts() {
    this.availableSelected = false;
  }

  selectAvaibleProducts() {
    this.availableSelected = true;
  }


}

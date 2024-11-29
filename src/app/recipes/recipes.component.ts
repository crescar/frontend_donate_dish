import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { DishService } from '../shared/services/dish.service';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [HeaderComponent, CommonModule, FormsModule],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss'
})
export class RecipesComponent implements OnInit {

  constructor(
    private readonly dishServices: DishService
  ) { }

  dishes: any = [];
  currentPage: number = 1;
  totalPages: number = 1;
  totalItems: number = 0;
  itemsPerPage: number = 10;
  currentSearch: string = '';
  selectItem: any = null;

  ngOnInit() {
    this.loadDishes(this.currentPage);
  }

  loadDishes(page: number, search?: string) {
    this.dishServices.getDishes(page, 10, search).subscribe((response: any) => {
      this.dishes = response.data.items || [];
      this.currentPage = response.data.page;
      this.totalPages = response.data.totalPages;
      this.totalItems = response.data.totalItems;
    });
  }

  searchOrders(event: any){
    this.currentSearch = event.target.value;
    this.loadDishes(this.currentPage, event.target.value)
  }

  onPageChange(page: number) {
    if (page < 1 || page > this.totalPages) {
      return;
    }
    this.loadDishes(page, this.currentSearch);
  }


}

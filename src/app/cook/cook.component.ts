import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CookService } from '@shared/services/cook.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cook',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './cook.component.html',
  styleUrl: './cook.component.scss'
})
export class CookComponent implements OnInit {

  plates: any[] = [];
  currentPage: number = 1;
  totalPages: number = 1;
  totalItems: number = 0;
  itemsPerPage: number = 10;

  options:any = [];

  constructor(private cookServices: CookService) {}

  ngOnInit() {
    this.getStatus();
    this.loadOrders(this.currentPage);
  }

  loadOrders(page: number) {
    this.cookServices.getOrders(page, this.itemsPerPage).subscribe((response: any) => {
      this.plates = response.data.items || [];
      this.currentPage = response.data.page;
      this.totalPages = response.data.totalPages;
      this.totalItems = response.data.totalItems;
    });
  }

  onPageChange(page: number) {
    this.loadOrders(page);
  }

  generatePlates(){
    this.cookServices.postOrders().subscribe(() => {
      this.loadOrders(this.currentPage);
    });
  }

  getStatus(){
    this.cookServices.getOrderStatus().subscribe((response: any) => {
      this.options = response.data;
    });
  }

}

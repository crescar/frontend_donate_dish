import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { CookService } from '@shared/services/cook.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-plates',
  standalone: true,
  imports: [HeaderComponent, CommonModule, FormsModule],
  templateUrl: './plates.component.html',
  styleUrl: './plates.component.scss'
})
export class PlatesComponent implements OnInit {

  plates:any = []
  currentPage: number = 1;
  totalPages: number = 1;
  totalItems: number = 0;
  itemsPerPage: number = 10;

  options:any = [];

  updateStatus!: any;

  constructor(private cookServices: CookService) {}

  ngOnInit() {
    this.getStatus();
  }

  loadOrders(page: number, status:number = 2) {
    this.cookServices.getOrders(page, this.itemsPerPage, status).subscribe((response: any) => {
      this.plates = response.data.items || [];
      this.currentPage = response.data.page;
      this.totalPages = response.data.totalPages;
      this.totalItems = response.data.totalItems;
    });
  }

  onPageChange(page: number) {
    this.loadOrders(page);
  }

  onChangeStatus(orderId: number) { 
    this.cookServices.updateOrderStatus(orderId, this.updateStatus).subscribe((response: any) => {
      this.loadOrders(this.currentPage);
    });
  }

  getStatus(){
    this.cookServices.getOrderStatus().subscribe((response: any) => {
      this.options = response.data;
      this.loadOrders(this.currentPage);
    });
  }

}

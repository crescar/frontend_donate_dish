import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StorageService } from '../shared/services/storage.service';

@Component({
  selector: 'app-storage',
  standalone: true,
  imports: [HeaderComponent, CommonModule, FormsModule],
  templateUrl: './storage.component.html',
  styleUrl: './storage.component.scss'
})
export class StorageComponent implements OnInit {

  storages: any = [];
  currentPage: number = 1;
  totalPages: number = 1;
  totalItems: number = 0;
  itemsPerPage: number = 10;
  currentSearch: string = '';


  constructor(
    private storageService: StorageService
  ) { }

  ngOnInit() {
    this.loadStorage(this.currentPage);
  }

  loadStorage(page: number, search?:any) {
    this.storageService.getStorage(page,10,search).subscribe((response: any) => {
      this.storages = response.data.items || [];
      this.currentPage = response.data.page;
      this.totalPages = response.data.totalPages;
      this.totalItems = response.data.totalItems;
    });
  }

  searchOrders(event: any){
    this.currentSearch = event.target.value;
    this.loadStorage(this.currentPage, event.target.value)
  }

  onPageChange(page: number) {
    if (page < 1 || page > this.totalPages) {
      return;
    }
    this.loadStorage(page, this.currentSearch);
  }


}

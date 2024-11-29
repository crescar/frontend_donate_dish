import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StorageService } from '../shared/services/storage.service';

@Component({
  selector: 'app-shopping-logs',
  standalone: true,
  imports: [HeaderComponent, CommonModule, FormsModule],
  templateUrl: './shopping-logs.component.html',
  styleUrl: './shopping-logs.component.scss'
})
export class ShoppingLogsComponent implements OnInit {

  constructor(
    private readonly storageService: StorageService
  ) { }

  logs: any = [];
  currentPage: number = 1;
  totalPages: number = 1;
  totalItems: number = 0;
  itemsPerPage: number = 10;

  ngOnInit() {
    this.loadLogs(this.currentPage);
  }

  loadLogs(page: number) {
    this.storageService.getStorageLogs(page, 10).subscribe((response: any) => {
      this.logs = response.data.items || [];
      this.currentPage = response.data.page;
      this.totalPages = response.data.totalPages;
      this.totalItems = response.data.totalItems;
    });
  }

  onPageChange(page: number) {
    if (page < 1 || page > this.totalPages) {
      return;
    }
    this.loadLogs(page);
  }

}

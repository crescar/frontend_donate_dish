
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CookService } from '@shared/services/cook.service';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { StorageService } from './shared/services/storage.service';
import { DishService } from './shared/services/dish.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HttpClientModule],
  providers: [CookService, StorageService, DishService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cooking';
}

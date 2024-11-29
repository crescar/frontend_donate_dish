import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  private readonly base = `${environment.apiBaseUrl}/dish`;

  constructor(private httpClient: HttpClient) { }

  getDishes(page: number, limit: number, search?:string): Observable<any> {
    return this.httpClient.get<any>(`${this.base}/?page=${page}&limit=${limit}${search ? `&search=${search}` : ''}`);
  }
}

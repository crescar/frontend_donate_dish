import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CookService {

  private readonly base = `${environment.apiBaseUrl}/order`;

  constructor(private httpClient: HttpClient) {}

  getOrders(page: number, limit: number, status?:any, search?:string): Observable<any> {
    return this.httpClient.get<any>(`${this.base}/?page=${page}&limit=${limit}${status ? `&status=${status}` : ''}${search ? `&search=${search}` : ''}`);
  }

  postOrders() {
    return this.httpClient.post(`${this.base}`, {});
  }

  getOrderStatus() {
    return this.httpClient.get(`${this.base}/status`);
  }

  getOrderById(id: number) {
    return this.httpClient.get(`${this.base}/${id}`);
  }

  updateOrderStatus(id: number, statusId: number
  ) {
    return this.httpClient.put(`${this.base}/${id}`, { statusId });
  }
}

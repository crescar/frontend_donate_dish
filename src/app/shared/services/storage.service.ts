import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private readonly base = `${environment.apiBaseUrl}/storage`;

  constructor(private httpClient: HttpClient) { }

  getStorage(page: number, limit: number, search?:string): Observable<any> {
    return this.httpClient.get<any>(`${this.base}/?page=${page}&limit=${limit}${search ? `&search=${search}` : ''}`);
  }

  getStorageLogs(page: number, limit: number, status?:any, search?:string): Observable<any> {
    return this.httpClient.get<any>(`${this.base}/shoppingLogs/?page=${page}&limit=${limit}`);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShoppingList } from './list-interface';

@Injectable({
  providedIn: 'root',
})
export class ListManagerService {
  constructor(private http: HttpClient) {}

  getShoppingList = (): Observable<ShoppingList> =>
    this.http.get<ShoppingList>('/api/shopping-list');
}

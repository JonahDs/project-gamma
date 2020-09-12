import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  CreateShoppingListElement,
  ShoppingListElement,
} from '../list-abstraction/list-interface';

@Injectable({
  providedIn: 'root',
})
export class ListApiService {
  constructor(private http: HttpClient) {}

  getShoppingList$ = (): Observable<ShoppingListElement[]> =>
    this.http.get<ShoppingListElement[]>(`${environment.apiUrl}/shopping-list`);

  postShoppingList$ = (
    element: CreateShoppingListElement
  ): Observable<ShoppingListElement> =>
    this.http.post<ShoppingListElement>(
      `${environment.apiUrl}/shopping-list/create`,
      element
    );
}

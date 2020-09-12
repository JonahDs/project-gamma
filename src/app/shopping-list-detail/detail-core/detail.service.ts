import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Details } from '../detail-abstraction/details.interface';

@Injectable({
  providedIn: 'root',
})
export class DetailService {
  constructor(private http: HttpClient) {}

  getDetails$ = (id: string): Observable<Details> =>
    this.http.get<Details>(`${environment.apiUrl}/shopping-list/details/${id}`);
}

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ShoppingList } from '../../list-abstraction/list-interface';
import { ListApiService } from '../list-api.service';
import { fetchError, fetchList, fetchSuccess } from './list-actions';
@Injectable()
export class ListEffects {
  constructor(private api: ListApiService, private actions$: Actions) {}

  getShoppingList$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchList),
      mergeMap(() =>
        this.api.getShoppingList$().pipe(
          map((data: ShoppingList) => fetchSuccess({ payload: data })),
          catchError((error) => of(fetchError({ error })))
        )
      )
    )
  );
}

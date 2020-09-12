import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ShoppingListElement } from '../../list-abstraction/list-interface';
import { ListApiService } from '../list-api.service';
import {
  fetchError,
  fetchItemSucces,
  fetchList,
  fetchSuccess,
  postShoppingList,
} from './list-actions';
@Injectable()
export class ListEffects {
  constructor(private api: ListApiService, private actions$: Actions) {}

  getShoppingList$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchList),
      mergeMap(() =>
        this.api.getShoppingList$().pipe(
          map((data: ShoppingListElement[]) => fetchSuccess({ payload: data })),
          catchError((error) => of(fetchError({ error })))
        )
      )
    )
  );

  postShoppingList$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(postShoppingList),
      mergeMap((item) =>
        this.api.postShoppingList$(item.payload).pipe(
          map((data: ShoppingListElement) =>
            fetchItemSucces({ payload: data })
          ),
          catchError((error) => of(fetchError({ error })))
        )
      )
    )
  );
}

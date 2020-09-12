import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { DetailService } from '../detail.service';
import { fetchDetails, fetchSuccess, hasError } from './detail-actions';

@Injectable()
export class DetailEffects {
  constructor(private api: DetailService, private actions$: Actions) {}

  getDetails$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchDetails),
      mergeMap((props) =>
        this.api.getDetails$(props.id).pipe(
          map(
            (data) => fetchSuccess({ payload: data }),
            catchError((error) => of(hasError({ error })))
          )
        )
      )
    )
  );
}

import { createAction, props } from '@ngrx/store';
import { Details } from '../../detail-abstraction/details.interface';

export const fetchDetails = createAction(
  '[Details] - Start Fetching',
  props<{ id: string }>()
);

export const isFetching = createAction('[Details] - Fetching');

export const hasError = createAction(
  '[Details] - Error',
  props<{ error: string }>()
);

export const fetchSuccess = createAction(
  '[Details] - Success',
  props<{ payload: Details }>()
);

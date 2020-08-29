import { createAction, props } from '@ngrx/store';
import { ShoppingList } from '../../list-abstraction/list-interface';

export const fetchList = createAction('[ShoppingList] - Start fetching');

export const isFetching = createAction('[ShoppingList] - Is fetching');

export const fetchSuccess = createAction(
  '[ShoppingList] - Success',
  props<{ payload: ShoppingList }>()
);

export const fetchError = createAction(
  '[ShoppingList] - Error',
  props<{ error: string }>()
);

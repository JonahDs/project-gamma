import { createAction, props } from '@ngrx/store';
import {
  CreateShoppingListElement,
  ShoppingListElement,
} from '../../list-abstraction/list-interface';

export const fetchList = createAction('[ShoppingList] - Start fetching');

export const isFetching = createAction('[ShoppingList] - Is fetching');

export const fetchSuccess = createAction(
  '[ShoppingList] - Success',
  props<{ payload: ShoppingListElement[] }>()
);

export const fetchItemSucces = createAction(
  '[ShoppingList] - Success Item',
  props<{ payload: ShoppingListElement }>()
);

export const fetchError = createAction(
  '[ShoppingList] - Error',
  props<{ error: string }>()
);

export const postShoppingList = createAction(
  '[ShoppingList] - Post',
  props<{ payload: CreateShoppingListElement }>()
);

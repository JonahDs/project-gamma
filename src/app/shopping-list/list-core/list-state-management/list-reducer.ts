import { Action, createReducer, on } from '@ngrx/store';
import { ShoppingListElement } from '../../list-abstraction/list-interface';
import {
  fetchError,
  fetchItemSucces,
  fetchList,
  fetchSuccess,
  isFetching,
  postShoppingList,
} from './list-actions';
import { initializeState, ListState } from './state';

export const initialState = initializeState();

const reducer = createReducer(
  initialState,
  on(isFetching, (state) => ({ ...state, isFetching: true })),
  on(fetchList, (state) => ({ ...state })),
  on(fetchSuccess, (state, { payload }) => ({
    ...state,
    shoppingList: payload,
    isFetching: false,
  })),
  on(postShoppingList, (state) => ({ ...state })),
  on(fetchItemSucces, (state, { payload }) => ({
    ...state,
    shoppingList: [...state.shoppingList, payload],
    isFetching: false,
  })),
  on(fetchError, (state, { error }) => ({ ...state, error, isFetching: false }))
);

export function listReducer(
  state: ListState | undefined,
  action: Action
): { error: string; shoppingList: ShoppingListElement[] } {
  return reducer(state, action);
}

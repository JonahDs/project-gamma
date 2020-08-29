import { Action, createReducer, on } from '@ngrx/store';
import { ShoppingList } from '../../list-abstraction/list-interface';
import {
  fetchError,
  fetchList,
  fetchSuccess,
  isFetching,
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
  on(fetchError, (state, { error }) => ({ ...state, error, isFetching: false }))
);

export function listReducer(
  state: ListState | undefined,
  action: Action
): { error: string; shoppingList: ShoppingList } {
  return reducer(state, action);
}

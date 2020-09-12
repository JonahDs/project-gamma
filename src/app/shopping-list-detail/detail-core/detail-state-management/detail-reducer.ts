import { Action, createReducer, on } from '@ngrx/store';
import {
  fetchDetails,
  fetchSuccess,
  hasError,
  isFetching,
} from './detail-actions';
import { DetailState, initializeState } from './detail-state';

const initialState = initializeState();

const reducer = createReducer(
  initialState,
  on(isFetching, (state) => ({ ...state, isFetching: true })),
  on(fetchDetails, (state) => ({ ...state })),
  on(fetchSuccess, (state, { payload }) => ({
    ...state,
    details: payload,
    isFetching: false,
  })),
  on(hasError, (state, { error }) => ({ ...state, error, isFetching: false }))
);

export function detailReducer(
  state: DetailState | undefined,
  action: Action
): DetailState {
  return reducer(state, action);
}

import { ShoppingList } from '../../list-abstraction/list-interface';

export interface ListState {
  shoppingList: ShoppingList;
  isFetching: boolean;
  error: string;
}

export interface SelectedState {
  canAdd: boolean;
}

export const initializeState = (): ListState => {
  return { shoppingList: null, isFetching: false, error: null };
};

export const initializeSelectedState = (): SelectedState => {
  return { canAdd: true };
};

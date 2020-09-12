import { ShoppingListElement } from '../../list-abstraction/list-interface';

export interface ListState {
  shoppingList: ShoppingListElement[];
  isFetching: boolean;
  error: string;
}

export const initializeState = (): ListState => {
  return { shoppingList: null, isFetching: false, error: null };
};

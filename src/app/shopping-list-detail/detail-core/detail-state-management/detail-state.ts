import { Details } from '../../detail-abstraction/details.interface';

export interface DetailState {
  isFetching: boolean;
  error: string;
  details: Details;
}

export const initializeState = (): DetailState => {
  return { isFetching: false, error: null, details: null };
};

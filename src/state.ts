import { writable } from 'svelte/store';
import produce from 'immer';

export interface RootState {
  myGif: string;
  gifList: []
}

export const initialState: RootState = {
  myGif: '',
  gifList: []
}

const STORE = writable(initialState)

export const dispatch = (recipe: (draft: { myGif: string; gifList: []; }) => RootState) => {
  STORE.update(state => produce(state, recipe))
}

const getStore = () => STORE;

export default { getStore, dispatch }
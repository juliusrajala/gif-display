import { writable } from 'svelte/store';
import produce from 'immer';

export interface GifItem {
  sourceUrl: string
  sender: string;
  id: string;
  isVisible: boolean;
  sessionId: String;
}

export interface RootState {
  myGif: string;
  gifList: GifItem[]
}

export const initialState: RootState = {
  myGif: '',
  gifList: [
    { sessionId: 'lefg', sourceUrl: 'https://media.giphy.com/media/jTTCZumAdEj43utbnz/giphy.gif', sender: 'Julius', id: 'abc', isVisible: false },
    { sessionId: 'lefg', sourceUrl: 'https://media.giphy.com/media/jTTCZumAdEj43utbnz/giphy.gif', sender: 'Identian', id: '123', isVisible: true },
    { sessionId: 'lefg', sourceUrl: 'https://media.giphy.com/media/jTTCZumAdEj43utbnz/giphy.gif', sender: 'Identian', id: '123', isVisible: false }
  ]
}

const STORE = writable(initialState)

export const dispatch = (recipe: (draft: { myGif: string; gifList: []; }) => RootState) => {
  STORE.update(state => produce(state, recipe))
}

export const getStore = () => STORE;

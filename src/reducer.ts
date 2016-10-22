import { Action } from '@ngrx/store'

export const initialState = [
  { id: 0, title: 'Paco' },
  { id: 1, title: 'Pepe' }
]

export const ADD_LIST = 'ADD_LIST'

export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ADD_LIST:
      const list = action.payload
      return [...state, list]

    default:
      return state;
  }
}
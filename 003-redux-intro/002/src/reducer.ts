import { Action } from '@ngrx/store'

export const initialState = [
  { title: 'Paco' },
  { title: 'Pepe' }
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
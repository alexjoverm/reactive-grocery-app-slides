import { Action } from '@ngrx/store'

// 4/ Definimos estado inicial
export const initialState = [
  { title: 'Paco' },
  { title: 'Pepe' }
]

// Definimos tipos de actions
export const ADD_LIST = 'ADD_LIST';

// 13/ Creamos reducer, pasando el estado inicial y un parámetro action
export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
}
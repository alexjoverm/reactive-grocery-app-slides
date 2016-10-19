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
  // Action tiene la estructure { type, payload }
  switch (action.type) {
    // 3/ IMPORTANTE! Nunca mutar el estado, devolver un nuevo objecto
    case ADD_LIST:
      const list = action.payload
      return [...state, list]

    // 2/ Siempre devolver el state en cualquier otro caso
    default:
      return state;
  }
}
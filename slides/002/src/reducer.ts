import { Action } from '@ngrx/store'

// 6/ Mantener State sin anidar, utilizando arrays sólo para ids.
// Estructures del estilo ids:[] con mapping a entities:{}
export const initialState = [
  ids: [0, 1],
  entities: {
    0: { id: 0, title: 'Paco' },
    1: { id: 1, title: 'Pepe' }
  }

]

export const ADD_LIST = 'ADD_LIST'

export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    // 6/ Actualizamos reducer
    case ADD_LIST:
      const list = action.payload
      return {
        ids: [...state.ids, list.id],
        entities: Object.assign({}, state.entities, { [list.id]: list })
      }

    default:
      return state;
  }
}
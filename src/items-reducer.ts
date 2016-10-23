import { Action } from '@ngrx/store'

export const initialState = {
  ids: [],
  entities: {}
}

export const ADD_ITEM = 'ADD_ITEM'

// 12/ Creamos itemsReducer
export const itemsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ADD_ITEM:
      const item = action.payload
      return {
        ids: [...state.ids, item.id],
        entities: Object.assign({}, state.entities, { [item.id]: item })
      }

    default:
      return state;
  }
}
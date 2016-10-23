import { Action } from '@ngrx/store'

// 10/ Mantener State sin anidar, utilizando arrays sólo para ids.
// Estructures del estilo ids:[] con mapping a entities:{}
export const initialState = {
  ids: [0],
  entities: {
    0: {
      id: 0,
      title: 'Paco',
      items: []
    }
  }
}

export const ADD_LIST = 'ADD_LIST'
// Añadir action
export const ADD_LIST_ITEM = 'ADD_LIST_ITEM'

export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ADD_LIST: {
      const list = action.payload
      return {
        ids: [...state.ids, list.id],
        entities: Object.assign({}, state.entities, { [list.id]: list })
      }
    }

    // 8/ Creamos ADD_LIST_ITEM
    case ADD_LIST_ITEM: {
      // Obtenemos variables del payload mediante object destructuring
      const { itemId, listId } = action.payload
      // 2/ Actualizamos la lista del state
      const list = Object.assign({}, state.entities[listId])
      list.items = [...list.items, itemId]
      // 4/ Devolvemos el state, creando nuevos objectos
      return {
        ids: state.ids,
        entities: Object.assign({}, state.entities, { [listId]: list })
      }
    }


    default:
      return state;
  }
}
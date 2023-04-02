import { Cv, TypeData } from "./state-interface";
import { TypeAction } from "./actions";

const init: Cv = {
  id: '',
  name: 'Untited',
  color: '#5CF2E3',
  mode: false,
  section: []
};

const reducer = (cv = init, action: TypeAction): Cv => {
  switch(action.type) {
    case 'RENAME':
      if ( 'payload' in action && 'newName' in action.payload) return {...cv, name: action.payload.newName};
    case 'CHANGE_COLOR':
      if ( 'payload' in action && 'color' in action.payload) return {...cv, color: action.payload.color};
    case 'CHANGE_MODE':
      if ('payload' in action && 'mode' in action.payload) return {...cv, mode: action.payload.mode};
    case 'SET_AVATAR':
      if ('payload' in action && 'name' in action.payload && 'firebaseUrl' in action.payload) {
        return {
          ...cv,
          avatar: {
            name: action.payload.name,
            firebaseUrl: action.payload.firebaseUrl
          }
        }
      }
    case 'ADD_NOTE':
      return {
        ...cv,
        section: [
          ...cv.section,
          {
            id: '',
            type: TypeData.Note
          }
        ]
      }
    case 'SET_NOTE':
      if ('payload' in action && 'index' in action.payload && 'data' in action.payload) {
        return {
          ...cv,
          section: [
            ...cv.section.slice(0, action.payload.index),
            {
              ...cv.section[action.payload.index],
              data: action.payload.data
            },
            ...cv.section.slice(action.payload.index + 1)
          ]
        }
      }
    case 'ADD_HEADING':
      return {
        ...cv,
        section: [
          ...cv.section,
          {
            id: '',
            type: TypeData.Heading
          }
        ]
      }
    case 'SET_HEADING':
      if ('payload' in action && 'index' in action.payload && 'data' in action.payload) {
        return {
          ...cv,
          section: [
            ...cv.section.slice(0, action.payload.index),
            {
              ...cv.section[action.payload.index],
              data: action.payload.data
            },
            ...cv.section.slice(action.payload.index + 1)
          ]
        }
      }
    case 'ADD_LIST':
      return {
        ...cv,
        section: [
          ...cv.section,
          {
            id: '',
            type: TypeData.List
          }
        ]
      }
    case 'SET_LIST':
      if ('payload' in action && 'index' in action.payload && 'data' in action.payload) {
        return {
          ...cv,
          section: [
            ...cv.section.slice(0, action.payload.index),
            {
              ...cv.section[action.payload.index],
              data: action.payload.data
            },
            ...cv.section.slice(action.payload.index + 1)
          ]
        }
      }
    case 'REMOVE_SECTION':
      if('payload' in action && 'index' in action.payload) {
        return {
          ...cv,
          section: [
            ...cv.section.slice(0, action.payload.index),
            ...cv.section.slice(action.payload.index + 1)
          ]
        }
      }
    default:
      return cv;
  }
}

export default reducer;
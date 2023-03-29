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
    default:
      return cv;
  }
}

export default reducer;
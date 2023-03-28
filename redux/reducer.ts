import { Cv } from "./state-interface";
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
    case 'CHANGE_COLOR':
      if ('color' in action.payload) return {...cv, color: action.payload.color};
    case 'CHANGE_MODE':
      if ('mode' in action.payload) return {...cv, mode: action.payload.mode};
    default:
      return cv;
  }
}

export default reducer;
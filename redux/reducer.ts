import { Cv } from "./state-interface";

interface Action {
  type: string,
  payload: any
}

const init: Cv = {
  id: '',
  name: 'Untited',
  color: '#5CF2E3',
  mode: false,
  section: []
};

const reducer = (cv = init, action: Action): Cv => {
  switch(action.type) {
    default:
      return cv;
  }
}

export default reducer;
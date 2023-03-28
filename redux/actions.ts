export interface Action {
  type: string
}

// Color
export interface ChangeColor extends Action {
  payload: {color: string}
}

// Mode
export interface ChangeMode extends Action {
  payload: {mode: boolean}
}

export type TypeAction = ChangeColor | ChangeMode

export const changeColor = (color: string): ChangeColor => ({
  type: 'CHANGE_COLOR',
  payload: {color}
});

export const changeMode = (mode: boolean): ChangeMode => ({
  type: 'CHANGE_MODE',
  payload: {mode}
});
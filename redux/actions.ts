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

// Rename
export interface Rename extends Action {
  payload: {newName: string}
}

export type TypeAction = ChangeColor | ChangeMode | Rename

export const changeColor = (color: string): ChangeColor => ({
  type: 'CHANGE_COLOR',
  payload: {color}
});

export const changeMode = (mode: boolean): ChangeMode => ({
  type: 'CHANGE_MODE',
  payload: {mode}
});

export const rename = (newName: string): Rename => ({
  type: 'RENAME',
  payload: {newName}
});
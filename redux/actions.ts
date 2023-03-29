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

export interface RemoveSection extends Action {
  payload: {index: number}
}

export type TypeAction = 
  Action |
  ChangeColor |
  ChangeMode |
  Rename |
  RemoveSection

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

export const addNote = (): Action => ({
  type: 'ADD_NOTE'
});

export const addHeading = (): Action => ({
  type: 'ADD_HEADING'
});

export const removeSection = (index: number): RemoveSection => ({
  type: 'REMOVE_SECTION',
  payload: {index}
});
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

// Remove Section
export interface RemoveSection extends Action {
  payload: {index: number}
}

// Set Data Heading | Note | List
export interface SetData extends Action {
  payload: {index: number, data: string | null}
}

export type TypeAction = 
  Action |
  ChangeColor |
  ChangeMode |
  Rename |
  RemoveSection |
  SetData

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

export const setNote = (index: number, data: string | null): SetData => ({
  type: 'SET_NOTE',
  payload: {index, data}
});

export const addHeading = (): Action => ({
  type: 'ADD_HEADING'
});

export const setHeading = (index: number, data: string | null): SetData => ({
  type: 'SET_HEADING',
  payload: {index, data}
});

export const addList = (): Action => ({
  type: 'ADD_LIST'
});

export const setList = (index: number, data: string | null): SetData => ({
  type: 'SET_LIST',
  payload: {index, data}
});

export const removeSection = (index: number): RemoveSection => ({
  type: 'REMOVE_SECTION',
  payload: {index}
});
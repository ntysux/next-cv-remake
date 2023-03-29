export enum TypeData {
  Heading,
  List,
  Note
}

export interface Heading {
  id: string,
  type: TypeData.Heading,
  data?: string
}

export interface Note {
  id: string,
  type: TypeData.Note,
  data?: string
}

export interface List {
  id: string,
  type: TypeData.List,
  data?: string
}

export type DataDisplay = Heading | Note | List

export interface Avatar {
  name: string,
  blodUrl: string,
  notionUrl: string
}

export interface Cv {
  id: string,
  name: string,
  color: string,
  mode: boolean,
  avatar?: Avatar,
  section: DataDisplay[]
}
export enum TypeData {
  Heading,
  List,
  Note
}

interface TypeDataBasic {
  id: string,
  data?: string | null
}

export interface Heading extends TypeDataBasic {
  type: TypeData.Heading
}

export interface Note extends TypeDataBasic {
  type: TypeData.Note
}

export interface List extends TypeDataBasic {
  type: TypeData.List
}

export type DataDisplay = Heading | Note | List

export interface Avatar {
  name: string,
  firebaseUrl: string,
  notionUrl?: string
}

export interface Cv {
  id: string,
  name: string,
  color: string,
  mode: boolean,
  avatar?: Avatar,
  section: DataDisplay[]
}
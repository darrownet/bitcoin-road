export enum Colors {
  red = 'red',
  purple = 'purple',
  yellow = 'yellow',
  blue = 'blue',
  orange = 'orange',
  green = 'green',
}

export enum CardType {
  single = 'single',
  double = 'double'
}

export type CardColors = {
  red: string,
  purple: string,
  yellow: string,
  blue: string,
  orange: string,
  green: string
}

export type CardKinds = {
  single: number,
  double: number
}

export type Cards = {
  red: CardKinds,
  purple: CardKinds,
  yellow: CardKinds,
  blue: CardKinds,
  orange: CardKinds,
  green: CardKinds
}

export type Card = {
  color: Colors,
  spaces: number
}
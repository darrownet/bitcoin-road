export enum Colors {
  red = 'red',
  purple = 'purple',
  yellow = 'yellow',
  blue = 'blue',
  orange = 'orange',
  green = 'green',
  honeybadger = 'honeybadger',
  pizza = 'pizza',
  lighting = 'lighting',
  coldstorage = 'coldstorage'
}

export enum Specials {
  honeybadger = 'honeybadger',
  pizza = 'pizza',
  lighting = 'lighting',
  coldstorage = 'coldstorage'
}

export enum CardType {
  single = 'single',
  double = 'double'
}

export type CardKinds = {
  single: number,
  double: number,
  honeybadger?: string,
  pizza?: string,
  lighting?: string,
  coldstorage?: string
}

export type Cards = {
  red: CardKinds,
  purple: CardKinds,
  yellow: CardKinds,
  blue: CardKinds,
  orange: CardKinds,
  green: CardKinds,
  honeybadger: CardKinds,
  pizza: CardKinds,
  lighting: CardKinds,
  coldstorage: CardKinds
}

export type Card = {
  color: Colors,
  spaces: number
}

export type SpecialCard = {
  location: number,
  type: Specials
}
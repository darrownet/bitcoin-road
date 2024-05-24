export enum Colors {
  red = 'red',
  purple = 'purple',
  yellow = 'yellow',
  blue = 'blue',
  orange = 'orange',
  green = 'green',
  peppermint = 'peppermint',
  peanut = 'peanut',
  lollipop = 'lollipop',
  icecream = 'icecream'
}

export enum Specials {
  peppermint = 'peppermint',
  peanut = 'peanut',
  lollipop = 'lollipop',
  icecream = 'icecream'
}

export enum CardType {
  single = 'single',
  double = 'double'
}

export type CardKinds = {
  single: number,
  double: number,
  peppermint?: string,
  peanut?: string,
  lollipop?: string,
  icecream?: string
}

export type Cards = {
  red: CardKinds,
  purple: CardKinds,
  yellow: CardKinds,
  blue: CardKinds,
  orange: CardKinds,
  green: CardKinds,
  peppermint: CardKinds,
  peanut: CardKinds,
  lollipop: CardKinds,
  icecream: CardKinds
}

export type Card = {
  color: Colors,
  spaces: number
}

export type SpecialCard = {
  location: number,
  type: Specials
}
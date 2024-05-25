import {Cards} from "./typings/Cards";

export const gameSpaces = {
  spaces: [
    {type: "normal", color: "red"},
    {type: "normal", color: "purple"},
    {type: "normal", color: "yellow"},
    {type: "skip", color: "blue", to: 24},
    {type: "normal", color: "orange"},
    {type: "normal", color: "green"},
    {type: "normal", color: "red"},
    {type: "normal", color: "purple"},
    {type: "normal", color: "yellow"},
    {type: "normal", color: "blue"},
    {type: "normal", color: "orange"},
    {type: "normal", color: "green"},
    {type: "normal", color: "red"},
    {type: "normal", color: "purple"},
    {type: "normal", color: "yellow"},
    {type: "normal", color: "blue"},
    {type: "normal", color: "orange"},
    {type: "skip", color: "green", to: 35},
    {type: "normal", color: "red"},
    {type: "normal", color: "purple"},
    {type: "special", color: "honey badger"},
    {type: "normal", color: "yellow"},
    {type: "normal", color: "blue"},
    {type: "normal", color: "orange"},
    {type: "normal", color: "green"},
    {type: "normal", color: "red"},
    {type: "stop", color: "purple"},
    {type: "normal", color: "yellow"},
    {type: "normal", color: "blue"},
    {type: "normal", color: "orange"},
    {type: "normal", color: "green"},
    {type: "normal", color: "red"},
    {type: "special", color: "pizza"},
    {type: "normal", color: "purple"},
    {type: "normal", color: "yellow"},
    {type: "normal", color: "blue"},
    {type: "normal", color: "orange"},
    {type: "normal", color: "green"},
    {type: "normal", color: "red"},
    {type: "normal", color: "purple"},
    {type: "normal", color: "yellow"},
    {type: "normal", color: "blue"},
    {type: "normal", color: "orange"},
    {type: "normal", color: "green"},
    {type: "normal", color: "red"},
    {type: "normal", color: "purple"},
    {type: "normal", color: "yellow"},
    {type: "normal", color: "blue"},
    {type: "normal", color: "orange"},
    {type: "special", color: "lighting"},
    {type: "normal", color: "green"},
    {type: "normal", color: "red"},
    {type: "normal", color: "purple"},
    {type: "stop", color: "yellow"},
    {type: "normal", color: "blue"},
    {type: "normal", color: "orange"},
    {type: "normal", color: "green"},
    {type: "normal", color: "red"},
    {type: "normal", color: "purple"},
    {type: "normal", color: "yellow"},
    {type: "normal", color: "blue"},
    {type: "normal", color: "orange"},
    {type: "normal", color: "green"},
    {type: "normal", color: "red"},
    {type: "normal", color: "purple"},
    {type: "normal", color: "yellow"},
    {type: "special", color: "cold storage"},
    {type: "normal", color: "blue"},
    {type: "normal", color: "orange"},
    {type: "normal", color: "green"},
    {type: "normal", color: "red"},
    {type: "normal", color: "purple"},
    {type: "normal", color: "yellow"},
    {type: "normal", color: "blue"},
    {type: "normal", color: "orange"},
    {type: "normal", color: "green"},
    {type: "normal", color: "red"},
    {type: "normal", color: "purple"},
    {type: "normal", color: "yellow"},
    {type: "normal", color: "blue"},
    {type: "normal", color: "orange"},
    {type: "normal", color: "green"},
    {type: "final", color: "brown"}
  ]
}

export const players = [
  {color: "red"},
  {color: "green"},
  {color: "yellow"},
  {color: "blue"}
]

export const cards: Cards = {
  red: {
    double: 3,
    single: 4
  },
  purple: {
    double: 3,
    single: 4
  },
  yellow: {
    double: 3,
    single: 4
  },
  blue: {
    double: 3,
    single: 4
  },
  orange: {
    double: 3,
    single: 4
  },
  green: {
    double: 3,
    single: 4
  },
  honeybadger: {
		double: 0,
		single: 1
	},
	pizza: {
		double: 0,
		single: 1
	},
	lighting: {
		double: 0,
		single: 1
	},
	coldstorage: {
		double: 0,
		single: 1
	}
}

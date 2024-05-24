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
    {type: "special", color: "peppermint"},
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
    {type: "special", color: "peanut"},
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
    {type: "special", color: "lollipop"},
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
    {type: "special", color: "ice cream"},
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
	peppermint: {
		double: 0,
		single: 1
	},
	peanut: {
		double: 0,
		single: 1
	},
	lollipop: {
		double: 0,
		single: 1
	},
	icecream: {
		double: 0,
		single: 1
	}
}

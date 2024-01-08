export const gameBoard = {
	spaces = [
		{type:"normal", color:"red"},
		{type: "normal", color: "purple"},
		{type: "normal", color: "yellow"},
		{type: "skip", color: "blue"},
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
		{type: "skip", color: "green"},
		{type: "normal", color: "red"},
		{type: "normal", color: "purple"},
		{type: "special", color: "pink"},
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
		{type: "special", color: "pink"},
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
		{type: "special", color: "pink"},
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
		{type: "normal", color: "yelllow"},
		{type: "special", color: "pink"},
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
		{type: "final", color: "rainbow"}
		]
	]
];


const skips = [
	{location:3, destination:35},
	{location:17, destination:24}
];

const specials = [
	{location:20, type:"peppermint"},
	{location:32, type:"peanut"},
	{location:49, type:"lollipop"},
	{location:66, type:"icecream"},
];

const players = [
	{color:"red"},
	{color:"green"},
	{color:"yellow"},
	{color:"blue"}
];

const cards = {
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
	}
};

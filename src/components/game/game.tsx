import {FC} from "react";
import {shuffleArray} from "../../core/utils/shuffleArray"

import {cards, gameBoard} from "../../core/bitcoin_road_gameboard_model"
import {Colors, Card} from "../../core/typings/Cards";

type GameProps = {}

const cardDeck:Card[] = [];
const cardColors: Colors[] = Object.keys(cards) as Colors[];
cardColors.forEach((color:Colors) => {
  console.log(cards[color]);
  const singleCount: number = cards[color].single;
  const doubleCount: number = cards[color].double;
  for(let i: number = 1; i <= singleCount; i++) {
    cardDeck.push({color, spaces: 1});
  }
  for(let i: number = 1; i <= doubleCount; i++) {
    cardDeck.push({color, spaces: 2});
  }
});
const shuffledDeck = shuffleArray(cardDeck);

console.log(shuffledDeck);


const Game: FC<GameProps> = () => {
  return (
      <div className="game">
        <div className="space-section">
          {gameBoard.spaces.map((space, index) => {
            return (
                <div key={index} className="space" style={{background: space.color}}></div>
            );
          }).reverse()}
        </div>
      </div>
  );
}

export default Game;

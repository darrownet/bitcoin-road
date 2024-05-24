import {FC} from "react";
import {shuffleArray} from "../../core/utils/shuffleArray"

import {cards, gameSpaces} from "../../core/bitcoin_road_gameboard_model"
import {Card, Colors} from "../../core/typings/Cards";

type GameProps = {};

const cardDeck: Card[] = [];
const cardColors: Colors[] = Object.keys(cards) as Colors[];
cardColors.forEach((color: Colors) => {
  const singleCount: number = cards[color].single;
  const doubleCount: number = cards[color].double;
  for (let i: number = 1; i <= singleCount; i++) {
    cardDeck.push({color, spaces: 1});
  }
  for (let i: number = 1; i <= doubleCount; i++) {
    cardDeck.push({color, spaces: 2});
  }
});
const shuffledDeck = shuffleArray(cardDeck);
console.log(shuffledDeck);

const Game: FC<GameProps> = () => {
  return (
      <div>
        <div className="player-section">
          players
        </div>
        <div className="game">
          <div className="space-section">
            {gameSpaces.spaces.map((space, index) => {
              let spaceLabel = '';
              if (space.type === 'skip') {
                spaceLabel = `skip to ${space.to}`;
              }
              if (space.type === 'special') {
                spaceLabel = space.color;
              }
              return (
                  <div key={index} className="space" style={{background: space.color}}>{spaceLabel}</div>
              );
            })}
          </div>
        </div>
      </div>
  );
}

export default Game;

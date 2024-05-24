import {FC, useState, FormEvent, ChangeEvent} from "react";
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

const Game: FC<GameProps> = () => {

  const shuffledDeck = shuffleArray(cardDeck);

  const [players, setPlayers] = useState({player1: false, player2: false, player3: false, player4: false});
  const [gameRunning, setGameRunning] = useState(false);

  const onSubmit = (event:  FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setGameRunning(true);
  }

  const onPlayerClick = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value, event.target.checked);
    const _players = {...players};
    //@ts-ignore
    _players[event.target.value] = event.target.checked
    console.log(_players);
  }

  return (
      <div>
        <div className={`players${(!gameRunning ? ' game-off' : ' game-on')}`}>
          <form onSubmit={onSubmit}>
            <label>
              <span>player 1</span>
              <input type="checkbox" value="player1" onChange={onPlayerClick}/>
            </label>
            <label>
              <span>player 2</span>
              <input type="checkbox" value="player2"/>
            </label>
            <label>
              <span>player 3</span>
              <input type="checkbox" value="player3"/>
            </label>
            <label>
              <span>player 4</span>
              <input type="checkbox" value="player4"/>
            </label>
            <input type="submit"/>
          </form>
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

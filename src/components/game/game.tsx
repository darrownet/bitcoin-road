import {FC} from "react";

import {gameBoard} from "../../core/bitcoin_road_gameboard_model"

type GameProps = {}

const pieceSections = {
  sec1: [...gameBoard.spaces].slice(0, 12),
  sec2: [...gameBoard.spaces].slice(12, 15),
}

const Game: FC<GameProps> = () => {
  return (
      <div className="game">
        <div className="space-section">
          {pieceSections.sec1.map((space, index) => {
            return (
                <div key={index} className="space" style={{background: space.color}}></div>
            );
          })}
        </div>
      </div>
  );
}

export default Game;

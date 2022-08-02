import React from "react";
import scissors from "./assets/gunting.png";
import paper from "./assets/kertas.png";
import rock from "./assets/batu.png";

const Player = ({ weapon }) => (
  <>
    <div className="player">
      <img
        className="player-image"
        src={
          weapon === "rock" ? rock : weapon === "scissors" ? scissors : paper
        }
        alt="Rock Paper Scissors"
      />
    </div>
  </>
);

export default Player;

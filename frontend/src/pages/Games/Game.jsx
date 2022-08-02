import React, {useContext, useEffect, useState} from "react";
import AuthContext from "../../context/AuthContext";
import Navbar from "../../components/Navbar";
import Player from "./player";
import firebaseDB from "../../config/firebaseDB";
import {Table} from "react-bootstrap";
import {collection, doc, getDocs, onSnapshot, query, updateDoc, where,} from "firebase/firestore";
import "./styles.css";

import {Navigate, useLocation} from "react-router-dom";

function Game() {
  const location = useLocation();
  const authenticatedUser = useContext(AuthContext);
  // console.log(authenticatedUser.uid);
  const weapons = ["rock", "paper", "scissors"];
  const [playerOne, setPlayerOne] = useState(weapons[0]);
  const [playerTwo, setPlayerTwo] = useState(weapons[0]);
  const [winner, setWinner] = useState("");
  const [uid, setUid] = useState("");
  const [scoreFromDoc, setScoreFromDoc] = useState(0);
  const [score, setScore] = useState(0);
  const [players, setPlayers] = useState([]);
  const {displayNameName} = players;
  const arrPlayer = [];

  useEffect(() => {
    getUsers()

    switch (playerOne + playerTwo) {
      case "scissorspaper":
      case "rockscissors":
      case "paperrock":
        setWinner("YOU WIN!");
        setScore(score + 1);
        break;
      case "paperscissors":
      case "scissorsrock":
      case "rockpaper":
        setWinner("YOU LOSE!");
        break;
      case "rockrock":
      case "paperpaper":
      case "scissorsscissors":
        setWinner("ITS A DRAW!");
        break;
    }
  }, [playerOne, playerTwo]);

  const selectWeapon = (weapon) => {
    setPlayerOne(weapon);
    setPlayerTwo(weapons[Math.floor(Math.random() * weapons.length)]);
    setWinner("");
  };

  const getUsers = async () => {
    const unsub = await onSnapshot(
        collection(firebaseDB, "users"),
        (querySnapshot) => {
          // const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
          const newUsers = [];
          querySnapshot.forEach((doc) => {
            newUsers.push({
              ...doc.data(),
              id: doc.id,
            });

          });
          newUsers.sort(compare)
          newUsers.reverse();
          setPlayers(newUsers);


        }
    );
    console.log(players)
  }
  function compare( a, b ) {
    if ( a.score < b.score ){
      return -1;
    }
    if ( a.score > b.score ){
      return 1;
    }
    return 0;
  }

  const updateScore = async () => {
    const q = query(
        collection(firebaseDB, "users"),
        where("uid", "==", authenticatedUser.uid)
    );
    const querySnapshot = await getDocs(q);
    const res = querySnapshot.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data().score);
      setUid(doc.id);
      setScoreFromDoc(doc.data().score);
    });
    const docId = doc(firebaseDB, "users", uid);

    if (score > scoreFromDoc) {
      await updateDoc(docId, {
        score,
      });
    } else {
      return;
    }
  };
  if (authenticatedUser == null) {
    return     <Navigate to={"/login"} replace state={{ from: location }} />

  } else {

    return  (
        <>
          <Navbar/>
          <h1 style={{textAlign: "center"}}>Rock Paper Scissors</h1>
          <div className="text-center">
            <div>
              <Player weapon={playerOne}/>
              <Player weapon={playerTwo}/>
            </div>
            <div>
              <button className="weaponBtn" onClick={() => selectWeapon("rock")}>
                Rock
              </button>
              <button className="weaponBtn" onClick={() => selectWeapon("paper")}>
                Paper
              </button>
              <button
                  className="weaponBtn"
                  onClick={() => selectWeapon("scissors")}
              >
                Scissor
              </button>
            </div>
            <div className="winner">{winner}</div>
            <div>
              <h1>Score: {score}</h1>
            </div>
            <div>
              <h1>Player: {authenticatedUser.displayName}</h1>
              {console.log(authenticatedUser.displayName)}
            </div>
          </div>
          <button onClick={() => updateScore()}>Submit Score</button>
          <div className="container">
            <h1 className="text-center">Leaderboard Game</h1>
            <Table striped bordered hover>
              <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Score</th>
              </tr>
              </thead>
              <tbody>
              {players.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.displayName}</td>
                    <td>{item.email}</td>
                    <td>{item.score}</td>
                  </tr>
              ))
              }
              </tbody>
            </Table>
          </div>
        </>
    )
  }
}

export default Game;

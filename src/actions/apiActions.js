import axios from "../axios";
import { updatePlayers, wipeTeams } from './index';

export const getTeamsRand = (data) => (dispatch) => {
    axios.get("/teamup").then( ({data}) => {
        dispatch(updatePlayers(data))
    }).catch( error => console.log(error))

}

export const addPlayersAPI = (players) => (dispatch, getState) => {
    let stateplayers = getState().players;
    console.log(players)
    axios.post("/storeteam", {
        players: stateplayers
    }).then( ({data}) => {
        console.log(data)
        dispatch(updatePlayers(data.data))
    }).catch( error => console.log(error))
}

export const deleteTeams = (data) => (dispatch, getState) => {

    axios.delete("/dropplayers").then( () => {
        dispatch(wipeTeams())

    }).catch( error => console.log(error))

}

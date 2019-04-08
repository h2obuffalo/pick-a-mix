import axios from "../axios";
import { updatePlayers, wipeTeams } from './index';

export const getTeamsRand = (data) => (dispatch) => {
    axios.get("/teamskill").then( ({data}) => {
        dispatch(updatePlayers(data.data))
    }).catch( error => console.log(error))

}

export const addPlayersAPI = (players) => (dispatch, getState) => {
    let stateplayers = getState().players;
    axios.post("/storeteam", {
        players: stateplayers
    }).then( ({data}) => {
        dispatch(getTeamsRand(data.data))
    }).catch( error => console.log(error))
}

export const deleteTeams = (data) => (dispatch, getState) => {

    axios.delete("/dropplayers").then( (data) => {
        dispatch(wipeTeams())

    }).catch( error => console.log(error))

}


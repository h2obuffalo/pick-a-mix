import axios from "../axios";
import { updatePlayers, wipeTeams, loaded } from './index';


export const addPlayersAPI = (players) => (dispatch, getState) => {
    dispatch(loaded(false));
    axios.post("/storeteam", {
        players,
    }).then( ({data}) => {
        dispatch(updatePlayers(data.data))
        dispatch(loaded(true))
    }).catch( error => console.log(error))
}

export const deleteTeams = (players) => (dispatch, getState) => {
    dispatch(loaded(false));
    axios.delete("/dropplayers").then( (players) => {
        dispatch(wipeTeams())
        dispatch(loaded(true))
    }).catch( error => console.log(error))

}


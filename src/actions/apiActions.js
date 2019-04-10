import axios from "../axios";
import { updatePlayers, wipeTeams, loaded } from './index';


export const addPlayersAPI = (players) => (dispatch, getState) => {
    let stateplayers = getState().players;
    let loadedstate = getState().loaded;
    loaded(loadedstate);
    axios.post("/storeteam", {
        players: stateplayers
    }).then( ({data}) => {
        dispatch(updatePlayers(data.data))
        loaded(loadedstate)
    }).catch( error => console.log(error))
}

export const deleteTeams = (data) => (dispatch, getState) => {

    axios.delete("/dropplayers").then( (data) => {
        dispatch(wipeTeams())

    }).catch( error => console.log(error))

}


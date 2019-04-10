import axios from "../axios";
import { updatePlayers, wipeTeams, loaded } from './index';


export const addPlayersAPI = (players) => (dispatch, getState) => {
    dispatch(loaded(false));
    console.log(getState());
    axios.post("/storeteam", {
        players,
    }).then( ({data}) => {
        dispatch(updatePlayers(data.data))
        dispatch(loaded(true))
    }).catch( error => console.log(error))
}

export const deleteTeams = (data) => (dispatch, getState) => {

    axios.delete("/dropplayers").then( (data) => {
        dispatch(wipeTeams())

    }).catch( error => console.log(error))

}


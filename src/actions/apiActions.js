import axios from "../axios";
import { updatePlayers, wipeTeams } from './index';

export const getTeamsRand = (data) => (dispatch) => {

    axios.get("/teamup").then( ({data}) => {
        dispatch(updatePlayers(data.data))
    }).catch( error => console.log(error))

}

export const addPlayerAPI = (data) => (dispatch, getState) => {
    axios.post("/storeteam").then( () => {
        getTeamsRand();
    }).catch( error => console.log(error))
}

export const deleteTeams = (data) => (dispatch, getState) => {

    axios.delete("/dropplayers").then( () => {
        dispatch(wipeTeams())

    }).catch( error => console.log(error))

}

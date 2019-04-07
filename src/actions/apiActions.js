import axios from "../axios";
import { updatePlayers, wipeTeams } from './index';

export const getTeamsRand = (data) => (dispatch, getState) => {

    axios.get("/teamup").then( ({data}) => {
        console.log(data.data);
        dispatch(updatePlayers(data.data))

    }).catch( error => console.log(error))

}

export const deleteTeams = (data) => (dispatch, getState) => {

    axios.delete("/dropteams").then( () => {
        dispatch(wipeTeams())

    }).catch( error => console.log(error))

}


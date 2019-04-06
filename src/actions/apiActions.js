import axios from "../axios";
import { updatePlayers } from './index';

export const getTeamsRand = (data) => (dispatch, getState) => {


    axios.get("/teamup").then( response => {
        dispatch(updatePlayers(response.data))

    }).catch( error => console.log(error))

}

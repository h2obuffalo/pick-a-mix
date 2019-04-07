const ADD_PLAYER = "ADD_PLAYER";
const UPDATE_PLAYERS = "UPDATE_PLAYERS";
const DELETE_TEAMS = "DELETE_TEAMS";


export const addPlayer = (player) => {
    return {
        type: ADD_PLAYER,
        player,
    }
};

export const updatePlayers = (players) => {
    return {
        type: UPDATE_PLAYERS,
        players,
    }
}

export const wipeTeams = () => {
    return {
        type: DELETE_TEAMS,
    }
}
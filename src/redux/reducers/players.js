export const initialState = [];

const players = (state = initialState, action) => {
        switch (action.type) {
            case "UPDATE_PLAYERS":
                return [...action.players];
            case "ADD_PLAYER":
                return [...state, action.player];
            case "DELETE_TEAMS":
                return initialState;
            default:
                return state;
    }
};

 export default players;
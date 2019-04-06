export const initialState = [];




const players = (state = initialState, action) => {
        switch (action.type) {
        case "ADD_PLAYER": return [...state, action.player];
        default: return initialState;
    }
};

 export default players;
export const initialState = true;



const loaded = (state = initialState, action) => {
        switch (action.type) {
            case "LOADED":
                return action.loaded;
            default:
                return state;
        }
};

export default loaded;
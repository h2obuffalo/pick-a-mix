export const initialState = false;


const setLoaded = (state, {loaded}) => ({
    ...state,
    loaded : true,
})

const loaded = (state = initialState, action) => {
        switch (action.type) {
            case "LOADED":
                return setLoaded(state,action);
            default:
                return initialState;
        }
};

export default loaded;
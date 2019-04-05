const initialState = [{"id":1,"player_name":"george","address":"25 sandy park road, bristol, bs4","skill":3},{"id":2,"player_name":"helen","address":"20 Park streeet, Bristol, bs1","skill":3},{"id":3,"player_name":"henry","address":"48 whitehall road","skill":2},{"id":4,"player_name":"johnny","address":"115 colston road, bristol, bs5 6ab","skill":2},{"id":5,"player_name":"allen","address":"avon street, bristol, bs1","skill":1},{"id":6,"player_name":"Rachel","address":"12 high street,easton,  bristol, bs5","skill":2},{"id":7,"player_name":"Jamel","address":"55, Redland road, bristol, bs6","skill":3},{"id":8,"player_name":"Andy","address":"bs4 3QX","skill":1},{"id":9,"player_name":"Lesley","address":"South Liberty Lane, Bristol BS3 2SS","skill":2},{"id":10,"player_name":"Phil","address":"18 Dorian Rd, Bristol BS7 0XW","skill":2}];
;


const players = (state = initialState, action) => {
        switch (action.type) {
        case "ADD_PLAYER": return [...state, action.player];
        default: return initialState;
    }
};

 export default players;
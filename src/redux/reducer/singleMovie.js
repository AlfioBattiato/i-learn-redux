import { GET_DATA, GET_MOVIE } from "../action";

const initialState = {
    allMovies: [],
    fetch:[]

}

const singleMovie = function(state = initialState, action) {
    switch (action.type) {
        case GET_MOVIE:
            const existingMovie = state.allMovies.find(movie => movie.imdbID === action.payload.imdbID
                );
            if (existingMovie) {
                return state;
            } else {
                return {
                    ...state,
                    allMovies: [...state.allMovies, action.payload]
                };
            }
        case GET_DATA:
                return {
                    ...state,
                    fetch: [...state.fetch, action.payload]
                };
            
        default:
            return state;
    }
}

export default singleMovie;

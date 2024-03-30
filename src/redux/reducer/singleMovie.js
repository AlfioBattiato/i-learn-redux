import { GET_DATA, GET_MOVIE } from "../action";
//lui è effettivamente lo stato iniziale del mio redux
const initialState = {
    allMovies: [],
    fetch:[]

}

const singleMovie = function(state = initialState, action) {
    switch (action.type) {
        //ovvero quando chiamiamo il GET_MOVIE che si trova sull action
        case GET_MOVIE:
        //questo if e questa costante mi serve per controlare se esiste il film gia nel mio redux quando clicco il like
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
            //ovvero è quando chiamiamo il fetch sulla cartella action
        case GET_DATA:
                return {
                    ...state,
                    fetch: [...state.fetch, action.payload]
                };

          //qua serve adesso che fai il tuo lavoro   ATTENTO AGLI IMPORT!!!    
            
        default:
            return state;
    }
}

export default singleMovie;

import { GET_MOVIE } from "../action";


const initialState={
    allMovies:[]
}


const  singleMovie=function(state =initialState, action){
    switch (action.type) {
        case GET_MOVIE:
            return{...state,
                allMovies:[...state.allMovies,action.payload]

            }
        default :return state;
    }
}
export default singleMovie
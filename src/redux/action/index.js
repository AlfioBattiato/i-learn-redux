export const GET_MOVIE='GET_MOVIE'
export const GET_DATA='GET_DATA'



export const getMovie=(cosamidai)=>{
return{
    type:GET_MOVIE,
    payload:cosamidai
}

}
export const getNewFetch=(nome)=>{
return(dispatch,getState)=>{

    fetch(`https://www.omdbapi.com/?apikey=96932c7f&s=${nome}`)
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Problema nella chiamata API");
        }
    })
    .then((obj) => {
       dispatch({
        type:GET_DATA,
        payload:obj
       })
    })
    .catch((error) => {
        console.log("ERRORE", error);
    });
}

}


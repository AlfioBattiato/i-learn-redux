export const GET_MOVIE='GET_MOVIE'
export const GET_DATA='GET_DATA'


//quando chiamo il getMovie devo dare per forza un parametro....cerca doce chiamo questa funzione :D
export const getMovie=(cosamidai)=>{
return{
    type:GET_MOVIE,
    payload:cosamidai
}

}
//nel caso delle funzioni devi necessariamente usare la sintassi qui sotto(nota il return)
export const getNewFetch=(nome)=>{
    //per forza serve il dispatch e getstate!
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

//qua serve che fai qualcosa ATTENTO AGLI EXPORT


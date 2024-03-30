export const GET_MOVIE='GET_MOVIE'



export const getMovie=(film)=>{
return{
    type:GET_MOVIE,
    payload:film
}


}
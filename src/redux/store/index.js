import { configureStore } from '@reduxjs/toolkit'
import singleMovie from '../reducer/singleMovie' // non serve /index, basta puntare alla cartella che lo contiene

// configureStore è la funzione principale di redux, quella che GENERA lo stato condiviso


const store = configureStore({
  reducer: singleMovie,
})

export default store

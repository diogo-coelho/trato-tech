import { createListenerMiddleware } from "@reduxjs/toolkit"

const listener = createListenerMiddleware()

listener.startListening({
  actionCreator: buscarCategorias.pending,
  effect: async (action) => {
    console.log('buscando categorias: ', action)
  }
})
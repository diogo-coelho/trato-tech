import { configureStore, createListenerMiddleware, getDefaultMiddleware } from '@reduxjs/toolkit';
import categoriasSlice, { buscarCategorias } from './reducers/categorias';
import itensSlice from './reducers/itens';
import carrinhoSlice from './reducers/carrinho';
import buscaSlice from './reducers/busca';



const store = configureStore({
  reducer: {
    categorias: categoriasSlice,
    itens: itensSlice,
    carrinho: carrinhoSlice,
    busca: buscaSlice,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(listener.middleware)
});

export default store;
import { createStandaloneToast } from '@chakra-ui/toast';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import categoriasService from 'services/categorias';

const { toast } = createStandaloneToast()

const initialState = [];

export const buscarCategorias = createAsyncThunk(
  'categorias/buscar', 
  categoriasService.buscar
)

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState,
  reducers: {
    adicionarCategorias: (state, { payload }) => {
      state.push(...payload)
    }
  },
  extraReducers: builder => {
    builder
    .addCase(
      buscarCategorias.fulfilled,
      (_, { payload }) => {
        toast({
          title: 'Sucesso',
          description: 'Categorias carregadas com sucesso',
          duration: 2000,
          isClosable: true,
          status: 'success'
        })
        return payload
      }
    )
    .addCase(
      buscarCategorias.pending,
      (state, { payload }) => {
        toast({
          title: 'Carregando',
          description: 'Carregando categorias',
          duration: 2000,
          isClosable: true,
          status: 'loading'
        })
      }
    )
    .addCase(
      buscarCategorias.rejected,
      (state, { payload }) => {
        toast({
          title: 'Erro',
          description: 'Erro na busca de categorias',
          duration: 2000,
          isClosable: true,
          status: 'error'
        })
      }
    )

  }
});

export const { adicionarCategorias } = categoriasSlice.actions

export default categoriasSlice.reducer;
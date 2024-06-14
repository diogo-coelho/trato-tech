import { createListenerMiddleware } from "@reduxjs/toolkit"
import categoriasService from "services/categorias"
import { carregarUmaCategoria, adicionarUmaCategoria } from "store/reducers/categorias"
import criarTarefa from 'store/utils/criarTarefa';

export const categoriasListener = createListenerMiddleware()

categoriasListener.startListening({
	actionCreator: carregarUmaCategoria,
	effect: async (action, { fork, dispatch, getState, unsubscribe }) => {
		const { categorias } = getState()
		const nomeCategoria = action.payload

		const categoriasCarregada = categorias.some(categoria => categoria.id === nomeCategoria)
		if (categoriasCarregada) return
		if (categorias.length === 5) return unsubscribe()

		await criarTarefa({
			fork, 
			dispatch,
			action: adicionarUmaCategoria,
			busca: () => categoriasService.buscarUmaCategoria(nomeCategoria),
			textoCarregando: `Carregando categoria ${nomeCategoria}`,
			textoSucesso: `Categoria ${nomeCategoria} carregadas com sucesso!'`,
			textoErro: `Erro na busca da categoria ${nomeCategoria}`
		})
	}
})
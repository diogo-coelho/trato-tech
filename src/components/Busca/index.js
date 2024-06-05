import styles from './Busca.module.scss'
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { resetarBusca } from 'store/reducers/busca'
import { useEffect } from 'react'
import { mudarBusca } from 'store/reducers/busca'

export default function Busca () {
	const busca = useSelector(state => state.busca)
	const dispatch = useDispatch()
	const location = useLocation()

	useEffect(() => {
		dispatch(resetarBusca())
	}, [location.pathname, dispatch])

    return (
        <div className={styles.busca}>
            <input 
                className={styles.input}
                placeholder="O que vc procura?" 
				value={busca}
				onChange={evento => dispatch(mudarBusca(evento.target.value)) }   
            />
        </div>
    )
}
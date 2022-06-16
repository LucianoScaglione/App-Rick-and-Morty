import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { emptyEstado, showDetailCharacter } from "../redux/actions";
import style from './DetailCharacter.module.css'
import { Link } from 'react-router-dom'


const DetailCharacter = (props) => {
  console.log(props)
  const idC = props.match.params.id
  const detailCharacter = useSelector(state => state.detailCharacter)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(showDetailCharacter(idC))
    return () => {
      dispatch(emptyEstado())
    }
  }, [dispatch])

  return (
    <div className={style.contenedorP}>
      <Link to='/home'>
        <p className={style.back}>Back</p>
      </Link>
      {
        <div className={style.contenedor}>
          <img src={detailCharacter.image} alt='Not found' />
          <p>Status: {detailCharacter.status}</p>
          <p>Species: {detailCharacter.species}</p>
          <p>Type: {detailCharacter.type ? detailCharacter.type : "Not found"} </p>
          <p>Gender: {detailCharacter.gender}</p>
        </div>
      }
    </div>
  )
}

export default DetailCharacter;
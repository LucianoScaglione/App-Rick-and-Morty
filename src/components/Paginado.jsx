import style from './Paginado.module.css'

const Paginado = ({ handleNext, handlePrev, next, prev }) => {

  const handleP = () => {
    handlePrev()
  }

  const handleN = () => {
    handleNext()
  }

  return (
    <div className={style.contenedor}>
      {
        prev ? (<button onClick={handleP}>Prev</button>) : null
      }
      {
        next ? (<button onClick={handleN}>Next</button>) : null
      }
    </div >
  )
}

export default Paginado;
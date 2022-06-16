import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { /*filterGender, filterSpecies, filterStatus,*/ filterBy, showCharacters } from '../redux/actions'
import Paginado from './Paginado'
import style from './Home.module.css'
import { Link } from "react-router-dom";
import SearchBar from './SearchBar'


const Home = () => {

  const [filter, setFilter] = useState({
    status: '',
    gender: '',
    species: ''
  })
  const characters = useSelector(state => state.characters)
  const moreCharacters = useSelector(state => state.moreCharacters)
  const dispatch = useDispatch()


  const contenedor = (url) => {
    dispatch(showCharacters(url))
  }

  const handleNext = () => {
    contenedor(moreCharacters.next)
  }

  const handlePrev = () => {
    contenedor(moreCharacters.prev)
  }

  const handleFilter = (e) => {
    e.preventDefault()
    if (!filter.status && !filter.gender && !filter.species) {
       alert("Select a filter type")
    } else {
      dispatch(filterBy(filter))
    }
  }

  const handleStateStatus = (e) => {
    e.preventDefault()
    setFilter({
      ...filter,
      status: e.target.value
    })
  }

  const handleStateGender = (e) => {
    e.preventDefault()
    setFilter({
      ...filter,
      gender: e.target.value
    })
  }

  const handleStateSpecie = (e) => {
    e.preventDefault()
    setFilter({
      ...filter,
      species: e.target.value
    })
  }

  useEffect(() => { dispatch(showCharacters('https://rickandmortyapi.com/api/character?page=1')) }, [dispatch])

  const status = [
    "Alive",
    "Dead",
    "Unknown"
  ]

  const gender = [
    "Male",
    "Female",
    "Genderless",
    "Unknown"
  ]

  const species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
  ]

  return (
    <div className={style.contenedor}>

      <br />
      <div className={style.cuad}>

      </div>

      <SearchBar />

      {/*////////////////////////////////////////////////////////////////////////////////*/}
      <div className={style.filtrado}>
        <select onChange={e => handleStateStatus(e)}>
          <option hidden>Status</option>
          {status && status.map(s => (<option value={s}>{s}</option>))}
        </select>

        <select onChange={e => handleStateGender(e)}>
          <option hidden>Gender</option>
          {gender && gender.map(g => (<option value={g}>{g}</option>))}
        </select>

        <select onChange={e => handleStateSpecie(e)}>
          <option hidden>Species</option>
          {species && species.map(s => (<option value={s}>{s}</option>))}
        </select>

        <button onClick={e => handleFilter(e)}>Aplicar filtrados</button>
      </div>
      {/*////////////////////////////////////////////////////////////////////////////////*/}

      <div className={style.paginado}>
        <Paginado
          handleNext={handleNext}
          handlePrev={handlePrev}
          next={moreCharacters.next}
          prev={moreCharacters.prev}
        />
      </div>

      <div className={style.contenedorCharacter}>
        {characters && characters.map(c => (
          <div className={style.character}>
            <Link to={`/details/${c.id}`}>
              <img src={c.image} alt='Not found' />
              <h1>{c.name}</h1>
            </Link>
          </div>
        ))
        }
      </div>
    </div >
  )
}

export default Home;




































 // const handleStatus = (e) => {
  //   e.preventDefault()
  //   dispatch(filterStatus(e.target.value))
  // }
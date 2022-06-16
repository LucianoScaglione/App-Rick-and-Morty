import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchCharacter } from '../redux/actions';
import style from './SearchBar.module.css'

const SearchBar = () => {

  const [input, setInput] = useState('')
  const dispatch = useDispatch()
  const characters = useSelector(state => state.characters)
  const moreCharacters = useSelector(state => state.moreCharacters)

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
      dispatch(searchCharacter(input))
      setInput('')
  }

  return (
    <div className={style.contenedor}>
      <form onSubmit={handleSubmit}>
        <input className={style.search} type='search' value={input} placeholder='Search for characters' maxLength={20} onChange={handleChange} />
        <input className={style.submit} type='submit' value='🔍' />
      </form>
    </div>
  )
}

export default SearchBar;
import { React, useState, useContext } from 'react'
import { DataContext } from '../context/DataContext'

const FormSearch = () => {
  const [title, setTitle] = useState('')
  const { setQuery } = useContext(DataContext)  

  const handleSubmit = (e) => {
    e.preventDefault()
    setQuery(title)
 
  }
  return (
    <div className='form-search'>
      <h1>Buscador de películas y series IMDB</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Pelicula o serie a buscar' onChange={e => setTitle(e.target.value)} />
        <input type='submit' value='Buscar' />
      </form>
    </div>
  )
}

export default FormSearch

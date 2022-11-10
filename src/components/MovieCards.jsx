import { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import ItemMovie from './ItemMovie'

const MovieCards = () => {
  const { isLoading, data } = useContext(DataContext)

  return (
    <div className='movies-content'>
      {
                !isLoading
                  ? data.map(item => (
                    <ItemMovie
                      key={item.show.id}
                      id={item.show.id}
                      type={item.show.type}
                      title={item.show.name}
                      poster={item.show?.image?.original}
                      summary={item.show?.summary}
                    />
                  ))
                  : ''
            }
    </div>
  )
}

export default MovieCards

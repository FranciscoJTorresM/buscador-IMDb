import DefaultImage from '../imagen/noImage.png'
import { Link } from 'react-router-dom'

const ItemMovie = ({ title, id, poster, summary, type }) => {
  const image = poster === undefined ? DefaultImage : poster

  return (
    <Link to={`shows/${id}?embed=cast${title}`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
      <article>
        <div className='item-movie' style={{ backgroundImage: `url(${image})` }}>
          <div className='info'>
            <h4 className='contentNameMovie'>{title}</h4>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default ItemMovie

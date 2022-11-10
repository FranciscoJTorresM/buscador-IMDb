import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../fetch/fetch'
import DefaultImage from '../imagen/noImage.png'

const SingleSerie = () => {
  const { id } = useParams()
  const { data: dataSeries } = useFetch(`shows/${id}?embed=cast`)
  const { data: episodeData } = useFetch(`shows/${id}/episodes`)
  const { data: season } = useFetch(`shows/${id}/seasons`)
  const poster = dataSeries?.image?.original === undefined ? DefaultImage : dataSeries?.image?.original

  return (
    <>
      <div className='single-movie'>
        <img src={poster} />
        <div className='single-info'>
          <h2 className='summary'>{dataSeries?.name}</h2>
          <p className='summary'>{dataSeries?.summary.replace(/<[^>]+>/g, '')}</p>
          <p><strong>Language: </strong>{dataSeries?.language}</p>
          <p><strong>Genres: </strong>{dataSeries?.genres.join(', ')}</p>
        </div>
      </div>

      <div className='accordion ' id='accordionExample'>
        {season?.map(season => (

          <div className='accordion-item' key={season.id}>
            <h2 className='accordion-header' id='headingOne'>
              <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapseOne' aria-expanded='true' aria-controls='collapseOne'>
                Season: {season?.number}
              </button>
            </h2>
            <div id='collapseOne' className='accordion-collapse collapse show' aria-labelledby='headingOne' data-bs-parent='#accordionExample'>
              <div className='accordion-body'>
                <div className='episodes'>
                  {episodeData?.map(episode => (
                    <div className='episode' key={episode.id}>
                      <div className='image-episode'>
                        <img src={episode.image?.medium == null ? episode.image?.original : episode.image?.medium} />
                      </div>
                      <div className='episode-info'>
                        <section className='container episode sectionEpisode'>
                          <h3>{episode.number}. {episode.name}</h3>
                          <h5>{episode.runtime} min</h5>
                        </section>                        
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='row container'>
        <h3>Cast</h3>
        {
          dataSeries?._embedded.cast.map(actor => (
            <div className='container col-md-3' key={actor.person.name}>
              <div className='card' style={{ width: '18rem' }}>
                <img src={actor.character?.image?.medium == null ? actor.person?.image?.medium : actor.character?.image?.medium} alt={actor.person.name} className='card-img-top' />
                <div className='card-body'>
                  <h5 className='card-title'>{actor?.person?.name} como {actor?.character?.name}</h5>
                </div>
              </div>
            </div>

          ))
        }
      </div>
    </>

  )
}

export default SingleSerie

import { useEffect, useState } from 'react'

const APIEndpoint = 'https://api.tvmaze.com/'

export const useFetch = params => {
  const [isLoading, setIsLoading] = useState(true) 
  const [error, setError] = useState(false) 
  const [data, setData] = useState(null) 
  
  const fetchMovie = url => {
    setIsLoading(true)
    fetch(url)
      .then(res => res.json())
      .then(respuestaJson => {
        if (respuestaJson.length === 0) {
          setError(true)
        } else {
          setData(respuestaJson || respuestaJson?.data)
          setIsLoading(false)

          console.log('data:', respuestaJson)
        }
      })
      .catch(error => console.log(error))
  }
  
  useEffect(() => {
    fetchMovie(APIEndpoint + params)
  }, [params])
  return { isLoading, error, data }
}

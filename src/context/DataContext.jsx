
import { useState, createContext } from 'react'
import { useFetch } from '../fetch/fetch'

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
    const [query, setQuery] = useState('')
  const { isLoading, error, data } = useFetch(`search/shows?q=${query}`)
  return (
    <DataContext.Provider value={{ isLoading, error, data, setQuery }}>
      {children}
    </DataContext.Provider>
  )
}

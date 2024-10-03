import React, {createContext, useState} from 'react'


export const Youtube = createContext()


const YoutubeApi = ({children}) => {

    const [movie, setMovie] = useState([]);
    const [selected, setSelected] = useState([]);
    const [search, setSearch] = useState('')



  return (
    <Youtube.Provider value={{movie, setMovie, selected, setSelected, search, setSearch}}>
        {children}
    </Youtube.Provider>
  )
}

export default YoutubeApi
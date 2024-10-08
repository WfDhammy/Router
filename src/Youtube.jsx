import React, {createContext, useState} from 'react'


export const Youtube = createContext()


const YoutubeApi = ({children}) => {

    const [movie, setMovie] = useState([]);
    const [selected, setSelected] = useState([]);
    const [mysearch, setMySearch] = useState('')



  return (
    <Youtube.Provider value={{movie, setMovie, selected, setSelected, mysearch, setMySearch}}>
        {children}
    </Youtube.Provider>
  )
}

export default YoutubeApi
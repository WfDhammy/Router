import React, {createContext, useState} from 'react'


export const Youtube = createContext()


const YoutubeApi = ({children}) => {

    const [movie, setMovie] = useState([]);
    const [selected, setSelected] = useState([])



  return (
    <Youtube.Provider value={{movie, setMovie, selected, setSelected}}>
        {children}
    </Youtube.Provider>
  )
}

export default YoutubeApi
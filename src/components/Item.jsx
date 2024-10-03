import React from 'react'

const Item = ({bami}) => {
  return (
    <div style={{}}>
        <h1>{bami.snippet.channelTitle}</h1>
        <h1>{bami.snippet.title}</h1>
        
        <img src={bami.snippet.thumbnails.default.url} alt=""/>
        <img src={bami.snippet.thumbnails.high.url} alt="" />
        <p>{bami.snippet.description}</p>
    </div>
  )
}

export default Item
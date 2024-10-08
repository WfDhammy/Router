import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({bami}) => {
  return (
    <div style={{}}>
        <h1>{bami.snippet.channelTitle}</h1>
        <h1>{bami.snippet.title}</h1>
        
        <img src={bami.snippet.thumbnails.default.url} alt=""/>
        <img src={bami.snippet.thumbnails.high.url} alt="" />
        <p>{bami.snippet.description}</p>
        <Link to={`https://www.youtube.com/watch?v=${bami.id.videoId}`}>Watch Video</Link>
    </div>
  )
}

export default Item
import React, { useContext, useEffect} from 'react';
import {Youtube} from '../Youtube';
import Item from './Item';
let url =  'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=terminator&key=AIzaSyD-qd3ohjtcyxjeGVvQZc-k--qEvEpk22M'

const List = () => {

  let {movie, setMovie, setSelected} = useContext(Youtube)
  useEffect(() => {
    const getMyApi = async () => {
      const response = await fetch(url)
      const data = await response.json()
      setMovie(data.items)
      setSelected(data.items)
      // console.log(movie.items)
    }
    getMyApi()
  }, [setMovie])

  useEffect(()=>{
    console.log(movie)
  },[movie])

 
  return (
    <div>
    {movie.map((x, num)=>(
      <Item key={num++} bami={x}/>
    ))}
    </div>
  )
}

export default List
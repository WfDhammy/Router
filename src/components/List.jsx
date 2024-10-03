import React, { useContext, useEffect} from 'react';
import {Youtube} from '../Youtube';
import Item from './Item';
//let url =  'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=terminator&key=AIzaSyD-qd3ohjtcyxjeGVvQZc-k--qEvEpk22M'



const List = () => {
  let ourApi  = JSON.parse(localStorage.getItem('apiclass'));
  let {movie, setMovie, setSelected, search, setSearch} = useContext(Youtube);
  let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${search}&key=AIzaSyDKEcbGRQjrqFoR4T7b-03_BAW6yK5j4Qs`

  useEffect(() => {
    const getMyApi = async () => {
      if(ourApi){
        setMovie(ourApi);
        console.log(movie);

      } else{
      const response = await fetch(url);
      const data = await response.json();
      setMovie(data.items);
      localStorage.setItem('apiclass', JSON.stringify(data.items));
      setMovie(data.items);
      setSelected(data.items)
      }
      
      
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
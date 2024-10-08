import React, { useContext, useEffect} from 'react';
import {Youtube} from '../Youtube';
import Item from './Item';
//let url =  'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=terminator&key=AIzaSyD-qd3ohjtcyxjeGVvQZc-k--qEvEpk22M'



const List = () => {
  
  let {movie, setMovie, setSelected, mysearch, setMySearch} = useContext(Youtube);
  
  useEffect(() => {
    const getMyApi = async () => {
      const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${mysearch}&key=AIzaSyDKEcbGRQjrqFoR4T7b-03_BAW6yK5j4Qs`

      try{
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Network response was noy ok'); 
        }
        const data = await response.json();
        localStorage.setItem('apiclass', JSON.stringify(data.items));
          setMovie(data.items);
          setSelected(data.items);
      
      } catch (error) {
        console.error('Fetch error:', error);
      };
     
      } 
      getMyApi();

    },[mysearch, setMovie, setSelected]);
    
  useEffect(()=>{
    console.log(movie)
  }, [movie]);

 
  return (
    <div>
    {movie.map((x, num)=>(
      <Item key={num++} bami={x}/>
    ))}
    </div>
  )
}

export default List
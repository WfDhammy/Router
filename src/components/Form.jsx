import React, {useState, useContext} from 'react';
import {Youtube} from '../Youtube';

const Form = () => {
  let {setMySearch} = useContext(Youtube);
  const [film, setFilm] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMySearch(film);
    setFilm('');
  }
  
  return (
   <div className='bg-black h-[100px]'>
     
        <form action="" onSubmit={handleSubmit} >
            <div className='flex justify-between items-center px-[100px]'>
                <div> <h1 className='text-white text-[29px]'>n <span className='text-[red] font-bold text-[40px]'>Flix</span></h1></div>




                <div>
                    <nav>
                    <input type="text" placeholder='search' value={film} onChange={(e) => setFilm(e.target.value) } />
                    </nav>

                </div>
                </div>

                <input type="Submit" />
        </form>
    

    


   </div>
  )
}

export default Form
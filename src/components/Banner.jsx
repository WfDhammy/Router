import React, { useContext } from 'react';
import { Youtube } from '../Youtube';
import { Carousel } from "flowbite-react";

const Banner = () => {
  let {selected, setSelected} = useContext(Youtube)


  return (

    

    <>
    <div>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        {selected.map((x) => (
          <img className='' src={x.snippet.thumbnails.default.url} alt="..." />

        ))}
        
        {/* <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." /> */}
      </Carousel>
    </div>
    </div>
    </>
  )
}

export default Banner
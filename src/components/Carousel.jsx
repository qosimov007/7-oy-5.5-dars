import React from 'react'

function Carousel() {
  return (
    <div className='max-w-[445px] h-auto  '>
      <div className="carousel">
        <div id="item1" className="carousel-item">
          <img src=""/>
        </div> 
        <div id="item2" className="carousel-item">
          <img src="https://picsum.photos/450/450?random=2"/>
        </div> 
        <div id="item3" className="carousel-item">
          <img src="https://picsum.photos/450/450?random=3"/>
        </div> 
        <div id="item4" className="carousel-item">
          <img src="https://picsum.photos/450/450?random=4"/>
        </div>
      </div> 
      <div className="flex justify-start py-2 gap-[40px] max-w-[445px]">
        <a href="#item1" className="max-w-[80] items-center">
          <img src="https://picsum.photos/80/80?random=1"/>  
        </a>
        <a href="#item2" className="max-w-[80]">
          <img src="https://picsum.photos/80/80?random=2"/>  
        </a>  
        <a href="#item3" className="max-w-[80]">
          <img src="https://picsum.photos/80/80?random=3"/>  
        </a> 
        <a href="#item4" className="max-w-[80]">
          <img src="https://picsum.photos/80/80?random=4"/>  
        </a> 
      </div>
    </div>
  )
}

export default Carousel

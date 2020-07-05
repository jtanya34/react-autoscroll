import React from 'react';



 function SlideButton({sliderNum,id,HandleClick}){
     return(
         <>
          <button className={sliderNum===id ?'show':''} onClick={()=>HandleClick(id)}/>
       </>
     )
 }

 export default SlideButton;
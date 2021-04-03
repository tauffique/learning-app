import React from 'react';
import Sdata from '../card/sdata';
import Card from '../card/card';
function Enrollment(){
    return(
      <>
       <div className='my '>
         <h1 className= ' class text-left ' >Class Enrollment</h1>
         </div>
         <div className='container-fluid '>
           <div className='row row1'>
             <div className='col-10 mx-auto'>
               <div className='row row1 gx-5'>
                 {

               
               Sdata.map((val,ind)=>{
                 return <Card
                 imgsrc={val.imgsrc}
                 title={val.title}
                 text={val.text}/>
               
             } )}
             </div>
            </div>
          </div>
         
          </div>
          </>
    );
  }
 export default Enrollment;
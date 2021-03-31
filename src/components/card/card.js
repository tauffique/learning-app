import React from 'react';
import physics from '../images/physics.svg'
import Sdata from '../card/sdata';
import intro from '../images/intro.svg'

const Card =(props)=>{
    return(
        <div className='col-md-4 col-10 mx-auto'>
            <div className='card card1'>
                <img className='img' src={props.imgsrc}alt='image1'/>
            
            <div className='card-body text-dark'>
                <h4 className='card-title'>{props.title}</h4>
                <p className='card-text '>
                {props.text}
                </p>
                </div>
                <a href='#'id='btn-text' className='btn btn-outline-success'>Enroll Now</a>
            </div>
            </div>
    );
}
export default Card;
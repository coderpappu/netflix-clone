import React from 'react'

const CardMovie = ({data}) => {
    console.log(data)
  return (
   <>
   
    <div className='singleCard'>
        <div className='card_img'>
            <img src={data.srcImg} alt='movie img'/>
        </div>
        <div className='moiveName'>
            <h4>{data.sName}</h4>
        </div>
    </div>
   </>
  )
}

export default CardMovie

import React from 'react'

function ItemDate({day,month,year}) {
  return (
    <div className='itemdate'>
      <span>{day}</span>
      <span>{month}</span>
      <span>{year}</span>     
    </div>
  );
}

export default ItemDate

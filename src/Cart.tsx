import React from 'react'

export const Cart = (FileProps: any ,cart:any,index:any) => {
  return (
    <div>

       <h1 key={index}>{cart}</h1>
    </div>
  )
}

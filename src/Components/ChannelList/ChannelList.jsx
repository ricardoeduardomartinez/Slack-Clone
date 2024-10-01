import React from 'react'

const ChannelList = (props) => {
  const MenuListasHTML =  props.MenuListas.map((lista) =>{
    return(
     <div key={lista.id}>
          <a  href="#">{lista.nombre}</a>
          <br />
    </div>
          
      
    )
  })
  return (
    <div> 
      <h1>
          {props.titulo}
      </h1>
       {MenuListasHTML}
    </div>
  )
}

export default ChannelList
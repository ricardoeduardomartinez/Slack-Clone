import React from 'react'

const ChatList = (props) => {
    const ArrayDeMensajesHTML = props.ArrayDeMensajes.map((mensaje)=>{
        return (
         <div key={mensaje.id}>
           <p>Hora: {mensaje.hour}</p>
           <p>Autor: {mensaje.author}</p>
           <p>Mensaje : {mensaje.text}</p>
           <br />
         </div>)
     })
     
  
    return (
    <div>
        <h1>
            {props.titulo}
        </h1>
        {ArrayDeMensajesHTML}
    </div>
  )
}

export default ChatList
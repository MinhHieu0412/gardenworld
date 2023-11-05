import React from 'react'

function Cartmini({ name, id, price, title }) {
  return (
    <div><tr>
    <td>{id}</td>
    <td>{name}</td>
    <td>{title}</td>
    <td>{price}</td>
  </tr></div>
  )
}

export default Cartmini
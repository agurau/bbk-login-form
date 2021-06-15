import React from 'react'

const Input = props => {
  return (
    <div className="input-field">
      <label htmlFor={props.id}>{props.title}</label>
      <input type={props.type} id={props.id} value={props.value} onChange={props.onChange} />
      <p class="input-error">{props.error}</p>
    </div>
  )
}

export default Input
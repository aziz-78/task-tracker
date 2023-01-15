import React from 'react'
import PropTypes from 'prop-types'


const Button = (props) => {
  
  return (
    <button onClick={props.onClick} className='btn' style={{backgroundColor: props.color}}>{props.text}</button>
  )
}

export default Button

Button.defaultProps = {
    color : "steelblue",
    text : "Add"
}
Button.propTypes = {
    color: PropTypes.string.isRequired,
    text: PropTypes.string,
    onClick: PropTypes.func
}
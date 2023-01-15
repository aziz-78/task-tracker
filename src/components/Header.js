import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'
const Header = ({title,showAdd,showAddTask}) => {
  const location = useLocation()
  return (
    <header className='header'>
      <h1 > {title}</h1>
      {location.pathname === '/' &&(<Button color ={showAddTask?"red":"green"}  text={showAddTask?"Close":"Add"} onClick = {showAdd}/>)}
    </header>
  )
}
Header.defaultProps = {
title : "Task Tracker"
}
Header.propTypes = {
 title: PropTypes.string
}
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }
export default Header

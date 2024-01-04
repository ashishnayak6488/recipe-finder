import React from 'react'
import {Menu} from 'semantic-ui-react'
import logo from '../../constants/logo.png'
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <Menu borderless fixed='top'>
        <Menu.Item>
            <img src={logo} alt="" style={{ width: 150}} />
        </Menu.Item>
        <Menu.Item name='Home' as={Link} to = '/' className='nav-item' />
        <Menu.Item name='Recipes' as={Link} to = '/recipes' className='nav-item' />

    </Menu>
  )
}

export default Navbar
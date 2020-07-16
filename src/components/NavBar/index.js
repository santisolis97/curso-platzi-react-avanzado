import React from 'react'
import { Nav } from './style'
import { Link } from './style'
import { MdFavoriteBorder, MdHome, MdPersonOutline  } from "react-icons/md"

const SIZE = '32px' 

export const Navbar = () =>{
    return(
        <Nav>
            <Link to='/'><MdHome size={SIZE}/></Link>
            <Link to='/favs'><MdFavoriteBorder size={SIZE}/></Link>
            <Link to='/user'><MdPersonOutline size={SIZE}/></Link> 
        </Nav>
    )
}
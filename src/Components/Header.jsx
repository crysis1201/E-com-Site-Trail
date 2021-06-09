import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../assests/crown.svg';
import {auth} from "../Components/firebase/firebase-utils"

import './header.styles.scss';

const Header = ({currentUser}) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shoppage'>
        SHOP
      </Link>
      <Link className='option' to='/contact'>
        CONTACT
      </Link>
      <div>
        {
          currentUser ?
          <div onClick={() => auth.signOut()} className='cursor-pointer option uppercase' to='/signin'>
              Sign Out
          </div> 
          :
          <Link className='option uppercase' to='/signin'>
               Sign In
          </Link>
        }
      </div>
      
    </div>
  </div>
);

export default Header;
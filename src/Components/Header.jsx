import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../assests/crown.svg';
import {auth} from "../Components/firebase/firebase-utils"
import CartIcon from './Cart/cart-icon'
import './header.styles.scss';
import CartDropdown from "./Cart/cart-dropdown"
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../react/user/user.selectors';
import { selectCartHidden } from '../react/cart/cart.selectors';

const Header = ({currentUser, hidden, history}) => (
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
      <CartIcon />   
    </div>
    {
      hidden ? null : <CartDropdown />
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default  connect(mapStateToProps)(Header);
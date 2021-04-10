import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import CartIcon from '../cart-icon/cart-icon.component.jsx';
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {HeaderContainer,LogoContainer,OptionsContainer,OptionLink,OptionDiv} from './header.styles.jsx';
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import {auth} from '../../firebase/firebase.utils';
const Header=({currentUser,hidden})=>(
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className='logo'></Logo>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='shop'>
                SHOP
            </OptionLink>
            <OptionLink to='shop'>
                CONTACT
            </OptionLink>
            {
                currentUser?
                <OptionDiv onClick={()=>auth.signOut()}>SIGN OUT</OptionDiv>
                :
                <OptionLink to='/signin'>SIGN IN</OptionLink>
            }
            <CartIcon></CartIcon>
        </OptionsContainer>
        {
            hidden?null:
            <CartDropdown></CartDropdown>
        }
    </HeaderContainer>
);
const mapStateToProps=createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
});
export default connect(mapStateToProps)(Header);
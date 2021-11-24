import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {useStateValue} from "./StateProvider";
import {auth} from './firebase';

function Header() {

    const [{ basket, user }] =  useStateValue();

    //console.log(basket);

    const login = () => {
        if (user) {
            auth.signOut();
        }

    }

    return (
        <nav className = "header">
            <Link to ="/">
                {/*logo*/}
                <img className = "header_logo" src = "https://thumbs.dreamstime.com/b/e-commerce-2283014.jpg" alt= ""/>
            
            </Link>

            {/* Search Box*/}
            <div className = "header_search">
                <input type = "text" className = "header_searchInput"/>
                <SearchIcon className = "header_searchicon"/>
            </div>



            {/* 3 links make the actual nav as cleans as possible*. This would include the right side icons inclduing baskets*/}
            <div className = "header_nav">

                {/* 1st icons/link include the hello and down to its the sign in option. So we will wrap them together to make the styling easier*/}
                <Link to = {!user && "/login"} className = "header_link">
                    <div onClick = {login} className = "header_option">
                        <span className = "header_optionone">Hello {user?.email}</span>
                        <span className = "header_optiontwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

            {/* 2nd link*/}
                <Link to = "/" className = "header_link">
                    <div className = "header_option">
                        <span className = "header_optionone"> Returns</span>
                        <span className = "header_optiontwo"> & Orders</span>
                    </div>
                </Link>



            {/* 3nd link*/}
                <Link to = "/" className = "header_link">
                    <div className = "header_option">
                        <span className = "header_optionone"> Your</span>
                        <span className = "header_optiontwo"> Premium</span>
                    </div>
                </Link>


            {/* 4th link for basket*/}

                <Link to = "/checkout" className = "header_link">
                <div className = "header_optionbasket">
                    {/* Shopping basket icon*/}
                    <ShoppingBasketIcon/>

                    {/* No of items in basket counter*/}
                    <span className = "header_optiontwo header_basketCount">{basket?.length}</span>

                </div>
                </Link>

            </div>



        </nav>
    )
}

export default Header;

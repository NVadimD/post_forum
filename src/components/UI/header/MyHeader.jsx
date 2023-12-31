import React, { useContext, useState } from 'react'
import cl from './MyHeader.module.css'
import MyBtn from '../button/MyBtn'
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../context';

const MyHeader = () => {

    const [visibleNav, setVisibleNav] = useState(false);

    const location = useLocation();
    const currentPath = location.pathname;

    const {isAuth, setIsAuth, userName, setUserName} = useContext(AuthContext);

    function logout() {
        setIsAuth(false);
        setUserName('');
        localStorage.setItem('auth', false);
        localStorage.setItem('userName', '');
    }

    return (
        <div className={cl.header__wrapper}>
        {isAuth
            ?
                <div className={cl.header}>
                    <div className={cl.header__container}>
                            <div className={cl.logo_group}>
                                <div className={cl.header__logo}>

                                </div>
                                <div className={cl.menu__logo} onClick={() => setVisibleNav(true)}>

                                </div>
                            </div>
                            <div className={cl.header__content}>
                                <div className={`${cl.nav_bar} ${visibleNav ? cl.active : ''}`}>
                                    <div className={`${cl.close_ico} ${visibleNav ? cl.active : ''}`} onClick={() => setVisibleNav(false)}>

                                    </div>
                                    <ul>
                                        <li className={`${cl.li} ${currentPath === '/posts' ? cl.active : ''}`}>
                                            <Link to="/posts" onClick={() => setVisibleNav(false)}>Post</Link>
                                        </li>
                                        <li className={`${cl.li} ${currentPath === '/selected' ? cl.active : ''}`}>
                                            <Link to="/selected" onClick={() => setVisibleNav(false)}>Favorites</Link>
                                        </li>
                                        <li className={`${cl.li} ${currentPath === '/about' ? cl.active : ''}`}>
                                            <Link to="/about" onClick={() => setVisibleNav(false)}>About</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className={cl.user_section}>
                                    <div className={cl.user_section__name}>
                                        {userName}
                                    </div>
                                    <div className="user_section__logout_btn">
                                        <MyBtn exit onClick={logout}>Log out</MyBtn>
                                    </div>
                                </div>
                            </div>              
                    </div>
                </div>
            :
                null
        }        
        </div>
    )
}

export default MyHeader

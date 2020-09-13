import React,{Fragment} from 'react';
import './Header.scss';
import NavItem from './navItems/NavItem';

const Header = () => {
    const headerItems=['Cars','Car Care','Offers','Sign Up','Login'];
    return (
        <div className="nav">
            <div className="appLogo">
                vRooomCar
            </div>
            <nav className="menu-items">
                <ul>
                    {
                        headerItems.map((item,i)=>{
                            return (
                                <NavItem key={i}>{item}</NavItem>
                            );
                        })
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Header;
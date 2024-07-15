// Navbar.tsx

import {useState} from 'react';
import CartSidebar from './CartSideBar';
import {useCart} from '../../hooks/useCart';
import IconBurger from '../atoms/IconBurger';
import Title from '../atoms/common/Title';
import MenuNavbar from '../molecules/NavbarMenu';

const Navbar=() => {
    const [isCartOpen,setIsCartOpen]=useState(false);
    const [isMenuOpen,setIsMenuOpen]=useState(false);
    const {cartItems}=useCart();

    const handleIconBurgerClick: () => void=(): void => {
        setIsCartOpen(!isCartOpen);
    };

    const handleNavbarMenuClick: () => void=(): void => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <div className="z-50 top-0 fixed h-10 w-screen flex flex-row-reverse justify-between items-center px-4 pt-2 bg-brown box-shadow text-black text-lg">
                <div className="flex flex-row gap-2">
                    <Title color="text-yellow" title={"MOSTAZA"} />
                    <IconBurger onClick={handleIconBurgerClick} productCount={cartItems.length} />
                </div>
                <MenuNavbar onClick={handleNavbarMenuClick} />
            </div>
            <CartSidebar isOpen={isCartOpen} onClose={(): void => setIsCartOpen(false)} />
        </div>
    );
};

export default Navbar;

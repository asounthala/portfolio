import Hamburger from 'hamburger-react'
import React from 'react'
import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { NavLink } from 'react-router-dom';

const HamburgerMenu = React.memo(() => {
    const menu = useRef(null)
    const [isOpen, setIsOpen] = useState(false)

    // Disable scroll when the menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isOpen])

    // Sets the initial position of the menu to be off screen
    useEffect(() => {
        if (menu.current) {
            gsap.set(menu.current, {
                y: -menu.current.offsetHeight, // used the actual heigh of menu
            });
        }
    }, []);

    // Animate the menu
    useGSAP(() => {
        if (menu.current) {
            if (isOpen) {
                gsap.fromTo(
                    menu.current,
                    { y: -menu.current.offsetHeight },
                    {
                        y: 0, duration: 0.8,
                        ease: 'power3.out'
                    }
                );
            } else {
                gsap.to(menu.current,
                    {
                        y: -menu.current.offsetHeight
                        , duration: 0.5
                    }
                );
            }
        }
    }
        , [isOpen])
    return (
        <div className='z-1'>
            <Hamburger
                size={30}
                toggled={isOpen}
                toggle={setIsOpen}
                color={isOpen ? '#fff' : '#000'}
                duration={0.3}
                direction='right'
                easing='ease-in'
            />

            <div
                ref={menu}
                className={`-z-1 y-w fixed top-0 left-0 w-screen h-screen text-white bg-neutral-900`}
            >
                <ul className='h-screen flex flex-col items-center justify-start pt-55 gap-10 text-4xl font-satoshi-bold'>
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? 'opacity-20' : null}>&#123; adrian &#125;
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" className={({ isActive }) => isActive ? 'opacity-20' : null}>&#123; projects &#125;
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => isActive ? 'opacity-20' : null}>&#123; about &#125;
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? 'opacity-20' : null}>&#123; contact &#125;
                        </NavLink>
                    </li>
                </ul>
            </div>

        </div>
    )
})
export default HamburgerMenu
import { useState, useEffect, } from 'react';
import { Navbar, Container  } from 'react-bulma-components';
import logo from '../logo.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 70) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
      }

      window.addEventListener('scroll', onScroll)
      return() => window.removeEventListener('scroll', onScroll) 
    }, [])

    const updatingActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <>
            <Navbar className={scrolled ? 'is-fixed-top' : ''} role='navigation' aria-label='main navigation' transparent={true}>
                <Container className='p-2'>
                    <Navbar.Brand>
                        <Navbar.Item className='has-text-weight-bold none-effect' href='index.html'>
                            <img src={logo} alt="brandLogo" className='image is-48x48'/>
                            Erick Felipa
                        </Navbar.Item>
                        <Navbar.Burger role='button' arial-label='menu' aria-expanded='false' data-target='navLinks'>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </Navbar.Burger>
                    </Navbar.Brand>
                    <Navbar.Menu id='navLinks'>
                        <div className="navbar-start">
                            <Navbar.Item className={activeLink==='home'? 'active' : ''} onClick={() => {updatingActiveLink('home')}}>Home</Navbar.Item>
                            <Navbar.Item className={activeLink==='skills'? 'active' : ''} onClick={() => {updatingActiveLink('skills')}}>Skills</Navbar.Item>
                            <Navbar.Item className={activeLink==='projects'? 'active' : ''} onClick={() => {updatingActiveLink('projects')}}>Projects</Navbar.Item>
                        </div>
                    </Navbar.Menu>
                </Container>
            </Navbar>
        </>
    )
}
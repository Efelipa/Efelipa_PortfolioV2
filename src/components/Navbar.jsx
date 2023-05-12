import { useState, useEffect, } from 'react';
import { Navbar, Container  } from 'react-bulma-components';
import logo from '../logo.svg';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState(false);

    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 75) {
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
            <Navbar className={scrolled ? 'is-fixed-top scrolled' : 'transparent'} role='navigation' aria-label='main navigation'>
                <Container className='p-2'>
                    <Navbar.Brand>
                        <Navbar.Item className='has-text-weight-bold none-effect' href='index.html'>
                            <img src={logo} alt="brandLogo" className='image is-48x48'/>
                            Erick Felipa
                        </Navbar.Item>
                        <Navbar.Burger onClick={() => {setActive(!active)}} role='button' arial-label='menu' aria-expanded='false' data-target='navLinks' className={`burger ${active ? 'is-active' : ''}`}>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </Navbar.Burger>
                    </Navbar.Brand>
                    <Navbar.Menu id='navLinks' className={active ? 'is-active' : ''}>
                        <div className={'navbar-start ml-2'}>
                            <Navbar.Item className={activeLink==='home'? 'active' : ''} onClick={() => {updatingActiveLink('home')}}>Home</Navbar.Item>
                            <Navbar.Item className={activeLink==='skills'? 'active' : ''} onClick={() => {updatingActiveLink('skills')}}>Skills</Navbar.Item>
                            <Navbar.Item className={activeLink==='projects'? 'active' : ''} onClick={() => {updatingActiveLink('projects')}}>Projects</Navbar.Item>
                        </div>
                    </Navbar.Menu>
                    <Navbar.Menu>
                        <div className={'navbar-end'}>
                            <Navbar.Item href={'https://github.com/Efelipa'} className='icons-movement'><FaGithub/></Navbar.Item>
                            <Navbar.Item className='icons-movement' href={'https://www.instagram.com/e_felipa/'}><FaInstagram/></Navbar.Item>
                            <Navbar.Item className='icons-movement' href={'https://www.linkedin.com/in/efelipadev/'}><FaLinkedin/></Navbar.Item>
                        </div>
                    </Navbar.Menu>
                </Container>
            </Navbar>
        </>
    )
}
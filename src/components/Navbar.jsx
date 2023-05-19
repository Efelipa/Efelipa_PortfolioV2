import { useState, useEffect, } from 'react';
import { Navbar, Container  } from 'react-bulma-components';
import logo from '../components/assets/img/logo.svg';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState(false);

    useEffect(() => {
        // Define a onScroll function for apply a fixed top style
        const onScroll = () => {
            if (window.scrollY > 50) {
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
        // Navbar section
        <>
            <Navbar className={scrolled ? 'is-fixed-top scrolled' : 'transparent'} role='navigation' aria-label='main navigation'>
                <Container className='p-2'>
                    <Navbar.Brand>
                        <Navbar.Item className='has-text-weight-bold none-effect' href='index.html'>
                            <img src={logo} alt="brandLogo" className='image is-48x48' id={'brandLogo'}/>
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
                            <Navbar.Item className={activeLink==='home'? 'active' : ''} onClick={() => {updatingActiveLink('home')}} href='#main'>Home</Navbar.Item>
                            <Navbar.Item className={activeLink==='skills'? 'active' : ''} onClick={() => {updatingActiveLink('skills')}} href='#skills'>Skills</Navbar.Item>
                            <Navbar.Item className={activeLink==='projects'? 'active' : ''} onClick={() => {updatingActiveLink('projects')}} href='#projects'>Projects</Navbar.Item>
                            <Navbar.Item className={activeLink==='projects'? 'active' : ''} onClick={() => {updatingActiveLink('contact-me')}} href='#contact-me'>Contact me</Navbar.Item>
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
import { useState, useEffect, } from 'react';
import { Navbar, Container,  } from 'react-bulma-components';
import logo from '../logo.png';

export const NavBar = () => {
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
    
    return (
        <>
            <Navbar className={scrolled ? 'is-fixed-top' : ''} role='navigation' aria-label='main navigation'>
                <Container className='p-3'>
                    <div className="navbar-brand">
                        <img src={logo} alt='brandLogo' className='image is-48x48'/>
                        <a className='navbar-item is-size-4' href='index.html'>
                            Erick Felipa
                        </a>
                    </div>
                </Container>
            </Navbar>
            {/* <nav className={scrolled ? 'has-background-secondary' : ''} role="navigation" aria-label="main navigation">
                <div className="container">
                    <div className="navbar-brand">
                        <span id='brandLogo'></span>
                        <a className='navbar-item' href='https://bulma.io'>
                            Erick Felipa
                        </a>
                    </div>
                    <div id="navbarBasicExample" className='navbar-menu'>
                        <div className="navbar-start">
                            <div className="navbar-item">
                                Home
                            </div>
                        </div>
                    </div>
                </div>
            </nav> */}
            
        </>
    )
}
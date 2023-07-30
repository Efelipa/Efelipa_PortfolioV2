import { Container, Columns } from 'react-bulma-components';
import { ResumeButton } from './ResumeButton';
import portfolioAvatar from '../components/assets/img/portfolioAvatar.svg';
import Typewriter from 'typewriter-effect';


export const Content = () => {
    return (
        // Main section
        <section className={'hero is-medium my-4'} id='main'>
            <Container>
                <div className={'hero-body'}>
                    <Columns className='has-text-centered reverse-columns box sf-mono-medium'>
                        <div className="column is-12-mobile is-12-tablet is-6-desktop my-auto position-button">
                            <h1 className="title is-1">
                            Hi, my name is Erick.
                            </h1>
                            <h2 className='mb-6 is-size-4 has-text-weight-light'>
                                {/* Typewriter Effect */}
                                <Typewriter onInit={(typewriter)=> {typewriter.typeString("Welcome to my portfolio!!").pauseFor(700).deleteAll().typeString("Frontend Developer").start();}}/>
                            </h2>
                            <div className="buttons centered-button">
                                <button className="button has-background-custom">
                                    <a href="#contact-me" className='has-text-white'>
                                        Contact me
                                    </a>
                                </button>
                                <ResumeButton/>
                            </div>
                        </div>
                        <div className="column is-12-mobile is-12-tablet is-6-desktop position-top">
                            <img src={portfolioAvatar} alt="avatar" id={'avatar'}/>
                        </div>
                    </Columns>
                </div>
            </Container>    
        </section>
    )
}


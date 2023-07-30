import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Columns, Card } from 'react-bulma-components';
import bootstrap from './assets/img/bootstrap.webp';
import javascript from './assets/img/javascript.webp';
import python from './assets/img/python.webp';
import bulma from './assets/img/bulma css.webp';
import react from './assets/img/react.webp';
import html from './assets/img/html.webp';
import css from './assets/img/css.webp';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      const carouselImages = [
        {
            name: html,
            title: 'Html5',
            skill_level: 'Medium',
        },
        {
            name: css,
            title: 'Css3',
            skill_level: 'Medium',
        },
        {
            name: javascript,
            title: 'Javascript',
            skill_level: 'Medium',
        },
        {
            name: react,
            title: 'React',
            skill_level: 'Medium',
        },
        {
            name: bootstrap,
            title: 'Bootstrap',
            skill_level: 'Advanced',
        }, 
        {
            name: bulma,
            title: 'Bulma',
            skill_level: 'Medium',
        },
        {
            name: python,
            title: 'Python',
            skill_level: 'Medium',
        }
      ];

    return (
        <section id={'skills'}>
            <Container className='is-fluid'>
                <div className={'box'}>
                    <Columns>
                        <div className={'column is-12-desktop is-12-mobile is-12-tablet'}>
                            <h1 className={'has-text-centered title my-3 bebas is-2'}>
                                Let me <span className='has-text-main'>introduce</span> myself
                            </h1>
                        </div>
                        <div className={'column is-10-desktop is-12-mobile is-10-tablet is-offset-1-tablet is-offset-1-desktop sf-mono-light'}>
                            <p className={'is-2 has-text-justified has-text-weight-normal'}>
                            Hello, my name is Erick and my journey in web development started in 2020. The approach I had since I was a child with new technologies and the desire to capture a part of me on the internet allowed me to learn about development and be part of it. 
                            My learning and development skills allow me to solve problems in the most efficient possible way. I love what I do and specially keep on learning.
                            </p>
                            <p className={'is-2 has-text-justified has-text-weight-bold'}>
                            Here are a few technologies i've been working with: 
                            </p>
                        </div>
                    </Columns>
                <div className={'hero-body'}>
                    <Columns className={'has-text-centered'}>
                        <div className={'column is-12-desktop is-12-mobile is-12-tablet'}>
                            <h1 className={'has-text-centered title my-3 bebas is-2'}>
                                My skills
                            </h1>
                        </div>
                        <div className={'column is-12-desktop is-12-mobile is-12-tablet'}>
                            <Carousel responsive={responsive} infinite={true} className={'slider is-1-mobile is-2-desktop'}>
                                {carouselImages.map((source, index) => (
                                    <Card key={index}>
                                        <Card.Image src={source.name} alt={source.title}/>
                                        <Card.Content>
                                            <div className={'media-content'}>
                                                <p className={'title is-4 is-uppercase ubuntu-bold'}>{source.title}</p>
                                                <p className={'subtitle is-6'}>
                                                    {`My skill level: ${source.skill_level}`}
                                                </p>
                                            </div>
                                        </Card.Content>
                                    </Card>
                                ))}
                            </Carousel>
                        </div>
                    </Columns>
                </div>
                </div>
            </Container>
        </section>
    )
}
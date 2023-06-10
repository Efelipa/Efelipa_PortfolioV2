import { Container, Columns } from 'react-bulma-components';
import { Mockup } from './Mockup';
import scorekeeper from './assets/img/scorekeeper.png';
import museum from './assets/img/museum.png';

export const Projects = () => {
    const projectsData = [
        {
            name: 'Score-Keeper',
            technologies: [
                'html', 'css', 'javascript'
            ],
            url: 'https://wondrous-malabi-7dfa78.netlify.app/',
            img: scorekeeper,
        },
        {
            name: 'Mouseum of candy',
            technologies: [
                'html', 'css', 'javascript', 'jquery'
            ],
            url: 'https://effulgent-cuchufli-49515a.netlify.app/',
            img: museum,
        },
    ]
    
    return (
        <section id='projects'>
            <Container className='is-fluid mt-3 p-3'>
                <Columns>
                    <div className={'column is-12-desktop is-12-mobile is-12-tablet'}>
                        <h1 className={'has-text-centered title my-3 bebas is-2'}>
                            My projects
                        </h1>
                    </div>
                        {projectsData.map((project, index) => {
                            const name = project.name;
                            const tech = project.technologies;
                            const url = project.url;
                            const img = project.img;
                            return (
                                <div key={index} className='column is-one-third'>
                                    <Mockup name={name} image={img} tech={tech} url={url}/>
                                </div>
                            );
                        })}   
                </Columns>
            </Container>
        </section>
    )
}


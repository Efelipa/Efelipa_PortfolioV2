import { Container, Columns } from 'react-bulma-components';
import { Mockup } from './Mockup';
import scorekeeper from './assets/img/scorekeeper.png';
import museum from './assets/img/museum.png';
import gamrstand from './assets/img/gamrstand.png';

export const Projects = () => {
    const projectsData = [
        {
            name: 'Score-Keeper',
            id: 1,
            technologies: [
                'html', 'css', 'javascript'
            ],
            url: 'https://wondrous-malabi-7dfa78.netlify.app/',
            img: scorekeeper,
        },
        {
            name: 'Mouseum of candy',
            id: 2,
            technologies: [
                'html', 'css', 'javascript', 'jquery'
            ],
            url: 'https://effulgent-cuchufli-49515a.netlify.app/',
            img: museum,
        },
        {
            name: 'GAMRSTAND',
            id: 3,
            technologies: [
                'html', 'bootstrap', 'javascript'
            ],
            url: 'https://thirsty-bose-145d32.netlify.app/',
            img: gamrstand,
        }
    ]
    
    return (
        <section id='projects'>
            <Container className='mt-3 p-3'>
                <Columns>
                    <div className={'column is-12-desktop is-12-mobile is-12-tablet'}>
                        <h1 className={'has-text-centered title my-3 bebas is-2'}>
                            My projects
                        </h1>
                    </div>
                        {projectsData.map((project) => {
                            const name = project.name;
                            const tech = project.technologies;
                            const url = project.url;
                            const img = project.img;
                            return (
                                <div key={project.id} className='column is-one-third is-12-mobile'>
                                    <Mockup name={name} image={img} tech={tech} url={url}/>
                                </div>
                            );
                        })}   
                </Columns>
            </Container>
        </section>
    )
}


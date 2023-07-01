import {Container} from 'react-bulma-components';

export const Footer = () => {
    return (
        <div id='footer'>
            <Container>
                <p className='has-text-centered my-2 sf-mono-light'>
                    Developed by <span className='sf-mono-medium'>Efelipa Dev &#169;</span> All rights reserved.
                </p>
            </Container>
        </div>
    )
}
import { useState } from 'react';
import { Container} from 'react-bulma-components';

export const Contact = () => {
    const [inputValue, setInputValue] = useState('');
    return (
        <section className={'form'} id="contact-me">
            <Container>
                <form action="#">
                    <div className="field">

                    </div>
                </form>
            </Container>
        </section>
    )
}
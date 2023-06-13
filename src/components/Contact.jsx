import { Container, Columns, Button } from 'react-bulma-components';
import { useForm } from 'react-hook-form';
import { FaUser,FaMailBulk } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const { register, formState: { errors },handleSubmit, reset } = useForm();
 
    const onSubmit = (data) => {    
        emailjs
            .send('service_35q5kt5', 'template_o1308ex', data, '5KOisG2KxUxjqeG6y')
            .then((response) => {
                console.log(response.text);
                reset();
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <section id="contact-me" className='my-3'>
            <Container>
                <h1 className="title is-2 bebas has-text-centered has-text-white">
                    Contact me
                </h1>
                <div className={'box'}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Columns>
                        <div className='column is-6-desktop is-12-tablet is-12-mobile'>
                            <div className='field'>
                                <div className='label'>
                                    Name:
                                    <div className='control has-icons-left'>
                                        <input type='text' placeholder='Type your name' className='input' {...register('name', {
                                            required: true
                                        })}/>
                                        {errors.name?.type === 'required' && <p className='help is-danger'>This field is required</p>}
                                        <span className='icon is-small is-left'>
                                            <FaUser/>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='column is-6-desktop is-12-tablet is-12-mobile'>
                            <div className='field'>
                                <div className='label'>
                                    Mail:
                                    <div className='control has-icons-left'>
                                        <input type='mail' placeholder='Type your email' className='input' {...register('mail', {
                                            pattern: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/i,
                                            required: true,
                                        })}/>
                                        {errors.mail?.type === 'required' && <p className='help is-danger'>This field is required.</p>}
                                        {errors.mail?.type === 'pattern' && <p className='help is-danger'>The email address is invalid.</p> }
                                        <span className='icon is-small is-left'>
                                            <FaMailBulk/>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='column is-12-desktop is-12-tablet is-12-mobile'>
                            <div className='field'>
                                <div className='label'>
                                    Send me a message:
                                    <div className='control'>
                                        <textarea className='textarea' placeholder="Get in touch" {...register('message')}></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <Button id='submitForm'>
                                    Send
                                </Button>
                            </div>
                        </div>
                        </Columns>
                    </form>
                </div>
            </Container>
        </section>
    )
}
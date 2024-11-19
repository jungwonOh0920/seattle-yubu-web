import {useState, useEffect, useRef} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import emailjs from '@emailjs/browser'

function Contact() {
    const [validated, setValidated] = useState(false);
    const form = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);

    }

    useEffect(() => {
        if (validated) {
            console.log('form: ', form);
            console.log('service id: ', process.env.REACT_APP_SERVICE_ID);
            emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, {
                publicKey: process.env.REACT_APP_PUBLIC_KEY
            }).then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        }
    }, [validated])

    return (
        <div className='max-w-lg mx-auto pt-6'>
            <h2 className="text-amber-400" style={{textShadow: "1px 1px #000000"}}>Let's talk!</h2>
            <p className="text-amber-400">We love to hear from you!</p>
            <Form noValidate validated={validated} onSubmit={handleSubmit} ref={form}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control required type="text" name='user_name' />
                    <Form.Control.Feedback type="invalid">
                        Please Enter your name.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required type="email" placeholder="yourEmail@example.com" name='user_email' />
                    <Form.Control.Feedback type="invalid">
                        Please Enter your email so that you can hear back from us!
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Enter your message</Form.Label>
                    <Form.Control required as="textarea" rows={3} name='message' />
                    <Form.Control.Feedback type="invalid">
                        Ask us anything!
                    </Form.Control.Feedback>
                </Form.Group>
                <Button type="submit" variant="warning">Submit</Button>
            </Form>
        </div>
    )
}

export default Contact
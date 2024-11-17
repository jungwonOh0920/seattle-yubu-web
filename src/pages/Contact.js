import {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Contact() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    }

    return (
        <div className='max-w-lg mx-auto pt-6'>
            <h2 className="text-amber-400" style={{textShadow: "1px 1px #000000"}}>Let's talk!</h2>
            <p className="text-amber-400">We love to hear from you!</p>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required type="email" placeholder="yourEmail@example.com" />
                    <Form.Control.Feedback type="invalid">
                        Please Enter your email so that you can hear back from us!
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Enter your message</Form.Label>
                    <Form.Control required as="textarea" rows={3} />
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
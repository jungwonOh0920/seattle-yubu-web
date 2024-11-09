import React from 'react'
import {InstagramEmbed} from 'react-social-media-embed';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Insta() {
    return (
        <section className='my-12 max-w-7xl block mx-auto'>
            <div className='max-w-5xl block mx-auto my-12 text-center border-b-4 border-amber-400'>
                <h2>New Updates</h2>
                <p className='text-amber-400'>Follow us on Instagram <span className='text-amber-500'>@seattleyubu</span></p>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}} className='max-w-full overflow-hidden'>
                <Container>
                    <Row>
                        <Col sm>
                            <InstagramEmbed url="https://www.instagram.com/p/DCDx2gUxgun/" />
                        </Col>
                        <Col sm>
                            <InstagramEmbed url="https://www.instagram.com/p/DCA9qE1JXYG/" />
                        </Col>
                        <Col sm>
                            <InstagramEmbed url="https://www.instagram.com/p/DBRlMGFSuXy/" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default Insta
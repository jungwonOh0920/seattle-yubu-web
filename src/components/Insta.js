import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Insta() {
    return (
        <div className='max-w-7xl mx-auto text-center py-8 overflow-x-hidden'>
            <div className='border-b-2 border-slate-800 py-4'>
                <h2>New Updates</h2>
            </div>
            <h3 className='py-8 text-amber-300'>Follow us on Instagram <span className='text-yellow-400'>@seattleyubu</span></h3>
            <Row xs={1} md={3} className="g-4">
                <Col>
                    <Card onClick={() => window.open("https://www.instagram.com/p/DCDx2gUxgun/", "_blank")} className='hover:opacity-50'>
                        <Card.Img variant="top" src={require("../assets/insta1.png")} className='cursor-pointer' />
                        <Card.Body>
                            <Card.Title>Giveaway Event</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card onClick={() => window.open("https://www.instagram.com/p/DBRlMGFSuXy/", "_blank")} className='hover:opacity-50'>
                        <Card.Img variant="top" src={require("../assets/insta2.png")} className='cursor-pointer' />
                        <Card.Body>
                            <Card.Title>Sweet Tamago</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card onClick={() => window.open("https://www.instagram.com/p/DA4VdhoSgtF/", "_blank")} className='hover:opacity-50'>
                        <Card.Img variant="top" src={require("../assets/logo.png")} className='cursor-pointer' />
                        <Card.Body>
                            <Card.Title>Stickers arrival</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </div>
    )
}

export default Insta
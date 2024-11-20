import React from 'react'
import YubuBanner from '../components/YubuBanner'
import Insta from '../components/Insta'
import {Button} from 'react-bootstrap'
import {useNavigate} from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (
        <div>
            <YubuBanner />
            <div className='text-center my-5'>
                <Button variant='warning' size="lg" href='https://www.instagram.com/seattleyubu/'>Order on Instagram</Button>
            </div>
            <Insta />
            {/* <div className='text-center py-5'>
                <Button
                    variant="warning"
                    size='lg'
                    onClick={() => navigate("/contact")}>
                    Contact Us!
                </Button>
            </div> */}
            <div className='text-center py-5'>
                <Button
                    variant="dark"
                    size='lg'
                    onClick={() => navigate("/menu")}>
                    Menu 🤌
                </Button>
            </div>
        </div>
    )
}

export default Home
import React from 'react'
import YubuBanner from '../components/YubuBanner'
import Insta from '../components/Insta'
// import {Button} from 'react-bootstrap'
// import {useNavigate} from "react-router-dom";

function Home() {
    // const navigate = useNavigate();

    return (
        <div>
            <YubuBanner />
            <Insta />
            {/* <div className='text-center py-5'>
                <Button
                    variant="warning"
                    size='lg'
                    onClick={() => navigate("/contact")}>
                    Contact Us!
                </Button>
            </div> */}
        </div>
    )
}

export default Home
import React from 'react'
import {Button} from 'react-bootstrap'

function Menu() {
    return (
        <div className='max-w-screen-lg mx-auto pt-5'>
            <h3 className='px-3'>** DM us on Instagram. Please place your order at least one day in advance. **</h3>
            <div className='text-center mb-5'>
                <Button variant='warning' size="lg" href='https://www.instagram.com/seattleyubu/'>Order on Instagram</Button>
            </div>
            <img alt='menu' src={require('../assets/yubuMenu.jpg')} className='border mb-5' />
        </div>
    )
}

export default Menu
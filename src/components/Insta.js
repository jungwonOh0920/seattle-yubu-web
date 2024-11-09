import React, {useState, useEffect} from 'react'
import {InstagramEmbed} from 'react-social-media-embed';

function Insta() {
    return (
        <section className='my-12'>
            <div className='max-w-5xl block mx-auto my-12 text-center border-b-4 border-amber-400'>
                <h2>New Updates</h2>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <InstagramEmbed url="https://www.instagram.com/p/DCDx2gUxgun/" width={328} />
            </div>
        </section>
    )
}

export default Insta
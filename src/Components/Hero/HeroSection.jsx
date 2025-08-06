import React from 'react'

const HeroSection = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px', justifyContent: 'center' }}>
            {/* information */}
            <div style={{ width: '128px', height: '128px', borderRadius: '100px' }}>
                <img src="https://res.cloudinary.com/dwf753l9w/image/upload/v1748697986/193201d0-3e0d-11f0-a1d4-b9c1a8989f6e_3_zht4jo.jpg" alt="Javas profile" width={'100%'} style={{ borderRadius: '100px' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <h1>Javas Anggaraksa Rabbani</h1>
                <div style={{ marginTop: '8px' }}>
                    <p>Full-Stack Web Developer</p>
                    <p style={{ color: 'gray' }}>Building Useful & Scalable Web App | React & Express.js</p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection

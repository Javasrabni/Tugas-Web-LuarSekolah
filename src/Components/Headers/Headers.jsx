import React, { useState } from 'react'

const Header = () => {
    const Navigation = ['About', 'Skill', 'Portfolio', 'Contact']
    const [navigationIndex, setNavigationIndex] = useState(0)
    return (
        <div style={{ position: 'fixed', left: '50%', bottom: '0', transform: 'translate(-50%, -50%   )', width: 'fit-content', height: '54px', display: 'flex', justifyContent: 'center', backgroundColor: 'var(--gray-secondary)', borderRadius: '64px', alignItems: 'center', padding: '0px 32px' }}>
            <ul style={{ display: 'flex', gap: '12px', listStyle: 'none' }}>
                {Navigation.map((item, idx) =>
                    <li key={idx}><p style={{ fontSize: '14px', cursor: 'pointer', textDecoration: navigationIndex === idx && 'underline', color:  navigationIndex === idx ? 'black' : 'gray' }} onClick={() => setNavigationIndex(idx)}>{item}</p></li>
                )}
            </ul>

        </div>
    )
}

export default Header

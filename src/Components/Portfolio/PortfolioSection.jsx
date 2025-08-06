import React from 'react'

const PortfolioSection = () => {
    const ListPortfolio = [
        { nama: 'JarJournal - Productivity and Community (AI-Integrated)', timeline: 'Oct 2024 - Feb 2025', thumbnail: 'https://media.licdn.com/dms/image/v2/D562DAQFAAJJbtnvb5A/profile-treasury-image-shrink_8192_8192/B56ZcRpFrNHUAs-/0/1748347674698?e=1755068400&v=beta&t=DVOcow2VHe1SamHXzsbQtt7BE5OmB9kBVJr3vLe2k4Y', deskripsi: "JarJournal is designed to help you reach your full potential in your personal and professional life. The responsive and intelligent AI Chatbot feature allows you to have a virtual friend to talk to at any time, whether it's just to chat, learn something new, or discuss fresh ideas. The chatbot is designed to understand the context of the conversation and provide relevant support according to your situation.", link: 'https://jarjournal.cloud' }
    ]
    return (
        <div style={{ margin: '32px 0px' }}>
            <h1 style={{ fontSize: '18px', marginBottom: '12px' }}>Portfolio</h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', height: '100%', fontSize: '14px' }}>
                <ul style={{ listStyle: 'none' }}>
                    {ListPortfolio.map((item, idx) =>
                        <li style={{ width: '340px', backgroundColor: "var(--gray-secondary)", padding: '16px', borderRadius: '12px' }}>
                            {/* Thumbnail */}
                            <div style={{ width: '100%', height: '160px' }}>
                                <img src={item.thumbnail} alt={`${item.nama} thumbnail`} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
                            </div>
                            {/* Detail portfolio */}
                            <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                <h1 style={{ fontSize: '14px' }}>{item.nama}</h1>
                                <p style={{ fontSize: '14px', color: 'gray', marginTop: '4px' }}>{item.timeline}</p>
                                <p style={{ fontSize: '14px', color: 'gray', textAlign: 'justify', marginTop: '12px', fontWeight: '400' }}>{item.deskripsi}</p>
                            </div>
                            <div style={{ width: '100%', marginTop: '16px' }}>
                                <button style={{ width: '100%', backgroundColor: 'var(--blue-accent)', border: 'none', padding: '6px 0px', borderRadius: '8px', color: 'white', fontWeight: '600', cursor: 'pointer', fontSize: '14px' }} onClick={() => window.open(item.link, '_blank')}>Visit</button>
                            </div>
                        </li>
                    )}
                </ul>
            </div>

        </div>
    )
}

export default PortfolioSection

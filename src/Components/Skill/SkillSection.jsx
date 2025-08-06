import React from 'react'

const SkillSection = () => {
    const mySkill = ['TypeScript', 'React.Js', 'Express.Js', 'MySQL', 'JavaScript', 'Node.Js', 'TailwindCSS', 'Figma', 'Git', 'VsCode']
    return (
        <div style={{ margin: '32px 0px' }}>
            <h1 style={{ fontSize: '18px', marginBottom: '12px' }}>Expertise</h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', height: '100%', fontSize: '14px' }}>
                <ul style={{ display: 'flex', gap: '8px', listStyle: 'none', flexWrap: 'wrap' }}>
                    {mySkill.map((item, idx) =>
                        <li key={idx} style={{ padding: '6px 16px', border: '2px solid var(--gray-secondary)', borderRadius: '6px' }}>
                            <p style={{ fontSize: '14px' }}>{item}</p>
                        </li>
                    )}
                </ul>
            </div>

        </div>
    )
}

export default SkillSection

import React from 'react'

const EducationSection = () => {
    const Education = [{ Nama: 'Universitas Sultan Ageng Tirtayasa', img: 'https://res.cloudinary.com/dwf753l9w/image/upload/v1748456851/pngwing.com_1_qyd99g.png', tingkat: 'Bachelor Degree', durasi: '2025 - Now' }]
    return (
        <div style={{ margin: '32px 0px' }}>
            <h1 style={{ fontSize: '18px', marginBottom: '12px' }}>Education</h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', height: '100%', fontSize: '14px' }}>
                <ul style={{ listStyle: 'none', position: 'relative' }}>
                    {Education.map((item, idx) =>
                        <li key={idx} style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                            <div style={{ width: '3rem', height: '3rem', borderRadius: '50px', backgroundColor: 'var(--gray-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={item.img} alt={`${item.Nama} Profile`} style={{ borderRadius: "50px", width: '70%' }} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                <h1 style={{ fontSize: '14px' }}>{item.Nama}</h1>
                                <p style={{ fontSize: '14px', color: 'gray' }}>{item.tingkat}</p>
                            </div>
                            <div>
                                <p style={{ fontSize: '14px', color: 'gray', right: '0', position: 'absolute' }}>{item.durasi}</p>
                            </div>
                        </li>
                    )}
                </ul>

            </div>

        </div>
    )
}

export default EducationSection

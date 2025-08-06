import React from 'react'

const AboutSection = () => {
  return (
    <div style={{ margin: '32px 0px' }}>
      <h1 style={{ fontSize: '18px', marginBottom: '12px' }}>About</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', height: '100%', fontSize: '14px' }}>
        <p style={{ textAlign: 'justify' }}>Saya adalah seorang Full-Stack Developer dengan pengalaman dalam mengembangkan aplikasi web menggunakan React.js, Express.js, Node.js, MySQL, dan TailwindCSS. Saat ini sedang menempuh studi di Universitas Sultan Ageng Tirtayasa, saya secara aktif mengembangkan proyek-proyek nyata sambil mengasah keterampilan teknis dan produk saya.</p>

        <p style={{ textAlign: 'justify' }}>Salah satu proyek utama saya adalah Olintser, platform kolaborasi real-time yang saya bangun dari nol. Platform ini mencakup obrolan tim, manajemen tugas dan kalender, pelacakan kehadiran, dan analisis produktivitas, semuanya terintegrasi dalam arsitektur modular dan skalabel.</p>
      </div>

    </div>
  )
}

export default AboutSection

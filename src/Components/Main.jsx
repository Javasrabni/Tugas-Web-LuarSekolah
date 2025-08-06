import React from 'react'
import Header from './Headers/Headers'
import HeroSection from './Hero/HeroSection'
import AboutSection from './About/AboutSection'
import SkillSection from './Skill/SkillSection'
import EducationSection from './Education/EducationSection'
import PortfolioSection from './Portfolio/PortfolioSection'
import ContactSection from './Contact/ContactSection'

const Main = () => {
    return (
        <div style={{ width: '100%' }}>
            <Header />
            <HeroSection />
            <AboutSection />
            <SkillSection />
            <EducationSection />
            <PortfolioSection />
            <ContactSection />
        </div>
    )
}

export default Main

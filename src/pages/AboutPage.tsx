import { useEffect } from 'react'
import Navbar from '../components/Nav/Navbar'
import Footer from '../components/Footer/Footer'
import AboutUs from '../components/AboutUs/AboutUs'
// import FAQ from '../components/FAQ/FAQ'
import Features from '../components/Features/Features'
// import Teams from '../components/Team/Teams'
import OurStory from '../components/OurStory/OurStory'

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div>
                <Navbar />
            </div>
            <main className=''>
                <AboutUs />
                <OurStory />
                <Features />
                {/* <Teams /> */}
            </main>

            <Footer />
        </>
    )
}

export default AboutPage
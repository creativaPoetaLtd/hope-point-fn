import { useEffect } from 'react'
import Contact from '../components/Contact/Contact'
import Navbar from '../components/Nav/Navbar'
import Footer from '../components/Footer/Footer'
const ContactPage = () => {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return (
        <>
            <Navbar />
            <main>
                <Contact />
            </main>
            <Footer />
        </>
    )
}

export default ContactPage
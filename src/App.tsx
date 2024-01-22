import './App.css'
import Navbar from './components/Nav/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Partnership from './components/Partner/Partner'
import Testmonial from './components/Testmonial/Testmonial'
import Footer from './components/Footer/Footer'
function App() {

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Partnership />
        <Testmonial />
      </main>
      <div className='w-full'>
        <Footer />
      </div>
    </>
  )
}

export default App

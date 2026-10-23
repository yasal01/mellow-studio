import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import About from './components/About'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Services />
        <Work />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

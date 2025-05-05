import './App.css'
import ContactForm from './components/contactForm/contactForm'
import ContactHeader from './components/contactheader/ContactHeader'
import Navigation from './components/Navigation/Navigation'

function App() {

  return (
    <div>
      <Navigation/>
    <main className='main_container'>
    <ContactHeader/>
      <ContactForm/>
    </main>
    </div>
  )
}

export default App

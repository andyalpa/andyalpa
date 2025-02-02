import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Testimonials from './components/testimonials/Testimonials';
import Resume from './components/resume/Resume';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function App() {
  return (
    <>
    <Sidebar />
    <main className="main-content">
      <Home />
      <Services />
      <About />
      <Resume />
      <Projects />
      <Testimonials />
      <Contact />


    </main>
    
    </>
  );
}

export default App;

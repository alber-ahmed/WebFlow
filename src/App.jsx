import NavBar from "./components/Navbar"
import Experience from "./sections/Experience"
import FeatureCards from "./sections/FeatureCard"
import Hero from "./sections/Hero"
import LogoShowcase from "./sections/LogoShowCase"
import AppShowcase from "./sections/ShowCaseSection"
import TechStack from "./sections/TechStack"
import Testimonials from "./sections/Testimonials"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"



const App = () => {
  return (
    <>
    <NavBar/>
      <Hero/>
      <AppShowcase/>
      <LogoShowcase/>
      <FeatureCards />
      <Experience/>
      <TechStack />
        <Testimonials/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default App

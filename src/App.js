import logo from './logo.svg';
import './App.css';
import About from './Components/about';
import Appointment from './Components/appointment';
import Btt from './Components/btt';
import Feature from './Components/feature';
import Footer from './Components/footer';
import Header from './Components/header';
import NavBar from './Components/navBar';
import Service from './Components/service';
import Team from './Components/team';
import Testimonial from './Components/testimonial';
import TopBar from './Components/topBar';


function App() {
  return (
    <div className="App">
      <About/>
      <Appointment/>
      <Btt/>
      <Feature/>
      <Footer/>
      <Header/>
      <NavBar/>
      <Service/>
      <Team/>
      <Testimonial/>
      <TopBar/>
    </div>
  );
}

export default App;

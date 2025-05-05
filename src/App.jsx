import './App.css'
import HomePage from './pages/home-page';
import ContactUsPage from './pages/contact-page';
import MenuPage from './pages/menu-page';
import AboutUs from './components/About-Us';
import { BrowserRouter as Router , Route , Routes  } from 'react-router-dom';
function App() {

  return (
    <Router>
      <Routes>
        <Route index element={<HomePage/>} />
        <Route path='/AboutUs' element={<HomePage/>} />
        <Route path='/contactus' element={<ContactUsPage/>} />
        <Route path='/menu' element={<MenuPage/>} />
      </Routes>
    </Router>
  )
}

export default App

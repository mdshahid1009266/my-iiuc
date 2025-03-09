import Header from './components/header'
import Navbar from './components/navbar'
import Notice from './components/notice'
import Pdfuplode from './components/pdfuplode'
import Facilities from './components/facilities'
import { SingelMessege } from './components/messeges'
import { Allevents } from './components/events'
import Singelevent from './pages/singelEvent'
import Home from './pages/home'
import About from './pages/about'
import SingelNotice from './pages/singelNotice'
import RandR from './pages/r_and_r'
import Routine from './pages/routine'
import Syllabus from './pages/syllabus'
import Studentinfo from './pages/studentinfo'
import Admission from './pages/admission'
import Payment from './pages/payment'
import Teachers from './pages/teachers'
import Staffs from './pages/staf'
import JandV from './pages/j_and_v'
import History from './pages/history'
import MandV from './pages/mission'
import Achievement from './pages/achievement'
import MandD from './pages/m-and-d'
import Contact from './pages/contact'
import Login from './pages/login'
import Dashboard from './pages/studentDasbord'
import Nothing from './pages/nothing'

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import './App.css'
import { useLayoutEffect } from 'react'

function App() {
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
  }
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rules-and-regulations" element={<RandR />} />
          <Route path="/exam-routine" element={<Routine />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/notice/:id" element={<SingelNotice />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/student-info" element={<Studentinfo />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/staffs" element={<Staffs />} />
          <Route path="/jobs-and-vacancies" element={<JandV />} />
          <Route path="/history" element={<History />} />
          <Route path="/mission-and-vision" element={<MandV />} />
          <Route path="/achievement" element={<Achievement />} />
          <Route path="/maps-and-directions" element={<MandD />} />
          <Route path="/events" element={<Allevents />} />
          <Route path="/event/:id" element={<Singelevent />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {['president-message', 'chairman-message', 'principal-message'].map((path) => (
            <Route key={path} path={"/" + path} element={<SingelMessege link={path} />} />
            ))}
          {['multimedia-classroom', 'computer-lab', 'library', 'auditorium', 'playground', 'canteen'].map((path) => (
            <Route key={path} path={"/facilities/" + path} element={<Facilities link={path} />} />
            ))}
            <Route path="/*" element={<Nothing />} />
          {/* <Route path="/blog"element={<Blog />} />
        <Route path="/events"element={<Events />} />
        <Route path="/mission"element={<Mission />} />
        <Route path="/learn"element={<Learn />} /> */}
        </Routes>
      </Wrapper>
    </BrowserRouter>
  )
}

export default App

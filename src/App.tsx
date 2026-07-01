import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/aboutus";
import  ContactUs  from "./pages/contactus";
import  Events  from "./pages/events";
import  Home  from "./pages/home";
import  Programs  from "./pages/programs";
import Outlet  from "./layout/Outlet";


export default function App() {
  return (

    <BrowserRouter>
      <Outlet>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </Outlet>
    </BrowserRouter>
  );
}

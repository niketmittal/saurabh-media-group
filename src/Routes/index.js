import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../Components/header";
import Fotter from "../Components/Fotter";
// Import All Pages
import LandingPage from "../Pages/LandingPage";
import Contactuspage from "../Pages/ContactUs";
import PageNotFound from "../Pages/PageNotFound";


function Routing() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/contactus" element={<Contactuspage />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Fotter />
        </Router>
    )
}

export default Routing;
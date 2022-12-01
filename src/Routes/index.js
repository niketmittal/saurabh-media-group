import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
// Import All Pages
import LandingPage from "../Pages/LandingPage";
import PageNotFound from "../Pages/PageNotFound";


function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                {/* <Route path="/aboutus" element={<Aboutus/>}/> */}
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>

        </Router>
    )
}

export default Routing;
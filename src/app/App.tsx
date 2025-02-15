import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../shared/components/Layout/Layout";
// import Services from "../shared/Pages/Services/Services";
import Faq from "../shared/Pages/Faq/Faq";
import Contacts from "../shared/Pages/Contacts/Contacts";
import Home from "../shared/Pages/Home/Home";
import PageNotfound from "../shared/Pages/PageNotFound/PageNotFound";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        // TODO add services
                        {/* <Route path="/services" element={<Services />} /> */}
                        <Route path="/faq" element={<Faq />} />
                        <Route path="/contact-us" element={<Contacts />} />
                        <Route path="*" element={<PageNotfound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

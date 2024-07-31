import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../shared/components/Layout/Layout";
import About from "../shared/Pages/About/About";
import Services from "../shared/Pages/Services/Services";
import Faq from "../shared/Pages/Faq/Faq";
import Contacts from "../shared/Pages/Contacts/Contacts";
import Home from "../shared/Pages/Home/Home";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About aboutText="About text" />} />
                        <Route path="/services" element={<Services servicesText="Services text" />} />
                        <Route path="/faq" element={<Faq faqText="Faq text" />} />
                        <Route path="/contact-us" element={<Contacts contactsText="Contacts text" />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

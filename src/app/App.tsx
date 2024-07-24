import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComponentExample from "../shared/components/ComponentExample/ComponentExample";
import Header from "../shared/components/Header/Header";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/component-example"
                        element={
                            <>
                                <Header />
                                <ComponentExample exampleText="test" />
                            </>
                        }
                    />
                </Routes>
            </BrowserRouter>
            <h1>Morava</h1>
        </>
    );
}

export default App;

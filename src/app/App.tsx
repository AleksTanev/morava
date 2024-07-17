import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ComponentExample from "../shared/components/ComponentExample/ComponentExample";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/component-example" element={<ComponentExample examples='test' />} />
        </Routes>
        <Link to="/component-example">Component Example</Link>
      </BrowserRouter>
      
      <h1>Morava</h1>
    </>
  );
}

export default App;

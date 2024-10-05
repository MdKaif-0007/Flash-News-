import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import India from "./Components/India/India";
import World from "./Components/World/World";
import Local from "./Components/Local/Local";
import Business from "./Components/Business/Business";
import Technology from "./Components/Technology/Technology";
import Entertainment from "./Components/Entertainment/Entertainment";
import Sports from "./Components/Sports/Sports";
import Science from "./Components/Science/Science";
import Health from "./Components/Health/Health";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>   
        <Route path="" element={<Home />} />
        <Route path="india" element={<India />} />
        <Route path="world" element={<World  />} />  
        <Route path="local" element={<Local/>}/>
        <Route path="business" element={<Business/>}/>
        <Route path="technology" element={<Technology/>}/>
        <Route path="entertainment" element={<Entertainment/>}/>
        <Route path="sports" element={<Sports/>}/>
        <Route path="science" element={<Science/>}/>
        <Route path="health" element={<Health/>}/>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

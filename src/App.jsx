import { Button } from "antd";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Compont/Layout";
import Home from "./Compont/Home";
import Page from "./Compont/Page";
function App() {
  return (
    <div className="App">
      <Button type="link">Ant Design Button</Button>
      <BrowserRouter>
        <Routes>
          <Route path="layout" element={<Layout />}></Route>
          <Route path="home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
      <Page />
    </div>
  );
}

export default App;

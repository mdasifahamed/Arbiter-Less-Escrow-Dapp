import MyContext from "./MyContext";
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About"
import { Route, Routes } from "react-router-dom";

function App() {
  return (

    <>
      <MyContext>
        <Header></Header>
        <Routes>
          <Route path={'/'} element={<Home></Home>}>
          </Route>
          <Route path={'/about'} element={<About></About>}></Route>
        </Routes>
      </MyContext>
    </>

    
  );
}

export default App;

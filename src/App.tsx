import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Counter from "./component/Counter";
import Home from "./page/Home";
import Info from "./page/Info";
import Profile from "./page/Profile";
import Layout from "./Layout";
import State from "./component/State";
import List from "./component/List";
import NavBar from "./component/NavBar";
import { SwitchProvider } from "./context/Provider/SwitchProvider";

// // Lazy load components
// import { lazy } from "react";
// import { Suspense } from "react";
// const Counter = lazy(() => import("./component/Counter"));
// const Home = lazy(() => import("./page/Home"));
// const Info = lazy(() => import("./page/Info"));
// const Profile = lazy(() => import("./page/Profile"));
// const Layout = lazy(() => import("./Layout"));
// const State = lazy(() => import("./component/State"));
// const List = lazy(() => import("./component/List"));
// const NavBar = lazy(() => import("./component/NavBar"));

function App() {

  return (
    <Router>
      <SwitchProvider>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
          <Routes>
            <Route element={<Layout />}>
              <Route path="/counter" element={<Counter />} />
              <Route path="/state" element={<State />} />
              <Route path="/list" element={<List />} />
              <Route element={<NavBar />}>
                <Route path="/home" element={<Home />} />
                <Route path="/info" element={<Info />} />
                <Route path="/profile" element={<Profile />} />
              </Route>
              <Route path="*" element={<State />} />
            </Route>
          </Routes>
        {/* </Suspense> */}
      </SwitchProvider>
    </Router >
  )
}

export default App

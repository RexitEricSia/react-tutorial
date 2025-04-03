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

function App() {

  return (
    <Router>
      <SwitchProvider>
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
      </SwitchProvider>
    </Router >
  )
}

export default App

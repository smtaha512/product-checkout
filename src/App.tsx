import {
  Route, Routes
} from "react-router-dom";
import "./App.scss";
import { routes } from "./routes";


function App() {
  return (
    <div className="App">
      <Routes>
        {routes.map((route) => (<Route path={route.path} element={route.component()} key={route.path}/>))}
      </Routes>
    </div>
  );
}

export default App;

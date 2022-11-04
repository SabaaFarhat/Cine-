import "./App.css";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./MovieContext";
import Panel from "./components/Panel";
import Container from "./components/Container";
import Details from "./components/Details";
import LongMetrage from "./LongMetrage/LongMetrageList";
import ViewActor from "./Acteurs/ViewActor";
import AllActors from "./Acteurs/AllActors";

function App() {
  return (
    <div className="App">
      <MovieProvider>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Panel />
                <Container />
              </>
            }
          />
          <Route path="/movie">
            <Route path=":movieId" element={<Details />} />
          </Route>
          <Route path="/longmetrage" element={<LongMetrage />}></Route>

          <Route path="/actors" element={<AllActors />} />
          <Route path="/actor/:name" element={<ViewActor />} />
        </Routes>
      </MovieProvider>
    </div>
  );
}

export default App;

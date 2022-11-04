import "./App.css";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./MovieContext";
import Panel from "./components/Panel";
import Container from "./components/Container";
import Details from "./components/Details";
import MiniSeries from "./MiniSerie/MiniSeries";

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
          <Route path="/miniserie"element={<MiniSeries />} />
        </Routes>
      </MovieProvider>
    </div>
  );
}

export default App;

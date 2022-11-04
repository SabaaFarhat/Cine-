import './App.css';
import { Routes, Route } from 'react-router-dom';
import { MovieProvider } from './MovieContext';
import Panel from './components/Panel';
import Container from './components/Container';
import Details from './components/Details';
import AllProducers from './Producers/AllProducers';
import DetailsProducer from './Producers/Details';
import MiniSeries from './MiniSerie/MiniSeries';
import LongMetrage from './LongMetrage/LongMetrageList';
import ViewActor from './Acteurs/ViewActor';
import AllActors from './Acteurs/AllActors';
import AllCourtMetrages from './CourtMetrage/index';
import DetailsFilm from './CourtMetrage/DetailsCourtMetrage';
import DetailsMiniserie from './MiniSerie/DetailsMiniserie';
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

          <Route path="/producers" element={<AllProducers />} />
          <Route path="/producer/:name" element={<DetailsProducer />} />
          <Route path="/miniserie" element={<MiniSeries />} />
          <Route path="/miniserie/:name" element={<DetailsMiniserie />} />

          <Route path="/actors" element={<AllActors />} />

          <Route path="/actor/:name" element={<ViewActor />} />

          <Route path="/courtMetrages" element={<AllCourtMetrages />} />
          <Route path="/courtMetrages/:filmName" element={<DetailsFilm />} />
          <Route path="/longmetrage" element={<LongMetrage />}></Route>
        </Routes>
      </MovieProvider>
    </div>
  );
}

export default App;

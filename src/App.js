import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact Component={Home} />
      </Routes>
    </div>
  );
}

export default App;

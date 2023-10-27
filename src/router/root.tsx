
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from '../pages/Detail';
import App from '../App';


function root() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  </BrowserRouter>
  )
}

export default root
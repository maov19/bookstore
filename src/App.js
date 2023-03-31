import {
  BrowserRouter, Routes, Route, Outlet,
} from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';

function Layout() {
  return (
    <>
      <Outlet />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="categories" element={<Categories />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

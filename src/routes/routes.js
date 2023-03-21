import { Route, Routes } from 'react-router-dom'

import Home from '../containers/Home'
import Series from '../containers/Series'
import Movies from '../containers/Movies'
import DefaultLayout from '../layouts/DefaultLayout'
import Details from '../containers/Details'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/series" element={<Series />} />
        <Route path="/filmes" element={<Movies />} />
        <Route path="/detalhe/:id" element={<Details />} />
      </Route>
    </Routes>
  )
}

export default Router

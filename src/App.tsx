import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Search } from "./pages/Search/Search"
import { SearchDetail } from "./pages/SearchDetail/SearchDetail"

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="search/:id" element={<SearchDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

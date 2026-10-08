
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Admin from "./components/Admin/Admin"
import HomePage from "./components/Home/HomePage"
import User from "./components/User/User"
import MainLayout from "./layouts/MainLayout"

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="user" element={<User />} />
        <Route path="admin" element={<Admin />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default App

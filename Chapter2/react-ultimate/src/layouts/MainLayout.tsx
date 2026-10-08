import { Outlet } from "react-router-dom"
import NavBar from "../components/Header/Navbar"
import "../app.scss"

const MainLayout = () => (
  <div className="app-container">
    <div className="header-container">
      <NavBar />
    </div>
    <div className="main-container">
      <div className="sidenav-container"></div>
      <div className="main-content">
        <Outlet />
      </div>
    </div>
    <div className="footer-container"></div>
  </div>
)

export default MainLayout

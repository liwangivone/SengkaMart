import { Outlet, useLocation } from "react-router"
import Footer from "~/components/footer"
import Navbar from "~/components/navbar"

export default function IndexLayout() {
  const location = useLocation()

  return (
    <div>
      <Navbar />

      <Outlet />

      {location.pathname === '/' && (
        <Footer />
      )}
    </div>
  )
}

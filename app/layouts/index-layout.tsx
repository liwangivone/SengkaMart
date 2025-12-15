import { Outlet } from "react-router"
import Footer from "~/components/footer"
import Navbar from "~/components/navbar"

export default function IndexLayout() {
  return (
    <div>
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  )
}

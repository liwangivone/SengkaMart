import { Link, useLocation } from "react-router"

export default function Navbar() {
  const location = useLocation()
  const isLoggedIn = typeof window !== "undefined" && localStorage.getItem("isLoggedIn") === "true"
  const username = 'leowidj'

  return (
    <nav className="sticky top-0 z-50 flex justify-between px-8 py-4 bg-white border-b border-gray-200">
      <Link to={'/'}>
        <img src="/logo-sengka.svg" alt="logo" width={120} />
      </Link>

      <div className="flex space-x-4 items-center">
        {location.pathname === '/' && (
          <div className="flex bg-[#F3F9FB] p-2 rounded-md space-x-2 w-150">
            <img src="/search.svg" alt="search" width={16} />
            <input type="text" placeholder="Cari kebutuhan kamu di sini..." className="text-xs p-1 w-full" />
          </div>
        )}

        <Link to={'/cart'} className="flex items-center space-x-1.5 btn px-4 rounded-md cursor-pointer">
          <img src="/cart.svg" alt="cart" width={20} />
          <p className="text-sm">Keranjang</p>
        </Link>

        {!isLoggedIn ? (
          <Link to={'/login'} className="flex items-center space-x-1.5 btn px-4 rounded-md cursor-pointer">
            <img src="/person.svg" alt="cart" width={20} />
            <p className="text-sm">Masuk/Daftar</p>
          </Link>
        ) : (
          <div className="dropdown dropdown-bottom dropdown-end flex items-center">
            <label tabIndex={0} className="btn px-4 flex items-center space-x-1.5">
              <img src="/person.svg" alt="user" width={20} />
              <span className="text-sm">{username}</span>
            </label>

            <ul
              tabIndex={-1}
              className="dropdown-content menu bg-white rounded-box z-50 w-52 p-2 shadow"
            >
              <li><Link to="/history">Pesanan Saya</Link></li>
              <li><button className="text-red-500">Keluar</button></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

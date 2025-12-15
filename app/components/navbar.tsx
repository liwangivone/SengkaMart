export default function Navbar() {
  return (
    <nav className="flex justify-between px-8 py-4 border-b border-gray-200">
      <img src="/logo-sengka.svg" alt="logo" width={120} />

      <div className="flex space-x-4">
        <div className="flex bg-[#F3F9FB] p-2 rounded-md space-x-2 w-150">
          <img src="/search.svg" alt="search" width={16} />
          <input type="text" placeholder="Cari kebutuhan kamu di sini..." className="text-xs p-1 w-full" />
        </div>

        <button className="flex items-center space-x-1.5 hover:bg-blue-50 px-4 rounded-md cursor-pointer">
          <img src="/cart.svg" alt="cart" width={20} />
          <p className="text-sm">Keranjang</p>
        </button>

        <button className="flex items-center space-x-1.5 hover:bg-blue-50 px-4 rounded-md cursor-pointer">
          <img src="/person.svg" alt="cart" width={20} />
          <p className="text-sm">Masuk/Daftar</p>
        </button>
      </div>
    </nav>
  )
}

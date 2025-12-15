import { Link } from "react-router"

export default function Register() {
  return (
    <main className="bg-[#B3BDB3] flex items-center justify-center space-x-24 h-screen">
      <img src="/logo-sengka-2.svg" alt="logo" width={500} />

      <div className="bg-white rounded-xl p-8 w-125">
        <h1 className="font-bold text-3xl">Daftar</h1>

        <label className="floating-label mt-4">
          <span>Username</span>
          <input type="text" placeholder="Username" className="input input-md w-full" />
        </label>

        <label className="floating-label mt-4">
          <span>Password</span>
          <input type="text" placeholder="Password" className="input input-md w-full" />
        </label>

        <button className="bg-[#275038] w-full text-white py-1.5 my-4 rounded-md">Daftar</button>

        <span className="text-xs mr-1">Sudah Punya Akun Sengka Mart?</span>
        <Link to={'/login'} className="text-xs text-[#275038] font-bold">Masuk</Link>
      </div>
    </main>
  )
}

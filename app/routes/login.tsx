import { Form, Link, redirect } from "react-router"
import type { Route } from "./+types/login"

export async function clientAction({ request }: Route.ClientActionArgs) {
  const formData = await request.formData()
  const username = formData.get('username')
  const password = formData.get('password')

  console.log(username)
  console.log(password)

  const usernameSaved = localStorage.getItem('username')
  const passwordSaved = localStorage.getItem('password')
  console.log(passwordSaved)

  if (username == usernameSaved && password == passwordSaved) {
    localStorage.setItem('isLoggedIn', 'true')
    return redirect('/')
  }
}

export default function Login() {
  return (
    <main className="bg-[#B3BDB3] flex items-center justify-center space-x-24 h-screen">
      <img src="/logo-sengka-2.svg" alt="logo" width={500} />

      <div className="bg-white rounded-xl p-8 w-125">
        <h1 className="font-bold text-3xl">Masuk</h1>

        <Form method="POST" action="/login">
          <label className="floating-label mt-4">
            <span>Username</span>
            <input type="text" placeholder="Username" name="username" className="input input-md w-full" required />
          </label>

          <label className="floating-label mt-4">
            <span>Password</span>
            <input type="text" placeholder="Password" name="password" className="input input-md w-full" required />
          </label>

          <button className="bg-[#275038] w-full text-white py-1.5 my-4 rounded-md" type="submit">Masuk</button>
        </Form>

        <span className="text-xs mr-1">Baru di Sengka Mart?</span>
        <Link to={'/register'} className="text-xs text-[#275038] font-bold">Daftar</Link>
      </div>
    </main>
  )
}

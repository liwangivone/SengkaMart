import { Link } from "react-router"

type BerasCardProps = {
  nama: string
  harga: string
  diskon: string
  diskonPersen: string
}

export default function BerasCard({ nama, harga, diskon, diskonPersen }: BerasCardProps) {
  return (
    <Link to={'/detail'} className="rounded-lg border border-gray-200 overflow-hidden">
      <div className="w-full bg-gray-100 flex justify-center items-center py-8 px-14 relative">
        <img src="/beras.png" alt="beras" width={120} />

        <div className="absolute top-0 right-0 bg-red-500 text-white p-2 text-xs">
          <p>{diskonPersen}</p>
          <p>OFF</p>
        </div>
      </div>

      <div className="px-4 py-2">
        <p className="font-bold">{nama}</p>
        <p className="font-bold">{harga}</p>
        <p className="font-bold text-green-600">{diskon}</p>
      </div>
    </Link>
  )
}

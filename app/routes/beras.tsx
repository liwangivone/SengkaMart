import { Link } from "react-router"
import BerasCard from "~/components/beras-card"

export default function Beras() {
  const beras = Array.from({ length: 5 }).map(_ => ({
    nama: 'Beras 10 kg',
    harga: 'Rp 150.000',
    diskon: 'Hemat - Rp 35.000',
    diskonPersen: '56%'
  }))

  return (
    <main className="px-8 pb-8">
      <Link to="/" className="mt-2 inline-block px-3 py-2 btn">
        Kembali
      </Link>

      <div className="mt-10 flex flex-col space-y-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex justify-between">
            {beras.map((b, i) => (
              <BerasCard key={i} nama={b.nama} harga={b.harga} diskon={b.diskon} diskonPersen={b.diskonPersen} />
            ))}
          </div>
        ))}
      </div>
    </main>
  )
}

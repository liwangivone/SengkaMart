import { Link } from "react-router"
import BerasCard from "~/components/beras-card"

export default function Home() {
  const categories = ['Sayuran', 'Buah-buahan', 'Bahan Bangunan', 'Kebutuhan Sehari-hari']
  const carousel = Array.from({ length: 3 })
  const beras = Array.from({ length: 5 }).map(_ => ({
    nama: 'Beras 10 kg',
    harga: 'Rp 150.000',
    diskon: 'Hemat - Rp 35.000',
    diskonPersen: '56%'
  }))

  return (
    <main className="pb-10">
      <div className="flex space-x-4 px-8 py-4">
        {categories.map((cat, i) => (
          <div key={i} className="w-fit">
            <select
              defaultValue={cat}
              className="select rounded-2xl bg-[#008ECC] text-white font-bold px-4 pr-10 text-xs"
            >
              <option disabled>{cat}</option>
            </select>
          </div>
        ))}
      </div>

      <div className="w-full h-px bg-gray-200" />

      <div className="px-8">
        <div className="carousel w-full mt-4">
          {carousel.map((_, i) => {
            const prev = (i - 1 + carousel.length) % carousel.length
            const next = (i + 1) % carousel.length

            return (
              <div key={i} id={`slide${i}`} className="carousel-item relative w-full">
                <div className="flex justify-between items-center w-full px-36 bg-[#275038] py-8">
                  <div className="text-white">
                    <p className="text-2xl font-bold">Harga terbaik hanya di Sengka Mart</p>
                    <p className="text-8xl font-bold">Beras Grade A</p>
                    <p className="text-2xl font-bold">Mulai dari Rp150.000/10kg</p>
                  </div>

                  <img src="/beras.png" alt="beras" width={180} />
                </div>

                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
                  <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                  <a href={`#slide${next}`} className="btn btn-circle">❯</a>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-10">
          <div className="w-full flex justify-between">
            <h1 className="text-xl">Harga Terbaik untuk <span className="text-cyan-600 font-bold">Beras</span></h1>

            <Link to={'/beras'} className="flex items-center space-x-2">
              <p>Lihat Semua</p>
              <span>
                <img src="/chevron-right.svg" alt="panah" />
              </span>
            </Link>
          </div>

          <div className="flex justify-between mt-4">
            {beras.map((b, i) => (
              <BerasCard key={i} nama={b.nama} harga={b.harga} diskon={b.diskon} diskonPersen={b.diskonPersen} />
            ))}
          </div>

          <div className="w-full flex justify-between mt-10">
            <h1 className="text-xl">Belanja <span className="text-cyan-600 font-bold">Produk Lainnya</span></h1>

            <Link to={'/beras'} className="flex items-center space-x-2">
              <p>Lihat Semua</p>
              <span>
                <img src="/chevron-right.svg" alt="panah" />
              </span>
            </Link>
          </div>

          <div className="mt-4 flex justify-between">
            {beras.map((b, i) => (
              <div key={i}>
                <div className="rounded-full bg-gray-100 w-40 h-40 flex justify-center items-center">
                  <img src="/beras.png" alt="beras" width={60} />
                </div>

                <p className="text-center mt-2 font-semibold">{b.nama}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

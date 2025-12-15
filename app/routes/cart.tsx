import { useState } from "react"
import { Link } from "react-router"

export default function Cart() {
  const [items, setItems] = useState(
    Array.from({ length: 10 }).map(() => ({
      nama: 'Beras Premium Sania 10 Kg - Beras Putih',
      harga: 150000,
      jumlah: Math.floor(Math.random() * 5) + 1
    }))
  )

  const total = items.reduce(
    (sum, item) => sum + item.harga * item.jumlah,
    0
  )


  const increase = (index: number) => {
    setItems(prev =>
      prev.map((item, i) =>
        i === index ? { ...item, jumlah: item.jumlah + 1 } : item
      )
    )
  }

  const decrease = (index: number) => {
    setItems(prev =>
      prev.map((item, i) =>
        i === index && item.jumlah > 1
          ? { ...item, jumlah: item.jumlah - 1 }
          : item
      )
    )
  }

  return (
    <main className="pb-8">
      <nav className="sticky top-0 z-50 bg-white flex items-center justify-center py-4">
        <Link to="/" className="absolute left-8">
          <img src="/back.svg" alt="back" />
        </Link>
        <p className="font-semibold">
          Keranjang Saya ({items.length})
        </p>
      </nav>


      <div className="px-8">
        {items.map((item, i) => (
          <div key={i} className="flex items-center space-x-5 border-b border-gray-300 py-4">
            <input type="checkbox" className="checkbox" />

            <div className="p-4 bg-gray-200 rounded">
              <img src="/beras.png" alt="beras" width={60} />
            </div>

            <div >
              <h1 className="font-medium">{item.nama}</h1>

              <div className="flex justify-between items-center mt-2">
                <p className="font-semibold">
                  Rp {item.harga.toLocaleString("id-ID")}
                </p>

                <div className="flex items-center">
                  <button
                    onClick={() => decrease(i)}
                    className="w-8 h-8 font-bold text-xl cursor-pointer"
                  >
                    −
                  </button>

                  <input
                    type="text"
                    value={item.jumlah}
                    readOnly
                    className="w-10 text-center border rounded"
                  />

                  <button
                    onClick={() => increase(i)}
                    className="w-8 h-8 font-bold text-xl cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="sticky bottom-0 z-50 flex justify-end items-center space-x-5 px-8 py-4 bg-white">
        <p className="font-bold">
          Total: Rp {total.toLocaleString("id-ID")}
        </p>

        <Link to={'/checkout'} className="text-white bg-[#275038] px-6 py-2 rounded-md">Beli Langsung</Link>
      </div>
    </main>
  )
}

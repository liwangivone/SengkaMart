import { useState } from "react"
import { Link } from "react-router"

export default function Checkout() {
  const [paid, setPaid] = useState<boolean>(false)

  return (
    <main className="px-8 py-4">
      <nav className="flex space-x-6 items-center">
        <button className="cursor-pointer">
          <img src="/back.svg" alt="back" />
        </button>

        <img src="/logo-sengka.svg" alt="logo" width={120} />
      </nav>

      {!paid ? (
        <div className="w-full mt-10 flex justify-center space-x-10">
          <div className="w-[45%]">
            <div className="border-2 border-gray-300 rounded-md p-4 relative">
              <h1 className="text-xl font-bold">Alamat Pengiriman</h1>

              <div className="flex justify-between mt-4">
                <div className="flex space-x-1 items-center">
                  <img src="/map.svg" alt="map" width={32} />
                  <p className="text-lg">Rumah</p>
                </div>

                <p className="text-green-800 font-semibold cursor-pointer">Ubah</p>
              </div>

              <div className="flex mt-2">
                <p>Leonard</p>
                <div className="divider divider-horizontal divider-neutral"></div>
                <p>0831 3221 54344</p>
              </div>

              <p className="text-sm mt-2 font-light">Jl. Citra Lestari III No.BLOK B/11, RT.001/RW.01, Parang Tambung, Kec. Tamalate, Kota Makassar, ...</p>

              <div className="h-10"></div>

              <img src="/lines.svg" alt="line" className="w-full absolute bottom-0 -left-0.5" />
            </div>

            <div className="mt-10 border-2 border-gray-300 rounded-md p-4">
              <h1 className="text-2xl font-bold">Toko Sania</h1>

              <div className="bg-[#90cfab] w-full flex space-x-2 px-4 py-2 items-center rounded-md mt-2">
                <img src="/map.svg" alt="map" width={24} />

                <p className="text-sm">Dusun Sengka Barat, RT 02 / RW 01</p>
              </div>

              <div className="mt-4 flex space-x-4">
                <div className="w-48 h-48 bg-gray-200 flex justify-center items-center">
                  <img src="/beras.png" alt="beras" width={100} />
                </div>

                <div className="">
                  <p className="text-lg font-bold">Beras Premium Sania 10 Kg - Beras Putih</p>
                  <p>10 kg</p>

                  <div className="flex justify-between my-2">
                    <p className="text-lg font-bold">Rp 150.000 <span className="text-gray-400 font-normal">/ Produk</span></p>
                    <p>1x</p>
                  </div>

                  <p>Tambah Catatan</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[30%]">
            <div className="p-4 border-2 border-gray-300 rounded-md">
              <h1 className="text-xl font-bold">Metode Pembayaran</h1>

              <div className="flex mt-4 items-center justify-between">
                <div className="flex space-x-3">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <img src="/kredit.svg" alt="kredit" width={32} />
                  </div>

                  <div>
                    <p className="font-bold">Tambah kartu Kredit/debit</p>
                    <p className="text-xs">Bayar penuh atau cicilan 0%</p>
                  </div>
                </div>

                <p className="text-green-500 cursor-pointer">Tambah</p>
              </div>

              <div className="flex mt-4 items-center justify-between">
                <div className="flex space-x-3">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <img src="/bca.svg" alt="bca" width={32} />
                  </div>

                  <div>
                    <p className="font-bold">Virtual Account</p>
                    <p className="text-xs">Bank BCA</p>
                  </div>
                </div>

                <input type="radio" name="radio-1" className="radio radio-neutral" />
              </div>

              <div className="flex mt-4 items-center justify-between">
                <div className="flex space-x-3">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <img src="/qris.svg" alt="qris" width={32} />
                  </div>

                  <p className="font-bold">QRIS</p>
                </div>

                <input type="radio" name="radio-1" className="radio radio-neutral" />
              </div>
            </div>

            <div className="mt-10 border-2 border-gray-300 rounded-md p-4">
              <h1 className="text-xl font-bold mb-4">Detail Pembayaran</h1>

              <div className="flex flex-col space-y-2">
                <div className="text-sm text-gray-400 flex justify-between">
                  <p>Total harga (1 produk)</p>
                  <p>Rp 150.000</p>
                </div>

                <div className="text-sm text-gray-400 flex justify-between">
                  <p>Ongkos Kirim</p>
                  <p>Rp 5.000</p>
                </div>

                <div className="text-sm text-gray-400 flex justify-between">
                  <p>Biaya Penanganan</p>
                  <p>Rp 0</p>
                </div>

                <div className="text-sm text-gray-400 flex justify-between">
                  <p>Diskon Produk</p>
                  <p>Rp 0</p>
                </div>
              </div>

              <div className="divider"></div>

              <div className="text-sm  flex justify-between">
                <p className="font-bold text-lg">Total pembayaran</p>
                <p className="text-lg">Rp 155.000</p>
              </div>
            </div>

            <button className="flex justify-center items-center space-x-1 bg-[#275038] w-full btn mt-4 py-6 rounded-xl" onClick={() => setPaid(true)}>
              <img src="/buy.svg" alt="buy" width={20} />

              <p className="text-white text-lg">Bayar</p>
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full h-[calc(100vh-90px)] flex flex-col items-center justify-center bg-amber-50">
          <img src="/oke.svg" alt="oke" width={200} />

          <h1 className="text-3xl font-bold mt-6 mb-2">Pembayaran Berhasil</h1>
          <p>Terimakasih sudah berbelanja di sengka market, sampai jumpa kembali</p>

          <Link to={'/'} className="btn btn-xl bg-white mt-10">Kembali ke beranda</Link>
        </div>
      )}
    </main>
  )
}

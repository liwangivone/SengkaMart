import BerasCard from "~/components/beras-card"

export default function Detail() {
  const beras = Array.from({ length: 4 }).map(_ => ({
    nama: 'Beras 10 kg',
    harga: 'Rp 150.000',
    diskon: 'Hemat - Rp 35.000',
    diskonPersen: '56%'
  }))

  return (
    <main className="p-8 flex justify-center">
      <div className="w-[80%]">
        <div className="flex justify-between w-full">
          <div className="px-20 py-10 bg-gray-200">
            <img src="/beras.png" alt="beras" width={300} />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-semibold">Beras Premium Sania 10 Kg - Beras Putih</h1>

            <div className="flex mt-2">
              <div className="flex items-center space-x-2">
                <p className="font-semibold underline">5.0</p>

                <div className="rating rating-xs">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" disabled />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" disabled />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" disabled />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" disabled />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" checked disabled />
                </div>
              </div>

              <div className="divider divider-horizontal divider-neutral"></div>

              <div className="flex space-x-2">
                <p className="font-semibold underline">5.0</p>

                <p className="font-light">Penilaian</p>
              </div>
            </div>

            <div className="bg-gray-100 px-10 py-6 mt-10">
              <p className="text-4xl text-orange-600 font-semibold">Rp 150.000</p>
            </div>

            <div className="mt-10 flex space-x-6">
              <div className="flex flex-col space-y-3">
                <p>Pengiriman</p>
                <p>Varian</p>
              </div>

              <div className="flex flex-col space-y-3">
                <div className="flex space-x-1">
                  <img src="/truck.svg" alt="truk" width={24} />
                  <p>Garansi tiba: 20 desember 2025</p>
                </div>

                <div className="flex space-x-3">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="flex items-center space-x-2 p-1 border border-gray-400 w-fit cursor-pointer">
                      <div className="bg-gray-200 w-8 h-8 flex justify-center items-center">
                        <img src="/beras.png" alt="beras" width={16} />
                      </div>

                      <p>10 Kg</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 flex justify-between">
              <button className="btn py-8 w-80">
                <img src="/cart-add.svg" alt="keranjang" width={24} />
                <p className="text-lg text-orange-600">Masukkan ke keranjang</p>
              </button>

              <button className="btn bg-[#275038] py-8 text-lg text-white w-80">Beli lansung</button>
            </div>
          </div>
        </div>

        <div className="w-full mt-10">
          <div className="flex items-center space-x-6">
            <div className="bg-gray-200 w-32 h-32 rounded-full flex justify-center items-center">
              <img src="/beras.png" alt="beras" width={50} />
            </div>

            <div>
              <h1 className="text-2xl font-bold">Toko Sania</h1>
              <p>Aktif 5 jam yang lalu</p>
            </div>
          </div>

          <div className="mt-10 mb-2 flex space-x-6">
            <p className="text-3xl underline font-bold text-gray-600 cursor-pointer">Deskripsi</p>
            <p className="text-3xl font-bold text-gray-600 cursor-pointer">Penilaian</p>
          </div>

          <p>10 Kg</p>

          <div className="mt-20">
            <div className="flex justify-between mt-4">
              {beras.map((b, i) => (
                <BerasCard key={i} nama={b.nama} harga={b.harga} diskon={b.diskon} diskonPersen={b.diskonPersen} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

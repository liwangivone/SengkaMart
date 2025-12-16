export default function History() {
  return (
    <div className="flex flex-col items-center">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="border-b border-gray-400 p-8 flex space-x-6">
          <div className="w-32 h-32 bg-gray-200 flex justify-center items-center">
            <img src="/beras.png" alt="beras" width={60} />
          </div>

          <div>
            <h1 className="text-xl font-bold">Beras Premium Sania 10 Kg - Beras Putih</h1>

            <p className="font-light">Variasi: 10kg</p>

            <p className="text-end mt-2">Total pesanan: <span className="text-orange-500">Rp 150.000</span></p>

            <div className="flex justify-end mt-2 space-x-2">
              <button className="btn bg-[#275038] text-white w-24">Nilai</button>
              <button className="btn text-[#275038] bg-white border border-[#275038] w-24">Beli Lagi</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

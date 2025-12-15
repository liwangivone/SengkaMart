
export default function Footer() {
  return (
    <div className="bg-[#275038] w-full text-white pt-14 px-16 pb-4">
      <div className="flex space-x-52">
        <div className="flex flex-col space-y-2">
          <h1 className="text-5xl font-bold">Sengka Mart</h1>
          <p>Contact Us</p>

          <div>
            <p>Whatsapp</p>
            <p>+62 1234 5678</p>
          </div>

          <div>
            <p>Call Us</p>
            <p>+62 1234 5678</p>
          </div>

          <p className="font-bold text-xl">Download App</p>
          <div className="flex space-x-5">
            <img src="/app-store.png" alt="app-store" />
            <img src="/play-store.png" alt="play-store" />
          </div>
        </div>

        <div>
          <h1>Kategori Beras</h1>

          <div className="w-40 h-0.5 bg-white"></div>

          <div className="mt-2 flex flex-col space-y-4 pl-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <li key={i}>Beras {i + 1}</li>
            ))}
          </div>
        </div>

        <div>
          <h1>Customer Service</h1>

          <div className="w-40 h-0.5 bg-white"></div>

          <div className="mt-2 flex flex-col space-y-4 pl-4">
            <li>About Us</li>
            <li>Terms & Conditions</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>E-waste Policy</li>
            <li>Cancellation & Return Policy</li>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-gray-50 mt-10 mb-2"></div>

      <h1 className="text-center">© 2025 All rights reserved. Reliance Retail Ltd.</h1>

    </div>
  )
}

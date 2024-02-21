

const Footer = () => {
  return (
    

<footer className="bg-black">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">

          <div className="grid grid-cols-2 px-14  gap-28 sm:gap-40 sm:grid-cols-4">
              <div className="font-rakkas text-5xl leading-tight tracking-normal text-left">
<span className="text-yellow-500">iS</span><span className="text-white">hami</span>
              </div>
              <div>
                  <h2 className="font-rakkas text-2xl leading-tight tracking-normal text-left text-white mb-3">More Link</h2>
                  <ul className="font-dm-sans text-base font-normal  leading-6  text-left text-white">
                  <li className="mb-4">
                          <a href="#" className="hover:underline">About us</a>
                      </li>
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="font-rakkas text-2xl leading-tight tracking-normal text-left text-white mb-3">Address</h2>
                  <ul className="font-dm-sans text-base font-normal leading-6 text-left text-white">
                      <li className="mb-4">
                          <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Rwanda, Kigali kk st 434</a>
                      </li>

                  </ul>
              </div>
              <div>
                  <h2 className="font-rakkas text-2xl leading-tight tracking-normal text-left text-white mb-3">Contact Us</h2>
                  <ul className="font-dm-sans text-lg  font-normal leading-6 tracking-normal text-left text-white">
                  <li className="mb-4">
                          <a href="#" className="hover:underline">support@ishami.com</a>
                      </li>
                      <li className="mb-4">
                          <a href="#" className="hover:underline">+25078536232</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">www.ishami.com</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
     <div className="font-dm-sans text-center text-base font-normal leading-6 tracking-normal py-8 text-yellow-500">
     <span className="">copyright @2024 shami</span>
     </div>

    </div>
</footer>

  )
}

export default Footer
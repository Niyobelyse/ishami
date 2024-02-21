const PortifolioCards = () => {
  return (
    <div className="py-8 px-14 grid grid-cols-3">
      <div className="max-w-sm w-80  bg-white   rounded-lg    dark:bg-gray-800   ">
        <a href="#">
          <img className="rounded-t-lg h-80 w-80" src="../girl.png" alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2   text-1xl  font-bold tracking-tight text-gray-900 dark:text-white">
              Agriculture Investment Platform
            </h5>
          </a>
          <p className="font-dm-sans text-base font-normal leading-tight tracking-normal text-left">
            TechVenture Fund capitalizes on technology's transformative power,
            curating a diverse portfolio of companies poised for exponential
            growth and disruptive innovation.
          </p>
        </div>
      </div>

      <div className="max-w-sm w-80 rounded-t-lg bg-white   rounded-lg  dark:bg-gray-800   ">
        <a href="#">
          <img className="rounded-t-lg w-80 h-80" src="../boy1.png" alt="" />
        </a>

        <div className="p-5">
          <a href="#">
            <h5 className="mb-2  font-dm-sans text-1xl  font-bold tracking-tight text-gray-900 dark:text-white">
              IT Investment Fund
            </h5>
          </a>
          <p className="font-dm-sans text-base font-normal leading-tight tracking-normal text-left">
            AgriInvest connects investors with sustainable farming projects
            worldwide, delivering attractive returns while promoting
            environmental and social sustainability.
          </p>
        </div>
      </div>
      <div className="max-w-sm w-80 bg-white   rounded-lg    dark:bg-gray-800   ">
        <a href="#">
          <img className="rounded-t h-80 w-80" src="../boyandgril.png" alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 font-dm-sans  text-1xl  font-bold tracking-tight text-gray-900 dark:text-white">
              Savings Management App
            </h5>
          </a>
          <p className="font-dm-sans text-base font-normal leading-tight tracking-normal text-left">
            SaveSmart is an intuitive savings management app designed to help
            users achieve financial goals through expense tracking, goal
            setting, and personalized recommendations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortifolioCards;

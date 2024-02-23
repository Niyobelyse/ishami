import Navbar from "./navbar/page";
import ExploreButton from "./buttons/explore/page";
import ProjectCard from "./cards/projectcard/page";
import TailoredCards from "./cards/tailoredcard/page";
import PortifolioCards from "./cards/portfoliocards/page";
import Footer from "./footer/page";
const page = () => {
  return (
    <div>
      <Navbar />
      <div>
        <p className=" py-8 text-center font-sans font-bold text-4xl leading-tight">
          "Discover Shami: Agri & IT investments, <br />
          financial saving."
        </p>
      </div>
      <div className="text-center">
        <ExploreButton />
      </div>
      <div>
        <ProjectCard />
      </div>
      <div className="grid grid-cols-2 px-14 py-8">
        <div className="bg-cover bg-[url(/boy.png)] object-cover brightness-50 ...">
          <div className=" text-center">
            <div className=" p-56">
              <h1 className=" font-dm-sans text-white text-2xl font-bold">
                About Us
              </h1>
              <img src="../Frame2.png" className="ml-16" />
            </div>
          </div>
        </div>
        <div className=" bg-gray-200">
          <h1 className=" text-2xl font-bold font-dm-sans p-8">iShami</h1>
          <p className="p-8 font-dm-sans">
            At Shami, we revolutionize financial <br />
            management with an app for purposeful saving <br />
            and investments in Agriculture and IT.
          </p>
          <p className="p-8 font-dm-sans">
            Our team values transparency, integrity, and <br />
            personalized service, guiding you to financial <br />
            success with expertise and care.
          </p>
          <p className="p-8 font-dm-sans">
            Our mission is empowering financial prosperity <br />
            through innovation and expertise, supporting <br />
            individuals and businesses on their journey to <br />
            success.
          </p>
        </div>
      </div>
      <div>
        <div>
          <div className="text-center font-bold font-dm-sans text-2xl">
            Tailored Saving Solutions Just for You
          </div>
          <div>
            <img src="../Frame2.png" className="ml-96 " />
          </div>
          <div className="px-14 font-dm-sans text-black  py-8 text-xl ">
            we empower you to save money for whatever matters most to you.
            Whether it's saving for a dream vacation,a new gadget, <br />
            <span className="px-80">
            
              or a rainy day fund, we've got you covered.
            </span>
          </div>
        </div>
        <TailoredCards />
      </div>
      <div className="object-cover opacity-70 bg-cover brightness-50...  bg-[url(/secondboy.jpeg)] bg-no-repeat h-96 grid grid-cols-2" id="bodyimage">
        <div>
          <h1 className="text-white text-2xl font-sans font-bold mt-24 px-24">
            Time for your next <br />
            investment leap?
          </h1>
          <button className="text-balck font-sm font-sans px-2 bg-amber-500 ml-40 mt-12 inline-flex rounded">
            Invest with us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-4"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m10 17l5-5l-5-5"
              />
            </svg>
          </button>
        </div>
        <div className=" inline-flex">
          <div className="border-l-4 border-white py-16 mb-8 mt-10"></div>
          <div>
            <h1 className="text-white text-2xl font-bold px-24 mt-24">
              Ready to launch your
              <br /> proposal or project?
            </h1>
            <button className="text-balck font-sm px-2 font-dm-sans  bg-white ml-40 mt-12 inline-flex rounded">
              Pitch us
              <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-4"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m10 17l5-5l-5-5"
              />
            </svg>
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="py-8 mt-10 px-14">
          <h1 className="text-xl font-medium">Portfolio</h1>
          <p>where we showcase our past projects and successes. Take a look at our work to get a better understanding of the quality and variety of services<br/>  we offer</p>
        </div>
        
      </div>
      <PortifolioCards />
      <div className=" text-center inline-flex translate-x-96 px-52 py-8">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" className=" text-yellow-500" viewBox="0 0 24 24"><path fill="currentColor" d="M11.03 8.53a.75.75 0 1 0-1.06-1.06l-4 4a.748.748 0 0 0 0 1.06l4 4a.75.75 0 1 0 1.06-1.06l-2.72-2.72H18a.75.75 0 0 0 0-1.5H8.31z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg"className=" p-2 bg-yellow-500 rounded-full text-white"  width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M13.47 8.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H6.5a.75.75 0 0 1 0-1.5h9.69z"/></svg>
      </div>
      <div className=" grid grid-cols-2 object-cover opacity-70 bg-cover brightness-50 ...  bg-[url(/secondboy.jpeg)] bg-no-repeat " id="bodyimage">
        <div className="font-dm-sans  py-16 font-normal leading-6 tracking-normal text-left text-white">
          <h1 className="text-2xl font-bold px-14">
            Have questions? We've got <br />
            answers
          </h1>
          <p className="text-sm py-4 px-14">
            where we showcase our past projects and successes.
            <br /> Take a look at our work to get a better understanding <br />
            of the quality and variety of services we offer
          </p>
        </div>
        <div className="font-dm-sans text-sm py-16 font-normal leading-6 tracking-normal text-left text-white">
          <div className=" inline-flex  ">
            <span className="font-bold">
              How does your agriculture investment platform <br /> work?
            </span>
            <span className="px-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M11.5 12.5H6v-1h5.5V6h1v5.5H18v1h-5.5V18h-1z"
                />
              </svg>
            </span>
          </div>
          <hr className="text-gray-400 py-6 w-96 " />
          <div className=" inline-flex  ">
            <span className="font-bold">
              What types of projects are available for <br /> investment in the
              agriculture sector?
            </span>
            <span className="px-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M11.5 12.5H6v-1h5.5V6h1v5.5H18v1h-5.5V18h-1z"
                />
              </svg>
            </span>
          </div>
          <hr className="text-gray-400 py-6 w-96 " />
          <div className=" inline-flex  ">
            <span className="font-bold">
              Is my personal and financial information secure <br /> on your
              platform?
            </span>
            <span className="px-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M11.5 12.5H6v-1h5.5V6h1v5.5H18v1h-5.5V18h-1z"
                />
              </svg>
            </span>
          </div>
          <hr className="text-gray-400 py-6 w-96 " />
          <div className=" inline-flex  ">
            <span className="font-bold">
              How do I get started with investing in your IT <br /> investment
              fund?
            </span>
            <span className="px-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M11.5 12.5H6v-1h5.5V6h1v5.5H18v1h-5.5V18h-1z"
                />
              </svg>
            </span>
          </div>
          <hr className="text-gray-400 py-6 w-96 " />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;

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
        <p className=" font-bold text-xl py-14 text-center">
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
              <h1 className=" font-dm-sans text-white text-2xl brightness-100 ... font-bold">
                About Us
              </h1>
              <img src="../Frame2.png" className="ml-16" />
            </div>
          </div>
        </div>
        <div>
          <h1 className=" text-2xl font-bold font-dm-sans p-8">Ishami</h1>
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
        <TailoredCards />
      </div>
      <div className="object-cover opacity-70 bg-cover brightness-50 ...  bg-[url(/boy1.png)] bg-no-repeat h-96 grid grid-cols-2">
        <div>
          <h1 className="text-white text-2xl brightness-100 font-bold mt-24 px-24">
            Time for your next <br />
            investment leap?
          </h1>
          <button className="text-balck font-normal px-4 bg-yellow-500 ml-40 mt-12 rounded">
            Invest with us
          </button>
        </div>
        <div className=" inline-flex">
          <div className="border-l-4 border-white py-16 mb-8 mt-10"></div>
          <div>
            <h1 className="text-white text-2xl font-bold px-24 mt-24">
              Ready to launch your
              <br /> proposal or project?
            </h1>
            <button className="text-balck font-normal px-4 bg-white mt-12 ml-40 rounded">
              Pitch Us
            </button>
          </div>
        </div>
      </div>
      <PortifolioCards />
      <div className=" grid grid-cols-2 bg-[url(/bgimage.png)]" id="bodyimage">
        <div className="font-dm-sans font-normal leading-6 tracking-normal text-left text-white">
          <h1 className="text-2xl py-4 font-bold px-14">
            Have questions? We've got <br />
            answers
          </h1>
          <p className="text-sm px-14">
            where we showcase our past projects and successes.
            <br /> Take a look at our work to get a better understanding <br />
            of the quality and variety of services we offer
          </p>
        </div>
        <div className="font-dm-sans text-sm font-normal leading-6 tracking-normal text-left text-white">
          <div>
            <span>How does your agriculture investment platform work?</span>
            <span></span>
          </div>
          <div>
            <span>
              What types of projects are available for investment in the
              agriculture sector?
            </span>
            <span></span>
          </div>
          <div>
            <span>
              Is my personal and financial information secure on your platform?
            </span>
            <span></span>
          </div>
          <div>
            <span>
              How do I get started with investing in your IT investment fund?
            </span>
            <span></span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;

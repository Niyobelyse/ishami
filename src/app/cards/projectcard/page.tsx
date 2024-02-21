const ProjectCard = () => {
  return (
    <div className="grid grid-cols-3 px-14 py-24 gap-12">
      <div className=" mt-8">
        <div className=" inline-flex">
          <div>
            <img src="../oval1.png" />
            <div className=" text-center">
              <img src="../Line.png" className="text-center mx-2" />
            </div>
          </div>
          <div className="px-4">
            <h3 className="font-medium">Project Introduction</h3>
            <p>
              Highlight your project's key strengths and market potential
              briefly.
            </p>
          </div>
        </div>
        <div className="inline-flex">
          <div className="">
            <img src="../oval2.png" />
            <div className=" text-center">
              <img src="../Line.png" className="text-center mx-2" />
            </div>
          </div>
          <div className="px-4">
            <h3 className="font-medium">Investment Breakdown</h3>
            <p>
              Detail the investment opportunity, including returns and market
              analysis.
            </p>
          </div>
        </div>
        <div className="inline-flex">
          <div>
            <img src="../oval3.png" />
          </div>
          <div className="px-4">
            <h3 className="font-medium">Investor Invitation</h3>
            <p>
              Encourage investors to explore further by requesting a detailed
              proposal.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="grid grid-cols-2">
            <div className=" inline-flex mt-24">
              <img
                src="../image1.png"
                className="absolute mr-8 rounded-full w-12"
              />
              <img
                src="../image2.png"
                className="absolute ml-8 rounded-full w-12"
              />
              <img
                src="../image3.png"
                className="absolute ml-16 rounded-full w-12"
              />
            </div>
            <div className=" text-2xl font-bold mt-24">13K +</div>
          </div>
          <div>
            <p className=" mt-28">
              Our app is trusted by many for seamless financial management
              solutions.
            </p>
          </div>
        </div>
        <div></div>
      </div>
      <div className=" inline-flex">
        <div className="grid grid-rows-2">
          <div className="mb-auto">
            <img src="../Group2.png" />
          </div>
          <div className="mt-auto text-center">
            <img src="../Frame1.png" className="mb-8" />
          </div>
        </div>
        <div>
          <img src="../girl.png" className=" rounded-lg h-72" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

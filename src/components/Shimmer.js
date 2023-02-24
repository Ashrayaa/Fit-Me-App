import React from "react";

export const MainShimmer = () => {
  return (
    <>
      <section className="text-gray-500 body-font">
        <div className="container px-5  mx-auto ">
          <div className="flex flex-col lg:flex-row flex-wrap ">
            {Array(12)
              .fill("")
              .map((e, index) => (
                <div className="p-6 md:w-1/3">
                  <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                    <div className="lg:h-48 h-32 animate-pulse bg-gray-400 md:h-36 w-full object-cover object-center"></div>
                    <div className="p-6">
                      <h2 className="bg-gray-400 animate-pulse h-4 w-1/4 mb-2"></h2>
                      <h1 className="w-1/2 mb-4 h-6 animate-pulse bg-gray-500"></h1>
                      {/* <p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></p> */}
                      <p className="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400"></p>
                      <p className="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400"></p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export const DetailPageShimmer = () => {
  return (
    <>
      <div>
        {/* black screen */}
        <div className="flex flex-col justify-center gap-6 lg:flex-row bg-black text-white p-10 lg:justify-start lg:gap-32 lg:pl-36">
          {/* image */}
          <div className="bg-[#eff0f5] animate-pulse w-72 h-44 rounded-md"></div>
          {/* div for restarant */}
          <div className="flex flex-col gap-2 justify-center">
            <div className="text-2xl font-medium animate-pulse bg-[#eff0f4] w-44 h-4"></div>

            <div className="bg-[#acafb4] animate-pulse w-32 h-4"></div>

            <div className="flex gap-2 animate-pulse bg-[#acafb4] w-36 h-4"></div>

            <div className="flex flex-col gap-5 sm:flex-row sm:gap-8 ">
              <div className="flex items-center animate-pulse bg-[#eff0f5] sm:flex-col gap-2"></div>
              <div className="flex bg-[#eff0f5] animate-pulse items-center sm:flex-col gap-2"></div>

              <div className="flex bg-[#eff0f5] animate-pulse items-center sm:flex-col gap-2"></div>
            </div>
          </div>
          {/* div for offers */}
          <div className="border-2 rounded-xl flex flex-col gap-4 border-dashed border-[#eff0f5] p-3 sm:p-6 sm:mr-32">
            <div className=" bg-[#eff0f5] animate-pulse w-24 h-4"></div>
            <div className="flex gap-4">
              <div className="w-6 animate-pulse bg-[#eff0f5] h-4" />
              <h4 className="bg-[#eff0f5] animate-pulse w-52 h-4 font-light text-sm"></h4>{" "}
            </div>
            <div className="flex gap-4">
              <div className="w-6 animate-pulse bg-[#eff0f5] h-4" />
              <div className="font-light animate-pulse bg-[#eff0f5] w-64 h-4 text-sm"></div>{" "}
            </div>
          </div>
        </div>
        {/* search bar */}
        {/* favourite */}

        <div className="grid grid-flow-row p-8 lg:grid-cols-4 lg:p-12 lg:px-24">
          <div className="hidden animate-pulse bg-[#eff0f5] lg:flex flex-col gap-4 mr-6">
            {Array(12)
              .fill("")
              .map((e, index) => (
                <div className="font-medium text-sm animate-pulse bg-[#eff0f5] text-right"></div>
              ))}
          </div>
          <div className="w-px hidden lg:flex animate-pulse bg-gray-200 border-0 dark:bg-gray-700"></div>

          {/* <div className="bg-[#808080] w-0.5 border-2 border-solid"></div> */}

          {/* menu list */}
          <div className="lg:-ml-72">
            {Array(12)
              .fill("")
              .map((e, index) => (
                <div className="">
                  <div className="grid grid-flow-row grid-cols-2 justify-between gap-20 xl:gap-48">
                    <div className="flex flex-col gap-2">
                      <h4 className="bg-[#eff0f5] animate-pulse font-medium text-sm"></h4>
                      <h4 className="bg-[#eff0f5] text-sm font-medium"></h4>
                      <h5 className="bg-[#eff0f5] text-sm font-light mt-4 lg:w-[430px]"></h5>
                    </div>

                    <div className="flex flex-col bg-[#eff0f5]  items-center  "></div>
                  </div>
                  <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                  {/* <div className="bg-[#808080] mt-8 mb-12 h-0.5 border-2 border-solid"></div> */}
                </div>
                // (
                //   <div>
                //     <li key={item.id}>{item.name}</li>
                //     <li>{item.description}</li>
                //   </div>
                // ),
                // (<li></li>)
              ))}
          </div>
          {/* CART <Cart/> - make it as a component and call below */}
          <div className="hidden lg:flex flex-col gap-6 ml-14">
            <div className="flex justify-between">
              <h3 className="font-medium text-lg bg-[#eff0f5] w-52 h-4 "></h3>
            </div>
            <h4 className="text-sm bg-[#eff0f5] w-52 h-4 font-normal"></h4>
            <div className="flex justify-between">
              <div className="flex flex-col bg-[#eff0f5] text-xs font-light">
                <h4 className="bg-[#eff0f5] w-52 h-4"></h4>
                <h4 className="bg-[#eff0f5] w-52 h-4"></h4>
              </div>
            </div>
            <h4 className="text-sm font-normal bg-[#eff0f5] "></h4>
            {/* <div className="flex justify-between">
              <div className="flex flex-col text-xs font-light">
                <h4 className="bg-[#eff0f5] w-52 h-4 "></h4>
                <h4 className="bg-[#eff0f5] w-52 h-4"></h4>
              </div>
              <h5 className="bg-[#eff0f5] w-52 h-4 "></h5>
            </div> */}

            {/* <div className="flex justify-between">
              <div className="flex flex-col">
                <h4 className="text-lg font-medium bg-[#eff0f5] w-52 h-4"></h4>
                <h4 className="text-[#808080] bg-[#eff0f5] w-52 h-4 font-light text-xs"></h4>
              </div>
              <h5 className="bg-[#eff0f5] w-52 h-4"> </h5>
            </div> */}

            <button className="text-white bg-[#eff0f5] w-64 h-10 font-medium text-lg py-2 rounded-lg"></button>
          </div>
        </div>
      </div>
    </>
  );
};

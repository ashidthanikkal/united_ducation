import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

export default function Home() {
  return (
    <main>
      {/* banner img */}
      <div className="flex flex-col items-center justify-between w-100 static">
        <Image
          src={"/Rectangle 2.png"}
          alt="BannerImg"
          height={500}
          width={2560}
        />
        <span className="absolute font-bold  lg:top-[200px] top-[90px] lg:text-4xl text-xl md:top-[160px]   text-white">
          About Us
        </span>
      </div>

      {/* company_overview */}
      <div className="company_overview  p-10 flex flex-col md:flex-row">
        <div className="overview1 w-full md:flex-col flex-row">
          <div className="flex  md:flex-row-reverse items-center md:justify-end gap-4">
            <div className="w-10 border-t-2 border-[#DC272F] flex justify-center text-[8px] leading-[8px] md:leading-[12px] md:text-[12px] lg:leading-[28.8px] lg:text-[18px] mt-2 text-[#DC272F]"></div>
            <div>
              <p className="font-normal text-[8px] leading-[8px] md:leading-[12px] md:text-[12px] lg:leading-[28.8px] lg:text-[18px] mt-2 text-[#DC272F]">
                COMPANY OVERVIEW
              </p>
            </div>
          </div>

          <div className="flex md:flex-col flex-row justify-between">
            <h2 className="text-[#04374B] mt-3 font-bold md:font-semibold  leading-[16.8px] text-[14px] md:leading-[16.8px] md:text-[14px] lg:leading-[52px] lg:text-[40px] ">
              Our Real Commitment Reaches Beyond Gas & Oil Company.
            </h2>
            <button
              type="button"
              className="text-white bg-[#14516A] hover:bg-[#14516A] w-48 mt-7 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 hidden md:block"
            >
              View Our Courses
            </button>
            <div>
              {" "}
              <IoIosArrowForward className="text-red-600 nd:w-10 md:hidden" />
            </div>
          </div>
        </div>

        <div className="overview2 w-full ">
          <p className="font-normal text-[8px] leading-[12.8px] md:leading-[22.4px] md:text-[14px] lg:leading-[28.8px] lg:text-[17px] text-[#DC272F] mt-2 text-left">
            UE is a private educational and training services provider,
            following huge educational and skill needs among our people that
            make it difficult for the country and nation to develop and cope
            with the rest of the world.
          </p>

          <p className="font-normal text-[8px] leading-[12.8px] md:leading-[22.4px] md:text-[14px] lg:leading-[28.8px] lg:text-[17px] mt-2 text-left">
            UE is specialized in educational and training services, ranging from
            language education, business skills development, and special
            technical and vocational training services.
            <span className="hidden md:inline">
              We have a blend of products and services for all public, private,
              non-governmental, educational and individual customers who are
              looking for excellent educational solutions.
            </span>
          </p>

          <p className="font-normal text-[8px] leading-[12.8px] md:leading-[22.4px] md:text-[14px] lg:leading-[28.8px] lg:text-[17px] mt-2 hidden md:block">
            United Education has partnership with the world’s best educational
            services providers, accreditation and certification bodies and
            provide the best of services to our customers throughout Iraq and
            Kurdistan Region, combining world’s most advanced learning material
            with up to date technologies and excellent services and support to
            every customer.
          </p>
        </div>
      </div>

      {/* box */}
      <div className="box_parent grid lg:grid-cols-3 grid-cols-1  lg:gap-0.5  gap-[10px] my-10 px-10">
        {/* box1 */}
        <div className="box1 font-medium text-white  h-[90px] md:h-[163px] lg:h-[300px] rounded-lg rounded-s-lg  lg:rounded-none lg:rounded-s-lg bg-[#14516A]">
          <div className="md:ms-5 md:mt-10">
            <div className="flex lg:flex-col flex-row  item-center lg:w-72  ms-5 mt-5">
              <div className="icon1 relative w-[20px]  h-[20px] md:w-[40px] md:h-[40px] lg: lg:w-[56px] lg:h-[56px]">
                <Image src={"/icon1.png"} alt="icon1" fill />
              </div>
              <div className="sub_heading1">
                <span className="font-medium text-[12px] md:text-[22px] lg:text-[28px] ms-3 lg:ms-0">
                  Quality Driven
                </span>
              </div>
            </div>
            <div>
              <p className="font-normal text-[8px] md:text-[16px] mt-2 mx-5 lg:w-[269px]">
                We always deliver the best quality and performance for both our
                products and services.
              </p>
            </div>
          </div>
        </div>
        {/* box2 */}
        <div className="box2  font-medium text-white  h-[90px] md:h-[163px] lg:h-[300px] rounded-lg lg:rounded-none bg-[#14516A]">
          <div className="md:ms-5 md:mt-10">
            <div className="flex lg:flex-col flex-row  item-center lg:w-72  ms-5 mt-5">
              <div className="icon2 relative w-[20px]  h-[20px] md:w-[40px] md:h-[40px] lg: lg:w-[56px] lg:h-[56px]">
                <Image src={"/icon2.png"} alt="icon2" fill />
              </div>
              <div className="sub_heading1">
                <span className="font-medium text-[12px] md:text-[22px] lg:text-[28px] ms-3 lg:ms-0">
                  Corporate Training
                </span>
              </div>
            </div>
            <div>
              <p className="font-normal text-[8px] md:text-[16px] mt-2 mx-5 lg:w-[335px]">
                We can tailor our courses to your needs and create unique
                programmes that may include various workshops and simulations.
              </p>
            </div>
          </div>
        </div>

        {/* box3 */}
        <div className="box3  font-medium text-white  h-[90px] md:h-[163px] lg:h-[300px] rounded-e-lg rounded-lg  lg:rounded-none  lg:rounded-e-lg bg-[#14516A]">
          <div className="md:ms-5 md:mt-10">
            <div className="flex lg:flex-col flex-row  item-center lg:w-72  ms-5 mt-5">
              <div className="icon3 relative w-[20px]  h-[20px] md:w-[40px] md:h-[40px] lg: lg:w-[56px] lg:h-[56px]">
                <Image src={"/Icon 3.png"} alt="icon3" fill />
              </div>
              <div className="sub_heading1">
                <span className="font-medium text-[12px] md:text-[22px] lg:text-[28px] ms-3 lg:ms-0">
                  Global Sourcing
                </span>
              </div>
            </div>
            <div>
              <p className="font-normal text-[8px] md:text-[16px] mt-2 mx-5 lg:w-[269px]">
                Exploiting global efficiencies in the delivery of our products
                and services.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* about us */}
      <div className="aboutus px-10">
        <div className="aboutus_parent flex-col-reverse flex md:flex-row ">
          <div className="aboutus_child1 md:w-1/2 w-full grid grid-rows-2 grid-flow-col gap-3 my-5">
            <div className="relative h-[92px] md:h-full  rounded-xl">
              <Image src={"/Rectangle14.png"} alt="Rectangle14" fill />
            </div>
            <div className="relative  h-[92px] md:h-full md: rounded-xl">
              <Image src={"/Rectangle15.png"} alt="Rectangle15" fill />
            </div>
            <div className="relative h-full row-span-2 rounded-xl">
              <Image src={"/Rectangle16.png"} alt="Rectangle16" fill />
            </div>
          </div>

          <div className="aboutus_child2 md:w-1/2">
            <div className="about_overview  sm:p-[.25rem] md:p-10">
              <div className="overview1 w-full md:flex-col flex-row">
                <div className="flex  md:flex-row-reverse items-center md:justify-end gap-4">
                  <div className="w-10 border-t-2 border-[#DC272F] flex justify-center text-[8px] leading-[8px] md:leading-[12px] md:text-[12px] lg:leading-[28.8px] lg:text-[18px] mt-2 text-[#DC272F]"></div>
                  <div>
                    <p className="font-normal text-[8px] leading-[8px] md:leading-[12px] md:text-[12px] lg:leading-[28.8px] lg:text-[18px] mt-2 text-[#DC272F]">
                      ABOUT US
                    </p>
                  </div>
                </div>

                <div className="flex md:flex-col flex-row justify-between">
                  <h2 className="text-[#04374B] mt-3 font-bold md:font-semibold  leading-[16.8px] text-[14px] md:leading-[16.8px] md:text-[14px] lg:leading-[52px] lg:text-[40px] ">
                    Our Real Commitment Reaches Beyond Gas & Oil Company.
                  </h2>
                  <div>
                    {" "}
                    <IoIosArrowForward className="text-red-600 nd:w-10 md:hidden" />
                  </div>
                </div>
              </div>

              <div className="overview2 w-full ">
                <p className="font-normal text-[8px] leading-[12.8px] md:leading-[22.4px] md:text-[14px] lg:leading-[28.8px] lg:text-[17px] text-[#DC272F] mt-2 text-left">
                  UE is a private educational and training services provider,
                  following huge educational and skill needs among our people
                  that make it difficult for the country and nation to develop
                  and cope with the rest of the world.
                </p>

                <p className="font-normal text-[8px] leading-[12.8px] md:leading-[22.4px] md:text-[14px] lg:leading-[28.8px] lg:text-[17px] mt-2 text-left">
                  UE is specialized in educational and training services,
                  ranging from language education, business skills development,
                  and special technical and vocational training services.
                  <span className="lg:hidden hidden md:inline">
                    We have a blend of products and services for all public,
                    private, non-governmental, educational and individual
                    customers who are looking for excellent educational
                    solutions.
                  </span>
                </p>

                <button
                  type="button"
                  className="text-white bg-[#14516A] hover:bg-[#14516A] w-48 mt-7 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 hidden md:block"
                >
                  View Our Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mission and vision */}

      <div className="mission_vison h-[409px] bg-[#14516A] md:h-[482px] lg:h-[867px] lg:bg-[#F8F8F8]">

       <div className=" md:flex-row flex-col-reverse flex lg:flex-row px-10 md:pt-10">
          <div className="mission_visonchild1 w-full md:w-1/2">
            <div className="sm:p-[.25rem] md:p-[1.5rem]">
              <div className="w-full md:flex-col flex-row">
                <div className="flex  md:flex-row-reverse items-center md:justify-end gap-4">
                  <div className="w-10 border-t-2 border-white lg:border-[#DC272F] flex justify-center text-[8px] leading-[8px] md:leading-[12px] md:text-[12px] lg:leading-[28.8px] lg:text-[18px] mt-2 text-[#DC272F]"></div>
                  <div>
                    <p className="font-normal text-[8px] leading-[8px] md:leading-[12px] md:text-[12px] lg:leading-[28.8px] lg:text-[18px] mt-2 text-white lg:text-[#DC272F]">
                      Our Mission & Vision
                    </p>
                  </div>
                </div>
  
                <div className="vision_sub lg:mt-14">
                  <h2 className="text-white lg:text-[#04374B] mt-3 font-bold md:font-semibold  leading-[16.8px] text-[14px] md:leading-[16.8px] md:text-[14px] lg:leading-[52px] lg:text-[40px] ">
                    Our Vision
                  </h2>
                  <div></div>
                </div>
  
                <div className=" w-full ">
                  <p className="font-semibold text-[8px] leading-[12.8px] md:leading-[22.4px] md:text-[14px] lg:leading-[28.8px] lg:text-[17px] text-white lg:text-[#DC272F] mt-2 text-left">
                    UNITED EDUCAION
                  </p>
  
                  <p className="font-normal text-[8px] leading-[12.8px] md:leading-[22.4px] md:text-[14px] lg:leading-[28.8px] lg:text-[17px] text-white lg:text-[#04374B] mt-2 text-left">
                    Our vision is having a trained, knowledgeable and skillful
                    future generation in our country who can guarantee a better
                    life for themselves and the whole nation by been powerful
                    producible human resources.
                  </p>
                </div>
  
                  <div className="mission_sub lg:mt-14">
                    <h2 className="text-white lg:text-[#04374B] mt-3 font-bold md:font-semibold  leading-[16.8px] text-[14px] md:leading-[16.8px] md:text-[14px] lg:leading-[52px] lg:text-[40px] ">
                      Our Mission
                    </h2>
                  </div>
    
                  <div className="overview2 w-full ">
                    <p className="font-semibold text-[8px] leading-[12.8px] md:leading-[22.4px] md:text-[14px] lg:leading-[28.8px] lg:text-[17px] text-white lg:text-[#DC272F] mt-2 text-left">
                      UNITED EDUCAION
                    </p>
    
                    <p className="font-normal text-[8px] leading-[12.8px] md:leading-[22.4px] md:text-[14px] lg:leading-[28.8px] lg:text-[17px] text-white lg:text-[#04374B] mt-2 text-left">
                      Our vision is having a trained, knowledgeable and skillful
                      future generation in our country who can guarantee a better
                      life for themselves and the whole nation by been powerful
                      producible human resources.
                    </p>
                </div>
              </div>
            </div>
          </div>
  
          <div className="mission_visonchild2 w-full md:w-1/2 ">
          <div className="aboutus_child1  w-full grid lg:grid-rows-4 grid-flow-col gap-3 my-5">
              <div className="relative lg:row-span-3 lg:col-span-6 h-[137px] md:h-[389px] lg:h-[510px]  rounded-xl">
                <Image src={"/Rectangle72.png"} alt="Rectangle14" fill />
              </div>
              <div className="relative lg:col-span-4  h-[150px] hidden lg:inline rounded-xl">
                <Image src={"/Rectangle73.png"} alt="Rectangle15" fill />
              </div>
              <div className="relative lg:col-span-2  h-[150px] hidden lg:inline rounded-xl">
                <Image src={"/Rectangle74.png"} alt="Rectangle16" fill />
              </div>
            </div>
  
  
          </div>
       </div>

      </div>
    </main>
  );
}

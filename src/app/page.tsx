import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-between w-100 static">
        <Image
          src={"/Rectangle 2.png"}
          alt="BannerImg"
          height={500}
          width={1440}
        />
        <span className="absolute font-bold  lg:top-[200px] top-[90px] lg:text-4xl text-xl md:top-[160px]   text-white">
          About Us
        </span>
      </div>

      <div className="company_overview p-10 flex flex-col md:flex-row">
        <div className="overview1 w-full">
          <div className="flex items-center gap-4">
            <div><p className="font-normal  leading-[18px] text-[#DC272F]">COMPANY OVERVIEW</p></div>
            <div className="w-10 border-t-2 border-[#DC272F]"></div>
          </div>
          
          <h2 className="text-[#04374B] font-normal  leading-[18px]">Our Real Commitment Reaches Beyond Gas & Oil Company.</h2>
          <button
            type="button"
            className="text-white bg-[#14516A] hover:bg-[#14516A]   font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            Default
          </button>
        </div>

        <div className="overview2 w-full">
          <p className="font-normal  leading-[18px] text-[#DC272F]">
            UE is a private educational and training services provider,
            following huge educational and skill needs among our people that
            make it difficult for the country and nation to develop and cope
            with the rest of the world.
          </p>

          <p>
            UE is specialized in educational and training services, ranging from
            language education, business skills development, and special
            technical and vocational training services. We have a blend of
            products and services for all public, private, non-governmental,
            educational and individual customers who are looking for excellent
            educational solutions.
          </p>

          <p>
            United Education has partnership with the world’s best educational
            services providers, accreditation and certification bodies and
            provide the best of services to our customers throughout Iraq and
            Kurdistan Region, combining world’s most advanced learning material
            with up to date technologies and excellent services and support to
            every customer.
          </p>

        </div>
      </div>
    </main>
  );
}

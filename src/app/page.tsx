import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-100 flex-col items-center justify-between w-100 static">
      <Image
        src={"/Rectangle 2.png"}
        alt="BannerImg"
        height={500}
        width={1440}
      />
      <span className="absolute font-bold  lg:text-4xl lg:top-[200px] top-[90px] text-xl md:top-[160px]   text-white">
        About Us
      </span>

      <div>
        <span>COMPANY OVERVIEW</span>
        <span>Our Real Commitment Reaches Beyond Gas & Oil Company.</span>
      </div>
    </main>
  );
}

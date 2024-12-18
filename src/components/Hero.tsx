import Nav from "./Nav";

export default function Hero() {
  return (
    <main className="bg-hero-bg max-md:bg-hero-bg3 max-lg:bg-hero-bg2 max-md:w-screen h-screen">
      <Nav />
      <div className="flex max-lg:flex-col max-lg:justify-center items-center max-lg:pt-14 pt-48 px-32 max-lg:px-10">
        <div>
          <h4 className="text-white text-[30px] tracking-wider font-thin max-lg:text-[18px] font-[barlow]">
            SO, YOU WANT TO TRAVEL TO
          </h4>
          <h1 className="font-extrabold max-lg:text-[90px] text-[144px] tracking-widest text-white">
            SPACE
          </h1>
          <p className="font-[Barlow] font-thin tracking-wider text-white max-lg:w-full w-1/2 max-md:text-sm max-lg:text-sm text-xl max-lg:py-6 ">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="pr-10 max-lg:pr-0">
          <button className="bg-white w-48 h-48 max-md:w-40 max-md:h-40 rounded-full text-3xl">
            Explore
          </button>
        </div>
      </div>
    </main>
  );
}

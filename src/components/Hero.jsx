import mockup from "../assets/image-mockups.png";

const Hero = () => {
  return (
    <main className=" bg-Very-Light-Gray">
      <div className="lg:grid lg:grid-cols-[.4fr_.6fr] lg:ml-[13.5rem] flex flex-col-reverse">
        <div className="flex flex-col gap-4 lg:gap-8 lg:mt-[16rem] px-8 pb-16 lg:px-0 lg:pb-0">
          <h1 className="text-Dark-Blue lg:text-[3.5rem] text-[2.5rem] leading-[1.1] text-center font-normal lg:text-left mt-8">
            Next generation digital banking
          </h1>
          <p className="text-Grayish-Blue font-normal text-center lg:text-left lg:max-w-[25rem]">
            Take your financial life online. Your Easybank account will be
            one-stop-shop for spending, saving, budgeting, investing and much
            more
          </p>
          <a
            href="#"
            className="w-fit flex items-center justify-center px-8 py-3 bg-gradient-to-tr from-Lime-Green to-Bright-Cyan rounded-full text-Very-Light-Gray mx-auto mt-6 lg:mx-0 hover:opacity-60"
          >
            Request Invite
          </a>
        </div>
        <div className="bg-intro-desktop bg-no-repeat bg-cover ">
          <img src={mockup} alt="" className="lg:ml-[6rem]" />
        </div>
      </div>
    </main>
  );
};

export default Hero;

import iconOnline from "../assets/icon-online.svg";
import iconBudget from "../assets/icon-budgeting.svg";
import iconOnboarding from "../assets/icon-onboarding.svg";
import iconApi from "../assets/icon-api.svg";

const easyFeatures = [
  {
    title: "Online Banking",
    desc: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    image: iconOnline,
  },
  {
    title: "Simple Budgeting",
    desc: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
    image: iconBudget,
  },
  {
    title: "Fast Onboarding",
    desc: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
    image: iconOnboarding,
  },
  {
    title: "Open API",
    desc: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    image: iconApi,
  },
];

const Features = () => {
  return (
    <section className="bg-Light-Grayish-Blue py-20 px-4">
      <div className="max-w-[1150px] mx-auto">
        <h2 className="text-Dark-Blue text-[2rem] font-normal mb-[1.5rem] text-center lg:text-left">
          Why choose EasyBank?
        </h2>
        <p className="text-Grayish-Blue font-normal max-w-[36rem] mb-12 text-center lg:text-left">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.{" "}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {easyFeatures.map((item, index) => (
            <div key={index} className="flex flex-col gap-4">
              <img
                src={item.image}
                alt={item.title}
                width={50}
                height={50}
                className="mx-auto lg:mx-0"
              />
              <h2 className="text-dak-blue text-center lg:text-left">
                {item.title}
              </h2>
              <p className="text-Grayish-Blue text-center lg:text-left">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

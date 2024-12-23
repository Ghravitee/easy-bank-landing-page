import iconCurrency from "../assets/image-currency.jpg";
import iconRestaurant from "../assets/image-restaurant.jpg";
import iconPlane from "../assets/image-plane.jpg";
import iconConfetti from "../assets/image-confetti.jpg";

const articles = [
  {
    author: "By Claire Robinson",
    title: "Receive money in any currency with no fees",
    desc: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
    image: iconCurrency,
  },
  {
    author: "By Wilson Hutton",
    title: "Treat yourself without worrying about money",
    desc: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
    image: iconRestaurant,
  },
  {
    author: "By Wilson Hutton",
    title: "Take your Easybank card wherever you go",
    desc: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you … ",
    image: iconPlane,
  },
  {
    author: "By Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    desc: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ... ",
    image: iconConfetti,
  },
];

const Articles = () => {
  return (
    <section className="bg-Very-Light-Gray py-20 px-6">
      <div className="max-w-[1150px] mx-auto">
        <h2 className="text-Dark-Blue text-[2rem] font-normal mb-[1.5rem] text-center lg:text-left">
          Latest Articles
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch">
          {articles.map((item, index) => (
            <div
              key={index}
              className="flex flex-col bg-white h-full rounded-md"
            >
              <div className="h-[13rem]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-t-md"
                />
              </div>
              <div className="p-5 flex flex-col gap-4 rounded-b-md">
                <p className="text-Grayish-Blue text-left text-[0.8rem]">
                  {item.author}
                </p>
                <h3 className="text-Dark-Blue text-left text-[1.1rem] hover:text-Lime-Green hover:cursor-pointer">
                  {item.title}
                </h3>
                <p className="text-Grayish-Blue text-left text-[0.85rem]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;

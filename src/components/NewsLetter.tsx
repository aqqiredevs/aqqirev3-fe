import { Button } from "./ui/button";
import { Input } from "./ui/input";

const NewsLetter = () => {
  return (
    <section
      className="flex flex-col justify-center items-center text-accent p-12 lg:p-24 gap-6"
      style={{
        background: ` linear-gradient(90deg,rgba(0, 0, 0, 0.59) 0%, rgba(0, 0, 0, 0.18) 50%, rgba(0, 0, 0, 0.43) 100%),
        url('/background/skyline.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="space-y-2">
        <h3 className="text-4xl font-semibold">
          Stay Ahead of the Commercial Real Estate Market
        </h3>
        <p className="text-lg font-thin">
          Receive data briefs, investment analyses, cap-rate trends, and early
          access to featured properties.
        </p>
      </div>

      <div className="flex gap-4 w-full ">
        <Input
          className="bg-none border border-white flex-1 p-6 rounded-full"
          placeholder="Enter your email address"
        />
        <Button className="cursor-pointer capitalize bg-primary flex-1 p-6 rounded-full">
          Subscribe to our newsletter
        </Button>
      </div>
      <p className="text-lg font-light">
        Trusted by investors, brokers & developers nationwide. Join 10,000+
        subscribers. No spam, unsubscribe anytime.
      </p>
    </section>
  );
};

export default NewsLetter;

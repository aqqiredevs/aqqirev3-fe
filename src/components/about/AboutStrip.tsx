import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card, CardContent, CardHeader } from "../ui/card";

const AboutStrip = ({
  heading,
  description,
  reverse,
  items,
}: {
  heading: string;
  description: string;
  reverse?: boolean;
  items: {
    image: string;
    text: string;
  }[];
}) => {
  return (
    <div
      className={cn(
        "flex justify-between bg-gray-50 rounded-xl xl:px-10 p-6 gap-4 lg:gap-12",
        reverse
          ? "lg:flex-row-reverse flex-col-reverse"
          : "lg:flex-row flex-col",
      )}
    >
      {/* Card Items */}
      <div className="flex flex-wrap gap-4 xl:gap-6 lg:max-w-3/5 grow">
        {items.map((item) => (
          <Card className="border-none lg:flex-1 bg-white grow" key={item.text}>
            <CardHeader>
              <Avatar className="size-20 mx-auto">
                <AvatarImage src={item.image} />
                <AvatarFallback>{item.text} icon</AvatarFallback>
              </Avatar>
            </CardHeader>
            <CardContent>
              <div className="font-bold text-center">{item.text}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Heading and Text */}
      <div className="space-y-4 lg:max-w-2/5 w-full flex flex-col justify-center">
        <h3 className="text-3xl font-semibold">{heading}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default AboutStrip;

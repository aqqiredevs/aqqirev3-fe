const BasicInformation = ({
  name,
  address,
}: {
  name: string;
  rating: number;
  address: string;
  description: string;
}) => {
  return (
    <section className="flex flex-col md:flex-row md:justify-between items-center gap-2">
      <div>
        <h1 className="text-3xl font-bold md:text-4xl  text-accent-foreground">
          {name}
        </h1>
        <div>{address}</div>
      </div>
      <div className="text-2xl">Auctions by AQQIRE</div>
    </section>
  );
};

export default BasicInformation;

interface PropertyHeaderProps {
  title: string;
  address: string;
  sqft: string;
  status: string;
  propertyType: string;
  saleType: string;
  location: string;
  auctionBrand?: string;
  auctionProvider?: string;
}

const PropertyHeader = ({
  title,
  address,
  sqft,
  status,
  propertyType,
  saleType,
  location,
  auctionBrand = "AUCTIONS",
  auctionProvider = "Ten-X",
}: PropertyHeaderProps) => {
  return (
    <section>
      <div className="flex flex-col md:flex-row items-start justify-between gap-4 md:items-center">
        <div>
          <h1 className=" text-gray-800 capitalize font-semibold text-3xl text-center md:text-left">
            {title}
          </h1>
          <p className=" text-gray-500 mt-1 text-lg space-x-1 text-center md:text-left">
            {sqft} <span className="mx-1">|</span> {status}
            <span className="mx-1">|</span> {propertyType}
            <span className="mx-1">|</span> {saleType}
            <span className="mx-1">|</span> {location}
          </p>
        </div>
        <div className="md:text-right mx-auto md:mx-0 text-center ">
          <p className="text-lg font-bold tracking-wider text-gray-700">
            {auctionBrand}
          </p>
          <p className="text-xs text-gray-500">
            BY <span className="font-semibold">{auctionProvider}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PropertyHeader;

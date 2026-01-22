import { Property } from "@/types/property";
import SearchPropertyCard from "../cards/SearchPropertyCard";
import { searchProperties } from "@/actions/searchProperties";

const PropertiesResult = async ({ query }: { query: string }) => {
  const properties: Property[] = await searchProperties(query);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-6 p-4">
      {properties.map((property) => (
        <SearchPropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertiesResult;

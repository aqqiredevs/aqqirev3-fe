import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

import { useProperty } from "@/store/adminProperty";
import { Button } from "@/components/ui/button";

const AdminPropertyForm = () => {
  const { name, city, price, state, address, type, reset, setField } =
    useProperty();

  const api = process.env.NEXT_PUBLIC_API_URL;
  return (
    <div className="space-y-4">
      <Label htmlFor="name" className="text-accent">
        Property name
      </Label>
      <Input
        name="name"
        onChange={(e) => setField("name", e.target.value)}
        value={name}
      />

      <div className="flex gap-2">
        <div className="flex-1 space-y-2">
          <Label htmlFor="price" className="text-accent">
            Property Price($)
          </Label>
          <Input
            name="price"
            onChange={(e) => setField("price", e.target.value)}
            value={price}
          />
        </div>

        <div className="flex-1 space-y-2">
          <Label htmlFor="type" className="text-accent">
            Property Type
          </Label>
          <Input
            name="type"
            onChange={(e) => setField("type", e.target.value)}
            value={type}
          />
        </div>
      </div>
      <div className="flex gap-2">
        <div className="flex-1 space-y-2">
          <Label htmlFor="city" className="text-accent">
            City
          </Label>
          <Input
            name="city"
            onChange={(e) => setField("city", e.target.value)}
            value={city}
          />
        </div>

        <div className="flex-1 space-y-2">
          <Label htmlFor="state" className="text-accent">
            State
          </Label>

          <Input
            name="state"
            onChange={(e) => setField("state", e.target.value)}
            value={state}
          />
        </div>
      </div>

      <div className="flex-1 space-y-2">
        <Label htmlFor="address" className="text-accent">
          Address
        </Label>

        <Input
          onChange={(e) => setField("address", e.target.value)}
          value={address}
        />
      </div>

      <div className="flex flex-col gap-4">
        <Button className="cursor-pointer">Create Property</Button>
        <Button
          onClick={() => reset()}
          variant={"destructive"}
          className="cursor-pointer"
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default AdminPropertyForm;

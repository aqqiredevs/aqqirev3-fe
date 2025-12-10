"use client";

import React, { useEffect, useState } from "react";
import Form from "@/components/properties/property/form";
import { apiInstance } from "@/utils/axiosInstance";
import { checkErrors } from "@/utils/checkError";

const MyPropertiesPage = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const displayMyProperties = async () => {
      try {
        const res = await apiInstance.get(`/properties/my-properties`);
        console.log(res.data);
        setProperties(res.data);
      } catch (err) {
        checkErrors(err);
      }
    };

    displayMyProperties();
  }, []);

  return (
    <div>
      <div>My Properties</div>
    </div>
  );
};

export default MyPropertiesPage;

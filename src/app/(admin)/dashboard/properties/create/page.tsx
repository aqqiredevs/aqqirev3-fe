"use client";
import React from "react";
import { useProperty } from "@/store/adminProperty";
import axios, { isAxiosError } from "axios";
import AdminPropertyForm from "@/app/(main)/cms/properties/AdminPropertyForm";

const Page = () => {
  const { name, city, price, state, address, type, reset } = useProperty();

  const api = process.env.NEXT_PUBLIC_API_URL;

  const handleSubmit = async () => {
    try {
      const res = await axios.post(`${api}/properties`, {
        name,
        type,
        price,
        city,
        state,
        address,
      });

      console.log(res);
    } catch (e: unknown) {
      if (isAxiosError(e)) {
        console.error(" Registration Failed", e.response?.data || e.message);
      } else {
        console.error(" Registration Failed", e);
      }
    }

    reset();
  };

  return (
    <section className="p-6 ">
      <div className="max-w-4xl mx-auto space-y-4">
        <h1 className="text-4xl text-accent font-semibold">
          Create AQQIRE Property
        </h1>
        <AdminPropertyForm />
      </div>
    </section>
  );
};

export default Page;

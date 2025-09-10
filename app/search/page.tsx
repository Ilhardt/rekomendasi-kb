import React from "react";
import Navbar from "../components/navbar";
import SearchForm from "../components/searchForm";
import KolomPanduan from "../components/kolomPanduan";

const Page = () => {
  return (
    <div className="bg-[#030325] min-h-screen">
      <div className="container mx-auto p-4 md:p-8 flex flex-col-reverse md:flex-row gap-8 items-start">
        {/* Kolom Kiri: Form Pencarian */}
        <div className="w-full md:w-1/2 lg:w-2/5">
          <SearchForm />
        </div>
        
        {/* Kolom Kanan: Panduan Ilustrasi */}
        <KolomPanduan />
      </div>
    </div>
  );
};

export default Page;
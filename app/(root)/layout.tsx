import React from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SearchForm from "@/components/SearchForm";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <SearchForm />
      {children}
      <Footer />
    </>
  );
};

export default layout;

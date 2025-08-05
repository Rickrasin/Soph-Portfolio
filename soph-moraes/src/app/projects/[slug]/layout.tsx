import Header from "@/components/layout/hero/header";
import React from "react";

const projectLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default projectLayout;

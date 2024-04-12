"use client";

import StarCard from "@/app/Components/StarCard";
import localFont from "next/font/local";

const newFont = localFont({
  src: "../styles/mangueiraalt-alt.otf",
  variable: "--new-font",
});

export default function Home() {


  return (
    <div className={`mx-auto xxsm:w-4/5 w-11/12 grid items-center h-dvh ${newFont.variable} font-sans`}>
      <StarCard />
    </div>
  );
}

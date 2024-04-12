"use client";

import ReviewCard from "@/pages/Components/ReviewCard";
import localFont from "next/font/local";
import { useSearchParams } from "next/navigation";

const newFont = localFont({
  src: "../../styles/mangueiraalt-alt.otf",
  variable: "--new-font",
});

const Reviews = () => {
  const params = useSearchParams()?.get('stars');
  const paramsText = useSearchParams()?.get('textValue');
  const stars = params || "";
  const review = paramsText || "";

  return (
    <div className={`mx-auto xxsm:w-4/5 w-11/12 grid items-center h-dvh ${newFont.variable} font-sans`}>
      <ReviewCard stars={stars} review={review} />
    </div>
  );
};

export default Reviews;

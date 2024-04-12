"use client";

import ReviewCard from "@/pages/Components/ReviewCard";
import localFont from "next/font/local";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

const newFont = localFont({
  src: "../../styles/mangueiraalt-alt.otf",
  variable: "--new-font",
});

const Reviews = () => {
  const router = useRouter();
  const params = router.query.stars;
  const paramsText = router.query.textValue;
  // const params = useSearchParams()?.get('stars');
  // const paramsText = useSearchParams()?.get('textValue');
  const stars = Array.isArray(params) ? params[0] : params|| "";
  const review = Array.isArray(paramsText) ? paramsText[0] : paramsText || "";

  return (
    <div className={`mx-auto xxsm:w-4/5 w-11/12 grid items-center h-dvh ${newFont.variable} font-sans`}>
      <ReviewCard stars={stars} review={review} />
    </div>
  );
};

export default Reviews;

import Image from "next/image";
import { useState } from "react";

const ReviewCard = ({ stars, review }: { stars: string, review: string }) => {
  // const [starsCount, setStarsCount] = useState();
  const starCount = parseInt(stars) || 0;
  const imageUrl = Array(starCount).fill("/star.png");
  const starSize = 50;

  return (
    <div className="font-sans p-12 cardBackground starCard">
      <div>
        <div className="pb-8">
          <h1 className="text-4xl">Reviews and ratings</h1>
        </div>
        <div className="flex gap-12 items-center">
          <div className="text-7xl">{stars}</div>
          <div className="flex gap-2">
            {imageUrl.map((url, index) => (
                
                <Image
                    src={url}
                    alt="starImage"
                    key={index}
                    width={starSize}
                    height={starSize}
                />
              
            ))}
          </div>
        </div>
      </div>
      <hr className="border-2 my-6"></hr>
      <div className="pt-6 text-left">
        {review}
      </div>
    </div>
  );
};

export default ReviewCard;

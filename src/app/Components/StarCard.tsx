import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const StarCard = () => {
  const imageUrlArray = Array(5).fill("/no-star.png");
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [starSize, setStarSize] = useState(80);
  const [imageUrl, setImageUrl] = useState(imageUrlArray);
  const [clicked, setClicked] = useState(false);
  const [show, setShow] = useState(false);
  const [textValue, setTextValue] = useState('');

  const router = useRouter();


  useEffect(() => {
    const handleResize = () => {
      window.innerWidth < 600 ? setStarSize(40) : setStarSize(80);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseOver = (index:number) => {
    setImageUrl(prevUrl => {
        const newUrl = [...prevUrl];
        for(let i=0; i<=index; ++i){
            newUrl[i] = '/star.png';
        }
        return newUrl; 
    })
  };

  const handleMouseOut = (index:number) => {

    if(!clicked){
        setImageUrl(() => {
            const newUrl = imageUrlArray;
            return newUrl;
    })
    return;
    }
    if(index>currentIndex){
        setImageUrl((prevUrl) => {
            const newUrl = [...prevUrl];
            for(let i=currentIndex+1; i<imageUrlArray.length; ++i){
                newUrl[i] = '/no-star.png';
            }
            return newUrl;
        })
    }

  };

  const handleClick = (index:number) => {
    if((currentIndex >= index) && clicked){
        setCurrentIndex(index);
        setImageUrl(() => {
            const newUrl = imageUrlArray;
            if(index === currentIndex){
                setClicked(false);
                setCurrentIndex(-1);
                return newUrl;
            }
            for(let i=0; i<=index; ++i){
                newUrl[i] = '/star.png';
            }
            return newUrl;
        })
        return;
    }
    setClicked(true);
    setCurrentIndex(index);
    setImageUrl(prevUrl => {
        const newUrl = [...prevUrl];
        for(let i=0; i<=index; ++i){
            newUrl[i] = '/star.png';
        }
        return newUrl;
    })
  }

  const handelRouting = () => {
    if(currentIndex === -1){
        setShow(true);
        setTimeout(() => setShow(false), 3000);
        return;
    }
    router.push(`/reviews?stars=${currentIndex+1}&textValue=${textValue}`);
    return;
  }

  return (
    <div className={`px-8 py-8 text-center cardBackground rounded-3xl`}>
      <div className="md:text-3xl sm:text-2xl text-xl pb-1">
        How was your experience?
      </div>
      <div className="flex md:gap-10 sm:gap-6 gap-3 justify-center pt-12">
        {imageUrl.map((image, index) => (
          <Image
            src= {image}
            alt="noImage"
            width={starSize}
            height={starSize}
            onMouseOver={()=>handleMouseOver(index)}
            onMouseOut={() => handleMouseOut(index)}
            onClick={() => handleClick(index)}
            key={index}
            className="starImage"
          />
        ))}
      </div>
        <div className="mt-8 pt-8 relative">
            <div className={show ? "popupBox show" : "popupBox"}>Give Us a Rating</div>
            <div className="text-md grid basis-full mb-4"><textarea className="textArea" placeholder="Write a Review" value={textValue} onChange={(e)=>setTextValue(e.target.value)}></textarea></div>
            <button className="buttonCard px-12 py-4 rounded-3xl text-lg" onClick={handelRouting}>Submit</button>
        </div>
    </div>
  );
};

export default StarCard;

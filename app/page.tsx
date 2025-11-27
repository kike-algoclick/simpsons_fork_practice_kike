import Image from "next/image";
import bgImage from "../public/Background.jpg"
import family from "../public/Title.webp"

export default function Home() {
  return (
    <div>
      <Image className="w-full h-screen"
        src={bgImage}
       
        alt="BackgroundSimpsons"  
      />
      <Image  className="w-full h-screen" src={family}
      alt="img"/>  
    </div>
  );
}

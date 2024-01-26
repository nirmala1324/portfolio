import Image from "next/image";

const DevImg = ({containerStyles, imgSrc}) => {
  return <div className={`${containerStyles}`}>
    <Image src={imgSrc} className="mt-0" fill priority alt=""/>
  </div>;
};

export default DevImg;

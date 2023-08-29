/* eslint-disable @next/next/no-img-element */
import Slider from "./Slider";

const Images = () => {
  return (
    <>
      <Slider>
        <Slider.Item className="h-full">
          <img
            src="/photo (65).jpg"
            alt="Image 1"
            className="w-full h-full object-cover rounded-lg"
          />
        </Slider.Item>
        <Slider.Item className="h-full">
          <img
            src="/photo (66).jpg"
            alt="Image 1"
            className="w-full h-full object-cover rounded-lg"
          />
        </Slider.Item>
        <Slider.Item className="h-full">
          <img
            src="/photo (77).jpg"
            alt="Image 1"
            className="w-full h-full object-cover rounded-lg"
          />
        </Slider.Item>
      </Slider>
    </>
  );
};

export default Images;

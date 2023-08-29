import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slider from "./Slider";

const Custom = () => {
  return (
    <>
      <Slider
        leftControlIcon={<BsArrowLeft />}
        rightControlIcon={<BsArrowRight />}
      >
        <Slider.Item className="h-full bg-slate-200 dark:bg-zinc-700 rounded-lg flex items-center justify-center">
          <div>Slide 1</div>
        </Slider.Item>
        <Slider.Item className="h-full bg-slate-200 dark:bg-zinc-700 rounded-lg flex items-center justify-center">
          <div>Slide 2</div>
        </Slider.Item>
        <Slider.Item className="h-full bg-slate-200 dark:bg-zinc-700 rounded-lg flex items-center justify-center">
          <div>Slide 3</div>
        </Slider.Item>
      </Slider>
    </>
  );
};

export default Custom;

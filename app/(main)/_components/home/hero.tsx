import CustomButton from "@/components/custom-button";
import Pill from "@/components/pill";

const Hero = () => {
  return (
    <section className="bg-transparent flex-center-center relative z-10">
      <div className="max-w-7xl mx-auto px-3" data-aos="fade-up">
        <Pill text="✨ Designing Tomorrow's Web Today" />
        <h1
          className="text-5xl md:text-7xl font-bold text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Unleash the Power of Seamless{" "}
          <span className="text-brand">Web Solutions</span>
        </h1>
        <p
          className="text-lg mt-4 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Web Design, UI/UX Design, Design to Code, Templates & Template
          Customization
        </p>
        <div
          className="mt-8 w-max mx-auto"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <CustomButton text="Reach Us Now" link="/contact" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

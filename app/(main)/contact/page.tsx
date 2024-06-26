import BgGradient from "@/components/bg-gradient";
import { Mail } from "lucide-react";
import ContactForm from "../_components/contact/contact-form";

export const metadata = {
  title: "Contact",
};

const Contact = () => {
  return (
    <section className="bg-transparent min-h-screen pt-36 pb-20 relative overflow-x-hidden">
      <BgGradient />
      <div className="px-3 max-w-7xl mx-auto relative z-10">
        <div>
          <div>
            <h1
              className="text-3xl md:text-5xl font-bold mb-4 text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Contact Us
            </h1>
            <p
              className="text-2xl text-center"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              Send us a message today
            </p>
          </div>
          <div
            className="mt-8 border p-4 rounded-xl bg-background max-w-md mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <ContactForm />
          </div>
          <div className="mt-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">
              OR
            </h1>
            <p className="text-2xl text-center">Email Us today at</p>
            <div className="border w-max mx-auto p-2 rounded-lg flex-center-center gap-2 mt-2">
              <Mail className="w-5 h-5 text-muted-foreground" />
              <p>wabtech.tech@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

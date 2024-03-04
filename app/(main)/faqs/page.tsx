import { Accordion, AccordionItem } from "@/components/accordion";
import BgGradient from "@/components/bg-gradient";

export const metadata = {
  title: "FAQs",
};

const getFaqs = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/templates/faqs`, {
    cache: "no-store",
  });
  return res.json();
};

const FAQs = async () => {
  const faqs: Faq[] = await getFaqs();

  return (
    <section className="relative bg-transparent py-36 overflow-x-hidden">
      <BgGradient />
      <div className="flex-center-center px-3 max-w-3xl mx-auto relative z-10">
        <div>
          <h1
            className="text-3xl md:text-5xl font-bold mb-4 text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Frequently Asked Questions
          </h1>
          <Accordion>
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} title={faq.question}>
                <p>{faq.answer}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <div className="absolute w-full h-1/4 bg-gradient-to-t from-background to-transparent left-0 bottom-0"></div>
    </section>
  );
};

export default FAQs;

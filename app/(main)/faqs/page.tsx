import { Accordion, AccordionItem } from "@/components/accordion";
import BgGradient from "@/components/bg-gradient";

export const metadata = {
  title: "FAQs",
};

const FAQs = async () => {
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
            <AccordionItem title="What tech stacks does Wabtech utilize for web development projects?">
              <p>
                At Wabtech, we leverage a variety of cutting-edge technologies
                including React, Next.js, JavaScript, TypeScript, Tailwind CSS,
                and other React UI libraries for front-end development. For
                back-end development, we utilize Node.js with Express.js, and
                database management with Prisma ORM, MongoDB, PostgreSQL, and
                MySQL. Additionally, we have expertise in PHP and Laravel for
                PHP-based projects.
              </p>
            </AccordionItem>
            <AccordionItem title="How long does it take to design and develop a website with Wabtech?">
              <p>
                The timeline for website design and development varies depending
                on the project&apos;s complexity and requirements. We&apos;ll
                work closely with you to establish a timeline that meets your
                needs.
              </p>
            </AccordionItem>
            <AccordionItem title=" Can you customize templates to match our brand's unique style?">
              <p>
                Absolutely! We offer template customization services to ensure
                your website reflects your brand identity perfectly. Whether
                it&apos;s adjusting colors, fonts, or layouts, we&apos;ve got
                you covered.
              </p>
            </AccordionItem>
            <AccordionItem title="What's the difference between UI design and UX design?">
              <p>
                UI (User Interface) design focuses on the look and feel of a
                website or app, while UX (User Experience) design focuses on
                enhancing usability and user satisfaction. At Wabtech, we
                specialize in both to create seamless digital experiences.
              </p>
            </AccordionItem>
            <AccordionItem title="Do you provide ongoing maintenance and support after the website is launched?">
              <p>
                Yes, we offer ongoing maintenance and support services to ensure
                your website runs smoothly and stays up-to-date with the latest
                technologies and security measures. We&apos;re here to support
                you every step of the way.
              </p>
            </AccordionItem>
            <AccordionItem title="Can you convert our design mockups into functional code?">
              <p>
                Absolutely! Our design-to-code services ensure that your
                creative designs are translated into clean, efficient code,
                resulting in a high-quality, responsive website. We&apos;ll
                bring your vision to life on the web.
              </p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="absolute w-full h-1/4 bg-gradient-to-t from-background to-transparent left-0 bottom-0"></div>
    </section>
  );
};

export default FAQs;

// import { Accordion, AccordionItem } from "@/components/accordion";
// import NoResults from "@/components/no-results";

// export const metadata = {
//   title: "FAQs",
// };

// const getFaqs = async () => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/templates/faqs`, {
//     cache: "no-store",
//   });
//   return res.json();
// };

// const FAQs = async () => {
//   const faqs: Faq[] = await getFaqs();

//   return (
//     <section className="bg-[#030712] py-36 !bg-center bg-hero !text-white relative">
//       <div className="flex-center-center px-3 max-w-3xl mx-auto">
//         <div>
//           <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">
//             Frequently Asked Questions
//           </h1>
//           <div className="mt-2">
//             {faqs.length < 1 && <NoResults title="Faqs" />}
//           </div>
//           <Accordion>
//             {faqs.map((faq) => (
//               <AccordionItem title={faq.question} key={faq.id}>
//                 {faq.answer}
//               </AccordionItem>
//             ))}
//           </Accordion>
//         </div>
//       </div>
//       <div className="absolute w-full h-1/4 bg-gradient-to-t from-background to-transparent left-0 bottom-0"></div>
//     </section>
//   );
// };

// export default FAQs;

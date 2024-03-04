import BgGradient from "@/components/bg-gradient";
import Inquiry from "./_components/home/inquiries";
import Hero from "./_components/home/hero";
import Latest from "./_components/home/latest";
import HomeServices from "./_components/home/services";
import Tools from "./_components/home/tools";

const getTemplates = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/templates?page=1&limit=3`,
    { cache: "no-store" }
  );
  return res.json();
};

const Home = async () => {
  const { templates }: { templates: Template[] } = await getTemplates();
  return (
    <div>
      <div className="relative h-full w-full bg-transparent pt-36 overflow-x-hidden">
        <BgGradient />
        {/* Hero */}
        <Hero />

        <div className="mt-36 mb-20 opacity-0">Spacer</div>
      </div>

      {/* Services */}
      <HomeServices />

      {/* Latest Templates */}
      <Latest templates={templates} />

      {/* Tools */}
      <Tools />

      {/* Inquiries */}
      <Inquiry />
    </div>
  );
};

export default Home;
